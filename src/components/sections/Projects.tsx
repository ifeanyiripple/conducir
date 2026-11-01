'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import ProjectCard from '@/components/ui/ProjectCard';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import { projects } from '@/lib/projects';

const GAP = 24; // keep in sync with `gap-6` on the list

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`size-6 transition-transform duration-300 ${flip ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}
    >
      <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

/* Home page carousel. Only render it when `projects` has entries (see app/page.tsx). */
export default function Projects() {
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  // measures on mount and whenever the list changes size
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.offsetWidth + GAP : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  const arrowClass =
    'group grid size-14 place-items-center rounded-full border border-ink/30 transition-colors duration-300 hover:border-gold hover:bg-gold disabled:pointer-events-none disabled:opacity-30';

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-clip bg-white py-24 lg:py-36">
      <GhostHex className="-right-40 -top-24 w-[560px] text-ink/[0.05] lg:w-[760px]" />

      <Container className="relative">
        {/* ---------- Heading + arrows ---------- */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SlideIn>
            <Eyebrow>Our work</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.9rem,4.6vw,4rem)] font-extrabold uppercase leading-none tracking-[-0.01em]"
            >
              Recent pr[O]jects
            </HexText>
          </SlideIn>

          <SlideIn from="right" delay={0.15} className="flex gap-4">
            <button type="button" aria-label="Previous projects" disabled={!canPrev} onClick={() => scrollByCard(-1)} className={arrowClass}>
              <Arrow flip />
            </button>
            <button type="button" aria-label="Next projects" disabled={!canNext} onClick={() => scrollByCard(1)} className={arrowClass}>
              <Arrow />
            </button>
          </SlideIn>
        </div>

        {/* ---------- Carousel ---------- */}
        <SlideIn from="right" delay={0.1} className="mt-14 lg:mt-20">
          <ul
            ref={scroller}
            onScroll={update}
            aria-label="Recent projects"
            className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-6 [scrollbar-width:none] sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:-mx-16 lg:scroll-px-16 lg:px-16 [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <li key={project.slug} className="w-[82%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ProjectCard project={project} href={`/projects#${project.slug}`} />
              </li>
            ))}
          </ul>
        </SlideIn>

        <div className="mt-10 lg:mt-14">
          <ButtonLink href="/projects" variant="dark" shape="hex" size="lg">
            All projects
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
