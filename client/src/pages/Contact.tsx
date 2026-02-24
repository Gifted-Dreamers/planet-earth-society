/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Contact page: Lead form connected to n8n webhook
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const N8N_WEBHOOK_URL = "https://n8n.cloudpublica.org/webhook/pes-contact-form";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "general",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "website-contact-form",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", interest: "general" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 lg:pt-28 pb-12 bg-background">
        <div className="container pt-4">
          <AnimatedSection>
            <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-teal-deep mb-4 max-w-2xl">
              Come Collaborate With Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              You have the power to influence the world. Reach out and let's build something meaningful together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-teal-deep rounded-lg p-6">
                  <h3 className="font-[var(--font-display)] text-xl text-stone mb-6">Get in Touch</h3>
                  <div className="space-y-5">
                    <a
                      href="mailto:collaborate@theplanetearthsociety.com"
                      className="flex items-start gap-3 text-stone/80 hover:text-terracotta-light transition-colors group"
                    >
                      <div className="w-9 h-9 rounded bg-stone/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-stone/50 mb-0.5">Email</p>
                        <p className="text-sm break-all">collaborate@theplanetearthsociety.com</p>
                      </div>
                    </a>
                    <a
                      href="tel:+15613768781"
                      className="flex items-start gap-3 text-stone/80 hover:text-terracotta-light transition-colors group"
                    >
                      <div className="w-9 h-9 rounded bg-stone/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/20 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-stone/50 mb-0.5">Phone</p>
                        <p className="text-sm">561.376.8781</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-stone/80">
                      <div className="w-9 h-9 rounded bg-stone/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-stone/50 mb-0.5">Location</p>
                        <p className="text-sm">Los Altos, California</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-warm rounded-lg p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Looking to Join?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Send your application or questions directly to our team.
                  </p>
                  <a
                    href="mailto:collaborate@theplanetearthsociety.com"
                    className="text-terracotta text-sm font-semibold hover:text-terracotta-light transition-colors"
                  >
                    collaborate@theplanetearthsociety.com
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={150}>
              <div className="lg:col-span-2">
                {status === "success" ? (
                  <div className="bg-moss/10 border border-moss/30 rounded-lg p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-moss mx-auto mb-4" />
                    <h3 className="font-[var(--font-display)] text-2xl text-teal-deep mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-terracotta font-semibold text-sm hover:text-terracotta-light transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-teal-mid focus:border-teal-mid outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-teal-mid focus:border-teal-mid outline-none transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-teal-mid focus:border-teal-mid outline-none transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="careers">Careers</option>
                        <option value="platform">Platform / Technology</option>
                        <option value="media">Media / Press</option>
                        <option value="investment">Investment</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-teal-mid focus:border-teal-mid outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-foreground text-sm focus:ring-2 focus:ring-teal-mid focus:border-teal-mid outline-none transition-colors resize-none"
                        placeholder="Tell us how you'd like to collaborate..."
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
