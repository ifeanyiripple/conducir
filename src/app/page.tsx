import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Drive from '@/components/sections/Drive';
import LeadershipPreview from '@/components/sections/LeadershipPreview';
import ComplianceStrip from '@/components/sections/ComplianceStrip';
import CallBand from '@/components/sections/CallBand';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {projects.length > 0 && <Projects />}
      <Drive />
      <LeadershipPreview />
      <ComplianceStrip />
      <CallBand />
    </>
  );
}
