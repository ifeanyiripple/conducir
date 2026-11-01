import type { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import GhostHex from '@/components/ui/GhostHex';
import ButtonLink from '@/components/ui/ButtonLink';
import { ConducirMark } from '@/components/ui/Logo';
import { BADGE, PHOTO } from '@/lib/hex';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Contact Conducir Engineering Limited: call +234 703 011 4801, email Conducirengineeringltd@gmail.com or visit 28 Birnin Kebbi Crescent, Off Ahmadu Bello Way, Garki II, Abuja.',
};

const icons = {
  phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />,
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.5 2v.5l7.5 5 7.5-5V7z" />,
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />,
};

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: keyof typeof icons;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-b border-ink/15 py-6">
      <span className="relative block w-12 shrink-0 sm:w-14" style={{ aspectRatio: '173.2 / 200' }}>
        <span className="absolute inset-0 bg-gold" style={{ clipPath: BADGE.outerClip }} />
        <span className="absolute inset-0 bg-white" style={{ clipPath: BADGE.ringClip }} />
        <span className="absolute inset-0 bg-ink" style={{ clipPath: BADGE.innerClip }} />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute inset-0 m-auto size-1/2 text-gold">
          {icons[icon]}
        </svg>
      </span>
      <div>
        <p className="font-label text-[0.6rem] uppercase tracking-[0.22em] text-gold-deep">{label}</p>
        <div className="mt-2 font-display text-base font-bold leading-snug tracking-tight sm:text-lg">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageBanner title="[C]ontact us" />

      <section className="relative overflow-clip bg-white py-20 lg:py-28">
        <GhostHex className="-left-40 -top-20 w-[520px] text-ink/[0.05] lg:w-[680px]" />
        <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <SlideIn>
            <Eyebrow>Get in touch</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              Let’s build tom[O]rrow.
            </HexText>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
              Tell us about your development, infrastructure or investment project and our team will respond.
            </p>

            <div className="mt-10 max-w-lg border-t border-ink/15">
              <ContactItem icon="phone" label="Call us">
                <a href={site.phoneHref} className="transition-colors hover:text-gold-deep">
                  {site.phone}
                </a>
              </ContactItem>
              <ContactItem icon="mail" label="Email us">
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-gold-deep">
                  {site.email}
                </a>
              </ContactItem>
              <ContactItem icon="pin" label="Find us">
                <address className="not-italic">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactItem>
            </div>

            <div className="mt-10">
              <ButtonLink href={site.mailto} variant="dark" shape="hex" size="lg">
                Start a conversation
              </ButtonLink>
            </div>
          </SlideIn>

          <SlideIn from="right" delay={0.15}>
            <div
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-0"
              style={{ aspectRatio: `${PHOTO.box.w} / ${PHOTO.box.h}` }}
            >
              <div className="absolute inset-0 bg-gold" style={{ clipPath: PHOTO.outerClip }} />
              <div className="absolute inset-0 bg-white" style={{ clipPath: PHOTO.ringClip }} />
              <div className="absolute inset-0 overflow-hidden bg-ink" style={{ clipPath: PHOTO.innerClip }}>
                <Image
                  src="/images/palm-dark.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/40" />
                <div className="absolute inset-0 grid place-items-center">
                  <ConducirMark className="h-1/3 w-auto text-gold" />
                </div>
              </div>
            </div>
          </SlideIn>
        </Container>
      </section>
    </>
  );
}
