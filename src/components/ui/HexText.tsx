import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

/* Conducir hexagon letters
 * A few letters of a heading are drawn from the Conducir brand instead of the
 * heading font: the C is the Conducir mark itself, the O is the six sided
 * polygon (point up, as in the mark) and the I is an upright bar with ends cut
 * at the hexagon's 30 degree angle, like the bars in the mark.
 * Grid: cap height 100, baseline y=100. */

type Glyph = { w: number; paths: string[] };

export const HEX_GLYPHS = {
  // the mark, scaled to cap height
  C: {
    w: 80.5,
    paths: [
      "M42.3 0.0 L15.4 17.7 L15.5 84.4 L19.5 86.7 L19.6 35.5 L42.3 22.1 L61.2 33.1 L80.3 22.1 Z",
      "M42.3 76.9 L23.0 65.7 L23.0 89.0 L42.3 100.0 L80.5 77.3 L61.4 65.8 Z",
      "M7.7 23.3 L7.7 79.8 L11.7 82.2 L11.9 20.1 Z",
      "M4.2 77.6 L4.1 25.8 L0.0 28.9 L0.1 75.3 Z",
    ],
  },
  // the six sided polygon as a ring
  O: {
    w: 86.6,
    paths: [
      "M43.3 0 L86.6 25 L86.6 75 L43.3 100 L0 75 L0 25 Z M43.3 17.3 L15 33.7 L15 66.3 L43.3 82.7 L71.6 66.3 L71.6 33.7 Z",
    ],
  },
  // an upright bar with the mark's angled ends
  I: { w: 18, paths: ["M0 10.4 L18 0 L18 89.6 L0 100 Z"] },
} satisfies Record<string, Glyph>;

export type HexChar = keyof typeof HEX_GLYPHS;
export const isHexChar = (c: string): c is HexChar => c.length === 1 && c in HEX_GLYPHS;

const SIDE = 5; // side bearing, grid units

/* How tall a letter is, taken from the heading font's own metrics:
 * "cap" = capital height, "tall" = ascender letters (t), "x" = x-height.
 * The em values are fallbacks for browsers without the `cap` unit. */
const HEIGHT = {
  cap: "h-[0.72em] supports-[height:1cap]:h-[1cap]",
  tall: "h-[0.65em] supports-[height:1cap]:h-[0.9cap]",
  x: "h-[1ex]",
} as const;

type HexHeight = keyof typeof HEIGHT;

type HexLetterProps = {
  char: HexChar;
  /** cap (default) matches capital height, x matches the x-height of small letters */
  height?: HexHeight;
  className?: string;
  style?: CSSProperties;
};

/** One hexagon letter, drawn inline. Gold unless a text colour class says otherwise. */
export function HexLetter({ char, height = "cap", className = "text-gold", style }: HexLetterProps) {
  const { w, paths } = HEX_GLYPHS[char];
  const width = w + SIDE * 2;

  return (
    <>
      <span className="sr-only">{char}</span>
      <svg
        viewBox={`${-SIDE} 0 ${width} 100`}
        fill="currentColor"
        focusable="false"
        aria-hidden="true"
        className={`inline-block w-auto overflow-visible align-baseline ${HEIGHT[height]} ${className}`}
        style={{ aspectRatio: `${width} / 100`, ...style }}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} fillRule="evenodd" />
        ))}
      </svg>
    </>
  );
}

/* Which size a letter written in [brackets] gets, or null if it stays a normal letter.
 * Headings on this site are set in capitals by CSS, so write the marked letter as
 * a capital to get capital height. Small letters that sit on the x-height use
 * x-height. Small i is left as normal text because it carries a dot. */
function sizeFor(c: string): HexHeight | null {
  if (!isHexChar(c.toUpperCase())) return null;
  if (c !== c.toLowerCase()) return "cap";
  if ("co".includes(c)) return "x";
  return null;
}

function Marked({ text }: { text: string }) {
  const parts = text.split(/\[([A-Za-z])\]/); // odd entries are the marked letters
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return part;
        const size = sizeFor(part);
        return size ? <HexLetter key={i} char={part.toUpperCase() as HexChar} height={size} /> : part;
      })}
    </>
  );
}

/** Walks the children so [x] markers work inside spans and animation wrappers too. */
function convert(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === "string") return <Marked text={child} />;
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children != null) {
      return cloneElement(child, undefined, convert(child.props.children));
    }
    return child;
  });
}

/** The heading as plain words for screen readers: markers removed, pieces separated by a space. */
function plain(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (isValidElement<{ children?: ReactNode }>(child)) return plain(child.props.children);
      return "";
    })
    .join(" ")
    .replace(/\[([A-Za-z])\]/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

type HexTextProps = HTMLAttributes<HTMLElement> & { as?: ElementType };

/**
 * A normal heading with a few letters drawn as Conducir hexagon letters.
 * Put [square brackets] round the letter to swap (C, O or I):
 *
 *   <HexText as="h2" className="font-display text-5xl font-extrabold uppercase">
 *     T[O]morrow built today
 *   </HexText>
 *
 * Everything else stays normal text in your heading font, so sizes, colours,
 * wrapping, <br />, <span> and animation wrappers keep working.
 * Use one or two letters per heading.
 */
export default function HexText({ as: Tag = "h2", children, ...rest }: HexTextProps) {
  const isHeading = typeof Tag === "string" && /^h[1-6]$/.test(Tag);
  return (
    <Tag {...(isHeading ? { "aria-label": plain(children) } : {})} {...rest}>
      {convert(children)}
    </Tag>
  );
}
