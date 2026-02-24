import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-stone/80">
      {/* Organic divider */}
      <svg viewBox="0 0 1440 60" className="w-full -mb-1" preserveAspectRatio="none">
        <path
          d="M0,60 C360,0 720,40 1080,10 C1260,0 1380,20 1440,30 L1440,60 Z"
          fill="oklch(0.35 0.06 195)"
        />
      </svg>

      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-moss flex items-center justify-center text-white font-bold text-sm">
                PES
              </div>
              <span className="font-[var(--font-display)] text-stone text-lg">
                Planet Earth Society
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              A social purpose software company building unhackable networks and reinventing digital
              privacy for the people.
            </p>
            <p className="text-xs text-stone/50">
              The essence of technology is about people and communication.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-stone font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About PES", href: "/about" },
                { label: "Platform", href: "/platform" },
                { label: "Podcast", href: "/podcast" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-terracotta-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-stone font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Founder", href: "/founder" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-terracotta-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:collaborate@theplanetearthsociety.com"
                className="flex items-center gap-2 text-sm hover:text-terracotta-light transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>collaborate@theplanetearthsociety.com</span>
              </a>
              <a
                href="tel:+15613768781"
                className="flex items-center gap-2 text-sm hover:text-terracotta-light transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>561.376.8781</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-stone/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone/50">
            &copy; 2026 Planet Earth Society, Inc. All rights reserved.
          </p>
          <p className="text-xs text-stone/40">
            Innovation is imagination. Come join us to rebuild the Planet.
          </p>
        </div>
      </div>
    </footer>
  );
}
