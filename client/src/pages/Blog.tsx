/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Blog page: Placeholder with sample posts
 */
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663287814150/kCAYXvAVggttRptW.webp";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why We Need Unhackable Networks Now More Than Ever",
    excerpt: "The digital landscape is increasingly hostile. Data breaches, surveillance, and manipulation have eroded public trust. Here's how Planet Earth Society is building the alternative.",
    date: "2026-02-20",
    readTime: "8 min",
    author: "Planet Earth Society",
    category: "Privacy",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=340&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Actor-Oriented Programming: The Future of Secure Software",
    excerpt: "Actors encapsulate state change and forbid shared mutable state. Learn why this paradigm shift is essential for building truly secure systems.",
    date: "2026-02-10",
    readTime: "12 min",
    author: "Planet Earth Society",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop",
  },
  {
    id: 3,
    title: "From Cloud to Dew: Rethinking Distributed Computing",
    excerpt: "The Cloud was never designed with your privacy in mind. The Dew — our vision for local, distributed IoT computation — puts control back in your hands.",
    date: "2026-01-28",
    readTime: "6 min",
    author: "Planet Earth Society",
    category: "Platform",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
  },
  {
    id: 4,
    title: "Digital Rights in the Age of AI",
    excerpt: "As AI systems grow more powerful, the question of digital rights becomes urgent. Who owns your data? Who controls your digital identity?",
    date: "2026-01-15",
    readTime: "10 min",
    author: "Planet Earth Society",
    category: "Digital Rights",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
  },
  {
    id: 5,
    title: "Building Mesh Networks for Community Resilience",
    excerpt: "Peer-to-peer mesh networking isn't just about technology — it's about building resilient communities that aren't dependent on centralized infrastructure.",
    date: "2026-01-05",
    readTime: "7 min",
    author: "Planet Earth Society",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=340&fit=crop",
  },
  {
    id: 6,
    title: "The Social Purpose of Technology",
    excerpt: "Technology should serve humanity, not exploit it. Our social purpose model puts collaboration above competition and people above profits.",
    date: "2025-12-20",
    readTime: "5 min",
    author: "Planet Earth Society",
    category: "Mission",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop",
  },
];

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="pt-24 lg:pt-28 pb-12 bg-background">
        <div className="container pt-4">
          <AnimatedSection>
            <p className="text-terracotta font-semibold text-sm uppercase tracking-widest mb-3">Blog</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-teal-deep mb-4 max-w-2xl">
              Insights & Updates
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Thoughts on privacy, technology, digital rights, and building a better digital world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-12 bg-background">
          <div className="container">
            <AnimatedSection>
              <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => import("sonner").then(m => m.toast("Blog post coming soon", { description: "Full articles will be available when content is published." }))}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-terracotta/10 text-terracotta text-xs font-semibold rounded">
                        Featured
                      </span>
                      <span className="px-2.5 py-1 bg-teal-deep/10 text-teal-deep text-xs font-medium rounded flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-foreground mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {featured.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 lg:py-20 bg-stone-warm">
        <div className="container">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl text-teal-deep mb-8">Recent Posts</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 80}>
                <div
                  className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer"
                  onClick={() => import("sonner").then(m => m.toast("Blog post coming soon", { description: "Full articles will be available when content is published." }))}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-teal-deep/10 text-teal-deep text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-lg text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </span>
                      <span className="text-terracotta text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-teal-deep">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-stone mb-4">
              Stay Informed
            </h2>
            <p className="text-stone/70 mb-6 max-w-lg mx-auto">
              Get the latest insights on privacy, technology, and digital rights delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
