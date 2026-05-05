"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "acceptance", label: "1. Acceptance" },
  { id: "services", label: "2. Services" },
  { id: "payments", label: "3. Payments" },
  { id: "intellectual-property", label: "4. Intellectual Property" },
  { id: "limitation-liability", label: "5. Limitation of Liability" },
  { id: "termination", label: "6. Termination" },
  { id: "governing-law", label: "7. Governing Law" },
];

export default function TermsPage() {
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
        <header className="bg-primary pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-white text-4xl md:text-[56px] leading-[1.1] mb-6">
                Terms &amp; Conditions
              </h1>
              <p className="text-white/70 text-lg">
                Last updated: October 2024. Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
            <aside className="lg:w-1/4">
              <nav className="sticky top-[120px] space-y-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-caption mb-4 px-4">
                  Navigation
                </p>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block px-4 py-2 border-l-2 transition-colors ${
                      activeId === item.id
                        ? "text-accent border-accent font-semibold"
                        : "text-caption border-transparent hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="lg:w-3/4 space-y-16">
              <section className="scroll-mt-32" id="acceptance">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    01.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    By accessing or using the services provided by AI METRIX LLC ("the Company"), you agree
                    to be bound by these Terms &amp; Conditions. These terms constitute a legally binding
                    agreement between you and AI METRIX LLC.
                  </p>
                  <p>
                    If you do not agree to these terms, you must immediately cease all use of our services,
                    including our consulting, implementation, and software solutions.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="services">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    02.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    AI Services &amp; Consulting
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-6">
                  <div className="p-6 bg-ice rounded-xl border-l-4 border-accent">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Accuracy of AI Models
                    </h3>
                    <p>
                      AI METRIX LLC utilizes advanced machine learning and artificial intelligence algorithms.
                      However, we do not guarantee 100% accuracy, reliability, or completeness of AI-generated
                      outputs. These models are probabilistic by nature and should be used as decision-support
                      tools, not as sole sources of truth.
                    </p>
                  </div>
                  <div className="p-6 bg-ice rounded-xl border-l-4 border-accent">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Client Data Responsibility
                    </h3>
                    <p>
                      Clients are solely responsible for the quality, legality, and accuracy of the data
                      provided for model training or processing. AI METRIX LLC is not liable for outcomes
                      resulting from biased, incomplete, or corrupted data sets provided by the client.
                    </p>
                  </div>
                  <div className="p-6 bg-ice rounded-xl border-l-4 border-accent">
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Third-Party AI Tools
                    </h3>
                    <p>
                      Our services may integrate third-party AI frameworks (e.g., OpenAI, Anthropic, Google
                      Cloud AI). Use of these services is subject to their respective terms. We maintain no
                      control over the uptime or policy changes of these third-party providers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-32" id="payments">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    03.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Payment Terms
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed">
                  <p>
                    Fees for services are outlined in the specific Service Agreement or Statement of Work
                    (SOW). Payments are due within 30 days of invoice date unless otherwise specified. Late
                    payments may be subject to interest charges of 1.5% per month or the maximum rate permitted
                    by law.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="intellectual-property">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    04.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Intellectual Property
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    All proprietary algorithms, software, and methodologies developed by AI METRIX LLC prior to
                    or during the engagement remain the exclusive property of AI METRIX LLC. Clients are granted
                    a limited, non-transferable license to use the final deliverables for their intended
                    business purpose.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent mt-1" size={18} />
                      <span>
                        Client retains ownership of original data sets and pre-existing business assets.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent mt-1" size={18} />
                      <span>
                        Company retains ownership of core AI architectures and diagnostic tools.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-32" id="limitation-liability">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    05.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed">
                  <p>
                    In no event shall AI METRIX LLC be liable for any indirect, incidental, special, or
                    consequential damages, including loss of profits, data, or business opportunities, arising
                    out of the use or inability to use our AI services. Our total liability for any claim shall
                    not exceed the amount paid for the specific services in the 12 months preceding the claim.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="termination">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    06.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Termination
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed">
                  <p>
                    Either party may terminate the service agreement upon 30 days written notice. Upon
                    termination, all outstanding fees for work performed up to the termination date become
                    immediately due and payable.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="governing-law">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">
                    07.
                  </span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Governing Law
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the State of
                    Delaware, without regard to its conflict of law principles. Any legal action shall be
                    brought exclusively in the courts located in Delaware.
                  </p>
                </div>
              </section>

              <section className="mt-16 p-10 bg-primary rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-2">
                    Have questions?
                  </h3>
                  <p className="text-white/70">
                    Contact our legal team for clarifications regarding these terms.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-heading font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  Contact Legal Support
                </Link>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
