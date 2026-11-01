import Link from 'next/link';
import PortraitHex from '@/components/ui/PortraitHex';
import SlideIn from '@/components/ui/SlideIn';
import type { Person } from '@/lib/people';

/* Portrait, name and role. Links to the full profile further down the page. */
export default function PersonCard({
  person,
  delay = 0,
  ring = 'bg-white',
  group,
}: {
  person: Person;
  delay?: number;
  ring?: string;
  group: 'board' | 'executive';
}) {
  const role = group === 'board' ? person.boardRole ?? person.role : person.role;
  return (
    <SlideIn from="right" delay={delay}>
      <Link href={`#${person.slug}`} className="group block text-center">
        <PortraitHex
          src={person.image}
          alt={`Portrait of ${person.name}`}
          position={person.imagePosition}
          ring={ring}
          className="max-w-[240px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <h3 className="mt-6 font-display text-sm font-bold uppercase leading-tight tracking-tight transition-colors group-hover:text-gold-deep sm:text-base">
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-ink/70">{role}</p>
      </Link>
    </SlideIn>
  );
}
