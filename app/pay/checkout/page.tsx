"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const includedItems = [
  "Full marketing audit",
  "60-min deep-dive consultation",
  "Written strategy delivered within 48h",
];

const trustBadges = [
  { icon: Lock, label: "SSL Secured" },
  { icon: Shield, label: "Guarantee" },
  { icon: Clock, label: "24/7 Support" },
];

export default function CheckoutPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    return parts.join(" ");
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + " / " + v.substring(2, 4);
    }
    return v;
  };

  return (
    <>
      <Header />
      <main id="main" className="min-h-screen bg-ice">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 pt-[100px]">
          <h1 className="font-heading font-bold text-3xl md:text-[40px] text-primary mb-2">
            Paid Strategy Session
          </h1>
          <p className="text-caption mb-10">
            Complete your information to secure your engineered growth session.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Billing & Payment */}
            <div className="space-y-6">
              {/* Billing Information */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h2 className="font-heading font-semibold text-lg text-primary">
                    Billing Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-primary mb-1.5 block">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="AI Growth Labs Inc."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <h2 className="font-heading font-semibold text-lg text-primary">
                      Payment Method
                    </h2>
                  </div>
                  <CreditCard size={20} className="text-muted" />
                </div>

                <div className="mb-4">
                  <label className="text-sm font-medium text-primary mb-1.5 block">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      maxLength={19}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all pl-10"
                    />
                    <CreditCard
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      maxLength={7}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1.5 block">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                      maxLength={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-muted bg-ice p-3 rounded-lg">
                  <Lock size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <p>
                    All transactions are encrypted and processed securely by Stripe.
                    Your payment info is never stored on our servers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border sticky top-[100px]">
                <h2 className="font-heading font-semibold text-lg text-primary mb-6">
                  Order Summary
                </h2>

                <div className="border-b border-border pb-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-primary">
                        Strategy Session (60 Minutes)
                      </h3>
                      <p className="text-sm text-muted">
                        One-on-one expert consultation
                      </p>
                    </div>
                    <span className="font-bold text-primary">$497.00</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-primary mb-3">
                    Included in your session:
                  </p>
                  <ul className="space-y-2">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle size={14} className="text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Subtotal</span>
                    <span className="text-primary">$497.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Tax</span>
                    <span className="text-primary">$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span className="text-primary">Total</span>
                    <span className="text-primary">$497.00</span>
                  </div>
                </div>

                <button className="btn-primary w-full mt-6 py-4 text-base">
                  Complete Payment
                </button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
                  {trustBadges.map((badge) => (
                    <div key={badge.label} className="flex flex-col items-center gap-1">
                      <badge.icon size={20} className="text-muted" />
                      <span className="text-[10px] text-muted uppercase tracking-wide">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-6 bg-primary rounded-lg p-4 text-white">
                  <p className="text-sm italic mb-3 leading-relaxed">
                    &quot;The strategy session with AI METRIX paid for itself in the first week of implementation. Pure engineering genius.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold">
                      MC
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Marcus Chen</p>
                      <p className="text-xs text-white/70">CEO, Nexus Ventures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
