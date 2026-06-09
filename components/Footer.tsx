import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const logoSrc = "/logo.png";

const services = [
  "Brand Strategy",
  "SEO",
  "Social Media",
  "Content",
  "Paid Ads",
  "Website Strategy",
  "AI Consulting",
  "Analytics",
];

const company = [
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/aimetrixllc",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/aimetrixllc/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/aimetrixllc/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.youtube.com/@AIMETRIXLLC",
    label: "YouTube",
    Icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a4.5 4.5 0 0 1-1.5-4A4.5 4.5 0 0 1 2.5 9a45 45 0 0 1 19 0 4.5 4.5 0 0 1 1.5 4 4.5 4.5 0 0 1-1.5 4 45 45 0 0 1-19 0Z" />
        <polygon points="9 15 15 12 9 9 9 15" />
      </svg>
    ),
  },
  {
    href: "https://x.com/aimetrixllc",
    label: "X",
    Icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src={logoSrc}
                alt="AI METRIX LLC"
                className="h-10 w-auto object-contain rounded"
              />
            </Link>
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              We don&apos;t just market — we engineer sustainable growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services/"
                    className="text-muted text-[15px] hover:text-accent transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-muted text-[15px] hover:text-accent transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">
              Contact
            </h4>
            <p className="text-muted text-[15px] mb-4">
              <a
                href="mailto:info@aimetrixllc.com"
                className="hover:text-accent transition-colors"
              >
                info@aimetrixllc.com
              </a>
            </p>
            <Link href="/contact/" className="btn-primary w-full text-center text-sm mb-4">
              Book Consultation
            </Link>
            <p className="text-muted text-[13px]">
              Typically responds within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-[13px]">
            &copy; 2026 AI METRIX LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy/"
              className="text-muted text-[13px] hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms/"
              className="text-muted text-[13px] hover:text-accent transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/refund/"
              className="text-muted text-[13px] hover:text-accent transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
