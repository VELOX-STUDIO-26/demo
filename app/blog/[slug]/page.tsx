import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { CheckCircle, ChevronRight } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getClient } from "@/lib/sanity.client";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  relatedPostsQuery,
} from "@/lib/sanity.queries";
import { urlForImage } from "@/lib/sanity.image";
import { formatDate } from "@/lib/formatDate";
import type { BlogPost, BlogPostSummary } from "@/lib/sanity.types";
import ShareButton from "@/components/ShareButton";

type PageProps = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const client = getClient(false);
    console.log("Client config:", {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
    });

    const slugs = await client.fetch<{ slug: string }[]>(
      blogPostSlugsQuery
    );

    console.log("Fetched slugs count:", slugs.length);
    console.log("Fetched slugs:", JSON.stringify(slugs, null, 2));

    return slugs.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Failed to fetch slugs:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // For static export, draft mode is always disabled
  let isEnabled = false;
  try {
    const draft = draftMode();
    isEnabled = draft.isEnabled;
  } catch {
    // draftMode not available in static export
  }

  const post = await getClient(isEnabled).fetch<BlogPost>(
    blogPostBySlugQuery,
    { slug: params.slug }
  );

  if (!post) {
    return {
      title: "Blog",
      description: "Insights, strategies, and AI marketing intelligence from AI METRIX LLC.",
      alternates: {
        canonical: "/blog/",
      },
    };
  }

  const publishedIso = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : undefined;
  const heroImageUrl = urlForImage(post.heroImage)
    ?.width(1600)
    .height(900)
    .fit("crop")
    .url();
  const authorName = post.author?.name ?? "AI METRIX LLC";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: heroImageUrl ? [{ url: heroImageUrl }] : [],
      type: "article",
      url: `/blog/${post.slug}/`,
      publishedTime: publishedIso,
      authors: [authorName],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: heroImageUrl ? [heroImageUrl] : [],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading font-semibold text-2xl md:text-[30px] text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading font-semibold text-xl md:text-[26px] text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading font-semibold text-lg text-primary">
        {children}
      </h4>
    ),
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href as string | undefined;
      const isExternal = href ? href.startsWith("http") : false;
      return (
        <a
          href={href}
          className="text-accent underline underline-offset-4"
          rel={isExternal ? "noreferrer noopener" : undefined}
          target={isExternal ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)
        ?.width(1200)
        .height(800)
        .fit("crop")
        .url();

      if (!imageUrl) {
        return null;
      }

      return (
        <div className="space-y-3">
          <img src={imageUrl} alt={value?.alt || ""} className="w-full rounded-lg" />
          {value?.caption ? (
            <p className="text-sm text-center text-caption">{value.caption}</p>
          ) : null}
        </div>
      );
    },
    featureList: ({ value }) => {
      if (!value?.items?.length) {
        return null;
      }

      return (
        <ul className="space-y-4">
          {value.items.map((item: { title: string; text: string }, index: number) => (
            <li key={`${item.title}-${index}`} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-accent mt-1" />
              <span>
                <strong className="text-primary">{item.title}:</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
    },
    pullQuote: ({ value }) => (
      <blockquote className="bg-ice p-8 rounded-xl border border-accent/10">
        <p className="text-xl font-heading text-primary leading-snug">
          "{value?.text}"
        </p>
        {value?.cite ? (
          <cite className="text-accent text-[12px] uppercase tracking-[0.18em] block mt-4">
            - {value.cite}
          </cite>
        ) : null}
      </blockquote>
    ),
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  // For static export, draft mode is always disabled
  let isEnabled = false;
  try {
    const draft = draftMode();
    isEnabled = draft.isEnabled;
  } catch {
    // draftMode not available in static export
  }

  // Return 404 for old sample post
  if (params.slug === "sample-short-blog-post") {
    notFound();
  }

  const post = await getClient(isEnabled).fetch<BlogPost>(
    blogPostBySlugQuery,
    { slug: params.slug }
  );

  if (!post) {
    notFound();
  }

  const relatedPosts = await getClient(isEnabled).fetch<BlogPostSummary[]>(
    relatedPostsQuery,
    { slug: params.slug }
  );

  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aimetrix.com";
  const siteUrl = rawSiteUrl.replace(/\/$/, "");
  const articleUrl = `${siteUrl}/blog/${post.slug}/`;
  const publishedIso = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : undefined;
  const heroImageUrl = urlForImage(post.heroImage)
    ?.width(1600)
    ?.height(900)
    ?.fit("crop")
    ?.url();
  const authorName = post.author?.name ?? "AI METRIX LLC";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: heroImageUrl ? [heroImageUrl] : [],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "AI METRIX LLC",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const authorImageUrl = urlForImage(post.author?.image)
    ?.width(96)
    .height(96)
    .fit("crop")
    .url();

  return (
    <>
      <Header />
      <main id="main" className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
        <header className="pt-[120px] pb-12 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] text-caption mb-8">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-caption" />
              <Link href="/blog/" className="hover:text-accent transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} className="text-caption" />
              <span className="text-primary font-semibold">
                {post.category?.title ?? "Category"}
              </span>
            </nav>

            <div className="mb-6">
              <span className="inline-block bg-ice text-accent border border-accent/20 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em]">
                {post.category?.title ?? "General"}
              </span>
            </div>

            <h1 className="font-heading font-bold text-primary text-3xl md:text-[52px] leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 border-b border-border/50 pb-8">
              {authorImageUrl ? (
                <img
                  src={authorImageUrl}
                  alt={authorName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : null}
              <div className="flex flex-col">
                <span className="font-semibold text-primary">
                  {authorName}
                </span>
                <div className="flex items-center gap-3 text-muted text-sm">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <ShareButton title={post.title} url={`/blog/${post.slug}/`} />
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover rounded-xl shadow-lg shadow-primary/10"
            />
          ) : null}
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <article className="lg:col-span-8 max-w-3xl mx-auto lg:mx-0">
            <div className="text-body text-[17px] leading-relaxed space-y-8">
              {post.lead ? (
                <p className="text-lg text-caption italic border-l-4 border-accent pl-6">
                  {post.lead}
                </p>
              ) : null}
              {post.body?.length ? (
                <PortableText value={post.body as any} components={portableTextComponents} />
              ) : null}
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-white border border-border/70 rounded-xl p-8">
              <h3 className="font-heading font-semibold text-xl text-primary mb-6">
                Related Insights
              </h3>
              <div className="space-y-8">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.18em] mb-2 block">
                      {item.category?.title ?? "General"}
                    </span>
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <div className="flex items-center mt-3 text-xs text-caption">
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(item.publishedAt)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-black rounded-[2rem] p-12 md:p-20 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-[32px] md:text-[40px] text-white mb-6">
                Ready to Grow?
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Stop guessing. Start engineering your success with the most advanced AI marketing partner in the industry.
              </p>
              <Link
                href="/contact/"
                className="bg-accent text-white px-10 py-4 font-heading font-bold uppercase tracking-[0.2em] rounded-lg hover:shadow-xl hover:shadow-accent/20 transition-all inline-flex items-center justify-center"
              >
                Book a Strategy Consultation
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
