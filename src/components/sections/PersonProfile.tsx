import Container from '@/components/ui/Container';
import PortraitHex from '@/components/ui/PortraitHex';
import SlideIn from '@/components/ui/SlideIn';
import GhostHex from '@/components/ui/GhostHex';
import type { Person } from '@/lib/people';

/* One full profile: hexagon portrait beside the biography. Alternates side and background. */
export default function PersonProfile({ person, flip = false }: { person: Person; flip?: boolean }) {
  return (
    <section
      id={person.slug}
      className={`relative scroll-mt-20 overflow-clip py-20 lg:py-28 ${flip ? 'bg-sand' : 'bg-white'}`}
    >
      <GhostHex className={`-top-20 w-[460px] text-ink/[0.05] ${flip ? '-left-40' : '-right-40'}`} />

      <Container className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <SlideIn from={flip ? 'right' : 'left'} className={`lg:col-span-4 ${flip ? 'lg:order-2' : ''}`}>
          <PortraitHex
            src={person.image}
            alt={`Portrait of ${person.name}`}
            position={person.imagePosition}
            ring={flip ? 'bg-sand' : 'bg-white'}
            sizes="(min-width: 1024px) 380px, 80vw"
            className="max-w-[380px]"
          />
          <div className="mt-8 text-center">
            <h2 className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl">
              {person.name}
            </h2>
            <p className="mt-2 font-label text-[0.62rem] uppercase tracking-[0.2em] text-gold-deep">{person.role}</p>
          </div>
        </SlideIn>

        <SlideIn from={flip ? 'left' : 'right'} delay={0.15} className={`lg:col-span-8 ${flip ? 'lg:order-1' : ''}`}>
          <span className="block h-1.5 w-24 bg-gold" aria-hidden="true" />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            {person.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </SlideIn>
      </Container>
    </section>
  );
}
