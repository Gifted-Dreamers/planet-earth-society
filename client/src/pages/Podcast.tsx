/*
 * Design: Organic Circuitry – Biomimetic Futurism
 * Podcast page: Video episodes with download options for video and audio
 */
import { useState } from "react";
import { Play, Download, Headphones, Video, Clock, Calendar, ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const PODCAST_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/VK2BPOdXzOkDT8Maot7Qip/sandbox/Ul0MbzM2JOiObjJGmcqQOm-img-4_1771911495000_na1fn_cGVzLXBvZGNhc3Qtc2VjdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVksyQlBPZFh6T2tEVDhNYW90N1FpcC9zYW5kYm94L1VsME1iek0ySk9pT2JqSkdtY3FRT20taW1nLTRfMTc3MTkxMTQ5NTAwMF9uYTFmbl9jR1Z6TFhCdlpHTmhjM1F0YzJWamRHbHZiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HcyTe7noXbmr33OHiEzqDB43EjbrW2zlFQazo-yU3YgIBxC8XIU~nTo7YD2ZnBpNuOb7e2Q3k~GgVUCcuytwuxwKuHkGpg8FkCfuDsKFtmftMWeQ-ko1c-C2Hi6YdPpSGsEger-Vw7tgY8vFGq6jG5GXMC835AXqRpy3IWcjwEIxlQtA8ioBhgxJ1qkjCgYghYVbVDhRpLF172HHTIozD1nqeHPpNY8S4rnI1aW70lOedpJpm6IgG88YsoNMiQb65lznf6a60urQ5Kmdm1HsKtrRD9X55XyTEdQufNd6b7QKj-JNW0FUfrLQp1cY2eNC~ANx-lc8SAQNOgIHU0d55g__";

interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  season: number;
  episode: number;
  thumbnail: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: "The Future of Trusted Computation",
    description: "Exploring how new cryptographic hardware can create truly trustworthy computing environments. We discuss root-of-trust chips, actor-based programming, and why current systems were never designed to be secure.",
    date: "2026-02-15",
    duration: "42:18",
    season: 1,
    episode: 1,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Privacy by Design: A New Paradigm",
    description: "What does real digital privacy look like? We dive into assured privacy, the difference between privacy and secrecy, and how Planet Earth Society is reinventing digital rights from the ground up.",
    date: "2026-02-01",
    duration: "38:45",
    season: 1,
    episode: 2,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "The Dew: Beyond Cloud Computing",
    description: "Why we reject The Cloud and introduce The Dew as a replacement. Small IoT devices forming local distributed computation and storage networks across neighborhoods.",
    date: "2026-01-15",
    duration: "45:32",
    season: 1,
    episode: 3,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    title: "Actors All the Way Down",
    description: "A deep dive into actor-oriented programming with insights from Dr Carl Hewitt's groundbreaking work. Why actors are more powerful than Turing Machines and what that means for the future of software.",
    date: "2026-01-01",
    duration: "51:10",
    season: 1,
    episode: 4,
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    title: "Mesh Networks and Digital Freedom",
    description: "How peer-to-peer mesh networking can liberate communities from centralized infrastructure. We discuss B.A.T.M.A.N. protocols, encrypted datagrams, and neighborhood-scale networks.",
    date: "2025-12-15",
    duration: "39:55",
    season: 1,
    episode: 5,
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    title: "Building for the People, by the People",
    description: "The social purpose behind Planet Earth Society. Why collaboration beats competition, how we're leveling the playing field, and what it means to be a social purpose technology organization.",
    date: "2025-12-01",
    duration: "36:22",
    season: 1,
    episode: 6,
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=225&fit=crop",
  },
];

function EpisodeCard({ episode }: { episode: Episode }) {
  const [expanded, setExpanded] = useState(false);

  const handleDownload = (type: string) => {
    toast("Download coming soon", {
      description: `${type} download for "${episode.title}" will be available shortly.`,
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-charcoal overflow-hidden group">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => toast("Video player coming soon", { description: "Episode playback will be available when content is uploaded." })}
            className="w-14 h-14 rounded-full bg-terracotta/90 flex items-center justify-center hover:bg-terracotta transition-colors"
          >
            <Play className="w-6 h-6 text-white ml-0.5" />
          </button>
        </div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-charcoal/70 rounded text-xs text-stone font-medium">
          S{episode.season} E{episode.episode}
        </div>
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-charcoal/70 rounded text-xs text-stone flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {episode.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar className="w-3 h-3" />
          {new Date(episode.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </div>
        <h3 className="font-[var(--font-display)] text-lg text-foreground mb-2">{episode.title}</h3>
        <p className={`text-muted-foreground text-sm leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
          {episode.description}
        </p>
        {episode.description.length > 100 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-teal-mid text-xs font-medium mt-1 flex items-center gap-1 hover:text-teal-deep transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        {/* Download buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleDownload("Video")}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-teal-deep/10 text-teal-deep text-xs font-medium rounded hover:bg-teal-deep/20 transition-colors"
          >
            <Video className="w-3.5 h-3.5" />
            Video
            <Download className="w-3 h-3" />
          </button>
          <button
            onClick={() => handleDownload("Audio")}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-moss/10 text-moss text-xs font-medium rounded hover:bg-moss/20 transition-colors"
          >
            <Headphones className="w-3.5 h-3.5" />
            Audio
            <Download className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Podcast() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PODCAST_IMG} alt="Podcast studio with plants and circuit patterns" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/65 to-charcoal/40" />
        </div>
        <div className="container relative z-10 pt-8">
          <AnimatedSection>
            <p className="text-terracotta-light font-semibold text-sm uppercase tracking-widest mb-3">Podcast</p>
            <h1 className="font-[var(--font-display)] text-4xl lg:text-5xl text-white mb-6 max-w-2xl">
              Conversations for a Better Planet
            </h1>
            <p className="text-stone/80 text-lg max-w-2xl leading-relaxed">
              Deep dives into trusted computation, digital rights, actor programming, and the future
              of people-first technology. Watch or listen — every episode available for download.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-teal-deep">
                  Season 1 Episodes
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {episodes.length} episodes available
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {episodes.map((episode, i) => (
              <AnimatedSection key={episode.id} delay={i * 80}>
                <EpisodeCard episode={episode} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-teal-deep">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-[var(--font-display)] text-2xl lg:text-3xl text-stone mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-stone/70 mb-6 max-w-lg mx-auto">
              Subscribe to get notified when new episodes drop. Available on all major platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Apple Podcasts", "Spotify", "YouTube", "RSS Feed"].map((platform) => (
                <button
                  key={platform}
                  onClick={() => toast("Coming soon", { description: `${platform} link will be available shortly.` })}
                  className="px-5 py-2.5 border border-stone/20 text-stone/80 text-sm font-medium rounded-md hover:border-stone/50 hover:text-stone transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
