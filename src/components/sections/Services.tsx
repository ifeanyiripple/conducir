'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import HexBadge from '@/components/ui/HexBadge';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { EASE, HEX, boundsOf, frame, regularHex, type Box } from '@/lib/hex';
import { services, site } from '@/lib/site';

/* =====================================================================
   Honeycomb geometry
   Four regular hexagons (point up, like the Conducir mark) sit in a
   honeycomb with an even gutter: three pillars and one call to action.
   Every tile is drawn on one shared canvas, so the gold band and the gap
   are the same thickness on every tile.
   ===================================================================== */

const CANVAS = { w: 1120, h: 900 };
const R = 250; // circumradius of a tile
const W = Math.sqrt(3) * R; // width of a tile
const STEP = W + 24; // distance between neighbouring centres (tile plus gutter)
const X0 = W / 2;
const ROW = STEP * 0.866;

const CENTERS: [number, number][] = [
  [X0, R], // 01 top left
  [X0 + STEP, R], // 02 top right
  [X0 + STEP / 2, R + ROW], // 03 bottom left
  [X0 + STEP * 1.5, R + ROW], // call to action, bottom right
];

const pct = (v: number) => `${v.toFixed(3)}%`;

/** Absolute placement of `box` on the canvas. */
function place(box: Box): CSSProperties {
  return {
    left: pct((box.x / CANVAS.w) * 100),
    top: pct((box.y / CANVAS.h) * 100),
    width: pct((box.w / CANVAS.w) * 100),
    height: pct((box.h / CANVAS.h) * 100),
  };
}

const TILES = CENTERS.map(([cx, cy]) => frame(regularHex(cx, cy, R), 12, 8));

const ACCENTS = [
  { box: boundsOf(regularHex(120, 640, 46)), tone: 'bg-gold' },
  { box: boundsOf(regularHex(1010, 140, 50)), tone: 'bg-ink' },
];
const OUTLINES = [boundsOf(regularHex(60, 800, 30)), boundsOf(regularHex(1075, 275, 28))];

export default function Services() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const cluster: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: reduce ? 0 : 0.1 } },
  };
  const tile: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.7 },
    show: { opacity: 1, scale: 1, transition: { duration: reduce ? 0 : 1.1, ease: EASE } },
  };
  const accent: Variants = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0, rotate: reduce ? 0 : -60 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: reduce ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 15 },
    },
  };
  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.2 } },
  };
  const row: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : -60 },
    show: { opacity: 1, x: 0, transition: { duration: reduce ? 0 : 1, ease: EASE } },
  };

  const cta = TILES[3];

  return (
    <section id="services" className="relative scroll-mt-20 overflow-clip bg-white py-20 sm:py-24 lg:py-32">
      {/* architectural grid + oversized ghost hexagons */}
      <div
        aria-hidden="true"
        className="bg-blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_45%,#000_20%,transparent_80%)]"
      />
      <GhostHex className="-right-48 -top-24 w-[640px] text-ink/[0.07] lg:w-[820px]" />
      <GhostHex solid className="-bottom-32 -left-40 w-[460px] text-gold/[0.1]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 xl:gap-x-20">
          {/* ---------- Heading ---------- */}
          <motion.header
            className="lg:col-span-5 lg:row-start-1"
            initial={{ opacity: 0, x: reduce ? 0 : -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
          >
            <Eyebrow>What we do</Eyebrow>

            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.75rem,3.2vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              Three pillars,
              <span className="block text-gold-deep">one [I]ntegrated team.</span>
            </HexText>

            <span className="mt-7 block h-1 w-14 bg-gold" aria-hidden="true" />

            <p className="mt-7 max-w-[44ch] text-base leading-relaxed text-ink/75 sm:text-lg">
              Our business is anchored on Real Estate, Infrastructure and Investments, expressing our ambition to
              contribute to the built environment while creating opportunities for sustainable growth and long-term
              value.
            </p>
          </motion.header>

          {/* ---------- Honeycomb ---------- */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <div className="lg:sticky lg:top-24">
              <motion.div
                className="relative mx-auto w-full max-w-[600px] [container-type:inline-size] lg:max-w-none"
                style={{ aspectRatio: `${CANVAS.w} / ${CANVAS.h}` }}
                variants={cluster}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {services.map((service, i) => {
                  const t = TILES[i];
                  const isActive = active === i;
                  const isDimmed = active !== null && !isActive;
                  return (
                    <motion.div
                      key={service.id}
                      variants={tile}
                      className="pointer-events-none absolute"
                      style={place(t.box)}
                    >
                      {/* gold band (also the hover target, clipped to the hexagon) */}
                      <Link
                        href={`/services#${service.id}`}
                        aria-label={service.title}
                        className="pointer-events-auto absolute inset-0 bg-gold"
                        style={{ clipPath: t.outerClip }}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(i)}
                        onBlur={() => setActive(null)}
                      />
                      {/* gap */}
                      <div className="pointer-events-none absolute inset-0 bg-white" style={{ clipPath: t.ringClip }} />
                      {/* photo */}
                      <div
                        className="pointer-events-none absolute inset-0 overflow-hidden bg-ink"
                        style={{ clipPath: t.innerClip }}
                      >
                        <Image
                          src={service.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 28vw, 50vw"
                          className={`object-cover transition-[transform,filter] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? 'scale-[1.09]' : 'scale-100'
                          } ${isDimmed ? 'brightness-[0.8] grayscale-[0.75]' : ''}`}
                          style={{ objectPosition: service.imagePosition }}
                        />
                        <div className="absolute inset-x-0 bottom-0 top-[42%] bg-linear-to-b from-ink/0 via-ink/55 to-ink/90" />
                      </div>

                      {/* label, kept inside the full width band of the hexagon */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute flex flex-col items-center justify-center gap-[0.5em] text-center text-white"
                        style={{
                          left: '12%',
                          right: '12%',
                          top: '57%',
                          height: '17%',
                          fontSize: 'max(8px, 2.1cqw)',
                        }}
                      >
                        <span className="font-label tracking-[0.2em] text-gold-soft" style={{ fontSize: '0.7em' }}>
                          {service.number}
                        </span>
                        <span className="font-display font-bold uppercase leading-[1.1] tracking-[0.04em]">
                          {service.label}
                        </span>
                      </span>
                    </motion.div>
                  );
                })}

                {/* solid accents */}
                {ACCENTS.map((a) => (
                  <motion.span
                    key={a.tone}
                    variants={accent}
                    aria-hidden="true"
                    className={`absolute ${a.tone}`}
                    style={{ ...place(a.box), clipPath: HEX }}
                  />
                ))}

                {/* outline accents */}
                {OUTLINES.map((box) => (
                  <motion.span key={box.x} variants={accent} aria-hidden="true" className="absolute" style={place(box)}>
                    <svg viewBox="0 0 173.2 200" className="h-full w-full text-gold-deep">
                      <polygon
                        points="86.6,10 164,55 164,145 86.6,190 9.2,145 9.2,55"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                        strokeLinejoin="miter"
                      />
                    </svg>
                  </motion.span>
                ))}

                {/* call to action hexagon */}
                <motion.a
                  href="/contact"
                  variants={accent}
                  className="group/cta pointer-events-none absolute"
                  style={place(cta.box)}
                  aria-label="Start your project"
                >
                  <span className="pointer-events-auto absolute inset-0 bg-ink" style={{ clipPath: cta.outerClip }} />
                  <span className="absolute inset-0 bg-white" style={{ clipPath: cta.ringClip }} />
                  <span
                    className="absolute inset-0 bg-gold transition-colors duration-300 group-hover/cta:bg-ink"
                    style={{ clipPath: cta.innerClip }}
                  />
                  <span
                    className="absolute inset-0 flex flex-col items-center justify-center gap-[0.5em] text-center font-display font-bold uppercase leading-[1.1] tracking-[0.08em] text-ink transition-colors duration-300 group-hover/cta:text-white"
                    style={{ fontSize: 'max(8px, 2.1cqw)' }}
                  >
                    <ArrowIcon className="h-[2.2em] w-[2.2em] transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                    <span>
                      Start your
                      <br />
                      project
                    </span>
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* ---------- Pillar list ---------- */}
          <div className="lg:col-span-5 lg:row-start-2 lg:pt-12">
            <motion.ol
              className="border-t border-ink/15"
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service, i) => {
                const isActive = active === i;
                return (
                  <motion.li
                    key={service.id}
                    variants={row}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    className={`relative grid cursor-default grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-b border-ink/15 py-6 pl-5 pr-4 transition-colors duration-300 sm:gap-6 ${
                      isActive ? 'bg-sand' : 'bg-transparent'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-0 left-0 w-1 origin-top bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? 'scale-y-100' : 'scale-y-0'
                      }`}
                    />
                    <HexBadge variant="onLight" ring={isActive ? 'bg-sand' : 'bg-white'} className="mt-0.5 w-12 shrink-0 sm:w-14">
                      <span className="text-xs sm:text-sm">{service.number}</span>
                    </HexBadge>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase leading-tight tracking-tight sm:text-lg">
                        <Link href={`/services#${service.id}`} className="transition-colors hover:text-gold-deep">
                          {service.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{service.summary}</p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.5, ease: EASE }}
            >
              <ButtonLink href="/services" variant="dark" shape="hex" size="md">
                All services
              </ButtonLink>
              <a href={site.phoneHref} className="group/tel flex flex-col">
                <span className="font-label text-[0.62rem] uppercase tracking-[0.22em] text-gold-deep">Or call us</span>
                <span className="font-display text-base font-bold underline decoration-ink/20 decoration-2 underline-offset-4 transition-colors group-hover/tel:decoration-gold sm:text-lg">
                  {site.phone}
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
