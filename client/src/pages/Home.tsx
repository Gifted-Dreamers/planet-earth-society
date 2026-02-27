/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Home page: Hero with user-provided image, mission statement, platform preview,
 * trust pillars, and CTA. Deep teal + moss + terracotta palette.
 */
import { Link } from "wouter";
import { Shield, Cpu, Users, Lock, ArrowRight, Leaf, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const HERO_DESKTOP = "/images/hero-desktop.webp";
const HERO_MOBILE = "/images/hero-mobile.webp";
const PLATFORM_IMG = "/images/pes-platform-section.webp";
const PRIVACY_IMG = "/images/pes-privacy-section.webp";

const pillars = [
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Complete digital rights over the content you create, share, or participate in. Your data remains yours.",
  },
  {
    icon: Cpu,
    title: "Trusted Computation",
    description:
      "New cryptographically secure chips enable predictable and measurable computation you can trust.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "We are a social purpose organization motivated to maximize collaboration, not profits.",
  },
  {
    icon: Lock,
    title: "Unhackable Networks",
    description:
      "Peer-to-peer mesh networking with root-of-trust cryptography for truly secure communication.",
  },
  {
    icon: Leaf,
    title: "The Dew, Not The Cloud",
    description:
      "Small IoT devices form local resources rather than relying on distant, unreliable cloud infrastructure.",
  },
  {
    icon: Globe,
    title: "Digital Rights for All",
    description:
      "Assured privacy with authorized access provisions. Reinventing what privacy means in the digital world.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <picture>
          <source media="(min-width: 768px)" srcSet={HERO_DESKTOP} />
          <img
            src={HERO_MOBILE}
            alt="Nature meets technology - a green hand reaching toward a robotic hand"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />

        <div className="container relative z-10 py-32 lg:py-40">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-4">
                Social Purpose Technology
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Rebuilding Trust in a{" "}
                <span className="text-moss-light">Digital World</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-stone/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
                Planet Earth Society is building unhackable networks and reinventing digital privacy.
                Technology for the people, by the people.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone/40 text-stone font-semibold rounded-md hover:border-stone hover:text-white transition-colors duration-200"
                >
                  Collaborate With Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">
                Our Foundation
              </p>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-4">
                Trust is the Most Essential Building Block
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Society functions on the basis of trust among humans, and soon computers. We're creating
                that trust through innovation in hardware, software, and networking.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 80}>
                <div className="group p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-teal-mid/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-teal-deep/10 flex items-center justify-center mb-4 group-hover:bg-teal-deep/20 transition-colors">
                    <pillar.icon className="w-6 h-6 text-teal-deep" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <SectionDivider from="oklch(0.96 0.008 80)" to="oklch(0.35 0.06 195)" variant="roots" />
      <section className="bg-teal-deep py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-3">
                  Our Platform
                </p>
                <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-stone mb-6">
                  Solutions for Big Problems
                </h2>
                <p className="text-stone/70 leading-relaxed mb-6">
                  Modern computing has been built on a hodgepodge of unreliable systems that were never
                  designed to be secure or even correct. By revisiting the foundations of networking,
                  operating systems and computer languages, we can build a holistic privacy-assured
                  solution unlike anything seen before.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "The Dew replaces The Cloud — distributed IoT computation",
                    "Peer-to-peer mesh networking across neighborhoods",
                    "Root-of-trust cryptography capable chips",
                    "Actor-based programming environments",
                    "Multi-factor biometric identity — no passwords",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-terracotta-light font-semibold hover:text-terracotta transition-colors"
                >
                  Explore the Platform
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="relative">
                <img
                  src={PLATFORM_IMG}
                  alt="Planet Earth Society platform visualization - nature meets technology network"
                  className="rounded-lg shadow-2xl w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-terracotta/30 rounded-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <SectionDivider from="oklch(0.35 0.06 195)" to="oklch(0.96 0.008 80)" variant="wave" />

      {/* Privacy Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative order-2 lg:order-1">
                <img
                  src={PRIVACY_IMG}
                  alt="Digital privacy shield with natural elements"
                  className="rounded-lg shadow-xl w-full"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="order-1 lg:order-2">
                <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">
                  Privacy Matters
                </p>
                <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-6">
                  Privacy Means Individuality and Autonomy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Personal data should be just that — personal. We're redefining digital privacy in a
                  way only possible with innovations like ours on top of highly securable hardware.
                  Within our platform you retain complete control over the digital rights and management
                  of your shared data.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Who We Are",
                      text: "A social purpose organization motivated to maximize collaboration, not profits.",
                    },
                    {
                      title: "What We Do",
                      text: "Building technology for a world-wide social purpose network for the sake of goodness.",
                    },
                    {
                      title: "How We Do It",
                      text: "Using new cryptographically secure chips, we rewrite all of software using a new actor-based language.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 bg-stone-warm rounded-lg border border-border"
                    >
                      <h4 className="font-semibold text-teal-deep text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-teal-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-stone/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-stone/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-stone/20 rounded-full" />
        </div>
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-stone mb-4">
              You Have the Power to Influence the World
            </h2>
            <p className="text-stone/70 text-lg max-w-xl mx-auto mb-8">
              We are all types of people — developers, activists, change agents, scientists — we are
              human beings working towards positive change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors"
              >
                Come Collaborate With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-stone/30 text-stone font-semibold rounded-md hover:border-stone transition-colors"
              >
                View Careers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
