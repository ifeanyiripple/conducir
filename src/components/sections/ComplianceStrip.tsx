import Link from 'next/link';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import HexBadge from '@/components/ui/HexBadge';
import ButtonLink from '@/components/ui/ButtonLink';
import { complianceIntro, credentials } from '@/lib/site';

/* Registrations at a glance. Full details live on /compliance. */
export default function ComplianceStrip() {
  return (
    <section className="overflow-clip bg-sand py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <SlideIn className="lg:col-span-5">
          <Eyebrow>Compliance</Eyebrow>
          <HexText
            as="h2"
            className="mt-6 font-display text-[clamp(1.6rem,3vw,2.75rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]"
          >
            Registered and [C]ompliant
          </HexText>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">{complianceIntro}</p>
          <div className="mt-8">
            <ButtonLink href="/compliance" variant="dark" shape="hex" size="md">
              View registrations
            </ButtonLink>
          </div>
        </SlideIn>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-7">
          {credentials.map((credential, i) => (
            <li key={credential.id}>
              <SlideIn from="right" delay={i * 0.1}>
                <Link href={`/compliance#${credential.id}`} className="group block text-center">
                  <HexBadge variant="onLight" ring="bg-sand" className="mx-auto w-full max-w-[150px]">
                    <span className="text-sm sm:text-base">{credential.short}</span>
                  </HexBadge>
                  <p className="mx-auto mt-4 max-w-[18ch] text-sm font-medium leading-snug text-ink/80 transition-colors group-hover:text-gold-deep">
                    {credential.title}
                  </p>
                </Link>
              </SlideIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
