import Link from 'next/link';
import {
  MARK_POLYGONS,
  MARK_VIEWBOX,
  TAGLINE_D,
  WORDMARK_D,
  WORDMARK_VIEWBOX,
} from '@/lib/brand';

/** The Conducir mark on its own. Takes the surrounding text colour. */
export function ConducirMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      {MARK_POLYGONS.map((points) => (
        <polygon key={points} points={points} />
      ))}
    </svg>
  );
}

/** CONDUCIR over ENGINEERING LIMITED. Takes the surrounding text colour. */
export function ConducirWordmark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox={WORDMARK_VIEWBOX} fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d={WORDMARK_D} />
      <path d={TAGLINE_D} />
    </svg>
  );
}

/** Mark in gold, wordmark in white (on dark) or ink (on light). */
export default function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Conducir Engineering Limited home"
      className={`inline-flex items-center gap-3 ${light ? 'text-white' : 'text-ink'} ${className}`}
    >
      <ConducirMark className="h-11 w-auto text-gold" />
      <ConducirWordmark className="h-8 w-auto sm:h-9" />
    </Link>
  );
}
