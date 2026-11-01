import type { Metadata } from 'next';
import PageBanner from '@/components/sections/PageBanner';
import CredentialCard from '@/components/sections/CredentialCard';
import CallBand from '@/components/sections/CallBand';
import Container from '@/components/ui/Container';
import SlideIn from '@/components/ui/SlideIn';
import Eyebrow from '@/components/ui/Eyebrow';
import HexText from '@/components/ui/HexText';
import GhostHex from '@/components/ui/GhostHex';
import { complianceIntro, credentials } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Compliance',
  description:
    'Corporate registration and compliance of Conducir Engineering Limited: C.A.C incorporation, NSITF ECS clearance, SCUML registration and ITF compliance.',
};

export default function CompliancePage() {
  return (
    <>
      <PageBanner title="[C]ompliance" />

      <section className="relative overflow-clip bg-sand py-20 lg:py-28">
        <GhostHex className="-right-40 -top-24 w-[520px] text-ink/[0.06] lg:w-[720px]" />
        <Container className="relative">
          <SlideIn className="max-w-3xl">
            <Eyebrow>Registration</Eyebrow>
            <HexText
              as="h2"
              className="mt-6 font-display text-[clamp(1.5rem,3.2vw,2.75rem)] font-extrabold uppercase leading-[1.08] tracking-[-0.01em]"
            >
              Corporate registration and [C]ompliance
            </HexText>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">{complianceIntro}</p>
          </SlideIn>

          <ul className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
            {credentials.map((credential, i) => (
              <CredentialCard key={credential.id} credential={credential} index={i} />
            ))}
          </ul>
        </Container>
      </section>

      <CallBand />
    </>
  );
}
