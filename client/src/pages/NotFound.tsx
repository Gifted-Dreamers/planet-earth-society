import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container text-center">
        <div className="max-w-md mx-auto">
          <p className="text-8xl font-[var(--font-display)] text-teal-deep/20 mb-4">404</p>
          <h1 className="font-[var(--font-display)] text-3xl text-teal-deep mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold rounded-md hover:bg-terracotta-light transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-deep text-teal-deep font-semibold rounded-md hover:bg-teal-deep hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
