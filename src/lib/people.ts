export type Person = {
  slug: string;
  name: string;
  /** Role shown on the profile */
  role: string;
  /** Role shown on the Board card when it is shorter than the full role */
  boardRole?: string;
  groups: ('board' | 'executive')[];
  image: string;
  /** Where the face sits in the photo, so the hexagon crop keeps it in view */
  imagePosition?: string;
  bio: string[];
};

export const people: Person[] = [
  {
    slug: 'ibrahim-g-jibrin',
    name: 'Ibrahim G. Jibrin',
    role: 'Managing Director & Chief Executive Officer',
    boardRole: 'Managing Director',
    groups: ['board', 'executive'],
    image: '/images/team/ibrahim-g-jibrin.jpg',
    imagePosition: '50% 25%',
    bio: [
      'Ibrahim G. Jibrin is a Mechanical Engineer, business strategist, and accomplished executive with multidisciplinary experience spanning engineering, real estate, technology, agriculture, and investment. He combines technical expertise with commercial insight to develop practical solutions, structure business opportunities, and drive sustainable enterprise growth.',
      'As Managing Director and Chief Executive Officer of Conducir Engineering Limited, he provides strategic leadership across engineering services, project execution, business development, investment structuring, and organisational growth. His approach is built on operational efficiency, strategic planning, and delivering commercially viable solutions.',
      'Previously, Ibrahim served as Director of Business & Strategy at Strong & Bold Nigeria Limited, where he contributed to real estate development, investment planning, property acquisition, joint venture structuring, capital mobilisation, and strategic partnerships. He also served as Executive Director at Fibrenet Technologies Limited, contributing to business expansion, innovation, and technology-driven solutions.',
      'With a strong entrepreneurial mindset and results-oriented leadership, Ibrahim remains committed to building scalable enterprises and positioning Conducir Engineering Limited for sustainable growth through integrity, innovation, precision, and strategic execution.',
    ],
  },
  {
    slug: 'muktar-m-muhammad',
    name: 'Muktar M Muhammad',
    role: 'Executive Director',
    groups: ['board', 'executive'],
    image: '/images/team/muktar-m-muhammad.jpg',
    imagePosition: '50% 25%',
    bio: [
      'Muktar Musa Muhammad is an accomplished executive with over 10 years of experience spanning real estate, construction, infrastructure, and commercial management. As Executive Director of Conducir Engineering Limited, he provides strategic leadership in shaping the company’s vision, driving business growth, developing strategic partnerships, and overseeing the delivery of high-quality engineering and construction solutions. His leadership approach combines commercial insight, project delivery experience, stakeholder management, and a strong commitment to sustainable construction and long-term value creation.',
      'With a career rooted in construction and real estate, Muktar has developed extensive experience in construction supervision, property evaluation, project coordination, contractor management, procurement, infrastructure development, and commercial negotiations. His broader professional experience in the energy and infrastructure sector has further strengthened his ability to manage complex projects, engage diverse stakeholders, and make commercially informed decisions.',
      'Muktar holds an MSc in Oil and Gas Management from the University of Coventry, United Kingdom, and a BSc in Petroleum Chemistry from the American University of Nigeria. Passionate about sustainable construction, he is committed to promoting building and infrastructure solutions that are environmentally responsible, resource-efficient, durable, and commercially viable. At Conducir Engineering Limited, he is focused on building a forward-looking engineering company distinguished by integrity, innovation, quality execution, and a commitment to creating lasting value for clients and communities.',
    ],
  },
  {
    slug: 'fahad-yusuf-garba',
    name: 'Fahad Yusuf Garba',
    role: 'Non-Executive Director',
    groups: ['board'],
    image: '/images/team/fahad-yusuf-garba.jpg',
    imagePosition: '50% 25%',
    bio: [
      'Fahad Yusuf Garba is a Project Manager with a multidisciplinary background in architecture, construction, project planning, and infrastructure delivery. He has experience supporting construction, refurbishment, fit-out, civil engineering, and facilities-related projects across the UK and Nigeria.',
      'He holds an MSc in Construction Project Management from the University of Portsmouth and a B.Tech in Architecture from Abubakar Tafawa Balewa University. His experience covers various stages of the project lifecycle, including tendering, planning, construction coordination, programme management, monitoring, stakeholder engagement, and project handover.',
      'Fahad has expertise in project planning, Primavera P6, MS Project, AutoCAD, Revit, contractor and stakeholder coordination, risk and change management, contract administration, and site delivery. He is experienced in working with clients, consultants, contractors, engineers, commercial teams, and other project stakeholders to support effective project delivery.',
      'He is a member of the Association for Project Management (APM) and the Chartered Institute of Project Managers of Nigeria (CIPMN). He is committed to professional project management standards and delivering projects with a structured, collaborative, and results-focused approach.',
    ],
  },
  {
    slug: 'mustapha-babayo',
    name: 'Mustapha Babayo',
    role: 'Non-Executive Director',
    groups: ['board'],
    image: '/images/team/mustapha-babayo.jpg',
    imagePosition: '50% 25%',
    bio: [
      'Mustapha Babayo is a results-driven professional with a strong academic background in International Relations and Diplomacy, holding a Master of Arts in International Relations. He brings experience in administrative management, operational coordination, stakeholder engagement, and institutional support across public-sector institutions and the energy industry.',
      'With additional training in leadership, strategy, artificial intelligence, and prompt engineering, Mustapha combines analytical thinking, organisational excellence, and a commitment to continuous growth. Currently advancing his knowledge in Energy Economics, he is passionate about energy governance, public policy, petroleum economics, and sustainable development.',
      'His vision is to contribute to effective leadership, sound policy, and strategic initiatives that drive institutional excellence and lasting socioeconomic progress.',
    ],
  },
  {
    slug: 'abdulmumin-tanko',
    name: 'Eng Abdulmumin Tanko',
    role: 'Chief Technical Officer',
    groups: ['executive'],
    image: '/images/team/abdulmumin-tanko.jpg',
    imagePosition: '50% 25%',
    bio: [
      'Engr. Tanko is a professional in the construction sector with vast experience in planning, design, construction and project management. Having worked in the real estate sector, he has been part of the design and development of several residential houses, commercial buildings and in the design of roads and road infrastructure.',
      'He proudly holds a degree in Civil Engineering and a Master’s degree in Geotechnical Engineering. He has been active in the construction and built-environment sector for over a decade now. He is duly registered to practice engineering in Nigeria, having been certified by the Council for the Regulation of Engineering in Nigeria (COREN). He is experienced in project planning and implementation and in research and development.',
      'He has worked with agents of the governments notably, Upper Niger River Basin Development Authority, FCDA, FCTA, Niger State Government, Katsina State Government, ABU Zaria and NIMET; and developmental agencies; World Bank (NEWMAP). With the private sector, he had worked with individual and corporate organizations like Brains and Hammers Real estate, Cosgrove Investment, Bullion Group, Design Logic among many others. He is the Managing Director of Transurban Integrated Engineering Ltd.',
    ],
  },
];

export const boardMembers = people.filter((p) => p.groups.includes('board'));
export const executiveTeam = people.filter((p) => p.groups.includes('executive'));

export type Adviser = {
  name: string;
  focus: string;
  /** Optional portrait. Without one, the hexagon shows initials. */
  image?: string;
  initials: string;
};

export const advisers: Adviser[] = [
  {
    name: 'P.Y. Garuba ESQ',
    focus: 'Legal and corporate governance',
    image: '/images/team/py-garuba.jpg',
    initials: 'PG',
  },
  {
    name: 'Haj. Fatima Zarah Usman',
    focus: 'Human Resources and organizational development',
    initials: 'FU',
  },
];

export const strategicPartners: Adviser[] = [
  {
    name: 'Alamin Bamusa',
    focus: 'Strategic Adviser, Project Development & Finance',
    initials: 'AB',
  },
  {
    name: 'Femi Jubal',
    focus: 'International partnerships and diaspora investment',
    initials: 'FJ',
  },
];
