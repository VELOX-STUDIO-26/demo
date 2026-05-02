import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpg"
                alt="AI METRIX LLC"
                width={175}
                height={56}
                className="h-14 w-auto object-contain rounded"
              />
            </Link>
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              We don&apos;t just market — we engineer sustainable growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="X (Twitter)"
              >
                <Twitter size={18} />
              </a>
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
                href="mailto:hello@aimetrix.com"
                className="hover:text-accent transition-colors"
              >
                hello@aimetrix.com
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
            &copy; 2025 AI METRIX LLC. All rights reserved.
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
