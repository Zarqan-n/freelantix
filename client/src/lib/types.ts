// Blog post types
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

// Service types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

// Feature types
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Newsletter Subscription
export interface NewsletterData {
  email: string;
}
