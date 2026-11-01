import { projects } from '@/lib/projects';

export const site = {
  name: 'Conducir Engineering Limited',
  shortName: 'Conducir',
  motto: 'Tomorrow Built Today',
  strapline: 'Engineering Progress and creating Lasting Value',
  email: 'Conducirengineeringltd@gmail.com',
  mailto: 'mailto:Conducirengineeringltd@gmail.com?subject=Project%20enquiry',
  year: 2026,
  phone: '+234 703 011 4801',
  phoneHref: 'tel:+2347030114801',
  address: ['28 Birnin Kebbi Crescent,', 'Off Ahmadu Bello Way,', 'Garki II, Abuja.'],
};

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  ...(projects.length > 0 ? [{ label: 'Projects', href: '/projects' }] : []),
  { label: 'Leadership', href: '/leadership' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
];

/* ---------------------------------------------------------------------
   Company profile copy
   --------------------------------------------------------------------- */

export const aboutParagraphs = [
  'Conducir Engineering Limited is an engineering, construction, infrastructure and real estate development company committed to creating spaces and developments that deliver lasting value.',
  'At Conducir, we believe tomorrow’s buildings should be built today. Our approach combines intelligent engineering, sustainable design principles, practical innovation and exceptional craftsmanship to deliver developments that respond to the needs of modern living, working and investment.',
  'We look beyond construction to consider how buildings and infrastructure influence people, communities, businesses and the environment. Through thoughtful planning, efficient design and a commitment to quality, we aim to create healthier, smarter and more enduring spaces.',
  'Our business is anchored on three core pillars: Real Estate, Infrastructure and Investments. Together, these pillars express our ambition to contribute to the built environment while creating opportunities for sustainable growth and long-term value.',
];

export const whoWeAre = [
  'We are a built-environment company focused on the planning, development and delivery of buildings, infrastructure and real estate opportunities.',
  'We bring together engineering knowledge, construction expertise, project coordination and a forward-looking approach to development. Our goal is to ensure that every project is guided by clear objectives, practical thinking, quality workmanship and an understanding of its long-term purpose.',
  'At Conducir, we recognise that successful development is measured by more than the completion of a structure. It is also reflected in the usefulness of the space, the quality of the experience it provides, the value it creates and its contribution to the surrounding community.',
  'Our work is guided by a commitment to responsible development, reliable delivery and enduring value.',
];

export const vision = {
  title: 'Vision',
  paragraphs: [
    'Our vision is to help shape a built environment where quality, functionality, sustainability and long-term value are central to every development.',
    'We aspire to contribute to smarter cities, more resilient infrastructure, better living environments and investment opportunities that support lasting progress.',
  ],
};

export const mission = {
  title: 'Mission',
  paragraphs: [
    'Our mission is to design, develop and deliver high-quality buildings, infrastructure and real estate opportunities through intelligent engineering, sustainable design principles, innovative solutions and exceptional craftsmanship.',
  ],
};

export const commitment = [
  'At Conducir, we believe that development should serve a purpose beyond the physical structure. Buildings, roads and infrastructure influence how people live, work, connect and participate in economic activity.',
  'Our commitment is to approach projects with an understanding of their intended function, the needs of their users and the value they are expected to create.',
  'We aim to build relationships founded on trust, communication and accountability, while considering the long-term relevance of the spaces and infrastructure we help deliver.',
  'Through our focus on real estate, infrastructure and investments, we aspire to contribute to a built environment that is functional, responsible and prepared for the needs of tomorrow.',
];

export const brandPromise = [
  'Tomorrow Built Today expresses the philosophy at the heart of Conducir Engineering Limited. It reflects our belief that the future is shaped by the decisions, designs and developments we undertake today.',
  'Every building, infrastructure project and development opportunity presents an opportunity to think ahead, act responsibly and create lasting value. We are committed to a forward-looking approach that values intelligent engineering, thoughtful design, quality craftsmanship and the long-term usefulness of the built environment.',
];

export const collaboration =
  'Meaningful development depends on effective collaboration among clients, consultants, contractors, suppliers, professional service providers and other stakeholders. Conducir Engineering Limited recognises the importance of clear communication, coordinated responsibilities and professional relationships in achieving project objectives. We value collaboration that supports quality, accountability, practical innovation and the successful execution of development projects.';

/* ---------------------------------------------------------------------
   Services: the three pillars
   --------------------------------------------------------------------- */

export type ServiceItem = { title: string; text: string };

export type Service = {
  id: string;
  number: string;
  title: string;
  /** Short label used in the honeycomb tile and as the block eyebrow */
  label: string;
  summary: string;
  items: ServiceItem[];
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const services: Service[] = [
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate',
    label: 'Real Estate',
    summary:
      'We focus on property development and management, creating functional, well-planned spaces that respond to the evolving needs of residents, businesses and property owners.',
    items: [
      {
        title: 'Residential Developments',
        text: 'Developing residential properties designed to support comfortable living, functionality and long-term value.',
      },
      {
        title: 'Property Development and Management',
        text: 'Coordinating property development and supporting the effective management of real estate assets.',
      },
      {
        title: 'Mixed-Use Developments',
        text: 'Integrating complementary uses within developments to create practical, connected and efficient environments.',
      },
      {
        title: 'Commercial Development',
        text: 'Developing commercial spaces intended to support businesses, services and economic activity.',
      },
    ],
    image: '/images/real-estate.jpg',
    imageAlt: 'A site professional holding a white hard hat beside a high visibility vest',
    imagePosition: 'center',
  },
  {
    id: 'infrastructure',
    number: '02',
    title: 'Infrastructure',
    label: 'Infrastructure',
    summary:
      'Our infrastructure division focuses on engineering and construction projects that support development, connectivity and the needs of communities and institutions.',
    items: [
      {
        title: 'Civil Engineering',
        text: 'Engineering and construction solutions for civil works and the built environment.',
      },
      {
        title: 'Roads and Bridges',
        text: 'The development and construction of road and bridge infrastructure to support transportation and connectivity.',
      },
      {
        title: 'Industrial Projects',
        text: 'Infrastructure and development solutions for industrial facilities and operations.',
      },
      {
        title: 'Institutional Projects',
        text: 'Engineering and construction projects for institutional facilities, according to their specific requirements.',
      },
    ],
    image: '/images/infrastructure.jpg',
    imageAlt: 'A grader and a loader preparing a red earth road through green forest',
    imagePosition: 'center',
  },
  {
    id: 'investments',
    number: '03',
    title: 'Investments',
    label: 'Investments',
    summary:
      'Our investments division focuses on strategic partnerships, investment opportunities and the development of assets, particularly within real estate and infrastructure.',
    items: [
      {
        title: 'Joint Ventures',
        text: 'Collaborating with suitable partners to pursue development opportunities and shared business objectives.',
      },
      {
        title: 'Public-Private Partnerships (PPPs)',
        text: 'Exploring collaboration between public and private sector stakeholders to support infrastructure and development initiatives.',
      },
      {
        title: 'Investment Advisory and Asset Development',
        text: 'Supporting investment-related decision-making and the identification, planning and development of assets, within the company’s established capabilities.',
      },
      {
        title: 'Real Estate Investments',
        text: 'Exploring property-related investment opportunities with a focus on long-term value creation.',
      },
    ],
    image: '/images/investments.jpg',
    imageAlt: 'A handshake over a signed agreement and a set of keys',
    imagePosition: 'center',
  },
];

/* ---------------------------------------------------------------------
   Core values: DRIVE
   --------------------------------------------------------------------- */

export const values = [
  {
    letter: 'D',
    title: 'Discipline',
    text: 'We approach every project with structured planning, professional responsibility and a commitment to effective execution.',
  },
  {
    letter: 'R',
    title: 'Reliability',
    text: 'We strive to be a dependable partner through consistent standards, clear communication and responsible project delivery.',
  },
  {
    letter: 'I',
    title: 'Integrity',
    text: 'We value honesty, accountability and transparency in our relationships, decisions and professional conduct.',
  },
  {
    letter: 'V',
    title: 'Vision',
    text: 'We look beyond immediate needs to anticipate future opportunities and create developments designed for tomorrow.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    text: 'We pursue quality, thoughtful design, technical precision and continuous improvement in every aspect of our work.',
  },
];

/* ---------------------------------------------------------------------
   Corporate registration and compliance
   Every reference below was read off the certificates in the company
   profile. Expiry dates are left out on purpose: they would go stale.
   --------------------------------------------------------------------- */

export const complianceIntro =
  'A credible engineering and construction company should demonstrate its legal identity, relevant registrations and commitment to appropriate business and professional requirements.';

export type Credential = {
  id: string;
  short: string;
  title: string;
  issuer: string;
  summary: string;
  meta: { label: string; value: string }[];
};

export const credentials: Credential[] = [
  {
    id: 'cac',
    short: 'C.A.C',
    title: 'Certificate of Incorporation',
    issuer: 'Corporate Affairs Commission, Federal Republic of Nigeria',
    summary:
      'Conducir Engineering Limited is incorporated under the Companies and Allied Matters Act 1990 as a company limited by shares.',
    meta: [
      { label: 'RC number', value: '1250729' },
      { label: 'Incorporated', value: '23 March 2015, Abuja' },
    ],
  },
  {
    id: 'nsitf',
    short: 'NSITF',
    title: 'ECS Clearance Certificate',
    issuer: 'Nigeria Social Insurance Trust Fund',
    summary: 'Compliance with the provisions of the Employees Compensation Act, 2010 (ECA 2010).',
    meta: [{ label: 'Certificate number', value: '00000523489' }],
  },
  {
    id: 'scuml',
    short: 'SCUML',
    title: 'Certificate of Registration',
    issuer: 'Special Control Unit Against Money Laundering (SCUML)',
    summary:
      'Registered in accordance with Section 17(2)(a) of the Money Laundering (Prevention and Prohibition) Act, 2022 and any other law or regulation.',
    meta: [
      { label: 'Registration number', value: 'SC 151656214' },
      { label: 'Issued', value: '9 July 2026' },
    ],
  },
  {
    id: 'itf',
    short: 'ITF',
    title: 'Certificate of Compliance',
    issuer: 'Federal Republic of Nigeria, Industrial Training Fund',
    summary: 'Compliance with the Industrial Training Fund contribution for the year 2025.',
    meta: [
      { label: 'Certificate number', value: 'LAF/0127445' },
      { label: 'Registration number', value: 'LAF-014-1623' },
    ],
  },
];

export const partnerCompanies = [
  {
    name: 'Visivo Dettaglio Nigeria',
    logo: '/images/partners/visivo-dettaglio.png',
    width: 319,
    height: 174,
  },
  {
    name: 'Conelli Engineering',
    logo: '/images/partners/conelli-engineering.jpg',
    width: 503,
    height: 151,
  },
];
