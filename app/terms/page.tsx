"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "agreement", label: "1. Agreement to These Terms" },
  { id: "business-info", label: "2. Business Information" },
  { id: "scope", label: "3. Scope of Services" },
  { id: "eligibility", label: "4. Eligibility and Acceptable Use" },
  { id: "quotes", label: "5. Quotes, Proposals, and Service Engagements" },
  { id: "fees", label: "6. Fees, Billing, and Payment" },
  { id: "client-responsibilities", label: "7. Client Responsibilities" },
  { id: "intellectual-property", label: "8. Intellectual Property" },
  { id: "marketing-results", label: "9. Marketing Results and No Guarantee" },
  { id: "third-party", label: "10. Third-Party Platforms and Tools" },
  { id: "disclaimer", label: "11. Website Content Disclaimer" },
  { id: "limitation", label: "12. Limitation of Liability" },
  { id: "indemnification", label: "13. Indemnification" },
  { id: "termination", label: "14. Suspension and Termination" },
  { id: "governing-law", label: "15. Governing Law and Dispute Resolution" },
  { id: "changes", label: "16. Changes to These Terms" },
  { id: "contact", label: "17. Contact Us" },
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
                Effective Date: June 1, 2026 | Last Updated: May 4, 2026
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
              <section className="scroll-mt-32" id="agreement">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">01.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Agreement to These Terms
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    These Terms and Conditions ("Terms") govern your access to and use of the website
                    operated by AI METRIX LLC ("AI METRIX," "we," "us," or "our"), as well as any digital
                    marketing, consulting, strategy, content, or related services we make available. By
                    accessing the website, submitting an inquiry, booking a consultation, purchasing
                    services, or otherwise engaging with us, you agree to be bound by these Terms.
                  </p>
                  <p>
                    If you do not agree to these Terms, do not use the website or services.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="business-info">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">02.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Business Information
                  </h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-body text-[17px] leading-relaxed">
                  <li>Business Name: AI METRIX LLC</li>
                  <li>Website: www.aimetrixllc.com</li>
                  <li>Email: info@aimetrixllc.com</li>
                  <li>Address: 5830 E 2ND ST, STE 7000 #31008 CASPER, WY 82609</li>
                </ul>
              </section>

              <section className="scroll-mt-32" id="scope">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">03.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Scope of Services
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    AI METRIX LLC provides digital marketing and consulting services, which may include
                    branding, content strategy, website strategy, search engine optimization, paid advertising
                    support, analytics, consulting, AI-assisted workflow advisory services, and related
                    offerings. Specific services, deliverables, timelines, fees, and responsibilities may also
                    be described in a separate proposal, statement of work, invoice, subscription plan,
                    service agreement, or other written arrangement.
                  </p>
                  <p>
                    If there is a conflict between these Terms and a separately signed written agreement with
                    you, the signed written agreement will control for the subject matter it covers.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="eligibility">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">04.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Eligibility and Acceptable Use
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    You may use our website and services only for lawful purposes and in compliance with
                    these Terms. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Use the website in any way that could disable, damage, or impair the website or
                      interfere with another user&apos;s use.
                    </li>
                    <li>
                      Attempt to gain unauthorized access to any part of the website, server, account, or
                      connected system.
                    </li>
                    <li>
                      Upload, transmit, or submit content that is unlawful, infringing, defamatory,
                      harassing, misleading, fraudulent, or harmful.
                    </li>
                    <li>
                      Use our website or services to violate any applicable law, regulation, platform rule,
                      or third-party right.
                    </li>
                    <li>
                      Copy, scrape, distribute, reproduce, or exploit website content or materials except as
                      expressly permitted.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-32" id="quotes">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">05.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Quotes, Proposals, and Service Engagements
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  Quotes, proposals, and service descriptions are invitations to engage and do not create a
                  binding obligation until accepted by both parties, or until payment is received where
                  applicable. We reserve the right to decline, suspend, or limit services at our discretion,
                  subject to any written agreement.
                </p>
              </section>

              <section className="scroll-mt-32" id="fees">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">06.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Fees, Billing, and Payment
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    Fees for services will be stated on the website, in a proposal, invoice, checkout page,
                    subscription plan, or other written communication. You agree to pay all applicable fees,
                    taxes, and charges associated with the services you purchase.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Payments may be processed through third-party payment providers such as Stripe, PayPal,
                      or other approved processors.
                    </li>
                    <li>
                      You authorize us and our payment providers to charge the payment method you provide
                      for all amounts due.
                    </li>
                    <li>
                      Recurring services or retainers may renew automatically if described at checkout or in
                      a written agreement, unless canceled according to the applicable cancellation terms.
                    </li>
                    <li>
                      Late payments may result in paused work, delayed delivery, additional fees where
                      permitted by law or contract, or termination of service.
                    </li>
                    <li>
                      All payments are subject to our posted Refund Policy and any separate written
                      agreement.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-32" id="client-responsibilities">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">07.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Client Responsibilities
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    To help us provide services effectively, you agree to provide accurate information,
                    timely feedback, approvals, access credentials, assets, and content reasonably needed for
                    the project. Delays in approvals, access, content delivery, or communication may affect
                    timelines, campaign performance, and deliverables.
                  </p>
                  <p>
                    You are responsible for ensuring that materials you provide to us, including logos,
                    images, text, video, data, and account access, do not violate any law or third-party
                    rights.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="intellectual-property">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">08.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Intellectual Property
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    All content on this website, including text, branding, graphics, layouts, logos, design
                    elements, and original materials created by AI METRIX LLC, is owned by or licensed to us
                    and is protected by applicable intellectual property laws.
                  </p>
                  <p>
                    Unless otherwise stated in a signed agreement, all pre-existing tools, templates,
                    frameworks, processes, know-how, and general methodologies used by AI METRIX LLC remain
                    our property. Ownership of final client-specific deliverables, if any, will transfer only
                    to the extent expressly stated in a written agreement and only after full payment has
                    been received.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      You retain ownership of materials you provide to us. You grant us a limited,
                      non-exclusive right to use those materials solely as needed to provide services to you.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-32" id="marketing-results">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">09.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Marketing Results and No Guarantee
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  Digital marketing and consulting outcomes depend on many factors beyond our control,
                  including market conditions, competition, timing, platform changes, customer behavior,
                  budgets, content quality, and third-party systems. We do not guarantee specific results,
                  rankings, sales, leads, traffic levels, ad performance, or revenue outcomes unless
                  expressly stated in writing.
                </p>
              </section>

              <section className="scroll-mt-32" id="third-party">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">10.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Third-Party Platforms and Tools
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  Our services may involve third-party websites, social media platforms, advertising
                  networks, analytics providers, hosting providers, payment processors, AI tools, or other
                  technology vendors. We are not responsible for outages, policy changes, suspensions,
                  pricing changes, account restrictions, algorithm updates, data loss, or other actions
                  caused by third parties.
                </p>
              </section>

              <section className="scroll-mt-32" id="disclaimer">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">11.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Website Content Disclaimer
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  Information on this website is provided for general informational purposes only and does
                  not constitute legal, tax, accounting, investment, or other regulated professional advice.
                  You should consult your own advisors before making decisions that may affect your business
                  or legal rights.
                </p>
              </section>

              <section className="scroll-mt-32" id="limitation">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">12.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    To the fullest extent permitted by law, AI METRIX LLC and its owners, employees,
                    contractors, affiliates, and service providers will not be liable for any indirect,
                    incidental, special, consequential, exemplary, or punitive damages, or for any loss of
                    profits, revenue, business opportunities, goodwill, data, or anticipated savings arising
                    out of or related to your use of the website or services.
                  </p>
                  <p>
                    To the fullest extent permitted by law, our total aggregate liability for any claim
                    arising out of or relating to the website or services will not exceed the amount you paid
                    to us for the specific service giving rise to the claim during the three (3) months
                    immediately preceding the event giving rise to liability, unless a different limit is
                    stated in a written agreement.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-32" id="indemnification">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">13.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Indemnification
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  You agree to defend, indemnify, and hold harmless AI METRIX LLC and its owners, employees,
                  contractors, affiliates, and service providers from and against claims, losses,
                  liabilities, damages, costs, and expenses, including reasonable attorneys&apos; fees, arising
                  out of or related to your use of the website, your breach of these Terms, your violation of
                  law, or materials you provide.
                </p>
              </section>

              <section className="scroll-mt-32" id="termination">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">14.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Suspension and Termination
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  We may suspend or terminate access to the website or services at any time if we reasonably
                  believe you have violated these Terms, failed to pay amounts due, created legal or
                  operational risk, or engaged in conduct harmful to our business, website, staff, or
                  clients. Any provisions that by their nature should survive termination will survive,
                  including payment obligations, intellectual property protections, disclaimers, limitations
                  of liability, and dispute provisions.
                </p>
              </section>

              <section className="scroll-mt-32" id="governing-law">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">15.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Governing Law and Dispute Resolution
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  These Terms will be governed by and construed in accordance with the laws of the State of
                  Wyoming, without regard to conflict of law principles. Any dispute arising from or relating
                  to these Terms, the website, or the services will be brought exclusively in the state or
                  federal courts located in Natrona, Wyoming, and you consent to the personal jurisdiction
                  and venue of those courts, unless a separate written agreement provides otherwise.
                </p>
              </section>

              <section className="scroll-mt-32" id="changes">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">16.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Changes to These Terms
                  </h2>
                </div>
                <p className="text-body text-[17px] leading-relaxed">
                  We may revise these Terms from time to time. Updated Terms will be posted on the website
                  with a revised "Last Updated" date. Your continued use of the website or services after
                  updated Terms become effective constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="scroll-mt-32" id="contact">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-accent font-heading font-semibold text-xl">17.</span>
                  <h2 className="font-heading font-semibold text-xl md:text-2xl text-primary uppercase tracking-tight">
                    Contact Us
                  </h2>
                </div>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>If you have questions about these Terms and Conditions, please contact us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI METRIX LLC</li>
                    <li>5830 E 2ND ST, STE 7000 #31008 CASPER, WY 82609</li>
                    <li>info@aimetrixllc.com</li>
                    <li>(213) 645-0349</li>
                    <li>www.aimetrixllc.com</li>
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
