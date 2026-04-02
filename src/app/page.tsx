import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Anchor, Award, Ship, Star } from "lucide-react";
import { DsycJsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { boats, formatPrice } from "@/lib/fleet";

export const metadata: Metadata = {
  title: "Yacht Charter Desolation Sound, BC — DSYC",
  description:
    "Charter a sail or power yacht from Comox into Desolation Sound — one of the most spectacular marine environments on earth. Bareboat & skippered. Since 1978.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com" },
};

const trustStats = [
  { icon: Anchor, label: "Founded", value: "1978" },
  { icon: Award, label: "Sea Miles (Combined)", value: "100,000+" },
  { icon: Ship, label: "Vessels in Fleet", value: "10" },
  { icon: Star, label: "Certifications", value: "IYT & CRYA" },
];

const destinations = [
  {
    name: "Desolation Sound",
    description:
      "Named by Captain Vancouver in 1792, Desolation Sound offers the warmest swimming waters north of Mexico, dramatic fjords, and anchorages that feel untouched by time.",
    href: "/destinations#desolation-sound",
    image: "/images/destinations/desolation-sound.jpg",
  },
  {
    name: "Broughton Archipelago",
    description:
      "A 10- or 14-day passage north opens the remote and spectacular Broughton Archipelago — orcas, First Nations heritage sites, and some of the finest cruising on the coast.",
    href: "/destinations#broughtons",
    image: "/images/destinations/broughtons.jpg",
  },
  {
    name: "Princess Louisa Inlet",
    description:
      "A narrow passage opens into one of BC's most dramatic fjords — sheer granite walls rising 7,000 feet, and Chatterbox Falls tumbling directly into the tidal water.",
    href: "/destinations#princess-louisa",
    image: "/images/destinations/princess-louisa.jpg",
  },
];

const featuredBoats = boats.slice(0, 3);

const services = [
  {
    title: "Bareboat Charter",
    description: "Take the helm yourself. Ten meticulously maintained vessels from 36 to 55 feet, for experienced skippers exploring at their own pace.",
    href: "/fleet",
    cta: "Browse Fleet",
  },
  {
    title: "Skippered Charter",
    description: "Bring an expert. Hire a professional skipper for any vessel in the fleet and focus entirely on the experience — not the navigation.",
    href: "/booking",
    cta: "Enquire Now",
  },
  {
    title: "Cruise N' Learn",
    description: "Our IYT and CRYA-registered 6-day training programme turns a charter into a qualification. Up to 4 students on a 42-ft vessel.",
    href: "/training",
    cta: "Learn More",
  },
  {
    title: "Yacht Ownership",
    description: "Place your boat in our charter programme. The lowest commission on the BC coast, no restrictions on owner use, and Maz and Jen look after her like their own.",
    href: "/ownership",
    cta: "Learn More",
  },
];

export default function HomePage() {
  return (
    <>
      <DsycJsonLd />

      {/* ============================================================
          HERO — Full viewport, cinematic
          ============================================================ */}
      <section
        className="relative flex min-h-screen items-center"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.jpg"
            alt="A sailing yacht under full sail in a BC fjord, mountains rising from the water"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,34,53,0.88) 0%, rgba(13,34,53,0.60) 50%, rgba(13,34,53,0.20) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-gold mb-5">Desolation Sound · Broughton Archipelago · Princess Louisa Inlet</p>
            <h1
              id="hero-heading"
              className="mb-6 text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display)",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              One of the World&rsquo;s Great Cruising Destinations.
            </h1>
            <p
              className="mb-10 text-xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}
            >
              Bareboat & skippered yacht charters from Comox, BC. Ten
              meticulously maintained sail and power vessels. Expert crew with
              100,000+ sea miles. Since 1978.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/fleet" variant="gold" size="lg">
                Browse Fleet
              </Button>
              <Button href="/booking" variant="ghost" size="lg">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div className="h-10 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))" }} />
        </div>
      </section>

      {/* ============================================================
          TRUST BAR
          ============================================================ */}
      <section style={{ backgroundColor: "var(--color-deep)" }} aria-label="Key facts about DSYC">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 px-6 py-8 text-center">
                <stat.icon size={20} style={{ color: "var(--color-gold)" }} aria-hidden="true" />
                <p
                  className="text-2xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {stat.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DESTINATIONS — 3 col cards
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="destinations-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Where Will You Go"
            title="Three Extraordinary Destinations"
            subtitle="Each one accessible from our base at Comox Marina. Each one unlike anywhere else on earth."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative overflow-hidden rounded-lg no-underline"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} — sailing destination on the BC coast`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,34,53,0.92) 0%, rgba(13,34,53,0.30) 50%, transparent 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-2 text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500 }}>
                    {dest.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {dest.description}
                  </p>
                  <p
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "var(--color-gold)" }}
                    aria-hidden="true"
                  >
                    Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FLEET PREVIEW — 3 featured boats
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="fleet-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="The Fleet"
              title="Sail or Power. Your Choice."
              subtitle="Three sailboats and seven powerboats, 36 to 55 feet. Every vessel impeccably maintained and fully equipped."
            />
            <Link
              href="/fleet"
              className="hidden items-center gap-2 text-sm font-semibold no-underline transition-colors hover:text-[var(--color-ocean)] md:flex"
              style={{ color: "var(--color-teal)" }}
            >
              View all 10 vessels <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBoats.map((boat) => (
              <Link
                key={boat.slug}
                href={`/fleet/${boat.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg no-underline"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow var(--transition-base)",
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={boat.heroImage}
                    alt={`${boat.name} — ${boat.model} available for charter from Comox, BC`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{
                      backgroundColor: "var(--color-deep)",
                      color: "var(--color-gold)",
                    }}
                  >
                    {boat.type === "sail" ? "Sailboat" : "Powerboat"}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-1">{boat.model} · {boat.year}</p>
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)" }}>
                    {boat.name}
                  </h3>
                  <p className="mb-4 text-sm flex-1 leading-relaxed" style={{ color: "var(--color-slate)" }}>
                    {boat.loa} · {boat.cabins} cabin{boat.cabins > 1 ? "s" : ""} · {boat.heads} head{boat.heads > 1 ? "s" : ""}
                  </p>
                  <div
                    className="flex items-center justify-between border-t pt-4"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div>
                      <p className="text-xs font-medium" style={{ color: "var(--color-stone)" }}>
                        From (6 nights)
                      </p>
                      <p className="text-lg font-semibold" style={{ color: "var(--color-deep)" }}>
                        {formatPrice(boat.lowSeason)}
                        <span className="text-xs font-normal ml-1" style={{ color: "var(--color-stone)" }}>CAD</span>
                      </p>
                    </div>
                    <span
                      className="flex items-center gap-1 text-sm font-semibold transition-colors group-hover:text-[var(--color-ocean)]"
                      style={{ color: "var(--color-teal)" }}
                      aria-hidden="true"
                    >
                      View Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button href="/fleet" variant="outline">View All 10 Vessels</Button>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDERS — Trust anchor
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-deep)" }}
        aria-labelledby="founders-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow eyebrow-gold mb-4">The Team Behind DSYC</p>
              <h2
                id="founders-heading"
                className="mb-6 text-white"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)" }}
              >
                100,000 Sea Miles Between Them.
              </h2>
              <p className="mb-6 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}>
                Merion &ldquo;Maz&rdquo; Martin holds an MCA/RYA Ocean Master Unlimited — the highest professional
                maritime qualification available. He has logged more than 100,000 sea miles and spent
                30 years in the global yachting industry, including a term as Director of the International
                Superyacht Pilots Association.
              </p>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}>
                Jennifer Knox-Martin brings 30 years of yachting and luxury hospitality — including years as
                a professional yacht chef and villa manager in the South of France. Together, they have
                run DSYC since 2012 from their base at Comox Marina.
              </p>
              <Button href="/about" variant="ghost">
                Our Story
              </Button>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-lg opacity-20"
                style={{ background: "radial-gradient(circle, var(--color-teal), transparent)" }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ border: "1px solid var(--color-border-dark)" }}
              >
                <Image
                  src="/images/founders.jpg"
                  alt="Maz and Jennifer Martin, owners of Desolation Sound Yacht Charters, at Comox Marina"
                  width={600}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
              {/* Credential callout */}
              <div
                className="absolute -bottom-4 -right-4 rounded-lg p-5"
                style={{
                  backgroundColor: "var(--color-gold)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-deep)" }}>
                  Maz Martin
                </p>
                <p className="text-sm font-bold" style={{ color: "var(--color-deep)" }}>
                  MCA/RYA Ocean Master
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Charterers Say"
            title="In Their Own Words"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "An amazing experience from start to end!! The boat was fantastic and Merion and his team were super helpful and professional. Definitely doing this again soon!",
                attribution: "DSYC Charterer",
              },
              {
                quote:
                  "Great experience. Company owners and staff are very knowledgeable and professional. Top shelf service and reasonably priced charter vacation.",
                attribution: "DSYC Charterer",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-lg p-8"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <blockquote>
                  <div style={{ color: "var(--color-gold)", fontSize: "3rem", lineHeight: 1, fontFamily: "var(--font-display)" }} aria-hidden="true">&ldquo;</div>
                  <p
                    className="text-lg italic leading-relaxed"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-ocean)", lineHeight: 1.65 }}
                  >
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium" style={{ color: "var(--color-stone)" }}>
                  — {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES — 4 cards
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Offer"
            title="More Than a Charter Company"
            subtitle="Chartering is just the beginning. DSYC offers the full spectrum of professional yachting services from their base at Comox Marina."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-lg p-7 no-underline transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="mb-4 h-1 w-8 rounded-full transition-all group-hover:w-12"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "var(--color-deep)" }}
                >
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed flex-1" style={{ color: "var(--color-slate)" }}>
                  {service.description}
                </p>
                <span
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[var(--color-ocean)]"
                  style={{ color: "var(--color-teal)" }}
                  aria-hidden="true"
                >
                  {service.cta} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Your Next Great Adventure</p>
          <h2
            id="cta-heading"
            className="mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)" }}
          >
            The Horizon Is Waiting.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}>
            Contact us to discuss dates, vessels, and itineraries. Our team responds personally to every enquiry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/booking" variant="gold" size="lg">
              Enquire Now
            </Button>
            <Button href="/fleet" variant="ghost" size="lg">
              Browse Fleet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
