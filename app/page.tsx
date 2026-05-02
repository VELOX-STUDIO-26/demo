import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
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
  Brain,
  Map,
  Zap,
  Eye,
  Briefcase,
  Utensils,
  BookOpen,
  Users,
  Code,
  TrendingUp,
  Star,
  ArrowRight,
  Check,
  Lightbulb,
  Rocket,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Brand Strategy",
    desc: "Craft a brand identity that commands attention and trust",
  },
  {
    icon: Search,
    title: "SEO & Local SEO",
    desc: "Rank higher and get found by the right customers",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build community and drive engagement across channels",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Create content that educates, converts, and ranks",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    desc: "Precision campaigns that maximize every dollar spent",
  },
  {
    icon: Monitor,
    title: "Website Strategy",
    desc: "Convert your website into your best sales tool",
  },
  {
    icon: Cpu,
    title: "AI Marketing Consulting",
    desc: "Leverage AI to streamline, personalize, and scale",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    desc: "Make decisions backed by clear, real data",
  },
];

const industries = [
  {
    icon: Briefcase,
    title: "Small Businesses & Startups",
    desc: "Accelerating market entry and scaling growth",
  },
  {
    icon: Utensils,
    title: "Restaurants & Hospitality",
    desc: "Driving foot traffic and online reservations",
  },
  {
    icon: BookOpen,
    title: "Educational Institutions",
    desc: "Boosting enrollment and building reputation",
  },
  {
    icon: Users,
    title: "Service Organizations",
    desc: "Generating quality leads and community trust",
  },
  {
    icon: Code,
    title: "Tech Companies",
    desc: "Turning complex solutions into compelling stories",
  },
  {
    icon: TrendingUp,
    title: "Financial Institutions",
    desc: "Building authority and acquiring ideal clients",
  },
];

const whyUs = [
  {
    icon: Brain,
    title: "AI-Driven Insights",
    desc: "We use AI tools to uncover opportunities your competitors are missing",
  },
  {
    icon: Map,
    title: "Proven Strategy Framework",
    desc: "A battle-tested 4-step process that eliminates guesswork",
  },
  {
    icon: Zap,
    title: "Full-Service Execution",
    desc: "Strategy AND delivery — no need to manage multiple vendors",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Clear dashboards and reports so you always know what's working",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    desc: "We deep-dive into your business, audience, and market to uncover real growth opportunities.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Strategize",
    desc: "We build a data-driven, AI-informed marketing strategy tailored to your specific business goals.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Execute",
    desc: "Our team launches campaigns, content, and systems with speed, precision, and accountability.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Optimize",
    desc: "We track, analyze, and continuously improve every campaign to maximize your ROI over time.",
  },
];

const testimonials = [
  {
    quote:
      "AI METRIX completely transformed our lead generation process. Their AI-driven targeting lowered our acquisition costs by 40% in just three months.",
    name: "James Doherty",
    role: "Tech Startup Founder",
    initials: "JD",
  },
  {
    quote:
      "The team at AI METRIX built a marketing strategy that finally made sense for our local service business. We're booked out weeks in advance now.",
    name: "Sarah Thompson",
    role: "Service Business Owner",
    initials: "ST",
  },
  {
    quote:
      "Their approach to data analytics means we finally understand our customer journey. Highly recommend their strategic and technical expertise.",
    name: "Michael Reyes",
    role: "E-commerce Director",
    initials: "MR",
  },
];

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    category: "AI MARKETING",
    title: "How Predictive AI is Reshaping Customer Acquisition in 2024",
    excerpt:
      "Discover the latest machine learning models that are helping small businesses compete with enterprise marketing budgets.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    category: "STRATEGY",
    title: "The 5 Pillars of a Sustainable Growth Marketing Plan",
    excerpt:
      "Stop guessing with your ad spend. Learn the foundational elements every successful marketing strategy needs to thrive.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    category: "ANALYTICS",
    title: "Measuring What Matters: KPIs vs. Vanity Metrics",
    excerpt:
      "Are you tracking the right data? A deep dive into the metrics that actually correlate with revenue growth.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen bg-primary flex items-center pt-[72px] mesh-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20 lg:py-0">
            <div className="lg:col-span-7">
              <span className="overline text-white/80 mb-4">
                AI-POWERED DIGITAL MARKETING
              </span>
              <h1 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-[64px] leading-[1.1] mb-6">
                AI-Powered Digital Marketing for Businesses Ready to Grow
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
                AI METRIX LLC helps small businesses and growth-focused
                organizations build stronger brands, increase visibility, and
                achieve measurable results through digital marketing and
                AI-powered consulting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact/" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services/" className="btn-secondary-dark">
                  Explore Services
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> Free discovery call
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> No long-term contracts
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> Results-focused
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full"></div>
              <div className="relative bg-secondary/60 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-primary/80 rounded-lg p-5 border border-white/10">
                    <p className="text-muted text-sm mb-1">Organic Traffic</p>
                    <p className="text-white font-heading font-bold text-3xl">
                      +<StatCounter target={247} suffix="%" />
                    </p>
                  </div>
                  <div className="bg-primary/80 rounded-lg p-5 border border-white/10">
                    <p className="text-muted text-sm mb-1">Average ROI</p>
                    <p className="text-white font-heading font-bold text-3xl">
                      <StatCounter target={38} suffix="x" prefix="" />
                    </p>
                  </div>
                  <div className="bg-primary/80 rounded-lg p-5 border border-white/10">
                    <p className="text-muted text-sm mb-1">Client Retention</p>
                    <p className="text-white font-heading font-bold text-3xl">
                      <StatCounter target={98} suffix="%" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST STRIP ─── */}
        <section className="bg-ice border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-16">
              {[
                { icon: Brain, label: "AI-Powered Strategy" },
                { icon: BarChart2, label: "Data-Driven Campaigns" },
                { icon: Briefcase, label: "Small Business Focused" },
                { icon: Target, label: "Measurable ROI" },
                { icon: Compass, label: "Trusted Consulting" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2"
                >
                  <item.icon size={28} className="text-accent" />
                  <span className="font-body font-semibold text-[13px] uppercase text-primary tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES OVERVIEW ─── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">WHAT WE DO</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight mb-4">
                Intelligent Marketing Solutions Built for Growth
              </h2>
              <p className="text-caption text-lg">
                Every service we offer is built to deliver one thing —
                measurable business growth.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <Link
                    href="/services/"
                    className="group block bg-white border border-border rounded-lg p-7 card-hover"
                  >
                    <s.icon
                      size={32}
                      className="text-accent mb-4 group-hover:scale-110 transition-transform"
                    />
                    <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-caption text-[15px] leading-relaxed mb-4">
                      {s.desc}
                    </p>
                    <span className="text-accent font-semibold text-[15px] flex items-center gap-1">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES ─── */}
        <section className="py-16 lg:py-24 bg-ice">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">WHO WE SERVE</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight">
                Built for the Businesses That Drive Our Economy
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.title} delay={i * 100}>
                  <div className="bg-white rounded-lg p-8 border border-border shadow-sm flex flex-col gap-4">
                    <ind.icon size={32} className="text-accent" />
                    <h3 className="font-heading font-semibold text-xl text-primary">
                      {ind.title}
                    </h3>
                    <p className="text-caption text-[15px] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY AI METRIX ─── */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">WHY US</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-white leading-tight mb-4">
                Why Businesses Choose AI METRIX
              </h2>
              <p className="text-muted text-lg">
                We&apos;re not just another marketing agency. We combine AI
                intelligence with human strategy to deliver results others
                can&apos;t.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="bg-secondary rounded-lg p-8 border border-accent/20">
                    <item.icon
                      size={32}
                      className="text-accent mb-4"
                    />
                    <h3 className="font-heading font-semibold text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">HOW WE WORK</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight">
                From Strategy to Results — Every Step
              </h2>
            </ScrollReveal>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] border-t-2 border-dashed border-accent/30 z-0"></div>
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 150}>
                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-accent flex items-center justify-center relative overflow-hidden shadow-sm">
                      <span className="absolute font-heading font-bold text-[80px] text-accent/10 -bottom-4 select-none">
                        {step.num}
                      </span>
                      <step.icon
                        size={32}
                        className="text-primary relative z-10"
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-primary uppercase mt-2">
                      {step.title}
                    </h3>
                    <p className="text-caption text-[15px] leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESULTS / TESTIMONIALS ─── */}
        <section className="py-16 lg:py-24 bg-ice">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">CLIENT RESULTS</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight">
                Real Businesses. Real Growth.
              </h2>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { val: 247, suffix: "%", label: "Avg. Organic Traffic Increase" },
                  { val: 38, suffix: "x", label: "Avg. Return on Ad Spend" },
                  { val: 150, suffix: "+", label: "Businesses Served" },
                  { val: 98, suffix: "%", label: "Client Satisfaction Rate" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <p className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
                      <StatCounter target={stat.val} suffix={stat.suffix} />
                    </p>
                    <p className="text-caption text-[15px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 150}>
                  <div className="bg-white rounded-lg border border-border p-8 flex flex-col gap-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={18}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-body italic text-base leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                      <div className="w-12 h-12 rounded-full bg-ice flex items-center justify-center text-caption font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-primary">
                          {t.name}
                        </p>
                        <p className="text-caption text-[13px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED BLOG ─── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="overline">LATEST INSIGHTS</span>
              <h2 className="font-heading font-semibold text-3xl md:text-[40px] text-primary leading-tight">
                Marketing Intelligence Worth Reading
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 150}>
                  <Link
                    href="/blog/"
                    className="group block"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 bg-accent text-white text-[11px] font-medium rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-primary leading-tight mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-caption text-[15px] line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <span className="text-accent font-semibold text-[15px] flex items-center gap-1">
                      Read More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-secondary">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
              <span className="overline">READY TO GROW?</span>
              <h2 className="font-heading font-bold text-3xl md:text-[44px] text-white leading-tight mb-6">
                Let&apos;s Build Your Growth Strategy Together
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Book a free strategy consultation and discover how AI-powered
                marketing can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact/" className="btn-primary">
                  Book a Strategy Consultation
                </Link>
                <Link href="/contact/" className="btn-secondary-dark">
                  Get a Custom Marketing Plan
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
