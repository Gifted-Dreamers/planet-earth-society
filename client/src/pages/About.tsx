/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * About PES page: Company story, mission, values
 */
import { Link } from "wouter";
import { ArrowRight, Heart, Shield, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ABOUT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/VK2BPOdXzOkDT8Maot7Qip/sandbox/Ul0MbzM2JOiObjJGmcqQOm-img-2_1771911484000_na1fn_cGVzLWFib3V0LXNlY3Rpb24.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVksyQlBPZFh6T2tEVDhNYW90N1FpcC9zYW5kYm94L1VsME1iek0ySk9pT2JqSkdtY3FRT20taW1nLTJfMTc3MTkxMTQ4NDAwMF9uYTFmbl9jR1Z6TFdGaWIzVjBMWE5sWTNScGIyNC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=btIc0ozMCh08hZDhpCbZTr21mjq5QsOdtoYwPL4Fuqdb5~v~896CWFITHxqDylRjP2EqrXiVZS7nBTgZBVsF6JAiSMmMb0m8Grw-uaqkzCFhbTBU3TVfvXX6M~gFwuREETVzpZuW6ZHHio5Qu50UnhlV2pl5XYN7HWQ3k-d4Nd7gDMoAAajcUmv0zre4gl82wIISj5ZqyR8e4UNgkW5T0T8nVnccbRJKbfXd2ux~ZKjqY66XvinvM6fKG7TWJuFX6k9-tFQK9I1608PyXl6LFTBdNasEhWBgUMXSaaDUDrIfwXzqishyPutaAdQrXlpvL3tbBnqSCwRUVM2Y5-QPUA__";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="Aerial forest with digital grid" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
        </div>
        <div className="container relative z-10 pt-8">
          <AnimatedSection>
            <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-3">About PES</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-white mb-6 max-w-2xl">
              We're Here to Make Things Better
            </h1>
            <p className="text-stone/80 text-lg max-w-2xl leading-relaxed">
              The Planet Earth Society, Inc. is a social purpose software company building an unhackable
              social network for good. Our first mission is to build computer systems that re-invent privacy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <div>
                <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
                <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-6">
                  Privacy by Design
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Individuals can trust that data about them will be stored, shared, and used in ways that are
                  agreeable with their interests but with respect to the circumstances in which it was collected.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Trust is the most essential building block of a sustainable digital world. Planet Earth Society
                  is an emerging collaboration that creates trust among computers, which requires a new class of
                  computer chips and a new formulation of software enabling predictable and measurable computation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a programming platform, we provide opportunities for coders to build Internet of Things
                  software using our own actor language and runtime. Coders are provided with perpetual digital
                  rights to their work.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "Social Purpose",
                    text: "We are a social purpose organization motivated to maximize collaboration, not profits. Building technology for a world-wide network for the sake of goodness.",
                  },
                  {
                    icon: Shield,
                    title: "Complete Digital Rights",
                    text: "You have complete digital rights over the content you create, share, or just participate in. Your data, your rules.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation is Imagination",
                    text: "We are all types of people — technology developers, activists, change agents, scientists — human beings working towards positive change.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-card rounded-lg border border-border">
                    <div className="w-10 h-10 rounded-lg bg-teal-deep/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal-deep" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who We Are Grid */}
      <section className="py-20 lg:py-28 bg-stone-warm">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-4">
                Trust in Technology
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Society functions on the basis of trust among humans, and soon computers.
                Our mission today is to build technology that can be trusted.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Who We Are",
                text: "We are a social purpose organization motivated to maximize collaboration, not profits.",
                color: "bg-teal-deep",
              },
              {
                title: "What We Do",
                text: "We are building the technology for a world-wide social purpose network for the sake of goodness.",
                color: "bg-moss",
              },
              {
                title: "How We Do It",
                text: "Using new cryptographically secure chips, we rewrite all of software using a new actor-based language.",
                color: "bg-terracotta",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className={`${item.color} rounded-lg p-8 text-white h-full`}>
                  <h3 className="font-[var(--font-display)] text-2xl mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-teal-deep mb-4">
              Come Join Us to Rebuild the Planet
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              You have the power to influence the world. Come collaborate with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/founder" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-deep text-teal-deep font-semibold rounded-md hover:bg-teal-deep hover:text-white transition-colors">
                Meet Our Founder
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
