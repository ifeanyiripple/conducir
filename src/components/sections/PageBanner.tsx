import Image from 'next/image';
import Link from 'next/link';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import GhostHex from '@/components/ui/GhostHex';
import { HEX } from '@/lib/hex';

/* Dark page banner with a ghost hexagon, the page title and a breadcrumb. */
/* `title` can mark a letter to draw as a hexagon letter, e.g. "[C]ompliance" */
export default function PageBanner({ title }: { title: string }) {
  const plainTitle = title.replace(/\[([A-Za-z])\]/g, '$1');
  return (
    <section className="relative isolate overflow-clip bg-ink-deep py-20 text-white lg:py-28">
      <Image
        src="/images/arch-dark.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-deep via-ink-deep/80 to-ink-deep/30" />
      <GhostHex className="-right-24 -top-24 w-[420px] text-white/[0.09] lg:w-[560px]" />

      <Container className="relative">
        <SlideIn>
          <HexText
            as="h1"
            className="font-display text-[clamp(1.9rem,6vw,4.75rem)] font-extrabold uppercase leading-none tracking-[-0.01em]"
          >
            {title}
          </HexText>
        </SlideIn>
        <SlideIn delay={0.25} className="mt-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm font-semibold">
            <Link href="/" className="text-gold-soft transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true" className="block h-[11px] w-[9.5px] bg-gold" style={{ clipPath: HEX }} />
            <span aria-current="page">{plainTitle}</span>
          </nav>
        </SlideIn>
      </Container>
    </section>
  );
}
