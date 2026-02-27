/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Careers page: Values, mission, open positions
 */
import { Link } from "wouter";
import { ArrowRight, Code, Cpu, Network, Shield, Wrench, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CAREERS_IMG = "/images/pes-careers-section.webp";

const roles = [
  {
    icon: Code,
    title: "Generalist C Programmer",
    description: "Even our C code is garbage collected — a very unique environment. Work on the core runtime and systems layer.",
  },
  {
    icon: Layers,
    title: "Application Developers / Scripters",
    description: "Build applications using our actor-based programming environment and HacktorScript language.",
  },
  {
    icon: Cpu,
    title: "Systems Programmers",
    description: "Work on low-level systems including garbage collection, hypervisors, GPIO, SPI, EFUSE and more.",
  },
  {
    icon: Network,
    title: "Networking Engineers",
    description: "Clean room coded peer-to-peer Layer 2 B.A.T.M.A.N. mesh networking. Write to the hardware directly.",
  },
  {
    icon: Shield,
    title: "Cryptography Engineers",
    description: "Build broad authorization infrastructure with quantum-resistant algorithms and cryptography toolsets.",
  },
  {
    icon: Wrench,
    title: "Hardware Engineers",
    description: "Lockless queuing data structures, interrupt drivers, hypervisor scheduling, and root-of-trust chips.",
  },
];

const experiences = [
  "Networking — peer-to-peer Layer 2 mesh, revising network protocols on the fly",
  "Garbage collection — hybrid reference counted and cycle detection schemes",
  "Hardware — lockless queuing, interrupt drivers, GPIO, SPI, EFUSE",
  "Cryptography — quantum-resistant algorithms, broad authorization infrastructure",
  "Functional programming — immutable data structures, what comes after Objects and >>=",
];

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAREERS_IMG} alt="Diverse hands reaching toward a glowing network sphere" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        </div>
        <div className="container relative z-10 pt-8">
          <AnimatedSection>
            <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-3">Careers</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-white mb-6 max-w-2xl">
              Join Our Team
            </h1>
            <p className="text-stone/80 text-lg max-w-2xl leading-relaxed">
              We are all types of people: developers, engineers, activists, scientists — and we're here
              to work towards positive change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedSection>
              <div>
                <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Values</p>
                <h2 className="font-[var(--font-display)] text-3xl text-teal-deep mb-4">
                  We Believe in Trust and Personal Integrity
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No person is inherently better than any other. Variations in intelligence across many
                  different domains exist, variations in ambition and accomplishment as well. Yet, none of
                  us chose our parents.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div>
                <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Mission</p>
                <h2 className="font-[var(--font-display)] text-3xl text-teal-deep mb-4">
                  Collaboration Over Competition
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Collaboration is a better mechanism than competition for resource allocation and distribution.
                  Through advances in computer software primarily we intend to "level the playing field" by
                  providing perfect software, reliably executed, for the people and by the people.
                </p>
                <p className="text-foreground font-semibold italic">
                  The essence of technology is people and communication.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 lg:py-28 bg-stone-warm">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Open Positions</p>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-4">
                We're Looking For
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <AnimatedSection key={role.title} delay={i * 80}>
                <div className="bg-card p-6 rounded-lg border border-border hover:border-teal-mid/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-teal-deep/10 flex items-center justify-center mb-4">
                    <role.icon className="w-5 h-5 text-teal-deep" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{role.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-teal-deep mb-8">
              Experiences We Would Find Interesting
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <div className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-teal-deep">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-stone mb-4">
              You Have the Power to Influence the World
            </h2>
            <p className="text-stone/70 mb-6 max-w-lg mx-auto">
              Come collaborate with us. Send your application or questions to our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:collaborate@theplanetearthsociety.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-stone/30 text-stone font-semibold rounded-md hover:border-stone transition-colors">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
