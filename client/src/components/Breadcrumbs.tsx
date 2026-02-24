import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/about": "About PES",
  "/founder": "Our Founder",
  "/careers": "Careers",
  "/platform": "Platform",
  "/podcast": "Podcast",
  "/blog": "Blog",
  "/contact": "Contact",
};

const routeParents: Record<string, { label: string; href: string }[]> = {
  "/founder": [{ label: "About PES", href: "/about" }],
  "/careers": [{ label: "About PES", href: "/about" }],
};

export default function Breadcrumbs() {
  const [location] = useLocation();

  if (location === "/") return null;

  const parents = routeParents[location] || [];
  const currentLabel = routeLabels[location] || "Page";

  return (
    <nav aria-label="Breadcrumb" className="container pt-20 lg:pt-22 pb-2">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link href="/" className="hover:text-teal-deep transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {parents.map((parent) => (
          <li key={parent.href} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            <Link href={parent.href} className="hover:text-teal-deep transition-colors">
              {parent.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-border" />
          <span className="text-foreground font-medium">{currentLabel}</span>
        </li>
      </ol>
    </nav>
  );
}
