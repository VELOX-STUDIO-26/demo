"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/97 backdrop-blur-xl shadow-lg"
            : "bg-primary"
        }`}
        style={scrolled ? { backgroundColor: "rgba(11,31,58,0.97)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo.jpg"
                alt="AI METRIX LLC"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-medium text-[15px] transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/pay/"
                className="font-body font-medium text-[15px] text-white hover:text-accent transition-colors"
              >
                Pay Online
              </Link>
              <Link href="/contact/" className="btn-primary text-sm px-6 py-3">
                Book Consultation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-primary flex flex-col items-center justify-center transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-heading font-semibold text-2xl text-white py-3 px-8 transition-colors ${
                isActive(link.href) ? "text-accent" : "hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 w-[80%] max-w-xs">
          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="btn-primary w-full text-center"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[998] bg-primary border-t border-white/10 p-3 flex gap-3 md:hidden">
        <a
          href="tel:+1234567890"
          className="btn-secondary-dark flex-1 text-sm py-3"
        >
          <Phone size={16} className="mr-2" />
          Call Us
        </a>
        <Link
          href="/contact/"
          className="btn-primary flex-1 text-sm py-3"
        >
          Book Consultation
        </Link>
      </div>
    </>
  );
}
