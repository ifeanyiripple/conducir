import { HEX } from '@/lib/hex';

/* Small label with two hexagons in front and a hairline after it. */
export default function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-end gap-1" aria-hidden="true">
        <span className="block h-4 w-[13.9px] bg-gold" style={{ clipPath: HEX }} />
        <span className="block h-[11px] w-[9.5px] bg-gold-soft" style={{ clipPath: HEX }} />
      </span>
      <span
        className={`font-label text-[0.62rem] uppercase tracking-[0.24em] sm:text-[0.68rem] ${
          light ? 'text-gold-soft' : 'text-gold-deep'
        }`}
      >
        {children}
      </span>
      <span className={`h-px w-14 ${light ? 'bg-white/25' : 'bg-ink/25'}`} aria-hidden="true" />
    </div>
  );
}
