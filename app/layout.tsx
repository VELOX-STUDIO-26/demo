import type { Metadata } from "next";
import "./globals.css";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aimetrix.com";
const siteUrl = rawSiteUrl.replace(/\/$/, "");
const defaultTitle = "AI METRIX LLC - AI-Powered Digital Marketing";
const defaultDescription =
  "AI METRIX LLC helps small businesses and growth-focused organizations build stronger brands, increase visibility, and achieve measurable results through AI-powered digital marketing and consulting.";
const ogImage = "/logo.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | AI METRIX LLC",
  },
  description: defaultDescription,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "AI marketing",
    "digital marketing agency",
    "SEO",
    "social media marketing",
    "brand strategy",
    "paid advertising",
    "AI consulting",
  ],
  authors: [{ name: "AI METRIX LLC", url: siteUrl }],
  creator: "AI METRIX LLC",
  publisher: "AI METRIX LLC",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "AI METRIX LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: ogImage, alt: "AI METRIX LLC logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AI METRIX LLC",
      url: siteUrl,
      logo: `${siteUrl}${ogImage}`,
      description: defaultDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AI METRIX LLC",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
      description: defaultDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GitHub Pages SPA redirect script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(l) {
                if (l.search[1] === '/') {
                  var decoded = l.search.slice(1).split('&').map(function(s) {
                    return s.replace(/~and~/g, '&')
                  }).join('?');
                  window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + decoded + l.hash
                  );
                }
              }(window.location))
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
