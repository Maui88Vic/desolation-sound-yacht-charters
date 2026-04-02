import type { Metadata } from "next";
import { DsycJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Compass, Anchor, Moon, CloudRain, Ship } from "lucide-react";

export const metadata: Metadata = {
  title: "IYT & CRYA Sailing Training — Comox, BC | DSYC",
  description:
    "DSYC is a registered IYT and CRYA training centre based in Comox, BC. Our Cruise N' Learn programme is 6 days, up to 4 students, aboard a vessel up to 42 ft.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/training" },
};

const skills = [
  {
    icon: Compass,
    title: "Coastal Passages",
    description:
      "Plan and execute multi-day coastal passages, reading charts, tide tables, and current atlases with confidence.",
  },
  {
    icon: Anchor,
    title: "Anchoring & Berthing",
    description:
      "Master anchoring techniques for BC's varied bottom types — from Desolation Sound mud to rocky approaches.",
  },
  {
    icon: Moon,
    title: "Night Passages",
    description:
      "Develop watchkeeping discipline and the situational awareness required for safe overnight sailing.",
  },
  {
    icon: CloudRain,
    title: "Weather Assessment",
    description:
      "Learn to read Pacific Northwest weather patterns, GRIB files, and interpret marine forecasts for passage planning.",
  },
  {
    icon: Ship,
    title: "Seamanship",
    description:
      "Rope work, sail trim, man-overboard procedures, and the practical seamanship that builds genuine competence.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="IYT & CRYA Certified"
        title="Cruise N' Learn — On-Water Training"
        subtitle="Turn your charter into a qualification. DSYC is a registered IYT and CRYA training centre based at Comox Marina."
      />

      {/* ============================================================
          PROGRAMME OVERVIEW
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="programme-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left: body copy */}
            <div>
              <SectionHeader
                eyebrow="The Programme"
                title="Cruise N&rsquo; Learn"
              />
              <div className="prose-dsyc">
                <p style={{ color: "var(--color-slate)", lineHeight: 1.75 }}>
                  Desolation Sound Yacht Charters is a registered training centre with both
                  the <strong style={{ color: "var(--color-deep)" }}>International Yacht Training (IYT)</strong> and{" "}
                  <strong style={{ color: "var(--color-deep)" }}>Canadian Yachting Association (CRYA)</strong> — two
                  of the most respected certification bodies in recreational and professional sailing.
                </p>
                <p style={{ color: "var(--color-slate)", lineHeight: 1.75, marginTop: "1.25rem" }}>
                  Our <em>Cruise N&rsquo; Learn</em> programme places students aboard a vessel
                  up to 42 feet for a <strong style={{ color: "var(--color-deep)" }}>six-day</strong> live-aboard
                  passage into some of the Pacific Northwest&rsquo;s most spectacular cruising grounds. Up to{" "}
                  <strong style={{ color: "var(--color-deep)" }}>four students</strong> per course ensures
                  genuine hands-on instruction rather than passive observation.
                </p>
                <p style={{ color: "var(--color-slate)", lineHeight: 1.75, marginTop: "1.25rem" }}>
                  Students are responsible for vessel provisioning and fuel costs. Course pricing is
                  provided by quote — contact us to discuss your experience level, certification goals,
                  and preferred dates.
                </p>
              </div>
            </div>

            {/* Right: at-a-glance card */}
            <div>
              <div
                className="rounded-lg p-8 lg:p-10"
                style={{
                  backgroundColor: "var(--color-deep)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <p className="eyebrow eyebrow-gold mb-6">Programme at a Glance</p>
                <ul
                  className="space-y-5"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {[
                    { label: "Duration", value: "6 days" },
                    { label: "Max students", value: "4" },
                    { label: "Vessel size", value: "Up to 42 ft" },
                    { label: "Certifications", value: "IYT & CRYA" },
                    { label: "Provisioning", value: "Student responsibility" },
                    { label: "Fuel", value: "Student responsibility" },
                    { label: "Pricing", value: "By quote" },
                  ].map(({ label, value }) => (
                    <li
                      key={label}
                      className="flex items-baseline justify-between gap-4 border-b pb-5"
                      style={{ borderColor: "rgba(255,255,255,0.10)" }}
                    >
                      <span
                        className="text-sm font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(255,255,255,0.50)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-right"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.1rem",
                          color: "var(--color-white)",
                        }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/booking" variant="gold" size="md">
                    Request a Quote
                  </Button>
                  <p
                    className="mt-3 text-xs"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    Select &ldquo;Training&rdquo; in the enquiry form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT YOU'LL LEARN
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="skills-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Curriculum"
            title="What You&rsquo;ll Learn"
            subtitle="Real-world skills acquired on real passages in one of Canada's most challenging and rewarding cruising environments."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-lg p-7"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <skill.icon
                  size={22}
                  style={{ color: "var(--color-teal)", marginBottom: "1rem" }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "var(--color-deep)",
                  }}
                >
                  {skill.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)", lineHeight: 1.7 }}
                >
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="training-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Earn Your Qualification</p>
          <h2
            id="training-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Ready to Take the Helm?
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Contact us to discuss your experience level, target certification, and available
            dates. Courses are scheduled to suit small groups — enquire early.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/booking" variant="gold" size="lg">
              Enquire About Training
            </Button>
            <Button href="/fleet" variant="ghost" size="lg">
              Browse Training Vessels
            </Button>
          </div>
          <p
            className="mt-4 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Select &ldquo;Training&rdquo; in the enquiry form.
          </p>
        </div>
      </section>
    </>
  );
}
