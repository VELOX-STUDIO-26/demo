import { draftMode } from "next/headers";
import BlogClient from "./BlogClient";
import { getClient } from "@/lib/sanity.client";
import { blogPostsQuery } from "@/lib/sanity.queries";
import type { BlogPostSummary } from "@/lib/sanity.types";

export const revalidate = 60;

export default async function BlogPage() {
  // For static export, draft mode is always disabled
  let isEnabled = false;
  try {
    const draft = draftMode();
    isEnabled = draft.isEnabled;
  } catch {
    // draftMode not available in static export
  }

  const posts = await getClient(isEnabled).fetch<BlogPostSummary[]>(
    blogPostsQuery
  );

  const categorySet = new Set<string>();
  posts.forEach((post) => {
    if (post.category?.title) {
      categorySet.add(post.category.title);
    }
  });

  const categories = ["All", ...Array.from(categorySet)];

  return <BlogClient posts={posts} categories={categories} />;
}
