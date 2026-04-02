import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Marine Store — DSYC | Comox, BC",
  description:
    "Quality marine safety equipment, navigation aids, deck hardware, electronics, foul weather gear, and DSYC branded items. Visit us at 1797 Comox Ave #103, Comox, BC.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/store" },
};

const categories = [
  {
    title: "Safety Equipment",
    items: [
      "Life jackets & PFDs",
      "Flares & pyrotechnics",
      "Fire extinguishers",
      "EPIRBs & PLBs",
      "Safety harnesses & tethers",
    ],
  },
  {
    title: "Navigation Aids",
    items: [
      "CHS nautical charts",
      "Cruising guides",
      "Pilot books",
      "Dividers & parallel rules",
      "Plotters & navigation tools",
    ],
  },
  {
    title: "Deck Hardware",
    items: [
      "Lines & dock lines",
      "Fenders",
      "Blocks & tackles",
      "Cleats & fairleads",
      "Shackles & snatch blocks",
    ],
  },
  {
    title: "Electronics",
    items: [
      "VHF handheld radios",
      "Handheld GPS units",
      "Marine binoculars",
      "Depth sounders",
      "Batteries & charging accessories",
    ],
  },
  {
    title: "Clothing & Foul Weather Gear",
    items: [
      "Mustang Survival gear",
      "Grundéns foul weather jackets & bibs",
      "Fleece mid-layers",
      "Marine hats & caps",
      "UV-protective clothing",
    ],
  },
  {
    title: "DSYC Branded Items",
    items: [
      "DSYC hats & caps",
      "T-shirts & long sleeves",
      "Fleece jackets",
      "Burgees",
      "Stickers & decals",
    ],
  },
];

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Gear Up"
        title="Marine Store"
        subtitle="Quality marine equipment, safety gear, and DSYC branded items — available at our Comox location."
      />

      {/* ============================================================
          VISIT US IN-STORE
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="visit-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Location"
            title="Visit Us In-Store"
            subtitle="Our marine store is located at the Comox Marina. Stop in during business hours to browse our full inventory and get advice from our team."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-teal)" }}
              >
                Address
              </p>
              <address
                className="not-italic leading-relaxed"
                style={{ color: "var(--color-slate)", fontStyle: "normal" }}
              >
                1797 Comox Ave #103
                <br />
                Comox, BC
              </address>
            </div>

            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-teal)" }}
              >
                Store Hours
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM
              </p>
            </div>

            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-teal)" }}
              >
                Phone
              </p>
              <a
                href="tel:+12503397222"
                className="leading-relaxed"
                style={{ color: "var(--color-ocean)" }}
              >
                250-339-7222
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRODUCT CATEGORIES
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="categories-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Carry"
            title="Product Categories"
            subtitle="We stock a curated selection of quality marine equipment and supplies. Full inventory is available in-store."
            align="center"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-lg p-6 shadow-sm transition hover:shadow-md"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    color: "var(--color-deep)",
                  }}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "var(--color-slate)" }}
                    >
                      <span
                        className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-gold)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            className="mt-12 text-center text-sm"
            style={{ color: "var(--color-slate)" }}
          >
            Full inventory available in-store. Call ahead to check availability
            for specific items.
          </p>
        </div>
      </section>

      {/* ============================================================
          CONTACT CTA
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="store-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Get In Touch</p>
          <h2
            id="store-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Questions About Our Inventory?
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Call the store or send us an email and we&rsquo;ll confirm stock
            before you make the trip in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="tel:+12503397222" variant="gold" size="lg">
              Call 250-339-7222
            </Button>
            <Button
              href="mailto:Charter@DesolationSoundYachtCharters.com"
              variant="ghost"
              size="lg"
            >
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
