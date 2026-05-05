import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review how AI METRIX LLC collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
