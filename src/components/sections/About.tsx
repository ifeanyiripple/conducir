'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MorphFrame } from '@/components/MorphFrame';
import HexText from '@/components/ui/HexText';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import GhostHex from '@/components/ui/GhostHex';
import { HEX } from '@/lib/hex';
import { homeAboutParagraphs, services } from '@/lib/site';

/* MorphFrame takes a fixed pixel size rather than scaling fluidly, so the size
   is picked on the client for the current screen width. */
function useMorphSize() {
  const [size, setSize] = useState(280);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 480;
      if (w >= 1024) return 420;
      if (w >= 640) return 380;
      return 280;
    };

    const update = () => setSize(compute());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return size;
}

/* Photos the blob cycles through as its shape changes, one per pillar to start. */
const MORPH_IMAGES = [
  '/images/real-estate.jpg',
  '/images/infrastructure.jpg',
  '/images/investments.jpg',
  '/images/hero-interior.jpg',
];

const MORPH_ALT = [
  'A site professional holding a white hard hat',
  'Earthmoving machines preparing a road',
  'A handshake over a signed agreement',
  'A warmly lit living room seen from above',
];

export default function About() {
  const size = useMorphSize();

  return (
    <section id="about" className="relative scroll-mt-20 overflow-clip bg-sand py-20 lg:py-28">
      <GhostHex className="-left-44 -top-24 w-[560px] text-ink/[0.2] lg:w-[760px]" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* The six sided polygon is one of the shapes this blob morphs through
            (see HEX in lib/blob-architectural.ts). Radius follows the size so
            the shape fills its frame. */}
        <SlideIn from="left">
          <div className="flex justify-center text-gold">
            <MorphFrame
              size={size}
              radius={Math.round(size * 0.44)}
              images={MORPH_IMAGES}
              alt={MORPH_ALT}
              fit="cover"
              transitionDuration={0.5}
            />
          </div>
        </SlideIn>

        <SlideIn from="right" delay={0.15}>
        <div className='text-center '>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">{homeAboutParagraphs[0]}</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">{homeAboutParagraphs[1]}</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">{homeAboutParagraphs[2]}</p>
         </div>
          <div className="mt-15">
            <ButtonLink href="/about" variant="dark" shape="hex" size="lg">
              Learn more
            </ButtonLink>
          </div>
        </SlideIn>
      </Container>
    </section>
  );
}