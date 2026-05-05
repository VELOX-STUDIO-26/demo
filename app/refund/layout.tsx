import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Understand AI METRIX LLC refund terms for strategy sessions, retainers, and project deposits.",
  alternates: {
    canonical: "/refund/",
  },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
