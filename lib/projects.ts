import { Building2, Package, Truck, Globe2, LucideIcon } from 'lucide-react';

export type ProjectCategory = 'Construction' | 'Procurement' | 'Transportation' | 'Import/Export';

// Serializable project data (for passing to client components)
export interface ProjectData {
  id: number;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  year: number;
  status: 'Completed' | 'In Progress' | 'Planning';
  description: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  client?: string;
  budget?: string;
  duration?: string;
  images?: number; // Number of images for placeholder generation
}

// Internal project type with icon (for server-side use)
export interface Project extends ProjectData {
  icon: LucideIcon;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Municipal Road Upgrade',
    slug: 'municipal-road-upgrade',
    category: 'Construction',
    location: 'Kumasi',
    icon: Building2,
    year: 2024,
    status: 'Completed',
    description: 'Comprehensive road infrastructure upgrade for Kumasi municipality, improving connectivity and traffic flow.',
    overview: 'This major infrastructure project involved the complete rehabilitation and expansion of key arterial roads in Kumasi, Ghana\'s second-largest city. The project aimed to improve urban mobility, reduce traffic congestion, and enhance economic activity in the region.',
    challenges: [
      'Managing traffic flow during construction in a busy urban area',
      'Coordinating with multiple stakeholders including local government and businesses',
      'Ensuring minimal disruption to daily activities',
      'Working within strict environmental and safety regulations'
    ],
    solutions: [
      'Implemented phased construction approach with clear communication to residents',
      'Used advanced road construction materials for durability and longevity',
      'Coordinated with local authorities for traffic management',
      'Employed skilled local workforce and international best practices'
    ],
    results: [
      'Reduced average commute time by 35%',
      'Improved road safety with modern traffic management systems',
      'Enhanced economic activity in the area',
      'Created over 200 local jobs during construction'
    ],
    client: 'Kumasi Metropolitan Assembly',
    budget: 'GHS 15.2M',
    duration: '18 months',
    images: 4
  },
  {
    id: 2,
    title: 'Hospital Wing Renovation',
    slug: 'hospital-wing-renovation',
    category: 'Construction',
    location: 'Accra',
    icon: Building2,
    year: 2023,
    status: 'Completed',
    description: 'Modern healthcare facility renovation, expanding capacity and improving patient care infrastructure.',
    overview: 'A comprehensive renovation project for a major hospital wing in Accra, focusing on modernizing facilities, expanding capacity, and improving patient care infrastructure. The project included structural improvements, new medical equipment installation, and enhanced accessibility features.',
    challenges: [
      'Maintaining hospital operations during renovation',
      'Ensuring sterile environments and infection control',
      'Coordinating with medical staff and equipment suppliers',
      'Meeting strict healthcare facility standards and regulations'
    ],
    solutions: [
      'Phased construction approach to minimize disruption',
      'Temporary facilities setup for uninterrupted patient care',
      'Close collaboration with medical professionals and facility managers',
      'Use of healthcare-grade materials and construction methods'
    ],
    results: [
      'Increased patient capacity by 40%',
      'Improved patient satisfaction scores',
      'Enhanced infection control measures',
      'Modernized facilities meeting international healthcare standards'
    ],
    client: 'Greater Accra Regional Hospital',
    budget: 'GHS 22.8M',
    duration: '24 months',
    images: 5
  },
  {
    id: 3,
    title: 'Water Treatment Equipment',
    slug: 'water-treatment-equipment',
    category: 'Procurement',
    location: 'Cape Coast',
    icon: Package,
    year: 2024,
    status: 'Completed',
    description: 'Sourcing and procurement of advanced water treatment systems for improved municipal water supply.',
    overview: 'This procurement project involved sourcing, purchasing, and installing state-of-the-art water treatment equipment for Cape Coast\'s municipal water supply system. The project aimed to improve water quality, increase treatment capacity, and ensure reliable access to clean water for residents.',
    challenges: [
      'Identifying reliable international suppliers for specialized equipment',
      'Navigating complex import regulations and customs procedures',
      'Ensuring equipment compatibility with existing infrastructure',
      'Coordinating installation with minimal service disruption'
    ],
    solutions: [
      'Comprehensive supplier vetting and quality assurance processes',
      'Expert handling of import documentation and logistics',
      'Technical assessment and compatibility testing',
      'Phased installation with backup systems in place'
    ],
    results: [
      'Improved water quality meeting WHO standards',
      'Increased treatment capacity by 60%',
      'Reduced water supply interruptions',
      'Enhanced system reliability and maintenance efficiency'
    ],
    client: 'Ghana Water Company Limited',
    budget: 'GHS 18.5M',
    duration: '12 months',
    images: 3
  },
  {
    id: 4,
    title: 'School Supplies Framework',
    slug: 'school-supplies-framework',
    category: 'Procurement',
    location: 'Tema',
    icon: Package,
    year: 2023,
    status: 'In Progress',
    description: 'Multi-year procurement framework providing educational materials to schools across the region.',
    overview: 'A comprehensive procurement framework agreement to supply educational materials, furniture, and equipment to schools in the Tema region. This ongoing project ensures consistent access to quality educational resources for students and teachers.',
    challenges: [
      'Managing large-scale procurement across multiple schools',
      'Ensuring consistent quality and timely delivery',
      'Coordinating with various educational institutions',
      'Maintaining cost-effectiveness while ensuring quality'
    ],
    solutions: [
      'Established framework agreement with pre-approved suppliers',
      'Centralized procurement system for efficiency',
      'Regular quality audits and supplier performance monitoring',
      'Flexible delivery schedules to accommodate school calendars'
    ],
    results: [
      'Supplied materials to over 150 schools',
      'Reduced procurement costs by 25% through bulk purchasing',
      'Improved delivery times and reliability',
      'Enhanced educational resource availability'
    ],
    client: 'Ghana Education Service',
    budget: 'GHS 12.3M (annual)',
    duration: 'Ongoing (3-year framework)',
    images: 4
  },
  {
    id: 5,
    title: 'Bulk Haulage (Cement)',
    slug: 'bulk-haulage-cement',
    category: 'Transportation',
    location: 'Takoradi',
    icon: Truck,
    year: 2024,
    status: 'Completed',
    description: 'Efficient bulk transportation of cement from production facilities to distribution centers.',
    overview: 'A specialized bulk haulage operation transporting cement from production facilities in Takoradi to distribution centers across Ghana. The project required specialized equipment, careful logistics planning, and adherence to strict safety and quality standards.',
    challenges: [
      'Managing large-scale bulk transportation efficiently',
      'Ensuring product quality during transit',
      'Coordinating with production schedules and distribution centers',
      'Maintaining fleet reliability and safety standards'
    ],
    solutions: [
      'Deployed specialized bulk transport vehicles',
      'Implemented real-time tracking and logistics management',
      'Established strict quality control and handling procedures',
      'Maintained dedicated fleet with regular maintenance schedules'
    ],
    results: [
      'Transported over 50,000 tons of cement',
      'Achieved 98% on-time delivery rate',
      'Zero product quality issues during transit',
      'Reduced transportation costs by 15% through route optimization'
    ],
    client: 'Ghana Cement Company',
    budget: 'GHS 8.7M',
    duration: '8 months',
    images: 3
  },
  {
    id: 6,
    title: 'Last-Mile Distribution',
    slug: 'last-mile-distribution',
    category: 'Transportation',
    location: 'Tamale',
    icon: Truck,
    year: 2023,
    status: 'Completed',
    description: 'Efficient last-mile delivery network connecting distribution centers to retail outlets in Northern Ghana.',
    overview: 'Development of an efficient last-mile distribution network in Tamale and surrounding areas, connecting regional distribution centers with retail outlets and end customers. The project focused on improving delivery efficiency, reducing costs, and expanding market reach.',
    challenges: [
      'Navigating challenging terrain and road conditions',
      'Managing distribution to remote and rural areas',
      'Optimizing routes for cost and time efficiency',
      'Ensuring product integrity during last-mile delivery'
    ],
    solutions: [
      'Deployed mixed fleet suitable for various road conditions',
      'Implemented route optimization software',
      'Established local distribution hubs',
      'Trained local drivers and delivery personnel'
    ],
    results: [
      'Expanded delivery coverage to 200+ retail outlets',
      'Reduced average delivery time by 30%',
      'Improved customer satisfaction with reliable deliveries',
      'Created employment opportunities for local drivers'
    ],
    client: 'Regional Distribution Partners',
    budget: 'GHS 6.4M',
    duration: '10 months',
    images: 4
  },
  {
    id: 7,
    title: 'Agri Commodities Export',
    slug: 'agri-commodities-export',
    category: 'Import/Export',
    location: 'Ghana → ECOWAS',
    icon: Globe2,
    year: 2024,
    status: 'In Progress',
    description: 'Facilitating export of agricultural commodities to ECOWAS member countries with full trade compliance.',
    overview: 'A comprehensive export facilitation project for agricultural commodities from Ghana to ECOWAS member countries. The project involves handling all aspects of international trade including documentation, customs clearance, logistics, and compliance with regional trade agreements.',
    challenges: [
      'Navigating complex international trade regulations',
      'Ensuring compliance with ECOWAS trade protocols',
      'Managing documentation and customs procedures',
      'Coordinating logistics across multiple countries'
    ],
    solutions: [
      'Expert knowledge of regional trade agreements and regulations',
      'Streamlined documentation and customs clearance processes',
      'Established relationships with customs authorities',
      'Efficient logistics coordination and tracking systems'
    ],
    results: [
      'Facilitated export of 5,000+ tons of commodities',
      'Reduced customs clearance time by 40%',
      'Ensured 100% compliance with trade regulations',
      'Expanded market access for Ghanaian agricultural products'
    ],
    client: 'Ghana Export Promotion Authority',
    budget: 'GHS 9.2M',
    duration: 'Ongoing',
    images: 5
  },
  {
    id: 8,
    title: 'Machinery Import',
    slug: 'machinery-import',
    category: 'Import/Export',
    location: 'EU → Ghana',
    icon: Globe2,
    year: 2022,
    status: 'Completed',
    description: 'Complete import facilitation for industrial machinery from European Union to Ghana, including customs and logistics.',
    overview: 'A comprehensive import project facilitating the procurement and importation of industrial machinery from European Union countries to Ghana. The project involved supplier coordination, international logistics, customs clearance, and final delivery to the client\'s facility.',
    challenges: [
      'Complex international shipping and logistics',
      'Navigating EU and Ghana customs regulations',
      'Ensuring machinery meets Ghanaian standards',
      'Coordinating delivery and installation timelines'
    ],
    solutions: [
      'Expert handling of international shipping documentation',
      'Established relationships with customs authorities in both regions',
      'Comprehensive compliance verification and certification',
      'Coordinated logistics from port to final destination'
    ],
    results: [
      'Successfully imported 50+ pieces of industrial machinery',
      'Reduced import processing time by 35%',
      'Zero customs compliance issues',
      'Ensured timely delivery meeting production schedules'
    ],
    client: 'Ghana Industrial Corporation',
    budget: 'GHS 28.5M',
    duration: '14 months',
    images: 6
  },
];

export function getProjectById(id: number): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | 'All'): Project[] {
  if (category === 'All') return PROJECTS;
  return PROJECTS.filter(p => p.category === category);
}

// Helper to convert Project to serializable ProjectData
export function projectToData(project: Project): ProjectData {
  const { icon, ...data } = project;
  return data;
}

// Helper to get icon component by category (for client components)
export function getIconByCategory(category: ProjectCategory): LucideIcon {
  const iconMap: Record<ProjectCategory, LucideIcon> = {
    'Construction': Building2,
    'Procurement': Package,
    'Transportation': Truck,
    'Import/Export': Globe2,
  };
  return iconMap[category];
}
