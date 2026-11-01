import Link from 'next/link';
import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import GhostHex from '@/components/ui/GhostHex';
import PortraitHex from '@/components/ui/PortraitHex';
import { boardMembers } from '@/lib/people';

/* The board, as four hexagon portraits. */
export default function LeadershipPreview() {
  return (
    <section className="relative overflow-clip bg-ink-deep py-24 text-white lg:py-32">
      <GhostHex className="-right-40 -top-24 w-[560px] text-white/[0.06] lg:w-[760px]" />

      <Container className="relative">
        <SlideIn>
          <Eyebrow light>Leadership</Eyebrow>
          <HexText
            as="h2"
            className="mt-6 font-display text-[clamp(1.75rem,4.2vw,3.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em]"
          >
            <span className="text-gold">Board</span> of directors
          </HexText>
        </SlideIn>

        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-20 lg:grid-cols-4 lg:gap-x-10">
          {boardMembers.map((person, i) => (
            <li key={person.slug}>
              <SlideIn from="right" delay={i * 0.12}>
                <Link href={`/leadership#${person.slug}`} className="group block text-center">
                  <PortraitHex
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    position={person.imagePosition}
                    ring="bg-ink-deep"
                    className="max-w-[260px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-6 font-display text-sm font-bold uppercase leading-tight tracking-tight transition-colors group-hover:text-gold sm:text-base">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{person.boardRole ?? person.role}</p>
                </Link>
              </SlideIn>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <ButtonLink href="/leadership" variant="gold" shape="hex" size="lg">
            Meet the team
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
