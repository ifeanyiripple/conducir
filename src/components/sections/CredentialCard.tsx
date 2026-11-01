import SlideIn from '@/components/ui/SlideIn';
import HexBadge from '@/components/ui/HexBadge';
import type { Credential } from '@/lib/site';

/* One registration: hexagon badge, issuer, what it certifies, and its reference numbers. */
export default function CredentialCard({ credential, index }: { credential: Credential; index: number }) {
  return (
    <li id={credential.id} className="scroll-mt-24">
      <SlideIn from="right" delay={(index % 2) * 0.12} className="h-full">
        <article className="flex h-full flex-col border border-ink/15 bg-white p-8 transition-colors duration-500 hover:border-gold sm:p-10">
          <div className="flex items-center gap-5">
            <HexBadge variant="onLight" className="w-16 shrink-0 sm:w-20">
              <span className="text-[0.7rem] sm:text-sm">{credential.short}</span>
            </HexBadge>
            <div>
              <p className="font-label text-[0.6rem] uppercase tracking-[0.2em] text-gold-deep">Registration {String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 font-display text-lg font-extrabold uppercase leading-tight tracking-tight sm:text-xl">
                {credential.title}
              </h2>
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink/60">{credential.issuer}</p>
          <p className="mt-3 text-base leading-relaxed text-ink/75">{credential.summary}</p>

          <dl className="mt-8 grid gap-x-6 gap-y-4 border-t border-ink/15 pt-6 sm:grid-cols-2">
            {credential.meta.map((entry) => (
              <div key={entry.label}>
                <dt className="font-label text-[0.58rem] uppercase tracking-[0.2em] text-gold-deep">{entry.label}</dt>
                <dd className="mt-1.5 font-display text-base font-bold tracking-tight">{entry.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </SlideIn>
    </li>
  );
}
