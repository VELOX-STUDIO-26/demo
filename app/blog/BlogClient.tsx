"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { urlForImage } from "@/lib/sanity.image";
import { formatDate } from "@/lib/formatDate";
import type { BlogPostSummary } from "@/lib/sanity.types";

const getImageUrl = (
  source: BlogPostSummary["image"] | undefined,
  width: number,
  height: number
) => {
  const builder = urlForImage(source);
  return builder ? builder.width(width).height(height).fit("crop").url() : "";
};

const getAuthorImageUrl = (
  source: BlogPostSummary["author"] | undefined,
  size: number
) => {
  const builder = urlForImage(source?.image);
  return builder ? builder.width(size).height(size).fit("crop").url() : "";
};

export default function BlogClient({
  posts,
  categories,
}: {
  posts: BlogPostSummary[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const categoryLabel = post.category?.title ?? "";
      const categoryMatch =
        activeCategory === "All" ||
        categoryLabel.toLowerCase() === activeCategory.toLowerCase();

      const searchMatch =
        !normalizedSearch ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.excerpt.toLowerCase().includes(normalizedSearch) ||
        categoryLabel.toLowerCase().includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm, posts]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / postsPerPage)
  );
  const startIndex = (currentPage - 1) * postsPerPage;
  const pagePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const featuredArticle =
    pagePosts.find((post) => post.featured) ?? pagePosts[0];
  const articles = featuredArticle
    ? pagePosts.filter((post) => post._id !== featuredArticle._id)
    : [];
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages]
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setCurrentPage(1);
                }}
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
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`pill ${cat === activeCategory ? "is-active" : ""}`}
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
              {featuredArticle ? (
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm border border-border"
                >
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-ice">
                    {featuredArticle.image ? (
                      <img
                        src={getImageUrl(featuredArticle.image, 1200, 800)}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : null}
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4 w-fit">
                      {featuredArticle.category?.title ?? "General"}
                    </span>
                    <h2 className="font-heading font-semibold text-2xl md:text-[28px] text-primary leading-tight mb-4 group-hover:text-accent transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-caption text-base leading-relaxed mb-8 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center mb-8">
                      {featuredArticle.author?.image ? (
                        <img
                          src={getAuthorImageUrl(featuredArticle.author, 64)}
                          alt={featuredArticle.author?.name ?? "Author"}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                      ) : null}
                      <div className="text-sm">
                        <p className="font-bold text-primary">
                          {featuredArticle.author?.name ?? "AI METRIX LLC"}
                        </p>
                        <p className="text-muted">
                          {formatDate(featuredArticle.publishedAt)}
                          {featuredArticle.readTime
                            ? ` · ${featuredArticle.readTime}`
                            : ""}
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
              ) : (
                <div className="bg-white rounded-xl border border-border p-10 text-center text-caption">
                  No articles match your filters.
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                  <ScrollReveal key={article._id} delay={i * 100}>
                    <Link href={`/blog/${article.slug}`} className="group block">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-ice">
                        {article.image ? (
                          <img
                            src={getImageUrl(article.image, 800, 450)}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <span className="inline-block px-2 py-1 rounded bg-accent text-white text-[11px] font-medium mb-3">
                        {article.category?.title ?? "General"}
                      </span>
                      <h3 className="font-heading font-semibold text-lg text-primary leading-tight mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-caption text-[15px] line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div className="flex items-center">
                          {article.author?.image ? (
                            <img
                              src={getAuthorImageUrl(article.author, 48)}
                              alt={article.author?.name ?? "Author"}
                              className="w-8 h-8 rounded-full object-cover mr-2"
                            />
                          ) : null}
                          <span className="text-xs font-semibold text-primary">
                            {article.author?.name ?? "AI METRIX LLC"}
                          </span>
                        </div>
                        <span className="text-[11px] text-muted">
                          {article.readTime ?? ""}
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : null}

            {totalPages > 1 ? (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded border border-border text-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent hover:text-accent"
                >
                  <ChevronLeft size={18} />
                </button>
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded border transition-colors ${
                      page === currentPage
                        ? "bg-accent border-accent text-white font-bold"
                        : "border-border text-body hover:border-accent hover:text-accent"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(totalPages, prev + 1)
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded border border-border text-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:border-accent hover:text-accent"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : null}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
