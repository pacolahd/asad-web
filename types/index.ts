export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  fullName: string;
  description: string;
  shortDescription?: string;
  slogan: string;
  founded: number;
  location: {
    neighborhood: string;
    city: string;
    country: string;
  };
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  since?: number;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href: string;
  image?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  date?: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Stat {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface MemorialMember {
  id: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  image?: string;
  tribute?: string;
}

export interface MembershipCondition {
  title: string;
  description: string;
}

export interface Document {
  title: string;
  description?: string;
  href: string;
  type: 'pdf' | 'doc' | 'other';
}
