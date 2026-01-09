export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  logo: string; // URL to logo
  category: string; // Category ID
  rating: number; // 0-5
  affiliateLink: string;
  website: string;
  pros: string[];
  cons: string[];
  pricing: PricingPlan[];
  bestFor: string[]; // "Freelancers", "Agencies", etc.
  notFor: string[]; // "Enterprises", etc.
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or HTML
  date: string;
  author: string;
}

export interface Comparison {
  id: string;
  toolA: string; // Tool ID
  toolB: string; // Tool ID
  slug: string; // tool-a-vs-tool-b
  winnerId: string;
  conclusion: string;
  differences: {
    feature: string;
    toolAValue: string;
    toolBValue: string;
    winner?: 'A' | 'B' | 'Tie';
  }[];
}
