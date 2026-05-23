import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Calendar,
  FileText,
  Lock,
  RefreshCw,
  CheckCircle,
  CreditCard,
  Shield,
  FileCheck,
  MessageCircle,
} from "lucide-react";

const paymentTiles = [
  {
    icon: Calendar,
    title: "Pay for a Strategy Session",
    desc: "One-time payment for your scheduled consultation",
    action: "Pay Now",
    href: "/pay/checkout/",
  },
  {
    icon: FileText,
    title: "Pay Your Invoice",
    desc: "Enter your invoice number to complete a project payment",
    action: "Pay Invoice",
    href: "/pay/invoice/",
  },
  {
    icon: Lock,
    title: "Pay a Project Deposit",
    desc: "Kickstart your project with a secure initial deposit",
    action: "Pay Deposit",
    href: "/pay/deposit/",
  },
  {
    icon: RefreshCw,
    title: "Manage Retainer Billing",
    desc: "Set up or manage your monthly retainer subscription",
    action: "Manage Retainer",
    href: "/pay/retainer/",
  },
];

export const metadata: Metadata = {
  title: "Client Payments",
  description:
    "Secure client payments and strategy session booking for AI METRIX LLC services.",
  alternates: {
    canonical: "/pay/",
  },
};

export default function PayPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-primary pt-[72px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <h1 className="font-heading font-bold text-white text-3xl md:text-5xl leading-[1.1] mb-6 max-w-3xl">
              Payment & Consultation Booking
            </h1>
            <p className="text-muted text-lg max-w-2xl mb-8">
              Fast, secure, and hassle-free. All transactions are encrypted and protected.
            </p>
            <div className="flex flex-wrap gap-3">
              {["SSL Secured", "Stripe Powered", "Privacy Protected"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full text-xs font-semibold tracking-wider text-muted"
                  >
                    <CheckCircle size={14} />
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Payment Tiles */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="overline">CLIENT PAYMENTS</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3">
                Choose Your Payment Type
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paymentTiles.map((tile, i) => (
                <ScrollReveal key={tile.title} delay={i * 100}>
                  <div className="group bg-white border border-border rounded-lg p-8 card-hover h-full flex flex-col">
                    <div className="flex items-start gap-6">
                      <div className="bg-ice p-4 rounded-xl text-accent group-hover:scale-110 transition-transform">
                        <tile.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-[22px] text-primary mb-2">
                          {tile.title}
                        </h3>
                        <p className="text-caption text-base mb-4">{tile.desc}</p>
                        <Link
                          href={tile.href}
                          className="btn-primary text-sm py-3 px-6 mt-auto inline-block"
                        >
                          {tile.action}
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Book Consultation */}
        <section className="py-16 lg:py-24 bg-ice">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="overline">NEW CLIENTS</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3">
                Not a Client Yet? Book Your First Consultation
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <ScrollReveal>
                <div className="bg-white rounded-xl p-10 border border-border text-center shadow-sm flex flex-col">
                  <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 w-fit mx-auto">
                    FREE
                  </span>
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-2">
                    Free Discovery Call
                  </h3>
                  <p className="text-caption text-base mb-8 flex-1">
                    Tell us about your business. No sales pitch.
                  </p>
                  <Link href="/contact/" className="btn-primary w-full">
                    Book Free Call
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-white rounded-xl p-10 border border-accent/30 text-center shadow-md flex flex-col">
                  <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 w-fit mx-auto">
                    PAID
                  </span>
                  <h3 className="font-heading font-semibold text-2xl text-primary mb-2">
                    Paid Strategy Session
                  </h3>
                  <p className="text-caption text-base mb-2 flex-1">
                    Deep-dive session + written strategy within 48hrs.
                  </p>
                  <p className="font-heading font-bold text-2xl text-accent mb-6">
                    $497.00
                  </p>
                  <Link href="/pay/checkout/" className="btn-primary w-full">
                    Book Strategy Session
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-primary py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lock, label: "Encrypted Payments" },
              { icon: CreditCard, label: "No Card Data Stored" },
              { icon: FileCheck, label: "Refund Policy" },
              { icon: MessageCircle, label: "Support Available" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 text-white">
                <item.icon size={24} className="text-accent" />
                <span className="font-heading text-xs uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
