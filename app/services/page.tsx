import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Layers,
  Search,
  Share2,
  FileText,
  Target,
  Monitor,
  Cpu,
  BarChart2,
  Package,
  Calendar,
  MessageSquare,
  Edit3,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Brand Strategy & Positioning",
    desc: "Define your unique market position and build a cohesive brand identity that resonates with your target audience.",
    ideal: "Startups, Rebrands",
    outcome: "Clear, competitive differentiation and brand authority.",
  },
  {
    icon: Search,
    title: "SEO & Local SEO",
    desc: "Dominate search engine results to capture high-intent traffic from both global and local audiences.",
    ideal: "Local Businesses, E-commerce",
    outcome: "Sustainably increased organic reach and traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Full-spectrum management across LinkedIn, Instagram, and X to foster community and drive engagement.",
    ideal: "Restaurants, Retail, Lifestyle Brands",
    outcome: "High-value engagement and brand loyalty.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Creating data-driven articles, whitepapers, and video content that converts readers into active customers.",
    ideal: "B2B, SaaS, Education",
    outcome: "Enhanced authority and long-term lead generation.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    desc: "Precision-targeted PPC, Social Ads, and Programmatic campaigns designed for maximum Return on Ad Spend.",
    ideal: "Any business with a growth budget",
    outcome: "Immediate visibility and high-converting traffic.",
  },
  {
    icon: Monitor,
    title: "Website Strategy",
    desc: "Transforming your digital storefront into a high-performance sales machine through UX/UI and A/B testing.",
    ideal: "Businesses needing more leads from their site",
    outcome: "Significantly higher conversion rates and ROI.",
  },
  {
    icon: Cpu,
    title: "AI Marketing Consultation",
    desc: "Leveraging the latest AI technologies to automate workflows and unlock predictive customer insights.",
    ideal: "Scaling businesses, Tech companies",
    outcome: "Enhanced operational efficiency and data intelligence.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Performance",
    desc: "End-to-end data tracking and reporting to ensure every marketing dollar is working as hard as possible.",
    ideal: "Data-driven teams and founders",
    outcome: "Complete visibility into ROI and growth levers.",
  },
];

const engagementModels = [
  {
    icon: Package,
    title: "Starter Packages",
    desc: "Targeted solutions for rapid impact in specific marketing channels.",
  },
  {
    icon: Calendar,
    title: "Monthly Retainers",
    desc: "Ongoing strategic partnership to drive sustainable, long-term growth.",
  },
  {
    icon: MessageSquare,
    title: "Strategy Sessions",
    desc: "High-level consulting to align your digital assets with business goals.",
  },
  {
    icon: Edit3,
    title: "Custom Quotes",
    desc: "Bespoke strategies tailored to unique enterprise requirements.",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AI METRIX LLC services including brand strategy, SEO, social media marketing, content, paid ads, website strategy, AI consulting, and analytics.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-primary pt-[72px]"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24"
>
            <nav className="mb-6"
>
              <span className="text-[13px] text-muted"
>Home</span>
              <span className="mx-2 text-[13px] text-muted/40"
>&gt;</span>
              <span className="text-[13px] text-white"
>Services</span>
            </nav>
            <div className="max-w-4xl"
>
              <h1 className="font-heading font-bold text-white text-3xl md:text-[52px] leading-[1.1] mb-6"
>
                Digital Marketing Services
                <span className="block">From brand strategy to AI consultation.</span>
              </h1>
              <p className="text-muted text-lg max-w-2xl"
>
                From brand strategy to AI consulting — every service is designed to deliver measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8"
>
            <ScrollReveal className="mb-16"
>
              <span className="overline"
>OUR SERVICES</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3"
>
                Everything You Need to Compete and Win Online
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}
>
                  <div className="group bg-white border border-border rounded-lg p-8 card-hover h-full flex flex-col"
>
                    <s.icon size={36} className="text-accent mb-6" />
                    <h3 className="font-heading font-semibold text-[22px] text-primary mb-3"
>{s.title}</h3>
                    <p className="text-caption text-base leading-relaxed mb-6"
>{s.desc}</p>
                    <div className="mb-6 mt-auto"
>
                      <span className="inline-block bg-ice text-primary px-3 py-1 rounded-full text-xs font-semibold mb-2"
>
                        Ideal for: {s.ideal}
                      </span>
                      <p className="text-sm italic text-caption"
>Outcome: {s.outcome}</p>
                    </div>
                    <div className="flex gap-4"
>
                      <Link href="/contact/" className="btn-secondary flex-1 text-sm py-3"
>Learn More</Link>
                      <Link href="/contact/" className="btn-primary flex-1 text-sm py-3"
>Book Consultation</Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 lg:py-24 bg-ice"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8"
>
            <ScrollReveal className="text-center mb-16"
>
              <span className="overline"
>HOW WE WORK WITH YOU</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mt-3"
>
                Flexible Engagement Built Around Your Goals
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>
              {engagementModels.map((m, i) => (
                <ScrollReveal key={m.title} delay={i * 100}
>
                  <div className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
>
                    <div className="w-12 h-12 bg-ice rounded-full flex items-center justify-center mx-auto mb-6"
>
                      <m.icon size={24} className="text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold text-xl text-primary mb-2"
>{m.title}</h4>
                    <p className="text-caption text-sm"
>{m.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28 bg-primary relative overflow-hidden"
>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"
>
            <ScrollReveal
>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-white leading-tight mb-6"
>
                Not Sure Where to Start?
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto mb-10"
>
                Tell us about your business and we'll recommend the right service mix for your goals.
              </p>
              <Link href="/contact/" className="btn-primary"
>
                Book a Free Consultation
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
