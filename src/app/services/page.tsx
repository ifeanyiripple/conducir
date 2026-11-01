import type { Metadata } from 'next';
import PageBanner from '@/components/sections/PageBanner';
import ServiceBlock from '@/components/sections/ServiceBlock';
import CallBand from '@/components/sections/CallBand';
import { services, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our services',
  description:
    'Real Estate, Infrastructure and Investments from Conducir Engineering Limited in Abuja, Nigeria: property development, civil engineering, roads and bridges, joint ventures and public-private partnerships.',
};

/* Optional hexagon letter in a pillar's title. Write the letter in capitals. */
const titles: Record<string, string> = {
  'real-estate': 'Real Estate',
  infrastructure: '[I]nfrastructure',
  investments: '[I]nvestments',
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="[O]ur services" />

      {services.map((service, i) => (
        <ServiceBlock
          key={service.id}
          service={service}
          title={titles[service.id]}
          href={site.mailto}
          flip={i % 2 === 1}
        />
      ))}

      <CallBand />
    </>
  );
}
