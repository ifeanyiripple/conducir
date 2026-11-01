import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import SlideIn from '@/components/ui/SlideIn';
import GhostHex from '@/components/ui/GhostHex';
import { site } from '@/lib/site';

/* Closing band: big question on the left, phone and button on the right. */
export default function CallBand() {
  return (
    <section className="relative overflow-clip bg-ink py-20 text-white lg:py-28">
      <GhostHex solid className="-bottom-32 -left-28 w-[380px] text-gold/[0.12]" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12">
        <SlideIn className="lg:col-span-7">
          <HexText
            as="h2"
            className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
          >
            Have a devel[O]pment in mind?
          </HexText>
        </SlideIn>

        <SlideIn from="right" delay={0.2} className="flex flex-col gap-8 lg:col-span-5">
          <a href={site.phoneHref} className="group flex flex-col">
            <span className="font-label text-[0.66rem] uppercase tracking-[0.22em] text-gold-soft">Call us</span>
            <span className="mt-2 font-display text-2xl font-bold underline decoration-white/25 decoration-2 underline-offset-8 transition-colors duration-300 group-hover:decoration-gold sm:text-3xl">
              {site.phone}
            </span>
          </a>
          <div>
            <ButtonLink href={site.mailto} variant="gold" shape="hex" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </SlideIn>
      </Container>
    </section>
  );
}
