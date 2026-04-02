import type { Metadata } from "next";
import { DsycJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Wrench, Sparkles, Waves, Radio, Eye, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "Marine Services & Repairs — Comox Marina | DSYC",
  description:
    "Professional marine mechanical services at Comox Marina. Diesel engine repair, brightwork, hull inspection (Deep Trekker ROV), VHF installation, and more. Red Seal & ABYC certified.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/marine-services" },
};

const services = [
  {
    icon: Wrench,
    title: "Diesel Engine Repair",
    description:
      "Full diagnosis, repair, and overhaul of marine diesel engines. Ralph and Terry bring 90+ combined years of heavy-duty marine mechanical experience to every job.",
  },
  {
    icon: Sparkles,
    title: "Brightwork Restoration",
    description:
      "Teak brightwork stripped, treated, and restored to its original lustre. Varnish or oil finishes applied to the highest standard.",
  },
  {
    icon: Waves,
    title: "Polishing & Topsides",
    description:
      "Professional topsides polishing using G Technik products. Restore your hull to a showroom finish and protect against the Pacific Northwest's UV and salt exposure.",
  },
  {
    icon: Anchor,
    title: "Septic System Upgrades",
    description:
      "Marine holding tank installation and upgrades to meet Transport Canada regulations — ensuring you can cruise all anchorages without restriction.",
  },
  {
    icon: Radio,
    title: "VHF Radio Installation",
    description:
      "Fixed-mount VHF installation, antenna alignment, and DSC registration. Stay connected and compliant with current Transport Canada requirements.",
  },
  {
    icon: Eye,
    title: "Underwater Hull Inspection",
    description:
      "HD video hull inspection using a Deep Trekker ROV. Assess keel condition, running gear, through-hulls, and hull integrity without hauling — saving time and cost.",
  },
];

export default function MarineServicesPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="Comox Marina"
        title="Professional Marine Services"
        subtitle="Red Seal and ABYC certified technicians with over 90 combined years in heavy-duty marine mechanics — serving the Comox Valley and beyond."
      />

      {/* ============================================================
          TEAM INTRO
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="The Team"
                title="Ralph &amp; Terry"
              />
              <div
                className="space-y-5 text-lg"
                style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
              >
                <p>
                  Our marine services are led by <strong style={{ color: "var(--color-deep)" }}>Ralph</strong> and{" "}
                  <strong style={{ color: "var(--color-deep)" }}>Terry</strong>, two of the most experienced
                  marine mechanics on Vancouver Island. Together they bring over{" "}
                  <strong style={{ color: "var(--color-deep)" }}>90 years of combined experience</strong> in
                  heavy-duty marine mechanics to every job.
                </p>
                <p>
                  Both are{" "}
                  <strong style={{ color: "var(--color-deep)" }}>Red Seal certified</strong> and hold{" "}
                  <strong style={{ color: "var(--color-deep)" }}>ABYC (American Boat and Yacht Council)</strong>{" "}
                  certifications — the gold standard for professional marine technical work in North America.
                </p>
                <p>
                  Whether it&rsquo;s a routine service before your charter season or a complex mechanical
                  repair, Ralph and Terry approach every vessel with the same thoroughness they apply to
                  the DSYC charter fleet.
                </p>
              </div>
            </div>

            {/* Credentials callout */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Combined Experience", value: "90+ Years" },
                { label: "Certification", value: "Red Seal" },
                { label: "Certification", value: "ABYC" },
                { label: "Inspection Tech", value: "Deep Trekker ROV" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg p-7"
                  style={{
                    backgroundColor: "var(--color-deep)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      color: "var(--color-white)",
                    }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES GRID
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Services"
            subtitle="From engine overhauls to hull inspections — professional marine care for any vessel."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-lg p-7"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-sand)" }}
                >
                  <service.icon
                    size={20}
                    style={{ color: "var(--color-teal)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "var(--color-deep)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-slate)", lineHeight: 1.7 }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MARINE STORE CONTACT
          ============================================================ */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="store-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-lg p-8 lg:p-10"
            style={{
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <p className="eyebrow mb-3">Marine Store</p>
            <h2
              id="store-heading"
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3)",
                color: "var(--color-deep)",
              }}
            >
              Parts, Supplies &amp; Direct Contact
            </h2>
            <p
              className="mb-6 text-lg leading-relaxed"
              style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
            >
              Our marine store at Comox Marina carries a range of parts, consumables, and
              supplies. Reach the team directly to discuss a service, request a quote, or
              order parts.
            </p>
            <div
              className="flex flex-wrap gap-8"
              style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}
            >
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-stone)" }}
                >
                  Phone
                </p>
                <a
                  href="tel:+12509410396"
                  className="text-lg font-semibold no-underline"
                  style={{ color: "var(--color-teal)" }}
                >
                  250-941-0396
                </a>
              </div>
              <div>
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-stone)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:marinesupply@dsyc.ca"
                  className="text-lg font-semibold no-underline"
                  style={{ color: "var(--color-teal)" }}
                >
                  marinesupply@dsyc.ca
                </a>
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
        aria-labelledby="marine-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Book a Service</p>
          <h2
            id="marine-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Get Your Vessel in Expert Hands.
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Contact us to discuss your vessel&rsquo;s service needs. Ralph and Terry will
            assess the work and provide a clear, honest quote.
          </p>
          <Button href="/booking" variant="gold" size="lg">
            Request a Service Quote
          </Button>
          <p
            className="mt-3 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Select &ldquo;Service&rdquo; in the enquiry form.
          </p>
        </div>
      </section>
    </>
  );
}
