export type BlogContentBlock =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string; cite: string };

export type BlogPost = {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  heroImage: string;
  content: BlogContentBlock[];
};

const baseContent: BlogContentBlock[] = [
  {
    type: "lead",
    text:
      "In an era where data-driven decisions are no longer optional, predictive AI stands as the ultimate differentiator for modern marketing teams. This guide explores how to move beyond basic automation toward intelligent foresight.",
  },
  {
    type: "paragraph",
    text:
      "Content strategy has undergone a seismic shift. No longer is it enough to rely on historical performance or instinct. Today, leading marketing organizations leverage predictive models to anticipate audience needs before they arise. The integration of AI is not just about efficiency; it is about precision and alignment.",
  },
  {
    type: "heading",
    text: "The Architecture of Predictive Content",
  },
  {
    type: "paragraph",
    text:
      "To implement predictive AI successfully, you must first establish a robust data pipeline. This involves aggregating cross-channel signals from social sentiment to granular web analytics into a unified data layer. Once centralized, AI models can begin identifying non-linear patterns that human analysts might miss.",
  },
  {
    type: "image",
    src:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
    alt: "Analytics dashboard with charts and metrics",
    caption: "Figure 1.1: Visualizing data clusters in a predictive modeling environment.",
  },
  {
    type: "heading",
    text: "Key Implementation Pillars",
  },
  {
    type: "list",
    items: [
      {
        title: "Audience Segmentation 2.0",
        text: "Moving from demographics to behavioral intent modeling.",
      },
      {
        title: "Dynamic Content Assembly",
        text: "Real-time personalization of headlines and CTAs based on predicted user value.",
      },
      {
        title: "Churn Prediction",
        text: "Identifying at-risk segments before they disengage and triggering re-engagement content.",
      },
    ],
  },
  {
    type: "quote",
    text:
      "AI does not replace the storyteller; it provides the storyteller with a map of where the audience is heading.",
    cite: "AI METRIX Strategy Report",
  },
  {
    type: "paragraph",
    text:
      "As we look toward 2024, the gap between AI-enabled firms and legacy marketers will only widen. The cost of entry is no longer technical expertise, but the willingness to pivot your organizational culture toward data-driven experimentation.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "predictive-ai-content-strategy",
    category: "AI IN MARKETING",
    categoryLabel: "AI in Marketing",
    title: "The 2024 Guide to Integrating Predictive AI into Your Content Strategy",
    excerpt:
      "Discover how the latest advancements in large language models and predictive analytics are reshaping the way high-growth agencies plan their quarterly editorial calendars for maximum ROI and organic engagement.",
    author: "Sarah Jenkins",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "local-seo-tactics-service-area",
    category: "SEO & LOCAL SEO",
    categoryLabel: "SEO & Local SEO",
    title: "5 Local SEO Tactics to Dominate Your Service Area in 2024",
    excerpt:
      "Learn how to optimize your Google Business Profile and local citations for improved visibility.",
    author: "Marcus Thorne",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    date: "Oct 8, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "social-media-ai-reset",
    category: "SOCIAL MEDIA",
    categoryLabel: "Social Media",
    title: "Why Your Social Media Strategy Needs an AI Reset",
    excerpt:
      "Data-driven approaches to platform algorithms that prioritize engagement over simple reach.",
    author: "Elena Rossi",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    date: "Oct 5, 2024",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "psychology-of-color-brand-trust",
    category: "BRANDING",
    categoryLabel: "Branding",
    title: "Psychology of Color: Building Brand Trust with AI Tools",
    excerpt:
      "Using sentiment analysis to determine the perfect visual identity for your target audience.",
    author: "Sarah Jenkins",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "growth-hacking-ai-tools-solo-founders",
    category: "SMALL BUSINESS",
    categoryLabel: "Small Business",
    title: "Growth Hacking on a Budget: AI Tools for Solo Founders",
    excerpt:
      "How to leverage automation to run a full-scale marketing department as a team of one.",
    author: "Marcus Thorne",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    date: "Sep 22, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "core-web-vitals-conversion",
    category: "WEBSITE OPTIMIZATION",
    categoryLabel: "Website Optimization",
    title: "Core Web Vitals: The Invisible Drivers of Conversion",
    excerpt:
      "Moving beyond load speeds to understand how interactivity and stability impact your bottom line.",
    author: "Elena Rossi",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    date: "Sep 15, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
  {
    slug: "state-of-marketing-ai-adoption",
    category: "INDUSTRY ADVICE",
    categoryLabel: "Industry Advice",
    title: "State of Marketing: B2B vs B2C AI Adoption Rates",
    excerpt:
      "A comprehensive study of over 500 US companies and their path to artificial intelligence maturity.",
    author: "Sarah Jenkins",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "Sep 10, 2024",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop",
    content: baseContent,
  },
];
