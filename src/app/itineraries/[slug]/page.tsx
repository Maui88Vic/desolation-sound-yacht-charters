import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { itineraries, getItineraryBySlug } from "@/lib/itineraries";
import type { Itinerary } from "@/lib/itineraries";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return itineraries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    return { title: "Itinerary Not Found | DSYC" };
  }

  return {
    title: `${itinerary.name} — ${itinerary.duration} Itinerary | DSYC`,
    description: itinerary.description,
    alternates: {
      canonical: `https://desolationsoundyachtcharters.com/itineraries/${itinerary.slug}`,
    },
  };
}

const difficultyLabel: Record<Itinerary["difficulty"], string> = {
  easy: "Easy",
  moderate: "Moderate",
  experienced: "Experienced",
};

const difficultyBadgeStyle: Record<Itinerary["difficulty"], React.CSSProperties> = {
  easy: {
    background: "var(--color-teal)",
    color: "var(--color-white)",
  },
  moderate: {
    background: "var(--color-gold)",
    color: "var(--color-deep)",
  },
  experienced: {
    background: "var(--color-deep)",
    color: "var(--color-white)",
    border: "1px solid var(--color-gold)",
  },
};

export default async function ItineraryDetailPage({ params }: Props) {
  const { slug } = await params;
  const itinerary = getItineraryBySlug(slug);

  if (!itinerary) {
    notFound();
  }

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: itinerary.name,
    description: itinerary.description,
    touristType: "Sailing / Powerboat Charter",
    itinerary: {
      "@type": "ItemList",
      name: "Route Stops",
      description: itinerary.route,
    },
    offers: {
      "@type": "Offer",
      url: `https://desolationsoundyachtcharters.com/itineraries/${itinerary.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Desolation Sound Yacht Charters",
        url: "https://desolationsoundyachtcharters.com",
      },
    },
    provider: {
      "@type": "Organization",
      name: "Desolation Sound Yacht Charters",
      url: "https://desolationsoundyachtcharters.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Comox",
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
  };

  const diffStyle = difficultyBadgeStyle[itinerary.difficulty];
  const diffLabel = difficultyLabel[itinerary.difficulty];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />

      <PageHero
        eyebrow={diffLabel}
        title={itinerary.name}
        subtitle={itinerary.description}
      />

      {/* Main Content */}
      <section
        aria-labelledby="itinerary-detail-heading"
        style={{
          background: "var(--color-sand)",
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal)]"
              style={{ color: "var(--color-teal)" }}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Itineraries
            </Link>
          </nav>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* LEFT COLUMN — 2/3 width */}
            <div className="flex flex-col gap-10 lg:col-span-2">

              {/* Route Section */}
              <div>
                <p
                  className="eyebrow mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  The Route
                </p>
                <h2
                  id="itinerary-detail-heading"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    color: "var(--color-deep)",
                    marginBottom: "1rem",
                    lineHeight: 1.2,
                  }}
                >
                  From Comox to {itinerary.name.includes("→") ? "Your Destination" : "Your Destination & Back"}
                </h2>
                <p
                  style={{
                    fontSize: "var(--text-body-lg)",
                    color: "var(--color-ink)",
                    lineHeight: 1.75,
                    maxWidth: "64ch",
                  }}
                >
                  {itinerary.route}
                </p>
              </div>

              {/* Highlights Section */}
              <div>
                <p
                  className="eyebrow mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  Highlights
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    color: "var(--color-deep)",
                    marginBottom: "1.25rem",
                    lineHeight: 1.2,
                  }}
                >
                  What to Expect
                </h2>
                <ul
                  className="flex flex-col gap-3"
                  role="list"
                  aria-label={`${itinerary.name} highlights`}
                >
                  {itinerary.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{
                        color: "var(--color-ink)",
                        fontSize: "var(--text-body)",
                        lineHeight: 1.65,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
                        style={{ background: "var(--color-teal)" }}
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Difficulty explainer */}
              <div
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <span
                  className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm"
                  style={{
                    letterSpacing: "0.08em",
                    ...diffStyle,
                  }}
                >
                  {diffLabel}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--color-deep)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Difficulty: {diffLabel}
                  </p>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-slate)", lineHeight: 1.55 }}>
                    {itinerary.difficulty === "easy" &&
                      "Suitable for first-time bareboat charterers. Sheltered waters, short passages, and straightforward navigation throughout."}
                    {itinerary.difficulty === "moderate" &&
                      "Some open-water passages and tidal awareness required. Ideal for crews with previous coastal cruising experience."}
                    {itinerary.difficulty === "experienced" &&
                      "Demands solid passage planning, tidal current knowledge, and experience in exposed or rapidly changing conditions. Skippered option recommended for less experienced crews."}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — 1/3 width, sticky */}
            <div className="lg:col-span-1">
              <div
                className="lg:sticky lg:top-8 h-fit"
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-lg)",
                  overflow: "hidden",
                }}
              >
                {/* Card Header */}
                <div
                  style={{
                    background: "var(--color-deep)",
                    padding: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-gold)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Route Summary
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      color: "var(--color-white)",
                      lineHeight: 1.15,
                    }}
                  >
                    {itinerary.name}
                  </h2>
                </div>

                {/* Stats */}
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    { label: "Duration", value: itinerary.duration },
                    { label: "Distance", value: itinerary.distance },
                    { label: "Best Season", value: itinerary.bestSeason },
                    { label: "Difficulty", value: diffLabel },
                    {
                      label: "Vessel Types",
                      value: itinerary.boatTypes
                        .map((t) => (t === "sail" ? "Sailboat" : "Powerboat"))
                        .join(", "),
                    },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                      style={{
                        padding: "0.75rem 1rem",
                        background: "var(--color-sand)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        gap: "0.5rem",
                      }}
                    >
                      <dt
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-slate)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          flexShrink: 0,
                        }}
                      >
                        {label}
                      </dt>
                      <dd
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-deep)",
                          fontWeight: 700,
                          textAlign: "right",
                        }}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}

                  {/* Divider */}
                  <hr style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />

                  {/* Buttons */}
                  <Button
                    href="/booking"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    aria-label={`Enquire about the ${itinerary.name} itinerary`}
                  >
                    Enquire About This Route
                  </Button>
                  <Button
                    href="/fleet"
                    variant="outline"
                    size="md"
                    className="w-full"
                    aria-label="Browse available charter vessels"
                  >
                    Browse the Fleet
                  </Button>

                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-slate)",
                      textAlign: "center",
                      lineHeight: 1.5,
                    }}
                  >
                    No booking fees. Bareboat &amp; skippered options available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — dark section */}
      <section
        className="section-deep"
        aria-labelledby="itinerary-cta-heading"
        style={{
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Your Adventure Awaits"
            title="Ready to Chart Your Course?"
            subtitle="All routes depart from Comox Marina. We'll tailor this itinerary to your vessel, crew size, and experience level at your pre-departure briefing."
            align="center"
            dark
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/booking" variant="gold" size="lg">
              Start Your Booking
            </Button>
            <Button href="/fleet" variant="ghost" size="lg">
              Browse the Fleet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
