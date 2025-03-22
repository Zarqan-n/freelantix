export interface Service {
  id: string;
  title: string;
  category: string;
  colorClass: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  pricing?: string;
}

export interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogCategory {
  name: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: number;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  content: {
    heading?: string;
    paragraphs: string[];
    image?: {
      url: string;
      alt: string;
      caption?: string;
    };
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
