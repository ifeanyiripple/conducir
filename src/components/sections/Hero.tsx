import HeroSlider from '@/components/sections/HeroSlider';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import SlideInLeft from '@/components/ui/SlideInLeft';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      // At least the screen minus the navbar (4.5rem mobile, 5rem desktop); grows instead of clipping if content is taller
      className="relative isolate flex min-h-[max(560px,calc(100svh-4.5rem))] items-end overflow-clip bg-ink-deep lg:min-h-[max(560px,calc(100svh-5rem))]"
    >
      <HeroSlider />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-deep via-ink-deep/60 to-ink-deep/25" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-deep/75 via-ink-deep/20 to-transparent" />
      <GhostHex className="-right-24 top-6 w-[460px] text-gold/[0.22] lg:-right-16 lg:w-[680px]" />

      <Container className="pb-12 pt-16 lg:pb-16">
        <Eyebrow light>Real Estate, Infrastructure, Investments</Eyebrow>

        <HexText
          as="h1"
          id="hero-title"
          className="mt-6 font-display text-[clamp(2rem,min(8.2vw,15vh),6rem)] font-black uppercase leading-none tracking-[-0.01em] text-white"
        >
          <SlideInLeft>T[O]morrow</SlideInLeft>
          <SlideInLeft delay={0.3}>Built</SlideInLeft>
          <SlideInLeft delay={0.55}>Today.</SlideInLeft>
        </HexText>

        <p className="mt-6 max-w-xl text-lg text-white/90 lg:text-xl">
          <SlideInLeft delay={0.9}>{site.strapline}</SlideInLeft>
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          <ButtonLink href="/services" variant="gold" shape="hex" size="lg">
            Our services
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" shape="hex" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}