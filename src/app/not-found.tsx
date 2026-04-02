import Link from "next/link";
import { Anchor } from "lucide-react";
import { Button } from "@/components/Button";

const quickLinks = [
  { label: "Charter", href: "/charter" },
  { label: "Destinations", href: "/destinations" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
];

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center"
      style={{ backgroundColor: "var(--color-sand)" }}
    >
      {/* Anchor icon */}
      <div
        className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
        style={{
          backgroundColor: "var(--color-deep)",
          boxShadow: "var(--shadow-lg)",
        }}
        aria-hidden="true"
      >
        <Anchor size={36} style={{ color: "white" }} />
      </div>

      {/* Eyebrow */}
      <p
        className="eyebrow mb-4"
        style={{ color: "var(--color-teal)" }}
      >
        404 — Page Not Found
      </p>

      {/* Heading */}
      <h1
        className="mb-5"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          fontWeight: 500,
          color: "var(--color-deep)",
          lineHeight: 1.15,
          maxWidth: "18ch",
        }}
      >
        You&rsquo;ve Sailed Off the Chart.
      </h1>

      {/* Subtext */}
      <p
        className="mb-10 max-w-md text-lg leading-relaxed"
        style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
      >
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get
        you back to familiar waters.
      </p>

      {/* Primary CTAs */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="secondary" size="md">
          Back to Home
        </Button>
        <Button href="/fleet" variant="outline" size="md">
          Browse Fleet
        </Button>
        <Button href="/booking" variant="primary" size="md">
          Enquire Now
        </Button>
      </div>

      {/* Divider */}
      <div
        className="mb-8 h-px w-24"
        style={{ backgroundColor: "var(--color-border)" }}
        aria-hidden="true"
      />

      {/* Quick nav */}
      <nav aria-label="Quick navigation">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--color-stone)" }}
        >
          Quick Navigation
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {quickLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium no-underline transition-colors hover:text-[var(--color-ocean)]"
                style={{ color: "var(--color-teal)" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
