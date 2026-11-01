import type { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/sections/PageBanner';
import CallBand from '@/components/sections/CallBand';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import HexBadge from '@/components/ui/HexBadge';
import GhostHex from '@/components/ui/GhostHex';
import ButtonLink from '@/components/ui/ButtonLink';
import { HEX, PHOTO } from '@/lib/hex';
import {
  aboutParagraphs,
  brandPromise,
  collaboration,
  commitment,
  mission,
  values,
  vision,
  whoWeAre,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Conducir Engineering Limited plans, develops and delivers buildings, infrastructure and real estate opportunities, guided by responsible development, reliable delivery and enduring value.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="Ab[O]ut us" />

      {/* ---------- Who we are ---------- */}
      <section className="relative overflow-clip bg-white py-20 lg:py-28">
        <GhostHex className="-left-40 -top-20 w-[520px] text-ink/[0.05] lg:w-[680px]" />
        <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <SlideIn>
            <div
              className="group relative mx-auto w-full max-w-[460px] lg:mx-0"
              style={{ aspectRatio: `${PHOTO.box.w} / ${PHOTO.box.h}` }}
            >
              <div className="absolute inset-0 bg-gold" style={{ clipPath: PHOTO.outerClip }} />
              <div className="absolute inset-0 bg-white" style={{ clipPath: PHOTO.ringClip }} />
              <div className="absolute inset-0 overflow-hidden bg-ink" style={{ clipPath: PHOTO.innerClip }}>
                <Image
                  src="/images/services-model.jpg"
                  alt="A man in a checked jacket holding a model of a modern two storey house"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  style={{ objectPosition: '78% 60%' }}
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute left-[8%] top-[4%] block aspect-[173.2/200] w-[11%] bg-gold"
                style={{ clipPath: HEX }}
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[5%] right-[10%] block aspect-[173.2/200] w-[7%] bg-ink"
                style={{ clipPath: HEX }}
              />
            </div>
          </SlideIn>

          <SlideIn from="right" delay={0.15}>
            <Eyebrow>Who we are</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              Built t[O] last.
            </HexText>
            <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed">{whoWeAre[0]}</p>
            <div className="mt-5 max-w-xl space-y-5 text-lg leading-relaxed text-ink/70">
              {whoWeAre.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink href="/services" variant="dark" shape="hex" size="lg">
                Our services
              </ButtonLink>
            </div>
          </SlideIn>
        </Container>
      </section>

      {/* ---------- About Conducir ---------- */}
      <section className="overflow-clip bg-sand py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <SlideIn className="lg:col-span-5">
            <Eyebrow>About Conducir</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.6rem,3vw,2.75rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]"
            >
              Tomorrow’s buildings, built t[O]day.
            </HexText>
          </SlideIn>
          <SlideIn from="right" delay={0.15} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-ink/75">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p className="font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-gold-deep">
                Our commitment is captured in our motto: Tomorrow Built Today.
              </p>
            </div>
          </SlideIn>
        </Container>
      </section>

      {/* ---------- Vision and mission ---------- */}
      <section className="relative overflow-clip bg-ink py-20 text-white lg:py-28">
        <GhostHex className="-right-40 -top-24 w-[560px] text-white/[0.06] lg:w-[760px]" />
        <Container className="relative grid gap-6 lg:grid-cols-2 lg:gap-10">
          {[vision, mission].map((item, i) => (
            <SlideIn key={item.title} from={i === 0 ? 'left' : 'right'} delay={i * 0.12}>
              <article className="h-full border border-white/20 p-8 transition-colors duration-500 hover:border-gold sm:p-12">
                <HexBadge variant="onDark" className="w-16 sm:w-20">
                  <span className="text-xl sm:text-2xl">{item.title[0]}</span>
                </HexBadge>
                <h2 className="mt-8 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
                  {item.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </SlideIn>
          ))}
        </Container>
      </section>

      {/* ---------- Core values ---------- */}
      <section className="overflow-clip bg-white py-20 lg:py-28">
        <Container>
          <SlideIn>
            <Eyebrow>Our core values</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(2rem,4.6vw,4rem)] font-black uppercase leading-none tracking-[0.02em]"
            >
              DR[I]VE
            </HexText>
          </SlideIn>

          <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-20 lg:grid-cols-5 lg:gap-x-8">
            {values.map((value, i) => (
              <li key={value.title}>
                <SlideIn from="right" delay={i * 0.1}>
                  <div className="text-center">
                    <HexBadge variant="onLight" className="mx-auto w-full max-w-[160px]">
                      <span className="text-3xl sm:text-4xl">{value.letter}</span>
                    </HexBadge>
                    <h3 className="mt-6 font-display text-base font-bold uppercase tracking-tight">{value.title}</h3>
                    <p className="mx-auto mt-3 max-w-[26ch] text-sm leading-relaxed text-ink/70">{value.text}</p>
                  </div>
                </SlideIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Our commitment ---------- */}
      <section className="grid overflow-clip bg-sand lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-full">
          <Image
            src="/images/commitment.jpg"
            alt="Aerial view of a landscaped golf green with sand bunkers and long tree shadows"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="absolute inset-0 grid place-items-center px-6">
            <HexText
              as="h2"
              className="text-center font-display text-[clamp(1.75rem,4.5vw,3.75rem)] font-black uppercase leading-[1.05] tracking-[-0.01em] text-white"
            >
              Our comm[I]tment
            </HexText>
          </div>
        </div>

        <div className="px-6 py-20 sm:px-12 lg:px-20 lg:py-28 xl:px-28">
          <SlideIn from="right">
            <div className="space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              {commitment.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <aside className="mt-10 bg-gold p-8 text-ink sm:p-10">
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
                Our brand promise
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed sm:text-base">
                {brandPromise.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </aside>
          </SlideIn>
        </div>
      </section>

      {/* ---------- Collaboration ---------- */}
      <section className="relative isolate overflow-clip py-24 text-white lg:py-36">
        <Image
          src="/images/collaboration.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink-deep/70" />
        <Container className="relative text-center">
          <SlideIn>
            <HexText
              as="h2"
              className="font-display text-[clamp(1.6rem,5vw,4.25rem)] font-black uppercase leading-none tracking-[0.01em] text-gold"
            >
              C[O]llaboration
            </HexText>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              {collaboration}
            </p>
          </SlideIn>
        </Container>
      </section>

      <CallBand />
    </>
  );
}
