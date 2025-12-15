// Типы для данных

export interface Specialist {
  id: string;
  name: string;
  position: string;
  roles?: string[];
  education?: string[];
  featured?: boolean;
  image?: string;
}

export interface Service {
  id: string;
  name: string;
  subtitle?: string;
  fullName?: string;
  description: string;
  detailedDescription?: string;
  fullDescription?: string[];
  includes?: string[];
  services?: string[];
  duration?: string;
  price?: number;
  priceNote?: string;
  expertPrice?: number;
  expertNote?: string;
  note?: string;
  image?: string;
}

export interface PriceItem {
  code?: string;
  name: string;
  description?: string;
  price: number;
  note?: string;
  futurePrice?: Array<{ date: string; price: number }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Contact {
  type: string;
  name?: string;
  address?: string;
  region?: string;
  number?: string;
  formatted?: string;
  email?: string;
  url?: string;
  note?: string;
  platform?: string;
}

export interface Company {
  name: string;
  shortName: string;
  fullLegalName: string;
  foundedYear: number;
  description: string;
  about: string[];
  legalInfo: {
    OGRN: string;
    INN: string;
    KPP: string;
    bankAccount: string;
    BIK: string;
    bank: string;
    corrAccount: string;
  };
  licenses: {
    medical: {
      number: string;
      date: string;
      issuer: string;
      activities: string[];
    };
    educational: {
      number: string;
      date: string;
      issuer: string;
    };
  };
  director: string;
  chiefDoctor: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'service' | 'program';
}

export interface BookingFormData {
  childName: string;
  childBirthDate: string;
  parentName: string;
  phone: string;
  email: string;
  city: string;
  preferredDates: string;
  needsHousing: boolean;
  message?: string;
  agreedToTerms: boolean;
}
