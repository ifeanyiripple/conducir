'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    src: '/images/hero-interior.jpg',
    alt: 'Overhead view of a warmly lit living room with sofas, a rug and pendant lamps',
  },
  {
    src: '/images/real-estate.jpg',
    alt: 'Site engineer holding a white hard hat, wearing a high-visibility vest',
  },
  {
    src: '/images/infrastructure.jpg',
    alt: 'Graders levelling a red earth road through green bush',
  },
  {
    src: '/images/investments.jpg',
    alt: 'Two professionals shaking hands over a signed agreement and house keys',
  },
];

/** Full-bleed background slideshow for the Hero. Cross-fades; sits behind the Hero's overlays. */
export default function HeroSlider() {
  const reduceMotion = useReducedMotion();

  return (
    // Swiper's own stylesheet sets position/z-index on .swiper, so the positioning lives on this wrapper
    <div className="absolute inset-0 -z-20" aria-hidden="true">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1600}
        loop
        allowTouchMove={false}
        autoplay={reduceMotion ? false : { delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.src}>
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}