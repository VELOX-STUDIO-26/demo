"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import {
  Mail,
  Calendar,
  Lock,
  FileText,
  CreditCard,
  Handshake,
  Plus,
  Send,
  User,
  AtSign,
  Building2,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const industries = [
  "Small Business",
  "Restaurant/Hospitality",
  "Education",
  "Tech",
  "Finance",
  "Service Org",
  "Other",
];

const services = [
  "Brand Strategy",
  "SEO",
  "Social Media",
  "Content",
  "Paid Ads",
  "Website Strategy",
  "AI Consulting",
  "Analytics",
  "Not Sure Yet",
];

const budgets = [
  "Under $1K/mo",
  "$1K–3K/mo",
  "$3K–5K/mo",
  "$5K+/mo",
  "Let's discuss",
];

const faqs = [
  {
    q: "What's your minimum contract length?",
    a: "We offer flexible terms ranging from month-to-month for specific services to 6-12 month strategic partnerships for integrated AI and marketing solutions.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, we have a specialized approach designed to provide high-impact infrastructure and strategy for seed and Series A companies.",
  },
  {
    q: "Can I start with just one service?",
    a: "Absolutely. Many clients start with SEO or AI Consulting before expanding into a full-scale growth engine.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    if (!formData.get("name")?.toString().trim()) newErrors.name = true;
    if (!formData.get("email")?.toString().trim()) newErrors.email = true;
    if (!formData.get("message")?.toString().trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setFormState("submitting");

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      business: formData.get("business")?.toString().trim(),
      industry: formData.get("industry")?.toString().trim(),
      service: formData.get("service")?.toString().trim(),
      budget: formData.get("budget")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const res = await fetch("/.netlify/functions/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Something went wrong. Please try again.");
        setFormState("idle");
      }
    } catch {
      alert("Failed to send. Please check your connection and try again.");
      setFormState("idle");
    }
  };

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-primary pt-[72px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <h1 className="font-heading font-bold text-white text-3xl md:text-5xl lg:text-[64px] leading-[1.1] mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              We respond to all qualified inquiries within 1–2 business days.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left: Form */}
              <ScrollReveal className="lg:col-span-7">
                <div className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-border p-8 lg:p-10">
                  {formState === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading font-semibold text-2xl text-primary mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-caption">
                        We&apos;ll be in touch within 1–2 business days.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        className="absolute left-[-9999px] opacity-0"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">Full Name</label>
                          <div className="relative">
                            <User
                              size={18}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                            />
                            <input
                              type="text"
                              name="name"
                              placeholder="John Doe"
                              className={`form-input pl-10 ${errors.name ? "is-invalid" : ""}`}
                            />
                          </div>
                          <span className="form-error">Please enter your name.</span>
                        </div>
                        <div>
                          <label className="form-label">Business Email</label>
                          <div className="relative">
                            <AtSign
                              size={18}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="john@company.com"
                              className={`form-input pl-10 ${errors.email ? "is-invalid" : ""}`}
                            />
                          </div>
                          <span className="form-error">Please enter a valid email.</span>
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Business Name</label>
                        <div className="relative">
                          <Building2
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                          />
                          <input
                            type="text"
                            name="business"
                            placeholder="Acme Corp"
                            className="form-input pl-10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="form-label">Industry</label>
                          <select name="industry" className="form-input">
                            {industries.map((i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Service Needed</label>
                          <select name="service" className="form-input">
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Budget Range</label>
                        <select name="budget" className="form-input">
                          {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="form-label">Message</label>
                        <div className="relative">
                          <MessageSquare
                            size={18}
                            className="absolute left-3 top-4 text-muted"
                          />
                          <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell us about your goals..."
                            className={`form-input pl-10 pt-3 ${errors.message ? "is-invalid" : ""}`}
                          />
                        </div>
                        <span className="form-error">Please enter a message.</span>
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center text-caption text-sm">
                        Your information is never shared. We respond within 1–2 business days.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Right: Details */}
              <div className="lg:col-span-5 space-y-10">
                <ScrollReveal>
                  <div className="bg-ice p-8 rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-body font-medium">
                        Typically responds within 24 hours
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-border text-accent">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-caption text-[13px] uppercase tracking-wider mb-1">
                            Email us at
                          </p>
                          <a
                            href="mailto:info@aimetrixllc.com"
                            className="font-heading font-bold text-xl text-primary hover:text-accent transition-colors"
                          >
                            info@aimetrixllc.com
                          </a>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <a
                          href="/contact/"
                          className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-lg font-heading font-bold text-base hover:bg-primary/90 transition-colors"
                        >
                          <Calendar size={20} />
                          Book a time directly
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    <h3 className="font-heading font-semibold text-2xl text-primary mb-6">
                      Frequently Asked Questions
                    </h3>
                    <div>
                      {faqs.map((faq, i) => (
                        <div
                          key={i}
                          className={`faq-item ${openFaq === i ? "is-open" : ""}`}
                        >
                          <button
                            type="button"
                            className="faq-question"
                            onClick={() =>
                              setOpenFaq(openFaq === i ? null : i)
                            }
                          >
                            {faq.q}
                            <Plus size={20} className="faq-icon text-accent" />
                          </button>
                          <div className="faq-answer">{faq.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-ice py-12 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center gap-8">
            {[
              { icon: Lock, label: "SSL Secured" },
              { icon: FileText, label: "Clear Contracts" },
              { icon: CreditCard, label: "Secure Payments" },
              { icon: Handshake, label: "No Hidden Fees" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-body font-medium">
                <item.icon size={20} className="text-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
