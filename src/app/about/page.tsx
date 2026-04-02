import type { Metadata } from "next";
import Image from "next/image";
import { DsycJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Plane, Ship, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "About DSYC — Maz & Jen Martin — Since 1978",
  description:
    "Merion 'Maz' Martin (MCA/RYA Ocean Master, 100,000+ sea miles) and Jennifer Knox-Martin have run Desolation Sound Yacht Charters from Comox Marina since 2012. Founded 1978.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="Comox, BC · Since 1978"
        title="A Charter Operation Built on Real Seamanship"
        subtitle="Behind every vessel in the fleet are two people who have spent their lives on the water — and who look after every charter as if they were sailing it themselves."
      />

      {/* ============================================================
          FOUNDING STORY
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="history-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our History"
            title="Founded 1978"
          />
          <div
            className="space-y-5 text-lg"
            style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
          >
            <p>
              Desolation Sound Yacht Charters was established in 1978 as{" "}
              <strong style={{ color: "var(--color-deep)" }}>Gordon Greer Ltd</strong> — one of the earliest
              dedicated charter operations on the BC coast. The business has operated continuously from
              Comox Marina ever since, building a reputation across five decades for well-maintained vessels
              and expert, personal service.
            </p>
            <p>
              <strong style={{ color: "var(--color-deep)" }}>Merion &ldquo;Maz&rdquo; Martin</strong> and{" "}
              <strong style={{ color: "var(--color-deep)" }}>Jennifer Knox-Martin</strong> became the current
              owners in <strong style={{ color: "var(--color-deep)" }}>2012</strong>, bringing with them
              decades of international yachting experience and a shared commitment to the highest standards
              of seamanship, hospitality, and vessel care.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDERS — Two-column
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="founders-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Owners"
            title="Maz &amp; Jen"
            subtitle="Two careers built entirely on the water — and on delivering exceptional experiences to the people who trust them with their time on it."
            align="center"
          />

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Maz */}
            <article
              className="overflow-hidden rounded-lg"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Image placeholder */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{ backgroundColor: "var(--color-deep)" }}
              >
                <Image
                  src="/images/maz-martin.jpg"
                  alt="Merion 'Maz' Martin, MCA/RYA Ocean Master and co-owner of Desolation Sound Yacht Charters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,34,53,0.60) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-6">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "var(--color-white)",
                    }}
                  >
                    Merion &ldquo;Maz&rdquo; Martin
                  </p>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    Co-Owner &amp; Operations
                  </p>
                </div>
              </div>
              <div className="p-8">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                  style={{
                    backgroundColor: "var(--color-sand)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-teal)" }}
                  >
                    MCA / RYA Ocean Master Unlimited
                  </span>
                </div>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
                >
                  Maz holds the{" "}
                  <strong style={{ color: "var(--color-deep)" }}>
                    MCA/RYA Ocean Master Unlimited
                  </strong>{" "}
                  — the highest professional maritime qualification available to a yacht master. He
                  has accumulated over{" "}
                  <strong style={{ color: "var(--color-deep)" }}>100,000 sea miles</strong> across
                  30 years in the global yachting industry.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
                >
                  A former Director of the{" "}
                  <strong style={{ color: "var(--color-deep)" }}>
                    International Superyacht Pilots Association (ISPA)
                  </strong>
                  , Maz brings a depth of professional experience rarely found in a charter
                  operation of any size.
                </p>
              </div>
            </article>

            {/* Jen */}
            <article
              className="overflow-hidden rounded-lg"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Image placeholder */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{ backgroundColor: "var(--color-ocean)" }}
              >
                <Image
                  src="/images/jen-martin.jpg"
                  alt="Jennifer Knox-Martin, co-owner of Desolation Sound Yacht Charters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,74,94,0.70) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-6">
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "var(--color-white)",
                    }}
                  >
                    Jennifer Knox-Martin
                  </p>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    Co-Owner &amp; Guest Experience
                  </p>
                </div>
              </div>
              <div className="p-8">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                  style={{
                    backgroundColor: "var(--color-sand)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-teal)" }}
                  >
                    30 Years · Yachting &amp; Luxury Hospitality
                  </span>
                </div>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
                >
                  Jennifer brings{" "}
                  <strong style={{ color: "var(--color-deep)" }}>30 years</strong> of combined
                  yachting and luxury hospitality experience. Her background includes years as
                  a{" "}
                  <strong style={{ color: "var(--color-deep)" }}>professional yacht chef</strong> and
                  as a luxury villa manager in the{" "}
                  <strong style={{ color: "var(--color-deep)" }}>South of France</strong>.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
                >
                  Jen&rsquo;s approach to hospitality ensures that every charterer&rsquo;s experience
                  — from the first phone call to the final mooring line — is handled with warmth,
                  care, and genuine attention to detail.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          GETTING TO COMOX
          ============================================================ */}
      <section
        id="comox-base"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-deep)" }}
        aria-labelledby="getting-here-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Base"
            title="Getting to Comox"
            subtitle="Comox is one of Vancouver Island's most accessible destinations — served by air, sea, and road from across BC and beyond."
            dark
          />

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Air */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Plane
                size={22}
                style={{ color: "var(--color-gold)", marginBottom: "1rem" }}
                aria-hidden="true"
              />
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  color: "var(--color-white)",
                }}
              >
                By Air
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
              >
                <strong style={{ color: "var(--color-white)" }}>
                  Comox Valley Airport (YQQ)
                </strong>{" "}
                is served by Pacific Coastal, WestJet, and Air Canada with direct flights
                from Vancouver and Calgary.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
              >
                <strong style={{ color: "var(--color-white)" }}>Seaplanes:</strong>{" "}
                Harbour Air and Kenmore Air Express offer floatplane service to the Comox
                Valley from Vancouver Harbour, providing a scenic and convenient alternative.
              </p>
            </div>

            {/* Ferry */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Ship
                size={22}
                style={{ color: "var(--color-gold)", marginBottom: "1rem" }}
                aria-hidden="true"
              />
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  color: "var(--color-white)",
                }}
              >
                By Ferry
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
              >
                BC Ferries operates routes to Vancouver Island from{" "}
                <strong style={{ color: "var(--color-white)" }}>Tsawwassen</strong> and{" "}
                <strong style={{ color: "var(--color-white)" }}>Horseshoe Bay</strong> on the
                Lower Mainland. Washington State Ferries serve the{" "}
                <strong style={{ color: "var(--color-white)" }}>Port Angeles</strong> crossing
                from the US Pacific Northwest.
              </p>
            </div>

            {/* Ground */}
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Car
                size={22}
                style={{ color: "var(--color-gold)", marginBottom: "1rem" }}
                aria-hidden="true"
              />
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  color: "var(--color-white)",
                }}
              >
                Local Transport &amp; Accommodation
              </h3>
              <div
                className="space-y-3 text-sm"
                style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
              >
                <p>
                  <strong style={{ color: "var(--color-white)" }}>Comox Taxi:</strong>{" "}
                  <a
                    href="tel:+12503397955"
                    style={{ color: "rgba(255,255,255,0.72)", textDecorationColor: "rgba(255,255,255,0.30)" }}
                  >
                    (250) 339-7955
                  </a>
                </p>
                <p>
                  <strong style={{ color: "var(--color-white)" }}>Ambassador Shuttle:</strong>{" "}
                  <a
                    href="tel:+12503395252"
                    style={{ color: "rgba(255,255,255,0.72)", textDecorationColor: "rgba(255,255,255,0.30)" }}
                  >
                    (250) 339-5252
                  </a>
                </p>
                <p style={{ marginTop: "0.75rem" }}>
                  The Comox Valley offers over{" "}
                  <strong style={{ color: "var(--color-white)" }}>80 restaurants</strong> and
                  a diverse range of accommodation options to suit every budget and preference —
                  from boutique inns to full-service hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="about-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Come Sail With Us</p>
          <h2
            id="about-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Five Decades of Doing This Right.
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Whether you&rsquo;re planning a bareboat passage, a skippered cruise, or looking to
            put your vessel in charter — Maz and Jen would love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/booking" variant="gold" size="lg">
              Enquire Now
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
