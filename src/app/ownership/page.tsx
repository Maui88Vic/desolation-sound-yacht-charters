import type { Metadata } from "next";
import { DsycJsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { BadgeCheck, CalendarCheck, Wrench, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Yacht Ownership Programme — BC Coast | DSYC",
  description:
    "Place your yacht in the DSYC charter fleet. Lowest commission on the BC coast, no restrictions on owner use, insurance included, and meticulous care from Maz and Jen.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/ownership" },
};

const benefits = [
  {
    icon: BadgeCheck,
    title: "Lowest Commission on the BC Coast",
    description:
      "Our ownership programme is structured to put more revenue back in your pocket. Transparent accounting with no hidden fees.",
  },
  {
    icon: CalendarCheck,
    title: "No Restrictions on Owner Use",
    description:
      "Your boat remains yours. Block off dates for personal use anytime — no minimums, no penalties, no questions asked.",
  },
  {
    icon: Wrench,
    title: "Scheduled Maintenance & Logs",
    description:
      "Comprehensive scheduled maintenance, detailed maintenance logs, and full accounting so you always know exactly what has been done and when.",
  },
  {
    icon: ShieldCheck,
    title: "Fleet Insurance Programme",
    description:
      "Your vessel is covered under DSYC's fleet insurance programme, giving you professional-grade coverage without sourcing a separate marine policy.",
  },
  {
    icon: HeartHandshake,
    title: "Maz & Jen Look After Her",
    description:
      "Every vessel in the fleet is cared for as if it were their own. Maz and Jen take extraordinary steps to ensure your vessel is ship shape and well maintained.",
  },
];

export default function OwnershipPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="Yacht Ownership Programme"
        title="Put Your Boat to Work"
        subtitle="The lowest commission on the BC coast. Full accounting, scheduled maintenance, and the peace of mind that comes from knowing Maz and Jen are looking after her."
      />

      {/* ============================================================
          INTRO SECTION
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="ownership-intro-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Why Place Your Boat With DSYC"
                title="Your Investment Working for You"
              />
              <div
                className="space-y-5 text-lg leading-relaxed"
                style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
              >
                <p>
                  Owning a yacht on the BC coast is a privilege — and an ongoing commitment.
                  Placing your vessel in the DSYC charter programme lets you offset running
                  costs while knowing she is professionally managed, impeccably maintained,
                  and available to you whenever you want her.
                </p>
                <p>
                  DSYC has been operating at Comox Marina since 2012. Owners in the fleet
                  benefit from the operational infrastructure, client base, and reputation that
                  come with nearly five decades of charter management on this coast.
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <div>
              <figure
                className="rounded-lg p-10"
                style={{
                  backgroundColor: "var(--color-deep)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "5rem",
                    lineHeight: 1,
                    color: "var(--color-gold)",
                    marginBottom: "-0.5rem",
                  }}
                >
                  &ldquo;
                </div>
                <blockquote>
                  <p
                    className="text-xl italic leading-relaxed"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-white)",
                      lineHeight: 1.65,
                    }}
                  >
                    Jen and Maz take extraordinary steps to ensure your &lsquo;baby&rsquo; is
                    ship shape and well maintained.
                  </p>
                </blockquote>
                <figcaption
                  className="mt-6 text-sm font-medium uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  — DSYC Fleet Owner
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BENEFITS GRID
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="benefits-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What&rsquo;s Included"
            title="Programme Benefits"
            subtitle="Everything you need to place your vessel in charter with confidence."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
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
                  <benefit.icon
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
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-slate)", lineHeight: 1.7 }}
                >
                  {benefit.description}
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
        aria-labelledby="ownership-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Let&rsquo;s Talk</p>
          <h2
            id="ownership-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Your Vessel Deserves the Best Care on the Coast.
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Reach out to discuss your vessel, your goals, and how the DSYC ownership
            programme can work for you. Maz and Jen respond personally to every enquiry.
          </p>
          <Button href="/booking" variant="gold" size="lg">
            Enquire About Ownership
          </Button>
          <p
            className="mt-3 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Select &ldquo;Ownership&rdquo; in the enquiry form.
          </p>
        </div>
      </section>
    </>
  );
}
