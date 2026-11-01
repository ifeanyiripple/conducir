import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

/* Hover: a fill sweeps across the button from the left and the text colour follows. */
const variants = {
  /** Gold button for light or dark backgrounds */
  gold: { base: 'bg-gold text-ink', sweep: 'bg-ink', text: 'group-hover:text-white' },
  /** Ink button for light backgrounds */
  dark: { base: 'bg-ink text-white', sweep: 'bg-gold', text: 'group-hover:text-ink' },
  /** White button for dark backgrounds */
  light: { base: 'bg-white text-ink', sweep: 'bg-gold', text: '' },
  /** Outlined button for dark backgrounds */
  outline: { base: 'border border-white/70 text-white', sweep: 'bg-white', text: 'group-hover:text-ink' },
};

const sizes = {
  sm: 'py-3 text-xs',
  md: 'py-4 text-sm',
  lg: 'py-5 text-sm sm:py-6',
};

// the brand polygon: pointed left and right ends
const padding = {
  rect: { sm: 'px-7', md: 'px-9', lg: 'px-12' },
  hex: { sm: 'px-10', md: 'px-12', lg: 'px-16' },
};
const hexClip =
  'polygon(18px 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0 50%)';

type Props = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shape?: 'rect' | 'hex';
  className?: string;
  children: ReactNode;
};

export default function ButtonLink({
  href,
  variant = 'gold',
  size = 'md',
  shape = 'rect',
  className = '',
  children,
}: Props) {
  const v = variants[variant];
  const classes = `group relative inline-flex items-center justify-center overflow-hidden font-label uppercase tracking-[0.14em] transition-colors duration-500 ${sizes[size]} ${padding[shape][size]} ${v.base} ${className}`;
  const style: CSSProperties | undefined = shape === 'hex' ? { clipPath: hexClip } : undefined;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${v.sweep}`}
      />
      <span className={`relative transition-colors duration-500 ${v.text}`}>{children}</span>
    </>
  );

  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={classes} style={style}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {content}
    </Link>
  );
}
