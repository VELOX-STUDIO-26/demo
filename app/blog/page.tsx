import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Digital Marketing",
  "Branding",
  "SEO",
  "Social Media",
  "AI in Marketing",
  "Small Business",
  "Website Optimization",
  "Industry Advice",
];

const featuredArticle = {
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
  category: "AI IN MARKETING",
  title: "The 2024 Guide to Integrating Predictive AI into Your Content Strategy",
  excerpt:
    "Discover how the latest advancements in large language models and predictive analytics are reshaping the way high-growth agencies plan their quarterly editorial calendars for maximum ROI and organic engagement.",
  author: "Sarah Jenkins",
  authorImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
  date: "Oct 12, 2024",
  readTime: "8 min read",
};

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "SEO & LOCAL SEO",
    title: "5 Local SEO Tactics to Dominate Your Service Area in 2024",
    excerpt:
      "Learn how to optimize your Google Business Profile and local citations for improved visibility.",
    author: "Marcus Thorne",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    date: "Oct 8, 2024",
    readTime: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    category: "SOCIAL MEDIA",
    title: "Why Your Social Media Strategy Needs an AI Reset",
    excerpt:
      "Data-driven approaches to platform algorithms that prioritize engagement over simple reach.",
    author: "Elena Rossi",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    date: "Oct 5, 2024",
    readTime: "12 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
    category: "BRANDING",
    title: "Psychology of Color: Building Brand Trust with AI Tools",
    excerpt:
      "Using sentiment analysis to determine the perfect visual identity for your target audience.",
    author: "Sarah Jenkins",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "Sep 28, 2024",
    readTime: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "SMALL BUSINESS",
    title: "Growth Hacking on a Budget: AI Tools for Solo Founders",
    excerpt:
      "How to leverage automation to run a full-scale marketing department as a team of one.",
    author: "Marcus Thorne",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    date: "Sep 22, 2024",
    readTime: "10 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
    category: "WEBSITE OPTIMIZATION",
    title: "Core Web Vitals: The Invisible Drivers of Conversion",
    excerpt:
      "Moving beyond load speeds to understand how interactivity and stability impact your bottom line.",
    author: "Elena Rossi",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    date: "Sep 15, 2024",
    readTime: "9 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    category: "INDUSTRY ADVICE",
    title: "State of Marketing: B2B vs B2C AI Adoption Rates",
    excerpt:
      "A comprehensive study of over 500 US companies and their path to artificial intelligence maturity.",
    author: "Sarah Jenkins",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "Sep 10, 2024",
    readTime: "15 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-primary pt-[72px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
            <h1 className="font-heading font-bold text-white text-3xl md:text-5xl leading-tight mb-4 max-w-4xl mx-auto">
              Insights, Strategies & AI Marketing Intelligence
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
              Expert articles to help your business grow smarter and faster.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-6 py-4 bg-white rounded-lg border-none focus:ring-2 focus:ring-accent text-base shadow-lg"
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-accent"
              />
            </div>
          </div>
        </section>

        <nav className="sticky top-[72px] z-40 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`pill ${cat === "All" ? "is-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <section className="bg-ice py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <Link
                href="/blog/"
                className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm border border-border"
              >
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4 w-fit">
                    {featuredArticle.category}
                  </span>
                  <h2 className="font-heading font-semibold text-2xl md:text-[28px] text-primary leading-tight mb-4 group-hover:text-accent transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-caption text-base leading-relaxed mb-8 line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center mb-8">
                    <img
                      src={featuredArticle.authorImage}
                      alt={featuredArticle.author}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-primary">
                        {featuredArticle.author}
                      </p>
                      <p className="text-muted">
                        {featuredArticle.date} · {featuredArticle.readTime}
                      </p>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-accent flex items-center gap-1">
                    Read Article
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <ScrollReveal key={article.title} delay={i * 100}>
                  <Link href="/blog/" className="group block">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="inline-block px-2 py-1 rounded bg-accent text-white text-[11px] font-medium mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-primary leading-tight mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-caption text-[15px] line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <span className="text-xs font-semibold text-primary">
                          {article.author}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted">
                        {article.readTime}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded bg-accent text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-border text-body hover:border-accent hover:text-accent transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-border text-body hover:border-accent hover:text-accent transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h3 className="font-heading font-semibold text-2xl md:text-[32px] text-white mb-4">
                Get Marketing Insights in Your Inbox
              </h3>
              <p className="text-muted text-base max-w-2xl mx-auto mb-10">
                Practical strategies, AI tips, and growth ideas — delivered
                weekly. No spam.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-muted focus:ring-2 focus:ring-accent outline-none text-base"
                />
                <button
                  type="submit"
                  className="bg-accent text-white font-heading font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
