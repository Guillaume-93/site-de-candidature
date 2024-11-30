import { UseFormRegister } from 'react-hook-form';

// Theme types
export type ThemeColor = {
  light: string;
  DEFAULT: string;
  dark: string;
};

export type Theme = {
  name: string;
  colors: {
    primary: ThemeColor;
    secondary: ThemeColor;
  };
};

export type ThemeVariant = 'default' | 'dark';

// User types
export type User = {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website?: string;
  avatar: string;
};

// Education types
export type Education = {
  degree: string;
  school: string;
  period: string;
  description: string;
};

// Language types
export type Language = {
  name: string;
  level: string;
};

// Experience types
export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

// Portfolio types
export type Portfolio = {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: readonly string[];
  achievements: readonly string[];
};

// Company types
export type Company = {
  id: string;
  name: string;
  description: string;
  values: string[];
  whyCompany: string[];
  contactEmail: string;
  theme: {
    primary: string;
    secondary: string;
  };
};

// Animation types
export type AnimationConfig = {
  initial: Record<string, any>;
  animate: Record<string, any>;
  transition: {
    duration: number;
    ease: number[] | string;
    [key: string]: any;
  };
};

export type SpringConfig = {
  type: "spring";
  damping: number;
  stiffness: number;
};

// Form types
export type FormData = {
  name: string;
  email: string;
  message: string;
  company?: string;
  contactEmail?: string;
};

// Site data types
export type SiteData = {
  theme: {
    current: ThemeVariant;
  };
  user: User;
  company: {
    name: string;
    values: string[];
  };
  about: {
    summary: string;
    skills: string[];
    education: Education[];
    languages: Language[];
  };
  experience: Experience[];
  portfolio: Portfolio[];
  motivation: {
    reasons: string[];
  };
  contact: {
    availability: string;
    documents: {
      cv: string;
    };
  };
};

// Component prop types
export type WithCompany = {
  company: Company;
};

export type WithChildren = {
  children: React.ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithIndex = {
  index: number;
};

export type WithFormRegister = {
  register: UseFormRegister<FormData>;
  errors: Record<string, any>;
};

export type WithIsSubmitting = {
  isSubmitting: boolean;
};

// Page props types
export type PageProps = {
  params: {
    company: string;
  };
};

// Theme context types
export type ThemeContextType = {
  currentTheme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
};