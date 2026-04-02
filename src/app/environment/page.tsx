import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Environmental Stewardship — DSYC | Protecting BC Coastal Waters",
  description:
    "Desolation Sound Yacht Charters is committed to protecting BC's coastal marine environment. Learn about our no-discharge, wildlife, anchoring, and leave-no-trace practices.",
  alternates: {
    canonical: "https://desolationsoundyachtcharters.com/environment",
  },
};

const sections = [
  {
    id: "no-discharge",
    eyebrow: "Sewage Management",
    title: "No-Discharge Zones",
    body: (
      <>
        <p>
          All vessels in the DSYC fleet are equipped with{" "}
          <strong style={{ color: "var(--color-deep)" }}>holding tanks</strong>.
          Desolation Sound and the Discovery Islands are among BC&rsquo;s most
          sensitive marine ecosystems, and overboard discharge is both illegal
          in Canadian waters and harmful to the tidal flats, kelp forests, and
          shellfish beds that define the area.
        </p>
        <p>
          Before departure, all charterers are briefed on the locations of
          pump-out stations throughout the cruising area — at Lund, Refuge
          Cove, and other key anchorages — and are expected to use them. We
          ask that holding tanks never be discharged at anchor or in enclosed
          inlets.
        </p>
      </>
    ),
  },
  {
    id: "wildlife",
    eyebrow: "Marine Mammals & Birds",
    title: "Wildlife Guidelines",
    body: (
      <>
        <p>
          The waters around Desolation Sound are home to orca, humpback, and
          minke whales, Steller sea lions, harbour seals, porpoise, and a
          remarkable diversity of seabirds. DSYC follows the{" "}
          <strong style={{ color: "var(--color-deep)" }}>
            BC Whale Watch Operator Association guidelines
          </strong>{" "}
          and expects all charterers to do the same.
        </p>
        <ul>
          <li>
            Maintain a minimum approach distance of{" "}
            <strong style={{ color: "var(--color-deep)" }}>100 metres</strong>{" "}
            from all cetaceans (200 metres for orca)
          </li>
          <li>Do not pursue, encircle, or cut off the path of any wildlife</li>
          <li>
            Reduce speed to bare steerage and silence non-essential equipment
            when wildlife is nearby
          </li>
          <li>
            Avoid approaching hauled-out sea lions or seals on rocks and
            beaches
          </li>
          <li>
            Do not feed any marine or coastal wildlife under any circumstances
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "anchoring",
    eyebrow: "Seabed Protection",
    title: "Anchoring Best Practices",
    body: (
      <>
        <p>
          Anchoring carelessly can cause lasting damage to the seabed habitats
          that support fish, invertebrates, and the broader food chain. We ask
          all charterers to follow these practices:
        </p>
        <ul>
          <li>
            Use designated{" "}
            <strong style={{ color: "var(--color-deep)" }}>
              mooring buoys
            </strong>{" "}
            where available — they are placed specifically to protect the
            seabed below
          </li>
          <li>
            Anchor in sand or mud bottoms — avoid anchoring on kelp beds,
            eelgrass meadows, or rocky reef
          </li>
          <li>
            Use appropriate scope (minimum 5:1 chain, 7:1 rope) to avoid
            dragging and swinging damage
          </li>
          <li>
            In popular anchorages, be aware of your swinging circle and avoid
            over-crowding areas that are already busy
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "leave-no-trace",
    eyebrow: "Waste & Plastics",
    title: "Leave No Trace",
    body: (
      <>
        <p>
          Desolation Sound&rsquo;s remote anchorages have no waste collection
          services. Everything brought in must come back out.
        </p>
        <ul>
          <li>
            Pack out{" "}
            <strong style={{ color: "var(--color-deep)" }}>
              all garbage
            </strong>{" "}
            — nothing is to be left ashore or deposited overboard
          </li>
          <li>
            We encourage charterers to minimize single-use plastics before
            departure — bring reusable bags, containers, and water bottles
          </li>
          <li>
            Recycle where facilities are available (Lund, Campbell River,
            Comox) and consolidate waste to reduce volume
          </li>
          <li>
            Do not disturb, remove, or collect shellfish, sea stars, or other
            intertidal species
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "fuel",
    eyebrow: "Spill Prevention",
    title: "Fuel Practices",
    body: (
      <>
        <p>
          Even small fuel spills cause disproportionate damage to marine
          ecosystems. Our fleet fuelling protocol minimises this risk:
        </p>
        <ul>
          <li>
            Fuel slowly — never top up tanks to overflowing
          </li>
          <li>
            Drip cloths are used at all fuel fills to capture any overflow
          </li>
          <li>
            Bilges are checked and pump-out wands are aboard every vessel in
            the event of a spill
          </li>
          <li>
            Charterers are asked to report any accidental spills immediately
            to DSYC — and to the Canadian Coast Guard (1-800-889-8852) for
            any spill of significance
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "communities",
    eyebrow: "Coastal Communities & First Nations",
    title: "Local Communities",
    body: (
      <>
        <p>
          The anchorage towns along the Desolation Sound cruising route —
          Refuge Cove, Lund, Whaletown, Alert Bay — are small, year-round
          communities. We ask charterers to support local businesses: buy
          fuel, groceries, and ice locally, eat at local restaurants, and
          engage with resident communities.
        </p>
        <p>
          Much of the Desolation Sound area lies within the traditional and
          unceded territories of the{" "}
          <strong style={{ color: "var(--color-deep)" }}>
            K&rsquo;ómoks, Wei Wai Kum, We Wai Kai, Homalco, and Da&rsquo;naxda&rsquo;xw
            Awaetlala
          </strong>{" "}
          First Nations, among others. Charterers are asked to respect
          cultural sites, avoid landing on First Nations private lands without
          permission, and approach any cultural or historic features with
          appropriate care.
        </p>
      </>
    ),
  },
];

export default function EnvironmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Commitment"
        title="Environmental Stewardship"
        subtitle="Operating in some of BC's most pristine waters since 1978 comes with responsibility."
      />

      {/* ============================================================
          INTRO
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="env-intro-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="env-intro-heading"
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
              color: "var(--color-deep)",
            }}
          >
            Protecting What Makes This Place Special
          </h2>
          <div
            className="space-y-5 text-lg"
            style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
          >
            <p>
              Desolation Sound Yacht Charters has been navigating these waters
              for over{" "}
              <strong style={{ color: "var(--color-deep)" }}>45 years</strong>.
              In that time, we have watched the coastal environment change —
              and we understand that protecting it is not separate from the
              charter experience. It is the charter experience.
            </p>
            <p>
              The waters of Desolation Sound Marine Park, the Discovery
              Islands, and Johnstone Strait are among the richest marine
              environments on the planet. Keeping them that way requires
              deliberate choices from everyone who uses them — including us,
              and including you.
            </p>
            <p>
              The guidelines below are part of every DSYC charter briefing.
              We ask all charterers to read and follow them, and to pass them
              on to crew.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          ENVIRONMENTAL SECTIONS — alternating bg
          ============================================================ */}
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="py-20 lg:py-28"
          style={{
            backgroundColor:
              i % 2 === 0 ? "var(--color-mist)" : "var(--color-sand)",
          }}
          aria-labelledby={`${section.id}-heading`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow mb-3">{section.eyebrow}</p>
            <h2
              id={`${section.id}-heading`}
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                color: "var(--color-deep)",
              }}
            >
              {section.title}
            </h2>
            <div
              className="prose-dsyc space-y-4 text-lg"
              style={{ color: "var(--color-slate)", lineHeight: 1.75 }}
            >
              {section.body}
            </div>
          </div>
        </section>
      ))}

      {/* ============================================================
          CTA
          ============================================================ */}
      <section
        className="py-24"
        style={{ backgroundColor: "var(--color-deep)" }}
        aria-labelledby="env-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Sail Responsibly</p>
          <h2
            id="env-cta-heading"
            className="mb-6 text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h2)",
            }}
          >
            Enjoy These Waters Responsibly
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Ready to explore some of the most beautiful sailing waters on
            earth? Browse our charter options and plan your voyage.
          </p>
          <Button href="/charter" variant="gold" size="lg">
            Explore Charter Options
          </Button>
        </div>
      </section>
    </>
  );
}
