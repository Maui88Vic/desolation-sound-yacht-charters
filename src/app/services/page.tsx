import type { Metadata } from "next";
import { DsycJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Rental Services & Provisioning | DSYC",
  description:
    "Enhance your charter with rental gear — quilts, foul weather gear, kayaks, SUPs, fishing rods, crab pots, and more. Available from Comox Marina.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/services" },
};

const rentalItems = [
  { item: "Quilts & sheet set (queen)", rate: "$50.00", per: "set / charter" },
  { item: "Sleeping bags", rate: "$25.00", per: "each / charter" },
  { item: "Towels", rate: "$8.00", per: "set / charter" },
  { item: "Foul weather gear", rate: "$10.00", per: "set / charter" },
  { item: "Cooler (48 L)", rate: "$3.00", per: "day" },
  { item: "SUP (stand-up paddleboard)", rate: "$30.00", per: "day" },
  { item: "Kayak (6+ days)", rate: "$20.00", per: "day" },
  { item: "Kayak (3–5 days)", rate: "$22.00", per: "day" },
  { item: "Crab pots", rate: "$7.00", per: "day" },
  { item: "Prawn traps", rate: "$7.00", per: "day" },
  { item: "Fishing rod", rate: "$10.00", per: "day" },
  { item: "Downrigger (Scotty)", rate: "$35.00", per: "day" },
  { item: "Rod holders", rate: "$3.00", per: "day" },
];

export default function ServicesPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="On-Charter Rentals"
        title="Rental Services & Provisioning"
        subtitle="Everything you need to fish, paddle, and sleep comfortably — available to add to any charter from Comox Marina."
      />

      {/* ============================================================
          RENTAL TABLE
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="rentals-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gear & Equipment"
            title="Rental Price List"
            subtitle="Add gear to your charter reservation. All items are subject to 12% tax."
          />

          <div
            className="overflow-hidden rounded-lg"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col" style={{ textAlign: "right" }}>Rate (CAD)</th>
                    <th scope="col">Per</th>
                  </tr>
                </thead>
                <tbody>
                  {rentalItems.map((row) => (
                    <tr key={row.item}>
                      <td
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--color-ink)",
                        }}
                      >
                        {row.item}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          fontWeight: 600,
                          fontFamily: "var(--font-body)",
                          color: "var(--color-deep)",
                        }}
                      >
                        {row.rate}
                      </td>
                      <td
                        style={{
                          color: "var(--color-stone)",
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        {row.per}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p
            className="mt-4 text-sm"
            style={{ color: "var(--color-stone)" }}
          >
            * All rental items are subject to 12% GST/PST. Prices in Canadian dollars.
          </p>
        </div>
      </section>

      {/* ============================================================
          PROVISIONING NOTICE
          ============================================================ */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="provisioning-heading"
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
            <div
              className="mb-4 h-1 w-10 rounded-full"
              style={{ backgroundColor: "var(--color-teal)" }}
              aria-hidden="true"
            />
            <h2
              id="provisioning-heading"
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3)",
                color: "var(--color-deep)",
              }}
            >
              Provisioning Services
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
            >
              We regrettably advise that provisioning services are currently unavailable.
              We recommend visiting the Comox Valley&rsquo;s excellent local markets and
              provisioning independently before your departure — our team is happy to suggest
              the best local suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="services-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Ready to Book?</p>
          <h2
            id="services-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Add Rentals to Your Charter
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Request rental gear when you submit your charter enquiry and our team
            will confirm availability and include everything in your booking.
          </p>
          <Button href="/booking" variant="gold" size="lg">
            Enquire &amp; Reserve Gear
          </Button>
        </div>
      </section>
    </>
  );
}
