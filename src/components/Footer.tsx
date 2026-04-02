import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Share2, Video } from "lucide-react";

const footerNav = {
  Charter: [
    { label: "Plan Your Adventure", href: "/charter" },
    { label: "Destinations", href: "/destinations" },
    { label: "Itineraries", href: "/itineraries" },
    { label: "Booking & Rates", href: "/booking" },
    { label: "Rental Services", href: "/services" },
  ],
  Fleet: [
    { label: "All Vessels", href: "/fleet" },
    { label: "Sailboats", href: "/fleet?type=sail" },
    { label: "Powerboats", href: "/fleet?type=power" },
  ],
  More: [
    { label: "Training", href: "/training" },
    { label: "Yacht Ownership", href: "/ownership" },
    { label: "Marine Services", href: "/marine-services" },
    { label: "Marine Store", href: "/store" },
    { label: "Blog", href: "/blog" },
    { label: "Tools", href: "/tools" },
  ],
  Legal: [
    { label: "About DSYC", href: "/about" },
    { label: "Environment", href: "/environment" },
    { label: "Cancellation Policy", href: "/cancellation-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "var(--color-deep)", borderColor: "var(--color-border-dark)" }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

          {/* Brand col */}
          <div>
            <Link
              href="/"
              className="mb-5 inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] rounded-sm"
              aria-label="Desolation Sound Yacht Charters home"
            >
              <Image
                src="/images/dsyc-logo.png"
                alt="Desolation Sound Yacht Charters"
                width={40}
                height={68}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Bareboat & skippered yacht charters from Comox into the finest cruising waters on
              the Pacific Northwest coast. Since 1978.
            </p>
            {/* Contact */}
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  1797 Comox Ave #103<br />Comox, BC V9M 3L9
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="shrink-0" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <a href="tel:+12503397222" className="text-sm no-underline transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                  250-339-7222
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="shrink-0" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <a href="tel:+18776473815" className="text-sm no-underline transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>
                  1-877-647-3815 (Toll-free)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="shrink-0" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <a href="mailto:Charter@DesolationSoundYachtCharters.com" className="text-sm no-underline transition-colors hover:text-white break-all" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Charter@DesolationSoundYachtCharters.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Mon–Fri 9 AM–5 PM</span>
              </div>
            </address>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/pages/category/Boat-Service/Desolation-Sound-Yacht-Charters-143250702398653/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-white/50 hover:bg-white/10"
                style={{ borderColor: "var(--color-border-dark)" }}
                aria-label="DSYC on Facebook (opens in new tab)"
              >
                <Share2 size={15} style={{ color: "rgba(255,255,255,0.65)" }} aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPsDlEM5OTAD4_reqEcCjxQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-white/50 hover:bg-white/10"
                style={{ borderColor: "var(--color-border-dark)" }}
                aria-label="DSYC on YouTube (opens in new tab)"
              >
                <Video size={15} style={{ color: "rgba(255,255,255,0.65)" }} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm no-underline transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row"
          style={{ borderColor: "var(--color-border-dark)", color: "rgba(255,255,255,0.35)" }}
        >
          <p>© {new Date().getFullYear()} Desolation Sound Yacht Charters & Services. All rights reserved.</p>
          <p>Based at Comox Marina, Comox, BC V9M 3L9</p>
        </div>
      </div>
    </footer>
  );
}
