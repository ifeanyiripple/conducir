import Image from 'next/image';
import HexText from '@/components/ui/HexText';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import HexBadge from '@/components/ui/HexBadge';
import { values } from '@/lib/site';

/* Core values, spelled DRIVE. Photo on the left, the five values on the right. */
export default function Drive() {
  return (
    <section id="values" className="relative grid scroll-mt-24 overflow-clip bg-ink text-white lg:grid-cols-2">
      <div className="relative min-h-[420px] lg:min-h-full">
        <Image
          src="/images/values-bg.jpg"
          alt="Hard hats resting on a construction site beside a building frame"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-ink/30" />
        <GhostHex className="-bottom-24 -left-24 w-[420px] text-gold/40" />
      </div>

      <div className="relative px-6 py-24 sm:px-12 lg:px-20 lg:py-36 xl:px-28">
        <GhostHex solid className="-right-24 -top-16 w-[320px] text-gold/[0.08]" />

        <div className="relative">
          <Eyebrow light>Our core values</Eyebrow>
          <HexText
            as="h2"
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-none tracking-[0.02em]"
          >
            DR[I]VE
          </HexText>

          <ul className="mt-14 border-t border-white/25 lg:mt-16">
            {values.map((value) => (
              <li
                key={value.title}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-b border-white/25 py-6 sm:gap-6"
              >
                <HexBadge variant="onDark" className="mt-0.5 w-12 shrink-0 sm:w-14">
                  <span className="text-base sm:text-lg">{value.letter}</span>
                </HexBadge>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight sm:text-xl">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">{value.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
