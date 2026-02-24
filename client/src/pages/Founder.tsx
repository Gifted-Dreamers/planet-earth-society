/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Founder page: Blaine Garst biography, timeline, achievements
 */
import { Link } from "wouter";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timelineEvents = [
  { year: "1974", text: "Math & Science award, University Laboratory High School" },
  { year: "1976", text: "BA Economics, University of Illinois" },
  { year: "1977", text: "MS Computer Science, UCLA — Bell Labs MTS at age 21" },
  { year: "1981", text: "First person to boot UNIX on 11/782 dual processor" },
  { year: "1987", text: "Co-architect of SVR4 (Solaris) with Bill Joy of Sun Microsystems" },
  { year: "1990", text: "Joined NeXT Computer, Inc." },
  { year: "1991", text: "Objective-C Protocols — later adopted by Java as Interfaces" },
  { year: "1992", text: "Co-authored Foundation framework — basis for all Apple device programming" },
  { year: "1997", text: "Put in charge of NeXTStep port to Apple Hardware" },
  { year: "2007", text: "ObjC2: Garbage Collection, for..in, @properties" },
  { year: "2008", text: "Blocks in C, Objective-C, C++ — fueling the rise of Apps" },
  { year: "2010", text: "_Atomic in the C11 standard; Actor collaboration with Dr Carl Hewitt" },
  { year: "2011", text: "Departed Apple to focus on security and multi-core programming" },
  { year: "2012", text: "Founded The Planet Earth Society, Inc." },
  { year: "2014", text: "Multiple writer multiple reader 0 memory lockless FIFO" },
];

export default function Founder() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-24 lg:pt-28 pb-16 bg-background">
        <div className="container pt-4">
          <AnimatedSection>
            <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Our Founder</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-teal-deep mb-8 max-w-3xl">
              Blaine Garst
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <AnimatedSection>
              <div className="lg:col-span-1">
                <blockquote className="bg-teal-deep text-stone p-6 rounded-lg relative">
                  <div className="absolute -top-3 left-6 text-5xl text-terracotta leading-none">"</div>
                  <p className="text-sm leading-relaxed pt-4 italic">
                    Blaine Garst had a primal hand in POSIX, Objective-C and Foundation, Apple, Java, C11, C17,
                    and elliptical encryption. An emotional impact magician, a from-beans chocolatier, marathon
                    bicyclist, his new gig is unhackable for and by the people.
                  </p>
                  <cite className="block mt-4 text-xs text-terracotta-light not-italic font-semibold">
                    — Patriotic Millionaires
                  </cite>
                </blockquote>

                <div className="mt-6 space-y-4">
                  {[
                    { icon: GraduationCap, text: "BS Economics (age 20), MS Computer Science (age 21)" },
                    { icon: Briefcase, text: "Bell Labs, NeXT Computer, Apple Computer" },
                    { icon: Award, text: "Two dozen patents: encryption to distributed memory management" },
                  ].map((item) => (
                    <div key={item.text} className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded bg-stone-warm flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-teal-deep" />
                      </div>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="lg:col-span-2">
                <h2 className="font-[var(--font-display)] text-2xl text-teal-deep mb-4">About Our Founder</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Blaine is a software architect and technologist having plied his trade at Bell Labs, NeXT Computer,
                    and Apple Computer, with two dozen patents ranging from encryption to distributed memory management.
                  </p>
                  <p>
                    He elevated Bell Labs' commercial System V UNIX product to state of the art in the 80's. He then
                    worked directly with Bill Joy of Sun Microsystems to unify the UNIX industry by merging its two
                    dominant variants, forming SVR4 (Solaris), which became the POSIX standard and the basis of all
                    Open Source Unix variations including Linux and FreeBSD.
                  </p>
                  <p>
                    At NeXT, he introduced multiple inheritance of abstraction (Java's "interfaces") to Objective-C,
                    which has been adopted by Java, C#, Ruby, Go, Swift and more. He co-authored the "Foundation"
                    starter kit for applications, which continues to form the basis for all application programming
                    on all Apple devices. After Apple's acquisition of NeXT, Blaine was put in charge of the OS effort.
                    His innovations in programming fueled the rise of Apps on both Apple and Android platforms.
                  </p>
                  <p>
                    Since leaving Apple in 2011, Blaine has focused on the fundamental issues of security and multi-core
                    programming. In 2012, he founded The Planet Earth Society, Inc. — a social purpose corporation
                    building a social network for good. He is also an active member and contributor to the Patriotic
                    Millionaires.
                  </p>
                  <p>Blaine lives in Los Altos, CA.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-stone-warm">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl text-teal-deep mb-3">
                A Brief Journey Through Space & Time
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, i) => (
              <AnimatedSection key={i} delay={i * 40}>
                <div className="flex gap-4 lg:gap-6 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-deep shrink-0 mt-1.5" />
                    {i < timelineEvents.length - 1 && (
                      <div className="w-px flex-1 bg-teal-deep/20 mt-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-terracotta font-semibold text-sm font-[var(--font-mono)]">
                      {event.year}
                    </span>
                    <p className="text-foreground text-sm mt-0.5">{event.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-deep">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-stone mb-4">
              Innovation is Imagination
            </h2>
            <p className="text-stone/70 mb-6 max-w-lg mx-auto">
              Join Blaine and the team in building the future of trusted computation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors">
              Collaborate With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
