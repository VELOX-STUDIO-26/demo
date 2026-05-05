import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ChevronRight, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/app/blog/data";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {
      title: "Blog",
      description: "Insights, strategies, and AI marketing intelligence from AI METRIX LLC.",
      alternates: {
        canonical: "/blog/",
      },
    };
  }

  const publishedIso = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
      type: "article",
      url: `/blog/${post.slug}/`,
      publishedTime: publishedIso,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aimetrix.com";
  const siteUrl = rawSiteUrl.replace(/\/$/, "");
  const articleUrl = `${siteUrl}/blog/${post.slug}/`;
  const publishedIso = new Date(post.date).toISOString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.heroImage],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      "@type": "Person",
      name: post.author,
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

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

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
                {post.categoryLabel}
              </span>
            </nav>

            <div className="mb-6">
              <span className="inline-block bg-ice text-accent border border-accent/20 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em]">
                {post.category}
              </span>
            </div>

            <h1 className="font-heading font-bold text-primary text-3xl md:text-[52px] leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 border-b border-border/50 pb-8">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-primary">
                  {post.author}
                </span>
                <div className="flex items-center gap-3 text-muted text-sm">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <button
                type="button"
                className="ml-auto w-10 h-10 flex items-center justify-center rounded-full border border-border/60 hover:bg-ice transition-colors"
                aria-label="Share article"
              >
                <Share2 size={18} className="text-caption" />
              </button>
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-xl shadow-lg shadow-primary/10"
          />
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <article className="lg:col-span-8 max-w-3xl mx-auto lg:mx-0">
            <div className="text-body text-[17px] leading-relaxed space-y-8">
              {post.content.map((block, index) => {
                if (block.type === "lead") {
                  return (
                    <p
                      key={`lead-${index}`}
                      className="text-lg text-caption italic border-l-4 border-accent pl-6"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={`heading-${index}`}
                      className="font-heading font-semibold text-2xl md:text-[30px] text-primary"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "paragraph") {
                  return <p key={`paragraph-${index}`}>{block.text}</p>;
                }

                if (block.type === "image") {
                  return (
                    <div key={`image-${index}`} className="space-y-3">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full rounded-lg"
                      />
                      {block.caption ? (
                        <p className="text-sm text-center text-caption">
                          {block.caption}
                        </p>
                      ) : null}
                    </div>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={`list-${index}`} className="space-y-4">
                      {block.items.map((item, itemIndex) => (
                        <li key={item.title + itemIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-accent mt-1" />
                          <span>
                            <strong className="text-primary">{item.title}:</strong> {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={`quote-${index}`}
                      className="bg-ice p-8 rounded-xl border border-accent/10"
                    >
                      <p className="text-xl font-heading text-primary leading-snug">
                        "{block.text}"
                      </p>
                      <cite className="text-accent text-[12px] uppercase tracking-[0.18em] block mt-4">
                        - {block.cite}
                      </cite>
                    </blockquote>
                  );
                }

                return null;
              })}
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
                      {item.category}
                    </span>
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <div className="flex items-center mt-3 text-xs text-caption">
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{item.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-ice rounded-xl p-8 border border-accent/10">
              <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                Engineered Success
              </h3>
              <p className="text-caption text-sm mb-6">
                Join 12,000+ marketing leaders receiving our bi-weekly intelligence briefings.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 focus:ring-accent focus:border-accent transition-all text-sm"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <button className="w-full bg-primary text-white font-heading font-semibold py-3 rounded-lg hover:brightness-110 transition-colors active:scale-95">
                  Subscribe Now
                </button>
              </form>
              <p className="text-[11px] text-caption mt-4 text-center">
                No spam. Only data. Unsubscribe anytime.
              </p>
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
