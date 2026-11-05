import Link from 'next/link';
import type { ReactNode } from 'react';

/*
  Architectural glass button for a dark, gold-accented theme.

  - Body: frosted glass (translucent fill, backdrop blur, hairline border, soft inner highlight).
  - Corner marks: two registration/survey marks offset outside the top-right and bottom-left corners.
    Each is a pair of hairlines that cross OUTSIDE the corner; the arms facing the button are longer
    and run past the corner along its edges, like dimension extension lines on a drawing.
  - Hover/focus: the marks slide onto the button edges and a gold fill sweeps in from the left.
*/
const variants = {
  /** Gold-tinted glass: the primary call to action on dark backgrounds */
  gold: {
    base: 'border-gold/50 bg-gold/15 text-white',
    sweep: 'bg-gold',
    text: 'group-hover:text-ink group-focus-visible:text-ink',
    mark: 'text-gold',
  },
  /** Pure black body with pure white text, for light backgrounds */
  dark: {
    base: 'border-white/10 bg-black text-[#ffffff]',
    sweep: 'bg-gold',
    text: 'group-hover:text-ink group-focus-visible:text-ink',
    mark: 'text-ink',
  },
  /** Clear white glass for dark backgrounds */
  light: {
    base: 'border-white/25 bg-white/10 text-white',
    sweep: 'bg-gold',
    text: 'group-hover:text-ink group-focus-visible:text-ink',
    mark: 'text-white/80',
  },
  /** Glass outline for dark backgrounds */
  outline: {
    base: 'border-white/40 bg-transparent text-white',
    sweep: 'bg-white',
    text: 'group-hover:text-ink group-focus-visible:text-ink',
    mark: 'text-white/70',
  },
};

const sizes = {
  sm: 'py-3 px-7 text-xs',
  md: 'py-4 px-9 text-sm',
  lg: 'py-5 px-12 text-sm sm:py-6',
};

type Props = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Kept so existing usages still compile. The corner-mark design replaces the hex shape, so this is ignored. */
  shape?: 'rect' | 'hex';
  className?: string;
  children: ReactNode;
};

/*
  One corner mark. The box is 44px; the lines cross 10px in from its outer edges, so the crosshair
  centre sits 10px outside the button corner, with a 10px outer arm and a 34px arm facing the button.
  On hover the box moves 10px diagonally so the lines land exactly on the button edges.
*/
function CornerMark({ corner }: { corner: 'tr' | 'bl' }) {
  const isTopRight = corner === 'tr';
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-11 w-11 transition-transform duration-500 ease-out motion-reduce:transition-none ${
        isTopRight
          ? '-right-5 -top-5 group-hover:translate-x-[-10px] group-hover:translate-y-[10px] group-focus-visible:translate-x-[-10px] group-focus-visible:translate-y-[10px]'
          : '-bottom-5 -left-5 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] group-focus-visible:translate-x-[10px] group-focus-visible:translate-y-[-10px]'
      }`}
    >
      {isTopRight ? (
        <>
          <span className="absolute inset-x-0 top-[10px] h-px bg-current" />
          <span className="absolute inset-y-0 right-[10px] w-px bg-current" />
        </>
      ) : (
        <>
          <span className="absolute inset-x-0 bottom-[10px] h-px bg-current" />
          <span className="absolute inset-y-0 left-[10px] w-px bg-current" />
        </>
      )}
    </span>
  );
}

export default function ButtonLink({
  href,
  variant = 'gold',
  size = 'md',
  className = '',
  children,
}: Props) {
  const v = variants[variant];
  const classes = `group relative inline-flex font-label uppercase tracking-[0.14em] ${v.mark} outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 focus-visible:outline-current ${className}`;

  const content = (
    <>
      {/* Glass body. overflow-hidden lives here so the corner marks can sit outside it. */}
      <span
        className={`relative flex flex-1 items-center justify-center overflow-hidden border backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-colors duration-500 ${sizes[size]} ${v.base}`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none ${v.sweep}`}
        />
        <span className={`relative transition-colors duration-500 ${v.text}`}>{children}</span>
      </span>

      <CornerMark corner="tr" />
      <CornerMark corner="bl" />
    </>
  );

  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}