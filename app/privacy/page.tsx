"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-collect", label: "3. How We Collect Information" },
  { id: "how-we-use", label: "4. How We Use Information" },
  { id: "cookies", label: "5. Cookies and Tracking Technologies" },
  { id: "how-we-share", label: "6. How We Share Information" },
  { id: "retention", label: "7. Data Retention" },
  { id: "security", label: "8. Data Security" },
  { id: "rights", label: "9. Your Privacy Rights" },
  { id: "children", label: "10. Children's Privacy" },
  { id: "third-party", label: "11. Third-Party Links and Services" },
  { id: "international", label: "12. International Data Transfers" },
  { id: "changes", label: "13. Changes to This Privacy Policy" },
  { id: "contact", label: "14. Contact Us" },
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
              <p className="text-white/70 text-lg">
                Effective Date: May 15, 2026 | Last Updated: May 4, 2026
              </p>
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
                    For privacy questions, contact us directly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href="mailto:info@aimetrixllc.com"
                      className="text-accent font-semibold hover:underline"
                    >
                      info@aimetrixllc.com
                    </a>
                    <div>
                      <a
                        href="tel:+12136450349"
                        className="text-caption hover:text-primary"
                      >
                        (213) 645-0349
                      </a>
                    </div>
                  </div>
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
                    AI METRIX LLC ("AI METRIX," "we," "us," or "our") respects your privacy and is committed
                    to protecting the personal information we collect through our website, forms,
                    communications, and services. This Privacy Policy explains what information we collect,
                    how we use it, when we share it, and the choices you may have regarding your information.
                  </p>
                  <p>
                    This Privacy Policy applies to information collected through
                    https://www.aimetrixllc.com/, our contact and intake forms, consultation bookings, payment
                    pages, email and other business communications, and any related digital marketing or
                    consulting services we provide.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="information-we-collect">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  2. Information We Collect
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>We may collect the following categories of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Contact information, such as your name, email address, phone number, mailing address,
                      and job title.
                    </li>
                    <li>
                      Business information, such as your company name, industry, website, business goals,
                      budget range, and project requirements.
                    </li>
                    <li>
                      Communications and inquiry information, including messages you send to us,
                      consultation notes, support requests, and feedback.
                    </li>
                    <li>
                      Transaction information related to services you purchase from us, including payment
                      amount, billing status, invoice details, and related records. Payment card details are
                      typically processed by third-party payment providers and not stored directly by us.
                    </li>
                    <li>
                      Technical and usage information, such as IP address, browser type, device type, referral
                      source, page visits, clicks, session activity, and approximate location derived from IP
                      address.
                    </li>
                    <li>
                      Cookie and similar technology data, including information collected through analytics,
                      advertising, and website functionality tools where used.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="scroll-mt-32" id="how-we-collect">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  3. How We Collect Information
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    We may collect information directly from you, automatically through your use of our
                    website, and from third parties.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Directly from you when you fill out a form, book a consultation, sign up for updates,
                      request services, make a payment, or communicate with us.
                    </li>
                    <li>
                      Automatically through cookies, pixels, analytics tools, server logs, and similar
                      technologies.
                    </li>
                    <li>
                      From third parties such as payment processors, analytics providers, advertising
                      platforms, CRM systems, scheduling tools, or publicly available sources.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="scroll-mt-32" id="how-we-use">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  4. How We Use Information
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>We may use personal information for the following business and commercial purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To respond to inquiries and provide requested information.</li>
                    <li>To provide, manage, improve, and deliver our digital marketing and consulting services.</li>
                    <li>To process transactions, issue invoices, confirm payments, and maintain financial records.</li>
                    <li>To schedule consultations, onboarding calls, and service communications.</li>
                    <li>To personalize website content, user experience, and communications.</li>
                    <li>To analyze website traffic, campaign effectiveness, and service performance.</li>
                    <li>
                      To send marketing, educational, or promotional communications where permitted by law
                      or where you have consented.
                    </li>
                    <li>
                      To protect our website, business, clients, and users from fraud, unauthorized activity,
                      or security threats.
                    </li>
                    <li>To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
                  </ul>
                  <p>
                    Where required by applicable law, we will rely on an appropriate legal basis for
                    processing personal information, such as consent, performance of a contract, legitimate
                    interests, or compliance with legal obligations.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="cookies">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  5. Cookies and Tracking Technologies
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    Our website may use cookies, pixels, tags, and similar technologies to operate the site,
                    remember preferences, analyze traffic, and support advertising or remarketing activities.
                    You can usually control cookies through your browser settings and, where implemented,
                    through any cookie management tools displayed on the website.
                  </p>
                  <p>
                    If we use third-party analytics or advertising tools, those providers may collect
                    information in accordance with their own privacy policies. You should review those
                    third-party policies for additional information.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="how-we-share">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  6. How We Share Information
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>We may disclose personal information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Service providers and vendors that help us operate our website, business systems,
                      communications, analytics, scheduling, and customer management tools.
                    </li>
                    <li>Payment processors and billing platforms that handle transactions on our behalf.</li>
                    <li>
                      Advertising, analytics, and technology partners where needed to measure or improve
                      performance.
                    </li>
                    <li>Professional advisors, insurers, auditors, or legal counsel where reasonably necessary.</li>
                    <li>
                      Government agencies, regulators, law enforcement, or other parties where disclosure is
                      required by law or necessary to protect rights, safety, or property.
                    </li>
                    <li>
                      A buyer, investor, successor, or other relevant party in connection with a merger,
                      acquisition, financing, or sale of all or part of our business.
                    </li>
                  </ul>
                  <p>
                    We do not sell personal information for monetary consideration. However, certain
                    analytics or advertising practices may be considered "sharing" or targeted advertising
                    under some privacy laws. Where applicable, we will provide any legally required rights
                    or controls.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="retention">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  7. Data Retention
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  We retain personal information for as long as reasonably necessary to fulfill the purposes
                  described in this Privacy Policy, including providing services, maintaining business
                  records, complying with legal obligations, resolving disputes, and enforcing agreements.
                  Retention periods may vary depending on the nature of the information and applicable legal
                  requirements.
                </p>
              </article>

              <article className="scroll-mt-32" id="security">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  8. Data Security
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  We use reasonable administrative, technical, and physical safeguards designed to protect
                  personal information against unauthorized access, use, alteration, or disclosure. However,
                  no method of internet transmission or electronic storage is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </article>

              <article className="scroll-mt-32" id="rights">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  9. Your Privacy Rights
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    Depending on where you live, you may have rights regarding your personal information,
                    which may include the right to request access, correction, deletion, portability, or
                    restriction of certain processing, as well as the right to opt out of certain uses or
                    disclosures and to withdraw consent where processing is based on consent.
                  </p>
                  <p>
                    To exercise any privacy rights available to you, please contact us at
                    info@aimetrixllc.com. We may need to verify your identity before processing your request.
                    We will not discriminate against you for exercising rights provided by applicable law.
                  </p>
                </div>
              </article>

              <article className="scroll-mt-32" id="children">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  10. Children's Privacy
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  Our website and services are intended for businesses and adults and are not directed to
                  children under 13. We do not knowingly collect personal information directly from children
                  under 13. If you believe a child has provided personal information to us, please contact us
                  so we can take appropriate action.
                </p>
              </article>

              <article className="scroll-mt-32" id="third-party">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  11. Third-Party Links and Services
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  Our website may contain links to third-party websites, platforms, or tools. We are not
                  responsible for the privacy, security, or content practices of those third parties. Your
                  use of third-party services is subject to their own terms and privacy policies.
                </p>
              </article>

              <article className="scroll-mt-32" id="international">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  12. International Data Transfers
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  If you access our website or services from outside the United States, your information may
                  be transferred to, stored in, or processed in the United States or other countries where our
                  service providers operate. Where required by law, we will take appropriate steps to address
                  such transfers.
                </p>
              </article>

              <article className="scroll-mt-32" id="changes">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  13. Changes to This Privacy Policy
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  We may update this Privacy Policy from time to time. When we do, we will revise the
                  "Last Updated" date above and, where required by law, provide additional notice. Your
                  continued use of the website or services after changes become effective constitutes
                  acceptance of the updated policy.
                </p>
              </article>

              <article className="scroll-mt-32" id="contact">
                <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-primary mb-6">
                  14. Contact Us
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI METRIX LLC</li>
                    <li>5830 E 2ND ST, STE 7000 #31008 CASPER, WY 82609</li>
                    <li>info@aimetrixllc.com</li>
                    <li>(213) 645-0349</li>
                    <li>www.aimetrixllc.com</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
