import type { ReactNode } from 'react';
import { BADGE, HEX_RATIO } from '@/lib/hex';

/* Small framed hexagon holding a number, a letter or initials.
   onDark: gold band, dark gap, gold core.   onLight: gold band, light gap, dark core. */
export default function HexBadge({
  children,
  variant = 'onDark',
  ring,
  className = '',
}: {
  children: ReactNode;
  variant?: 'onDark' | 'onLight';
  /** Colour class for the gap ring when it has to match a section background */
  ring?: string;
  className?: string;
}) {
  const onDark = variant === 'onDark';
  return (
    <span className={`relative block ${className}`} style={{ aspectRatio: HEX_RATIO }}>
      <span className="absolute inset-0 bg-gold" style={{ clipPath: BADGE.outerClip }} />
      <span className={`absolute inset-0 ${ring ?? (onDark ? 'bg-ink' : 'bg-white')}`} style={{ clipPath: BADGE.ringClip }} />
      <span
        className={`absolute inset-0 transition-colors duration-300 ${onDark ? 'bg-gold' : 'bg-ink'}`}
        style={{ clipPath: BADGE.innerClip }}
      />
      <span
        className={`absolute inset-0 grid place-items-center font-display font-extrabold ${
          onDark ? 'text-ink' : 'text-gold'
        }`}
      >
        {children}
      </span>
    </span>
  );
}
