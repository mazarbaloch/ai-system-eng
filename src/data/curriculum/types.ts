export type CourseIconName =
  | 'foundations'
  | 'prompting'
  | 'structured'
  | 'retrieval'
  | 'rag'
  | 'memory'
  | 'agents'
  | 'protocols'
  | 'patterns'
  | 'evaluation'
  | 'safety'
  | 'optimization'
  | 'orchestration'
  | 'production'
  | 'capstone';

export type SurfaceTone = 'brand' | 'rose' | 'green' | 'violet' | 'amber' | 'cyan';

export interface CourseLink {
  label: string;
  href: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface CourseFeature {
  title: string;
  description: string;
  icon: CourseIconName;
  tone: SurfaceTone;
}

export interface CourseModule {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  topics: string[];
  tags: string[];
  icon: CourseIconName;
  tone: SurfaceTone;
  docPath: string;
}

export interface CourseSite {
  brand: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  heroActions: CourseLink[];
  learningOutcomes: string[];
  features: CourseFeature[];
  featuredModuleSlugs: string[];
  footerGroups: FooterLinkGroup[];
  footerMetaLinks: FooterLink[];
  newsletter: {
    title: string;
    description: string;
    email: string;
  };
}
