"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { boats, formatPrice } from "@/lib/fleet";
import type { BoatType } from "@/lib/fleet";

type FilterValue = "all" | BoatType;

const filters: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Sailboats", value: "sail" },
  { label: "Powerboats", value: "power" },
];

export default function FleetPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filtered = activeFilter === "all" ? boats : boats.filter((b) => b.type === activeFilter);

  return (
    <>
      <PageHero
        eyebrow="The Fleet"
        title="Sail or Power. 36 to 55 Feet."
        subtitle="Ten meticulously maintained vessels — three sailing yachts and seven powerboats — all departing from Comox, BC into some of the finest cruising waters on earth."
      />

      {/* Filter Bar */}
      <section
        aria-label="Filter fleet by vessel type"
        style={{ background: "var(--color-white)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex gap-2">
          {filters.map(({ label, value }) => {
            const isActive = activeFilter === value;
            return (
              <button
                key={value}
                aria-pressed={isActive}
                onClick={() => setActiveFilter(value)}
                className="px-5 py-2 rounded-sm text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal)]"
                style={{
                  background: isActive ? "var(--color-deep)" : "transparent",
                  color: isActive ? "var(--color-white)" : "var(--color-slate)",
                  border: isActive
                    ? "1px solid var(--color-deep)"
                    : "1px solid var(--color-border)",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Fleet Grid */}
      <section
        aria-label="Fleet vessels"
        style={{
          background: "var(--color-sand)",
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={`${filtered.length} Vessel${filtered.length !== 1 ? "s" : ""}`}
            title={
              activeFilter === "all"
                ? "The Full Fleet"
                : activeFilter === "sail"
                ? "Sailing Yachts"
                : "Powerboats"
            }
          />

          <ul
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
            aria-label="Fleet vessel cards"
          >
            {filtered.map((boat) => (
              <li
                key={boat.slug}
                style={{
                  background: "var(--color-white)",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Hero Image */}
                <div className="relative aspect-video w-full" style={{ background: "var(--color-mist)" }}>
                  <Image
                    src={boat.heroImage}
                    alt={`${boat.name} — ${boat.model} charter yacht`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Type Badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-sm"
                    style={{
                      background: boat.type === "sail" ? "var(--color-ocean)" : "var(--color-teal)",
                      color: "var(--color-white)",
                      letterSpacing: "0.08em",
                    }}
                    aria-label={`Vessel type: ${boat.type === "sail" ? "Sailboat" : "Powerboat"}`}
                  >
                    {boat.type === "sail" ? "Sailboat" : "Powerboat"}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Name & Model */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-h3)",
                        color: "var(--color-deep)",
                        lineHeight: 1.15,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {boat.name}
                    </h2>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-stone)",
                        fontWeight: 500,
                      }}
                    >
                      {boat.model}
                    </p>
                  </div>

                  {/* Quick Specs */}
                  <dl
                    className="grid grid-cols-4 gap-2 text-center"
                    aria-label={`${boat.name} specifications`}
                  >
                    {[
                      { label: "Year", value: boat.year },
                      { label: "LOA", value: boat.loa },
                      { label: "Cabins", value: boat.cabins },
                      { label: "Heads", value: boat.heads },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col gap-0.5"
                        style={{
                          background: "var(--color-sand)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.375rem 0.25rem",
                        }}
                      >
                        <dt
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-stone)",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                          }}
                        >
                          {label}
                        </dt>
                        <dd
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-deep)",
                            fontWeight: 700,
                          }}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Pricing */}
                  <div
                    style={{
                      borderTop: "1px solid var(--color-border)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                          marginBottom: "0.15rem",
                        }}
                      >
                        Low Season
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-body-lg)",
                          color: "var(--color-ink)",
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {formatPrice(boat.lowSeason)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                          marginBottom: "0.15rem",
                        }}
                      >
                        High Season
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-body-lg)",
                          color: "var(--color-ink)",
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {formatPrice(boat.highSeason)}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-auto pt-1">
                    <Link
                      href={`/fleet/${boat.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal)]"
                      style={{
                        background: "var(--color-teal)",
                        color: "var(--color-white)",
                      }}
                      aria-label={`View details for ${boat.name}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="section-deep"
        aria-labelledby="fleet-cta-heading"
        style={{
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Ready to Charter?"
            title="Reserve Your Vessel"
            subtitle="All charters depart from Comox, BC. Bareboat and skippered options available for every vessel in the fleet."
            align="center"
            dark
          />
          <Button href="/booking" variant="gold" size="lg">
            Start Your Booking
          </Button>
        </div>
      </section>
    </>
  );
}
