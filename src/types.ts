export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'fire-detection' | 'fire-suppression' | 'pumps' | 'lhd' | 'access-control' | 'pa-bms';
  iconName: string;
  brands: string[];
  certifications: string[];
  keyFeatures: string[];
  applications: string[];
  imageUrl: string;
  diagramUrl?: string;
  diagramTitle?: string;
  diagramExplanation?: string;
  schematicDetails?: { title: string; desc: string }[];
  installationUrl?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'Industrial' | 'Pharmaceutical' | 'Hospitality' | 'Commercial' | 'Data Centers';
  location: string;
  year: string;
  systemsInstalled: string[];
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  badge: string;
  stats?: { label: string; value: string };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  comment: string;
  rating: number;
  projectType: string;
  avatarUrl: string;
}

export interface ContactFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  facilityType: string;
  projectScope: string;
  urgency: 'standard' | 'urgent' | 'tender';
}

export interface PartnerBrand {
  name: string;
  role: string;
  specialty: string;
  origin: string;
  logoText: string;
  accentColor: string;
  logoUrl?: string;
}
