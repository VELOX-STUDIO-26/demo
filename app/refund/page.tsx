"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "purpose", label: "1. Purpose and Scope" },
  { id: "general-rule", label: "2. General Rule" },
  { id: "consultations", label: "3. Consultations and Strategy Sessions" },
  { id: "deposits", label: "4. Deposits and Project Kickoff Payments" },
  { id: "project-services", label: "5. Project-Based Services" },
  { id: "retainers", label: "6. Monthly Retainers and Recurring Services" },
  {
    id: "third-party-costs",
    label: "7. Advertising Spend, Software, and Third-Party Costs",
  },
  { id: "request-process", label: "8. Refund Request Process" },
  { id: "timing", label: "9. Timing of Approved Refunds" },
  { id: "processing-fees", label: "10. Processing Fees and Chargebacks" },
  { id: "exceptions", label: "11. Exceptions" },
  { id: "changes", label: "12. Changes to This Policy" },
  { id: "contact", label: "13. Contact Us" },
];

export default function RefundPage() {
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
        <header className="bg-primary py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="text-xs text-white/60 mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Legal</span>
              <span className="mx-2">/</span>
              <span className="text-accent font-semibold">Refund Policy</span>
            </nav>
            <div className="max-w-3xl">
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
                Website use by AI METRIX LLC
              </span>
              <h1 className="font-heading font-bold text-white text-4xl md:text-[56px] leading-[1.1] mb-4">
                Refund Policy
              </h1>
              <p className="text-white/70 text-lg">
                Effective Date: May 15, 2026 | Last Updated: May 4, 2026
              </p>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-12">
            <aside className="hidden lg:block">
              <nav className="sticky top-[120px] space-y-3 border-l border-border pl-4">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm transition-colors ${
                      activeId === item.id
                        ? "text-primary font-semibold"
                        : "text-caption hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-16">
              <section id="purpose" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  1. Purpose and Scope
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    This Refund Policy explains how AI METRIX LLC handles refunds, cancellations,
                    rescheduling requests, deposits, retainers, and other payments made through our website
                    or directly for our digital marketing and consulting services.
                  </p>
                  <p>
                    This policy should be read together with our Terms and Conditions, service proposals,
                    statements of work, invoices, subscription terms, and any separate written agreements.
                  </p>
                </div>
              </section>

              <section id="general-rule" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  2. General Rule
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  Because our business primarily provides professional services, strategic consulting,
                  planning, creative work, and time-based deliverables, refunds are not automatically
                  available once work has been scheduled, reserved, started, or delivered. Any refund
                  determination will depend on the nature of the service purchased, the work completed,
                  commitments already made, and the terms communicated at checkout or in a written agreement.
                </p>
              </section>

              <section id="consultations" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  3. Consultations and Strategy Sessions
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-[17px] leading-relaxed">
                  <li>
                    If a paid consultation or strategy session is canceled or rescheduled at least
                    [24/48] hours before the scheduled start time, the client may choose either a full credit
                    toward a rescheduled session or a refund, unless otherwise stated at checkout.
                  </li>
                  <li>
                    If a paid consultation or strategy session is canceled with less than [24/48] hours
                    notice, the fee may be non-refundable because time has been reserved.
                  </li>
                  <li>
                    If AI METRIX LLC needs to reschedule or cancel a paid session and a new time cannot be
                    agreed upon, the client may request a full refund of the paid session fee.
                  </li>
                </ul>
              </section>

              <section id="deposits" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  4. Deposits and Project Kickoff Payments
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-[17px] leading-relaxed">
                  <li>
                    Deposits, booking fees, and kickoff payments are generally non-refundable once a project
                    slot has been reserved or onboarding has begun.
                  </li>
                  <li>
                    If a project is canceled before any substantive work begins, AI METRIX LLC may, at its
                    discretion, issue a partial refund after deducting administrative, scheduling,
                    discovery, or setup costs already incurred.
                  </li>
                  <li>
                    Any special deposit terms stated in a proposal, invoice, or service agreement will
                    control.
                  </li>
                </ul>
              </section>

              <section id="project-services" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  5. Project-Based Services
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-[17px] leading-relaxed">
                  <li>
                    Payments for completed milestones, delivered strategy documents, completed design work,
                    approved content, campaign setup, or time already spent are non-refundable.
                  </li>
                  <li>
                    If a client cancels a project after work has started, any refund will be limited to
                    prepaid amounts for work not yet performed, less any non-recoverable costs, committed
                    third-party expenses, and the value of work already completed.
                  </li>
                  <li>
                    If the client has approved a deliverable or milestone, the corresponding fee is
                    non-refundable.
                  </li>
                </ul>
              </section>

              <section id="retainers" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  6. Monthly Retainers and Recurring Services
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-[17px] leading-relaxed">
                  <li>
                    Monthly retainers, subscriptions, and recurring service fees are billed in advance unless
                    otherwise stated in writing.
                  </li>
                  <li>
                    Cancellation requests must be submitted before the next billing date or within the notice
                    period stated in the client&apos;s service agreement.
                  </li>
                  <li>
                    Once a new billing cycle has started, that period&apos;s retainer or subscription fee is
                    generally non-refundable because capacity and service availability have been reserved.
                  </li>
                  <li>
                    If a separate written service agreement includes a required minimum term or advance notice
                    period, that agreement will control.
                  </li>
                </ul>
              </section>

              <section id="third-party-costs" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  7. Advertising Spend, Software, and Third-Party Costs
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  Amounts paid to or committed for third-party platforms, ad spend, domain registrations,
                  hosting, software subscriptions, creative tools, freelancers, media buys, or other external
                  vendors are non-refundable once incurred or committed, unless the third-party provider
                  itself issues a refund.
                </p>
              </section>

              <section id="request-process" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  8. Refund Request Process
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    To request a refund, cancellation, or billing review, please contact us at
                    info@aimetrixllc.com and include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your full name and business name</li>
                    <li>The service purchased</li>
                    <li>The payment date and amount</li>
                    <li>The reason for the request</li>
                    <li>Any supporting documents or relevant communication</li>
                  </ul>
                  <p>
                    We may request additional information before making a decision. Refund decisions will be
                    communicated in writing.
                  </p>
                </div>
              </section>

              <section id="timing" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  9. Timing of Approved Refunds
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  If a refund is approved, it will generally be issued to the original payment method within
                  [5-10] business days after approval, unless a different timing applies through the payment
                  provider or financial institution. Actual posting times may vary based on the payment
                  method, bank, or card issuer.
                </p>
              </section>

              <section id="processing-fees" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  10. Processing Fees and Chargebacks
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  To the extent permitted by law and disclosed in advance, non-refundable payment processing
                  fees or third-party transaction costs may be deducted from approved refunds. If you believe
                  there has been a billing error, please contact us first before initiating a chargeback so we
                  can attempt to resolve the issue promptly.
                </p>
              </section>

              <section id="exceptions" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  11. Exceptions
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  Nothing in this Refund Policy is intended to limit any non-waivable rights you may have
                  under applicable law. AI METRIX LLC may also choose, in its sole discretion, to provide a
                  refund, credit, or rescheduling accommodation in circumstances involving verified
                  emergencies, service interruptions caused by us, or other exceptional situations.
                </p>
              </section>

              <section id="changes" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  12. Changes to This Policy
                </h2>
                <p className="text-body text-[17px] leading-relaxed">
                  We may update this Refund Policy from time to time. Updated versions will be posted on the
                  website with a revised "Last Updated" date. The version in effect at the time of purchase
                  will generally apply to that purchase unless required by law or otherwise communicated.
                </p>
              </section>

              <section id="contact" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  13. Contact Us
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>If you have questions about this Refund Policy, please contact us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI METRIX LLC</li>
                    <li>5830 E 2ND ST, STE 7000 #31008 CASPER, WY 82609</li>
                    <li>info@aimetrixllc.com</li>
                    <li>(213) 645-0349</li>
                    <li>www.aimetrixllc.com</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
