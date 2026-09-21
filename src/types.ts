export interface MenuItem {
  id: string;
  name: string;
  category: 'sourdough' | 'viennoiserie' | 'patisserie' | 'savory';
  tagline: string;
  description: string;
  price: number;
  hydration: string;
  fermentHours: number;
  temperature: string;
  flavorNotes: string[];
  imageUrl: string;
  badge?: string;
  inStock: boolean;
}

export interface LabPillar {
  id: string;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface ReviewItem {
  id: string;
  criticName: string;
  publication: string;
  role: string;
  rating: number;
  quote: string;
  verdict: string;
  avatarUrl: string;
  awardBadge: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guests: number;
  experienceType: string;
  specialRequests: string;
}
