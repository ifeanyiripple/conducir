import type { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/sections/PageBanner';
import PersonCard from '@/components/sections/PersonCard';
import PersonProfile from '@/components/sections/PersonProfile';
import CallBand from '@/components/sections/CallBand';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import PortraitHex from '@/components/ui/PortraitHex';
import GhostHex from '@/components/ui/GhostHex';
import { advisers, boardMembers, executiveTeam, people, strategicPartners } from '@/lib/people';
import { partnerCompanies } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the board of directors, executive management, strategic advisers and partners of Conducir Engineering Limited.',
};

export default function LeadershipPage() {
  return (
    <>
      <PageBanner title="Leadersh[I]p" />

      {/* ---------- Board of directors ---------- */}
      <section id="board" className="scroll-mt-20 overflow-clip bg-white py-20 lg:py-28">
        <Container>
          <SlideIn>
            <Eyebrow>Governance</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              <span className="text-gold-deep">Board</span> of directors
            </HexText>
          </SlideIn>

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-20 lg:grid-cols-4 lg:gap-x-10">
            {boardMembers.map((person, i) => (
              <li key={person.slug}>
                <PersonCard person={person} group="board" delay={i * 0.1} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Executive management ---------- */}
      <section id="executive" className="scroll-mt-20 overflow-clip bg-sand py-20 lg:py-28">
        <Container>
          <SlideIn>
            <Eyebrow>Management</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              <span className="text-gold-deep">Executive</span> management
            </HexText>
          </SlideIn>

          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:mt-20 lg:max-w-4xl lg:gap-x-10">
            {executiveTeam.map((person, i) => (
              <li key={person.slug}>
                <PersonCard person={person} group="executive" ring="bg-sand" delay={i * 0.1} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Full profiles ---------- */}
      {people.map((person, i) => (
        <PersonProfile key={person.slug} person={person} flip={i % 2 === 1} />
      ))}

      {/* ---------- Strategic advisers and partners ---------- */}
      <section className="relative overflow-clip bg-ink-deep py-24 text-white lg:py-32">
        <GhostHex className="-left-40 -top-24 w-[560px] text-white/[0.06] lg:w-[760px]" />
        <Container className="relative grid gap-20 lg:grid-cols-2 lg:gap-24">
          {[
            { id: 'advisers', label: 'Advice', title: 'Strategic advisers', people: advisers },
            { id: 'partners', label: 'Partnership', title: 'Strategic partners', people: strategicPartners },
          ].map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <SlideIn>
                <Eyebrow light>{group.label}</Eyebrow>
                <h2 className="mt-6 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]">
                  {group.title}
                </h2>
              </SlideIn>
              <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12">
                {group.people.map((person, i) => (
                  <li key={person.name}>
                    <SlideIn from="right" delay={i * 0.12}>
                      <div className="text-center">
                        <PortraitHex
                          src={person.image}
                          alt={`Portrait of ${person.name}`}
                          initials={person.initials}
                          ring="bg-ink-deep"
                          sizes="(min-width: 1024px) 200px, 40vw"
                          className="max-w-[200px]"
                        />
                        <h3 className="mt-6 font-display text-sm font-bold uppercase leading-tight tracking-tight sm:text-base">
                          {person.name}
                        </h3>
                        <p className="mt-2 text-sm leading-snug text-white/70">{person.focus}</p>
                      </div>
                    </SlideIn>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      {/* ---------- Partner companies ---------- */}
      <section id="our-partners" className="scroll-mt-20 overflow-clip bg-sand py-20 lg:py-28">
        <Container>
          <SlideIn>
            <Eyebrow>Collaboration</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
            >
              Our <span className="text-gold-deep">partners</span>
            </HexText>
          </SlideIn>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20">
            {partnerCompanies.map((partner, i) => (
              <li key={partner.name}>
                <SlideIn from="right" delay={i * 0.12}>
                  <div className="grid h-56 place-items-center rounded-2xl bg-white p-10 sm:h-64">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      sizes="(min-width: 640px) 320px, 70vw"
                      className="h-auto max-h-full w-auto max-w-[min(100%,320px)] object-contain"
                    />
                  </div>
                </SlideIn>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CallBand />
    </>
  );
}
