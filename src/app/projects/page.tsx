import type { Metadata } from 'next';
import PageBanner from '@/components/sections/PageBanner';
import CallBand from '@/components/sections/CallBand';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import SlideIn from '@/components/ui/SlideIn';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Our projects',
  description: 'Recent projects delivered by Conducir Engineering Limited in Abuja, Nigeria.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title="Our pr[O]jects" />

      <section className="overflow-clip bg-white py-24 lg:py-36">
        <Container>
          {projects.length === 0 ? (
            <p className="font-display text-2xl font-bold uppercase tracking-tight">Projects coming soon.</p>
          ) : (
            <ul className="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
              {projects.map((project, i) => (
                <li key={project.slug} id={project.slug} className="scroll-mt-24">
                  <SlideIn from="right" delay={(i % 3) * 0.12}>
                    <ProjectCard
                      project={project}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </SlideIn>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <CallBand />
    </>
  );
}
