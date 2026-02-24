/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Platform page: Technical platform details, actor-oriented programming
 */
import { Link } from "wouter";
import { ArrowRight, Cloud, Wifi, Fingerprint, Code, Database, Cpu } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const PLATFORM_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/VK2BPOdXzOkDT8Maot7Qip/sandbox/Ul0MbzM2JOiObjJGmcqQOm-img-1_1771911498000_na1fn_cGVzLXBsYXRmb3JtLXNlY3Rpb24.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVksyQlBPZFh6T2tEVDhNYW90N1FpcC9zYW5kYm94L1VsME1iek0ySk9pT2JqSkdtY3FRT20taW1nLTFfMTc3MTkxMTQ5ODAwMF9uYTFmbl9jR1Z6TFhCc1lYUm1iM0p0TFhObFkzUnBiMjQuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vnb3yxOiWuEe1e1TAMdP3lDyvPZBDhm8g6hfH5QRyum399Sqqwemy6zt6v33IFaT0cbVxLzch4EbsqKn2CdgrQBM310NYuV7~~q2aT4WrByEOnhbZNi5fRYeQh7~mHfHoyaK8xGOE~1S~aQ-TEV30rF7rjgSEPOs6Tl24GLI2ThThc-d0D9QkWae-kA2YYgZkJvuMyOJvUCQvLbkB-oLCCJAecB61hqTH4Sb-LbWfMEyHGJnNPux7gerEiPjyVEnOy5lznwQ2HjO6BFGnsGzItZ9mk5bPlXET-kUml9mMNoVvLBD-Sov6FVGlMGPDmoOe89~oNGfo1KTHmZn4BeM6w__";

const innovations = [
  {
    icon: Cloud,
    title: "The Dew Replaces The Cloud",
    description: "Small IoT devices have the potential for widely-distributed computation and storage. When interconnected, they form local resources rather than a distant, unreliable cloud.",
  },
  {
    icon: Wifi,
    title: "Peer-to-Peer Mesh Networking",
    description: "We reject nearly all pervasive internet infrastructure as unsecurable, replacing it with peer-to-peer mesh networking across neighborhoods using our own encrypted datagram technologies.",
  },
  {
    icon: Cpu,
    title: "Root-of-Trust Hardware",
    description: "Newly available root-of-trust cryptography capable chips — like those powering the unhacked Xbox One and PlayStation 4 controllers — that self-identify and always-phone-home.",
  },
  {
    icon: Code,
    title: "Actor-Based Programming",
    description: "Log-structured actor-based programming environments that can inter-operably host imperative, functional, and logic programming languages.",
  },
  {
    icon: Database,
    title: "Assured Privacy",
    description: "A new form of privacy — assured privacy — with an authorized and tracked side-door access provision. Effective privacy in the digital world, reinvented.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Identity",
    description: "Multi-factor biometrics including AI face, body, and pace recognition to create a privacy-assured identity. No more passwords.",
  },
];

export default function Platform() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PLATFORM_IMG} alt="Nature meets technology network visualization" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/40" />
        </div>
        <div className="container relative z-10 pt-8">
          <AnimatedSection>
            <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-3">Platform</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-white mb-6 max-w-3xl">
              Solutions for Big Problems
            </h1>
            <p className="text-stone/80 text-lg max-w-2xl leading-relaxed">
              Modern computing was never designed to be secure or correct. By revisiting the foundations
              of networking, operating systems and computer languages, we build a holistic privacy-assured
              solution unlike anything seen before.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Key Innovations</p>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-4">
                Our Most Important Ideas
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {innovations.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="group p-6 lg:p-8 bg-card rounded-lg border border-border hover:border-moss/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-moss/10 flex items-center justify-center mb-4 group-hover:bg-moss/20 transition-colors">
                    <item.icon className="w-6 h-6 text-moss" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Actor-Oriented Programming */}
      <SectionDivider from="oklch(0.96 0.008 80)" to="oklch(0.93 0.012 80)" variant="gentle" />
      <section className="py-20 lg:py-28 bg-stone-warm">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Technical Deep Dive</p>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-8">
              Actor-Oriented Programming
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="prose prose-lg max-w-none">
              <div className="bg-card p-6 lg:p-8 rounded-lg border border-border mb-8">
                <h3 className="font-[var(--font-display)] text-xl text-teal-deep mb-3">What is an Actor?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Actors have been around since the early 70s and have been influential in both language design
                  and program design. The essence of an actor is that it encapsulates state change and forbids
                  shared mutable state. Actor programs are — by definition — asynchronous message passing systems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An actor — simply put — is a computation that on receipt of a message, can do any combination of:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-deep mt-2 shrink-0" />
                    <span>Create a finite number of new actors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-deep mt-2 shrink-0" />
                    <span>Send a finite number of messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-deep mt-2 shrink-0" />
                    <span>Change its behavior for processing the next message</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 lg:p-8 rounded-lg border border-border mb-8">
                <h3 className="font-[var(--font-display)] text-xl text-teal-deep mb-3">Why Actors Matter</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Messages can contain references to actors, providing a conceptual unification of Operating System
                  privileges ("sandboxes"), control flow (there are no while loops), and networking — aside from
                  latency, there is no functional difference between an actor running locally and one on another
                  machine halfway around the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As Einstein taught us, one can never know what state anything anywhere else really is in. Actors
                  embrace this: we know from a message what was true at the time the message was sent, but not
                  whether it is currently true. This is a fundamental difference in philosophy with real world
                  physics on the side of actors.
                </p>
              </div>

              <div className="bg-teal-deep p-6 lg:p-8 rounded-lg">
                <h3 className="font-[var(--font-display)] text-xl text-stone mb-3">Beyond Turing Machines</h3>
                <p className="text-stone/70 leading-relaxed mb-4">
                  Imperative, functional, and logic languages can all be implemented in actors. Dr Carl Hewitt
                  (co-inventor of the actor model) has proven that actor math is more powerful than Turing Machines.
                </p>
                <p className="text-stone/70 leading-relaxed font-semibold italic">
                  "It's actors all the way down" — not turtles.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-teal-deep mb-4">
              Ready to Build With Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Explore opportunities to code with our actor language and runtime.
              Coders receive perpetual digital rights to their work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors">
                View Careers <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-deep text-teal-deep font-semibold rounded-md hover:bg-teal-deep hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
