// Define SanityImageSource locally since it's not exported from @sanity/image-url
interface SanityImageSource {
  asset?: {
    _ref?: string;
    _type?: string;
  };
  _type?: string;
}

export type Category = {
  title: string;
  slug: string;
};

export type Tag = {
  title: string;
  slug: string;
};

export type Author = {
  name: string;
  image?: SanityImageSource;
  title?: string;
};

export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured?: boolean;
  publishedAt?: string;
  readTime?: string;
  category?: Category | null;
  author?: Author | null;
  image?: SanityImageSource;
  heroImage?: SanityImageSource;
};

export type BlogPost = BlogPostSummary & {
  lead?: string;
  body?: unknown[];
  tags?: Tag[];
};
