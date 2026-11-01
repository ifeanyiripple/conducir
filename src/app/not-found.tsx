import ButtonLink from '@/components/ui/ButtonLink';
import Container from '@/components/ui/Container';
import GhostHex from '@/components/ui/GhostHex';
import HexText from '@/components/ui/HexText';

export default function NotFound() {
  return (
    <section className="relative overflow-clip bg-ink-deep py-28 text-white lg:py-40">
      <GhostHex className="-right-24 -top-24 w-[520px] text-gold/[0.18] lg:w-[720px]" />
      <Container className="relative">
        <p className="font-label text-[0.7rem] uppercase tracking-[0.24em] text-gold-soft">Error 404</p>
        <HexText
          as="h1"
          className="mt-6 font-display text-[clamp(2rem,7vw,5.5rem)] font-black uppercase leading-none tracking-[-0.01em]"
        >
          Page n[O]t found
        </HexText>
        <p className="mt-8 max-w-md text-lg text-white/80">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="gold" shape="hex" size="lg">
            Back home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
