import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Target,
  Telescope,
  Zap,
  Shield,
  TrendingUp,
  Brain,
  Briefcase,
  Utensils,
  BookOpen,
  Users,
  Code,
  BarChart2,
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "We harness AI and emerging technology to stay ahead of the curve",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparent, honest partnerships built on trust with every client",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "We measure our success solely by your measurable business results",
  },
  {
    icon: Brain,
    title: "Intelligence",
    desc: "Data-driven decisions, strategic thinking — never guesswork",
  },
];

const industries = [
  { icon: Briefcase, label: "Small Businesses" },
  { icon: Utensils, label: "Restaurants" },
  { icon: BookOpen, label: "Education" },
  { icon: Users, label: "Service Orgs" },
  { icon: Code, label: "Tech Companies" },
  { icon: BarChart2, label: "Financial Institutions" },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AI METRIX LLC, our mission, and the team behind our AI-powered digital marketing strategies.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main"
>
        {/* Hero */}
        <section className="bg-primary pt-[72px] mesh-bg"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32"
>
            <h1 className="font-heading font-bold text-white text-3xl md:text-5xl lg:text-[64px] leading-[1.1] mb-6 max-w-4xl"
>
              The Team Behind Your Growth
            </h1>
            <p className="text-muted text-lg max-w-2xl"
>
              Founded to help businesses compete and thrive in an AI-powered digital world.
            </p>
          </div>
        </section>

        {/* Company Intro */}
        <section className="py-16 lg:py-24 bg-white"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
>
            <ScrollReveal
>
              <span className="overline"
>OUR STORY</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3 mb-6"
>
                Built With Purpose, Driven by Results
              </h2>
              <div className="space-y-4 text-caption text-base leading-relaxed"
>
                <p
>
                  As the founder of AI METRIX LLC, I created this digital marketing company with a vision to
                  empower businesses in a rapidly evolving digital world. I understand that growth today depends
                  on more than visibility alone; it requires strategy, innovation, and the ability to adapt. That
                  is why AI METRIX LLC exists: to help businesses transform their ideas into strong brands,
                  connect with their audiences in meaningful ways, and grow with the support of the best digital
                  marketing solutions. Our work is driven by purpose, performance, and the success of every
                  client we serve
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal
>
              <div className="bg-ice rounded-xl overflow-hidden border border-accent/20 aspect-[3/4]"
>
                <img
                  src="/asset/founder.JPG"
                  alt="Founder portrait"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-ice"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8"
>
            <ScrollReveal
>
              <div className="bg-white p-10 lg:p-12 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
>
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-8"
>
                  <Target size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4"
>Our Mission</h3>
                <p className="text-caption text-base leading-relaxed"
>
                  To fuel client growth through innovative, data-driven digital marketing and AI-powered
                  consulting — delivering measurable and impactful results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}
>
              <div className="bg-white p-10 lg:p-12 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
>
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-8"
>
                  <Telescope size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-2xl text-primary mb-4"
>Our Vision</h3>
                <p className="text-caption text-base leading-relaxed"
>
                  To become the world's leading digital marketing agency and the definitive top choice
                  for businesses seeking to grow in an ever-evolving digital economy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 bg-primary"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8"
>
            <ScrollReveal className="text-center mb-16"
>
              <span className="overline"
>WHAT DRIVES US</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-white leading-tight mt-3"
>
                The Principles Behind Every Decision
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100}
>
                  <div className="bg-secondary rounded-xl p-8 border border-white/5 hover:border-accent/30 transition-colors"
>
                    <v.icon size={32} className="text-accent mb-6" />
                    <h4 className="font-heading font-semibold text-xl text-white mb-3"
>{v.title}</h4>
                    <p className="text-muted text-[15px] leading-relaxed"
>{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-24 bg-white"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8"
>
            <ScrollReveal className="mb-16"
>
              <span className="overline"
>OUR CLIENTS</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3"
>
                Industries We Specialize In
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6"
>
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.label} delay={i * 100}
>
                  <div className="group p-10 border border-border rounded-xl hover:border-accent hover:bg-ice transition-all text-center"
>
                    <ind.icon
                      size={40}
                      className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform"
                    />
                    <p className="font-heading font-semibold text-primary"
>{ind.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-secondary"
>
          <ScrollReveal
>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
>
              <h2 className="font-heading font-bold text-3xl md:text-[44px] text-white leading-tight mb-6"
>
                Ready to Work Together?
              </h2>
              <Link href="/contact/" className="btn-primary"
>
                Work With Us
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
