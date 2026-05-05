"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Eye,
  FileEdit,
  Lock,
  Server,
  ShieldCheck,
  Trash2,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information", label: "2. Information We Collect" },
  { id: "usage", label: "3. How We Use Information" },
  { id: "ai-processing", label: "4. AI & Data Processing" },
  { id: "security", label: "5. Data Security" },
  { id: "rights", label: "6. Your Rights" },
  { id: "contact", label: "7. Contact Us" },
];

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const elements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="main" className="pt-[72px] bg-white">
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
                Legal Documentation
              </span>
              <h1 className="font-heading font-bold text-white text-4xl md:text-[56px] leading-[1.1] mb-6">
                Privacy Policy
              </h1>
              <p className="text-white/70 text-lg">Last updated: October 2024</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-1/4">
              <div className="sticky top-[120px] space-y-6 border-l border-border">
                <nav className="flex flex-col">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`pl-6 py-2 border-l-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                        activeId === item.id
                          ? "border-accent text-primary font-semibold"
                          : "border-transparent text-caption hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-10 p-6 bg-ice rounded-xl border border-border">
                  <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                    Need Help?
                  </h4>
                  <p className="text-caption text-sm mb-4">
                    Our legal team is available for any specific clarifications.
                  </p>
                  <a
                    href="mailto:legal@aimetrix.com"
                    className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-2"
                  >
                    legal@aimetrix.com
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:w-3/4 max-w-3xl space-y-16">
              <article className="scroll-mt-32" id="introduction">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  1. Introduction
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    At AI METRIX LLC, we recognize that data is the fuel for modern enterprise, but trust is
                    the engine. Our commitment to data protection is central to our engineering-first approach.
                    We design our services with privacy by default, ensuring that every strategic AI
                    implementation respects individual rights and corporate confidentiality.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, and protect your information when you
                    interact with our website, services, and consulting platforms.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="information">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  2. Information We Collect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-8 bg-ice rounded-xl border border-border">
                    <User className="text-accent mb-4" size={32} />
                    <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                      Personal Identifiers
                    </h3>
                    <p className="text-caption">
                      Name, professional email, company affiliation, and job title provided during
                      consultation requests or resource downloads.
                    </p>
                  </div>
                  <div className="p-8 bg-ice rounded-xl border border-border">
                    <ShieldCheck className="text-accent mb-4" size={32} />
                    <h3 className="font-heading font-semibold text-xl text-primary mb-3">
                      Business Data
                    </h3>
                    <p className="text-caption">
                      Operational metrics, market goals, and strategic challenges shared during the scope of
                      engagement.
                    </p>
                  </div>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  We also collect technical data through cookies and telemetry, including IP addresses,
                  browser types, and usage patterns on our website to optimize our digital presence and
                  marketing efficiency.
                </p>
              </article>

              <article className="scroll-mt-32" id="usage">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  3. How We Use Your Information
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-accent mt-1" size={20} />
                    <div className="text-body text-[17px] leading-relaxed">
                      <strong className="text-primary">Service Delivery:</strong> To provide tailored AI
                      strategy and implementation services specific to your business needs.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-accent mt-1" size={20} />
                    <div className="text-body text-[17px] leading-relaxed">
                      <strong className="text-primary">Personalization:</strong> To customize your
                      experience and provide insights relevant to your specific industry.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-accent mt-1" size={20} />
                    <div className="text-body text-[17px] leading-relaxed">
                      <strong className="text-primary">Marketing:</strong> To share updates on AI trends
                      and new service offerings. Users may opt out of marketing communications at any time.
                    </div>
                  </li>
                </ul>
              </article>

              <article className="scroll-mt-32" id="ai-processing">
                <div className="bg-primary text-white p-10 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="font-heading font-semibold text-2xl md:text-[32px] mb-6">
                      4. AI & Data Processing
                    </h2>
                    <p className="text-white/80 text-[17px] leading-relaxed mb-6">
                      As a specialist AI consultancy, we handle data with specialized care. We do not use
                      client-specific proprietary data to train generalized public models. All data processed
                      through our custom AI solutions is kept within secure, isolated environments tailored for
                      each client.
                    </p>
                    <p className="text-white/80 text-[17px] leading-relaxed">
                      We utilize anonymization and synthetic data generation where possible to minimize the
                      exposure of sensitive personal information during model testing and validation phases.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl" />
                </div>
              </article>

              <article className="scroll-mt-32" id="security">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  5. Data Security
                </h2>
                <p className="text-body text-[17px] leading-relaxed mb-8">
                  AI METRIX LLC employs enterprise-grade security protocols. Our engineered success approach
                  extends to our infrastructure, where we use advanced encryption standards (AES-256) for data
                  at rest and TLS for data in transit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-border p-6 rounded-lg text-center">
                    <Lock className="text-primary mx-auto mb-2" size={28} />
                    <h4 className="text-xs uppercase tracking-[0.2em] text-caption font-semibold">
                      Encryption
                    </h4>
                  </div>
                  <div className="border border-border p-6 rounded-lg text-center">
                    <Server className="text-primary mx-auto mb-2" size={28} />
                    <h4 className="text-xs uppercase tracking-[0.2em] text-caption font-semibold">
                      Secure Servers
                    </h4>
                  </div>
                  <div className="border border-border p-6 rounded-lg text-center">
                    <ShieldCheck className="text-primary mx-auto mb-2" size={28} />
                    <h4 className="text-xs uppercase tracking-[0.2em] text-caption font-semibold">
                      Access Audit
                    </h4>
                  </div>
                </div>
              </article>

              <article className="scroll-mt-32" id="rights">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  6. Your Rights
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-6">
                  <p>You have the fundamental right to control your personal information. This includes:</p>
                  <div className="space-y-4 pt-2">
                    <div className="flex gap-4 items-center p-4 hover:bg-ice transition-colors rounded-lg">
                      <div className="w-10 h-10 bg-accent/15 flex items-center justify-center rounded-full">
                        <Eye className="text-accent" size={18} />
                      </div>
                      <span className="font-medium text-primary">
                        Right to access your stored data
                      </span>
                    </div>
                    <div className="flex gap-4 items-center p-4 hover:bg-ice transition-colors rounded-lg">
                      <div className="w-10 h-10 bg-accent/15 flex items-center justify-center rounded-full">
                        <FileEdit className="text-accent" size={18} />
                      </div>
                      <span className="font-medium text-primary">
                        Right to rectify inaccurate information
                      </span>
                    </div>
                    <div className="flex gap-4 items-center p-4 hover:bg-ice transition-colors rounded-lg">
                      <div className="w-10 h-10 bg-accent/15 flex items-center justify-center rounded-full">
                        <Trash2 className="text-accent" size={18} />
                      </div>
                      <span className="font-medium text-primary">
                        Right to erasure ("right to be forgotten")
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="scroll-mt-32" id="contact">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  7. Contact Us
                </h2>
                <p className="text-body text-[17px] leading-relaxed mb-8">
                  If you have questions about this Privacy Policy or how we handle your data, please reach
                  out to our privacy officer.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-4 font-heading font-semibold hover:brightness-110 transition-all rounded-lg"
                >
                  Go to Contact Page
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
