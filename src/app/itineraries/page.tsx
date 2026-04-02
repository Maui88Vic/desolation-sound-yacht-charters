import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { itineraries } from "@/lib/itineraries";
import type { Itinerary } from "@/lib/itineraries";

export const metadata: Metadata = {
  title: "Suggested Itineraries | Desolation Sound Yacht Charters",
  description:
    "Nine hand-crafted cruising routes departing Comox, BC — from three-day weekend escapes to fourteen-day wilderness expeditions through Desolation Sound, the Broughton Archipelago, and beyond.",
  alternates: {
    canonical: "https://desolationsoundyachtcharters.com/itineraries",
  },
};

const difficultyConfig: Record<
  Itinerary["difficulty"],
  { label: string; style: React.CSSProperties }
> = {
  easy: {
    label: "Easy",
    style: {
      background: "var(--color-teal)",
      color: "var(--color-white)",
    },
  },
  moderate: {
    label: "Moderate",
    style: {
      background: "var(--color-gold)",
      color: "var(--color-deep)",
    },
  },
  experienced: {
    label: "Experienced",
    style: {
      background: "var(--color-deep)",
      color: "var(--color-white)",
      border: "1px solid var(--color-gold)",
    },
  },
};

export default function ItinerariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore BC Waters"
        title="Suggested Itineraries"
        subtitle="Nine hand-crafted routes through some of the finest cruising waters on earth — all departing from Comox Marina on Vancouver Island's east coast."
      />

      {/* Departure note bar */}
      <div
        style={{
          background: "var(--color-white)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0, color: "var(--color-teal)" }}
          >
            <path
              d="M9 1.5C5.27 1.5 2.25 4.52 2.25 8.25c0 5.156 6.75 8.25 6.75 8.25s6.75-3.094 6.75-8.25C15.75 4.52 12.73 1.5 9 1.5z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="8.25" r="1.75" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-slate)",
              lineHeight: 1.5,
            }}
          >
            All routes depart from{" "}
            <strong style={{ color: "var(--color-deep)", fontWeight: 600 }}>
              Comox Marina, Comox, BC
            </strong>
            . Routes are suggested guides — itineraries can be adapted to your
            vessel, crew experience, and schedule at briefing.
          </p>
        </div>
      </div>

      {/* Itinerary Grid */}
      <section
        aria-labelledby="itineraries-heading"
        style={{
          background: "var(--color-sand)",
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={`${itineraries.length} Routes`}
            title="Choose Your Adventure"
            subtitle="From weekend escapes to two-week wilderness expeditions, every route is chosen for its variety of anchorages, scenery, and seamanship interest."
          />

          <ul
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Cruising itinerary cards"
          >
            {itineraries.map((itinerary) => {
              const diff = difficultyConfig[itinerary.difficulty];
              return (
                <li
                  key={itinerary.slug}
                  className="transition-shadow hover:shadow-lg"
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "var(--shadow-sm)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      background: "var(--color-deep)",
                      padding: "1.25rem 1.25rem 1rem",
                    }}
                  >
                    {/* Difficulty badge */}
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-3"
                      style={{
                        letterSpacing: "0.08em",
                        ...diff.style,
                      }}
                      aria-label={`Difficulty: ${diff.label}`}
                    >
                      {diff.label}
                    </span>

                    {/* Duration & boat types */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "rgba(255,255,255,0.65)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {itinerary.duration}
                      </span>
                      <span
                        style={{
                          width: 3,
                          height: 3,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.35)",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "rgba(255,255,255,0.65)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {itinerary.boatTypes.join(" + ")}
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-h3)",
                        color: "var(--color-white)",
                        lineHeight: 1.15,
                      }}
                    >
                      {itinerary.name}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div
                    className="flex flex-col flex-1 gap-4"
                    style={{ padding: "1.25rem" }}
                  >
                    {/* Description */}
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        color: "var(--color-slate)",
                        lineHeight: 1.65,
                      }}
                    >
                      {itinerary.description}
                    </p>

                    {/* Stats row */}
                    <dl
                      className="grid grid-cols-2 gap-2"
                      aria-label={`${itinerary.name} quick stats`}
                    >
                      {[
                        { label: "Distance", value: itinerary.distance },
                        { label: "Best Season", value: itinerary.bestSeason },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          style={{
                            background: "var(--color-sand)",
                            borderRadius: "var(--radius-sm)",
                            border: "1px solid var(--color-border)",
                            padding: "0.5rem 0.75rem",
                          }}
                        >
                          <dt
                            style={{
                              fontSize: "var(--text-xs)",
                              color: "var(--color-slate)",
                              fontWeight: 600,
                              textTransform: "uppercase",
                              letterSpacing: "0.07em",
                              marginBottom: "0.2rem",
                            }}
                          >
                            {label}
                          </dt>
                          <dd
                            style={{
                              fontSize: "var(--text-sm)",
                              color: "var(--color-deep)",
                              fontWeight: 700,
                              lineHeight: 1.2,
                            }}
                          >
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* CTA Link */}
                    <div className="mt-auto pt-1">
                      <Link
                        href={`/itineraries/${itinerary.slug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal)]"
                        style={{
                          background: "var(--color-teal)",
                          color: "var(--color-white)",
                        }}
                        aria-label={`View full details for ${itinerary.name}`}
                      >
                        View Itinerary
                        <svg
                          aria-hidden="true"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section-deep"
        aria-labelledby="itineraries-cta-heading"
        style={{
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Ready to Depart?"
            title="Chart Your Own Course"
            subtitle="Every route above can be customised to your timeframe, crew size, and experience level. Talk to us — we've been briefing crews from Comox Marina since 1978."
            align="center"
            dark
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-lg font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
              style={{
                background: "var(--color-gold)",
                color: "var(--color-deep)",
              }}
            >
              Enquire Now
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-lg font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{
                background: "transparent",
                color: "var(--color-white)",
                border: "1px solid rgba(255,255,255,0.40)",
              }}
            >
              Browse the Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
