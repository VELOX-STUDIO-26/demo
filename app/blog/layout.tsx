import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and AI marketing intelligence to help businesses grow smarter and faster.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
