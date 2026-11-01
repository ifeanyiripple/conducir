import Image from 'next/image';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import { HEX, PHOTO } from '@/lib/hex';
import type { Service } from '@/lib/site';

type Props = {
  service: Service;
  /** Hexagon letter for the title, e.g. "R[E]al Estate". Falls back to the plain title. */
  title?: string;
  href: string;
  /** Photo on the right (text on the left) on desktop. Always photo first on mobile. */
  flip?: boolean;
};

/* One pillar per full width block. Blocks alternate side and background. */
export default function ServiceBlock({ service, title, href, flip = false }: Props) {
  return (
    <section
      id={service.id}
      className={`relative scroll-mt-20 overflow-clip py-24 lg:py-36 ${flip ? 'bg-sand' : 'bg-white'}`}
    >
      {/* oversized ghost hexagon behind the photo side */}
      <GhostHex
        className={`-top-16 w-[520px] text-ink/[0.06] lg:w-[680px] ${flip ? '-right-40' : '-left-40'}`}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* ---------- Photo ---------- */}
        <SlideIn from={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
          <div
            className={`group relative mx-auto w-full max-w-[460px] ${flip ? 'lg:ml-auto lg:mr-0' : 'lg:mx-0'}`}
            style={{ aspectRatio: `${PHOTO.box.w} / ${PHOTO.box.h}` }}
          >
            <div className="absolute inset-0 bg-gold" style={{ clipPath: PHOTO.outerClip }} />
            <div className={`absolute inset-0 ${flip ? 'bg-sand' : 'bg-white'}`} style={{ clipPath: PHOTO.ringClip }} />
            <div className="absolute inset-0 overflow-hidden bg-ink" style={{ clipPath: PHOTO.innerClip }}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                style={{ objectPosition: service.imagePosition }}
              />
            </div>

            {/* solid accents in the empty corners */}
            <span
              aria-hidden="true"
              className={`absolute top-[4%] block aspect-[173.2/200] w-[11%] bg-gold ${flip ? 'right-[8%]' : 'left-[8%]'}`}
              style={{ clipPath: HEX }}
            />
            <span
              aria-hidden="true"
              className={`absolute bottom-[5%] block aspect-[173.2/200] w-[7%] bg-ink ${flip ? 'left-[10%]' : 'right-[10%]'}`}
              style={{ clipPath: HEX }}
            />
          </div>
        </SlideIn>

        {/* ---------- Copy ---------- */}
        <SlideIn from={flip ? 'left' : 'right'} delay={0.15} className={flip ? 'lg:order-1' : ''}>
          <Eyebrow>
            Pillar {service.number}
          </Eyebrow>

          <HexText
            as="h2"
            className="mt-6 font-display text-[clamp(1.5rem,3.2vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
          >
            {title ?? service.title}
          </HexText>

          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed">{service.summary}</p>

          <ul className="mt-8 max-w-xl border-t border-ink/15">
            {service.items.map((item) => (
              <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-ink/15 py-5">
                <span aria-hidden="true" className="mt-1.5 block h-[14px] w-[12px] bg-gold" style={{ clipPath: HEX }} />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase leading-snug tracking-tight sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ButtonLink href={href} variant="dark" shape="hex" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </SlideIn>
      </Container>
    </section>
  );
}
