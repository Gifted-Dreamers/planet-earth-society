/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Navbar: Deep teal background, warm stone text, terracotta accent on hover
 * Sticky top, glassmorphic on scroll, hamburger for mobile
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About PES", href: "/about" },
      { label: "Our Founder", href: "/founder" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Platform", href: "/platform" },
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-teal-deep/95 backdrop-blur-md shadow-lg"
          : "bg-teal-deep"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-moss flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            PES
          </div>
          <span className="text-stone font-[var(--font-display)] text-lg tracking-tight hidden sm:block">
            Planet Earth Society
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md flex items-center gap-1 ${
                    location.startsWith("/about") || location === "/founder" || location === "/careers"
                      ? "text-terracotta-light"
                      : "text-stone/80 hover:text-stone"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {/* Invisible bridge to prevent gap between button and dropdown */}
                <div className="absolute top-full left-0 h-2 w-48" />
                <div
                  className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${
                    aboutOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                <div className="bg-card rounded-lg shadow-xl border border-border overflow-hidden">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location === child.href
                          ? "bg-teal-deep/10 text-teal-deep font-medium"
                          : "text-foreground hover:bg-stone-warm"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  location === link.href
                    ? "text-terracotta-light"
                    : "text-stone/80 hover:text-stone"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 text-sm font-semibold bg-terracotta text-white rounded-md hover:bg-terracotta-light transition-colors duration-200"
          >
            Collaborate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-stone/80 hover:text-stone transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container pb-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-stone/80 hover:text-stone text-sm font-medium rounded-md"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-3 py-2 text-sm rounded-md ${
                          location === child.href
                            ? "text-terracotta-light font-medium"
                            : "text-stone/60 hover:text-stone"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                  location === link.href
                    ? "text-terracotta-light"
                    : "text-stone/80 hover:text-stone"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block mx-3 mt-2 px-5 py-2.5 text-sm font-semibold bg-terracotta text-white rounded-md text-center hover:bg-terracotta-light transition-colors"
          >
            Collaborate
          </Link>
        </div>
      </div>
    </nav>
  );
}
