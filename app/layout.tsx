import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI METRIX LLC - AI-Powered Digital Marketing",
  description:
    "AI METRIX LLC helps small businesses and growth-focused organizations build stronger brands, increase visibility, and achieve measurable results through digital marketing and AI-powered consulting.",
  keywords: [
    "AI marketing",
    "digital marketing agency",
    "SEO",
    "social media marketing",
    "brand strategy",
    "paid advertising",
    "AI consulting",
  ],
  authors: [{ name: "AI METRIX LLC" }],
  openGraph: {
    title: "AI METRIX LLC - AI-Powered Digital Marketing",
    description:
      "We engineer sustainable growth through data-driven strategies and AI-powered marketing.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
