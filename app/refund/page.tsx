"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  FileText,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tocItems = [
  { id: "overview", label: "1. Overview" },
  { id: "strategy-sessions", label: "2. Strategy Sessions" },
  { id: "monthly-retainers", label: "3. Monthly Retainers" },
  { id: "project-deposits", label: "4. Project Deposits" },
  { id: "how-to-request", label: "5. How to Request" },
  { id: "contact-support", label: "6. Contact Support" },
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
              <h1 className="font-heading font-bold text-white text-4xl md:text-[56px] leading-[1.1] mb-4">
                Refund Policy
              </h1>
              <p className="text-white/70 text-lg">
                Engineered success requires transparency. Our policies ensure clarity for every engagement model.
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
              <section id="overview" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
                  1. Overview
                </h2>
                <div className="text-body text-[17px] leading-relaxed space-y-4">
                  <p>
                    AI METRIX LLC is committed to client satisfaction and the delivery of high-impact AI-driven
                    marketing solutions. As a service-based agency, our work involves significant labor,
                    computational resources, and strategic planning.
                  </p>
                  <p>
                    This policy outlines our specific approach to refunds across our various engagement models to
                    maintain a fair and professional relationship with all our partners.
                  </p>
                </div>
              </section>

              <section id="strategy-sessions" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-accent" size={22} />
                  <h2 className="font-heading font-semibold text-2xl text-primary">
                    2. Strategy Sessions
                  </h2>
                </div>
                <div className="bg-ice rounded-xl p-6 border border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg border border-border p-5">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-caption">
                        Early Cancellation
                      </span>
                      <p className="text-primary font-semibold text-lg mt-2">100% Refund</p>
                      <p className="text-caption text-sm mt-2">
                        If cancelled more than 48 hours before the scheduled session.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg border border-border p-5">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-red-500">
                        Late Cancellation
                      </span>
                      <p className="text-primary font-semibold text-lg mt-2">No Refund</p>
                      <p className="text-caption text-sm mt-2">
                        If cancelled less than 24 hours before the scheduled session.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="monthly-retainers" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                  3. Monthly Retainers
                </h2>
                <div className="bg-primary text-white rounded-xl p-6 shadow-lg">
                  <p className="text-white/80 text-sm mb-6">
                    Retainers are billed in advance to secure our team&apos;s capacity and resources for your
                    account.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-1" />
                      <span>
                        Cancellations stop all future billing cycles immediately.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-accent mt-1" />
                      <span>
                        Once work has commenced for the current month, no refunds are issued for that period.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="project-deposits" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                  4. Project Deposits
                </h2>
                <div className="border border-dashed border-border rounded-xl p-6">
                  <p className="text-caption mb-6">
                    For custom project builds, deposits are refundable minus work already completed.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 bg-ice rounded-full flex items-center justify-center text-center text-primary text-sm font-semibold">
                      $200
                      <br />
                      Per Hour
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                        Deduction Logic
                      </h3>
                      <p className="text-caption text-sm">
                        Refund = (Initial Deposit) - (Hours Logged x $200/hr). All logs are provided
                        transparently upon request.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="how-to-request" className="scroll-mt-32">
                <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                  5. How to Request
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-ice rounded-xl p-6 border border-border">
                    <p className="text-caption text-sm mb-4">
                      To initiate a refund request, please send a formal email with the following details:
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <Mail size={16} className="text-accent" />
                      billing@aimetrix.com
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-border">
                    <p className="text-xs uppercase tracking-[0.2em] text-caption mb-3">
                      Required Data
                    </p>
                    <ul className="space-y-2 text-sm text-body">
                      <li className="flex items-start gap-2">
                        <FileText size={16} className="text-accent mt-0.5" />
                        Invoice Number
                      </li>
                      <li className="flex items-start gap-2">
                        <CreditCard size={16} className="text-accent mt-0.5" />
                        Account Name
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock size={16} className="text-accent mt-0.5" />
                        Reason for Request
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="contact-support" className="scroll-mt-32">
                <div className="relative overflow-hidden bg-primary rounded-2xl p-10 text-center text-white">
                  <div className="relative z-10">
                    <h3 className="font-heading font-semibold text-2xl mb-3">
                      Still have questions?
                    </h3>
                    <p className="text-white/70 mb-6">
                      Our support team is available 24/7 to assist with billing inquiries or service modifications.
                    </p>
                    <Link
                      href="/contact/"
                      className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold"
                    >
                      Contact Support
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,166,251,0.35),_transparent_60%)]" />
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
