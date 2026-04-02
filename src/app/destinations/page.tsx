import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { DsycJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Desolation Sound, Broughtons & Princess Louisa — Destinations | DSYC",
  description:
    "Three of BC's most spectacular cruising destinations accessible from Comox: Desolation Sound, the Broughton Archipelago, and Princess Louisa Inlet.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/destinations" },
};

const destinations = [
  {
    id: "desolation-sound",
    name: "Desolation Sound",
    eyebrow: "Day 1 from Comox",
    passage: "30–40 NM crossing of the Georgia Strait",
    duration: "7 days minimum",
    imageLeft: true,
    image: "/images/destinations/desolation-sound.jpg",
    imageAlt:
      "Sailing yacht anchored in the calm green waters of Desolation Sound, BC, surrounded by forested mountains",
    paragraphs: [
      "Named by Captain George Vancouver in 1792 — a man who found little to admire on this stretch of coast — Desolation Sound has since proven him spectacularly wrong. Today it is widely regarded as one of the finest cruising grounds in the Pacific Northwest, and among the most spectacular in the world.",
      "Dramatic fjords, 7,000-foot peaks rising directly from the water, and cascading waterfalls form the backdrop to anchorages that feel genuinely untouched. The warmest swimming waters north of Mexico — regularly reaching 75°F and above — make this a destination unlike anywhere else on the BC coast.",
      "Classic anchorages include Prideaux Haven, Tenedos Bay, Refuge Cove, and Squirrel Cove. Day 1 from Comox is a 30–40 NM crossing of the Georgia Strait — a passage that rewards an early start.",
    ],
    highlights: [
      "Warmest swimming waters north of Mexico (75°F+)",
      "Prideaux Haven, Tenedos Bay, Refuge Cove, Squirrel Cove",
      "7,000-foot peaks dropping directly into the fjord",
      "30–40 NM crossing from Comox on Day 1",
    ],
  },
  {
    id: "broughtons",
    name: "Broughton Archipelago",
    eyebrow: "10–14 Day Passage",
    passage: "North from Comox via Johnstone Strait",
    duration: "10–14 days",
    imageLeft: false,
    image: "/images/destinations/broughtons.jpg",
    imageAlt:
      "Remote anchorage in the Broughton Archipelago, BC — forested islands reflected in still water at dusk",
    paragraphs: [
      "A 10 to 14-day passage north from Comox opens the remote and spectacular Broughton Archipelago — a vast wilderness of islands, inlets, and channels that sees a fraction of the traffic of Desolation Sound. This is BC sailing at its most raw.",
      "Telegraph Cove, Port McNeill, and Blind Channel are among the key stops on the route north. First Nations heritage is woven throughout this region — totem poles, burial islands, and oral histories that predate European contact by thousands of years.",
      "Johnstone Strait is one of the world's best orca-watching locations. The northern resident orca population regularly transits these waters in summer, and humpback sightings are increasingly common. Note: Johnstone Strait can present challenging conditions and a power vessel is preferred for this passage.",
    ],
    highlights: [
      "Johnstone Strait — world-class orca watching",
      "Remote wilderness anchorages, minimal traffic",
      "Telegraph Cove, Port McNeill, Blind Channel",
      "Power vessel preferred for Johnstone Strait conditions",
    ],
  },
  {
    id: "princess-louisa",
    name: "Princess Louisa Inlet",
    eyebrow: "7-Day Passage",
    passage: "Via Jervis Inlet",
    duration: "7 days",
    imageLeft: true,
    image: "/images/destinations/princess-louisa.jpg",
    imageAlt:
      "Sheer granite walls of Princess Louisa Inlet rising thousands of feet from the still water at the head of the fjord",
    paragraphs: [
      "A 7-day passage south and east from Comox leads to Malibu Rapids — a tidal narrows that opens, on slack water, into one of BC's most dramatic fjords. Princess Louisa Inlet has stopped mariners in their tracks for generations.",
      "Sheer granite walls rise 7,000 feet directly from the water on both sides. At the head of the inlet, Chatterbox Falls drops in a long cascade directly into the tidal water — one of the most photographed sights on the entire BC coast.",
      "For BC mariners, Princess Louisa Inlet sits firmly on the bucket list. It rewards the passage required to reach it many times over.",
    ],
    highlights: [
      "Chatterbox Falls drops directly into tidal water",
      "7,000-foot sheer granite walls on both sides",
      "Accessed through Malibu Rapids at slack water only",
      "Universally considered a bucket-list BC destination",
    ],
  },
];

const wildlife = [
  { category: "Cetaceans", species: ["Orca (Northern Residents)", "Humpback Whale", "Minke Whale", "Gray Whale", "Fin Whale", "Pacific White-sided Dolphin", "Dall's Porpoise"] },
  { category: "Marine Mammals", species: ["Steller Sea Lions (Vivien Island)", "Harbour Seal", "Northern Fur Seal"] },
  { category: "Land Mammals", species: ["Black Bear (Toba Inlet & beyond)", "Wolf", "Mink", "River Otter"] },
  { category: "Birds", species: ["Bald Eagle", "Great Blue Heron", "Rhinoceros Auklet", "Tufted Puffin (Mitlenatch Island)", "Marbled Murrelet", "Pelagic Cormorant"] },
];

export default function DestinationsPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="The Destinations"
        title="Three of BC's Most Spectacular Cruising Grounds"
        subtitle="All three accessible from DSYC's base at Comox Marina. All three unlike anywhere else on earth."
      />

      {/* ============================================================
          DESTINATION SECTIONS — alternating layout
          ============================================================ */}
      {destinations.map((dest, index) => (
        <section
          key={dest.id}
          id={dest.id}
          className="py-0 scroll-mt-20"
          style={{
            backgroundColor: index % 2 === 0 ? "var(--color-sand)" : "var(--color-mist)",
          }}
          aria-labelledby={`${dest.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-0 lg:grid-cols-2 ${
                dest.imageLeft ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[420px] overflow-hidden lg:h-[600px] ${
                  dest.imageLeft ? "lg:col-start-1" : "lg:col-start-2"
                }`}
              >
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Passage badge */}
                <div
                  className="absolute bottom-6 left-6 rounded-md px-4 py-3"
                  style={{
                    backgroundColor: "var(--color-deep)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {dest.eyebrow}
                  </p>
                  <p className="mt-0.5 text-sm text-white">{dest.passage}</p>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center px-0 py-16 lg:px-16 lg:py-24 ${
                  dest.imageLeft ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                }`}
              >
                <p className="eyebrow mb-3">{dest.eyebrow}</p>
                <h2
                  id={`${dest.id}-heading`}
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h2)",
                    color: "var(--color-deep)",
                  }}
                >
                  {dest.name}
                </h2>
                <div className="space-y-4 mb-8">
                  {dest.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="leading-relaxed"
                      style={{ color: "var(--color-slate)", fontSize: "var(--text-body-lg)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <ul className="mb-8 space-y-2" role="list">
                  {dest.highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-3 text-sm font-medium"
                      style={{ color: "var(--color-ocean)" }}
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-teal)" }}
                        aria-hidden="true"
                      />
                      {hl}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button href="/itineraries" variant="outline">
                    View Sample Itineraries <ArrowRight size={14} aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ============================================================
          WILDLIFE
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-deep)" }}
        aria-labelledby="wildlife-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What You'll Encounter"
            title="Wildlife of the BC Coast"
            subtitle="The waters from Comox to the Broughtons are among the most biologically rich marine environments in the Pacific. Wildlife encounters are not the exception — they're the rule."
            dark
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wildlife.map((group) => (
              <div
                key={group.category}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="mb-4 h-0.5 w-8 rounded-full"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-4 text-white"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500 }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2" role="list">
                  {group.species.map((s) => (
                    <li
                      key={s}
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="destinations-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow eyebrow-gold mb-4">Plan Your Route</p>
          <h2
            id="destinations-cta-heading"
            className="mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)" }}
          >
            Which Destination Calls to You?
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Browse our sample itineraries or contact us directly to build your own route. Maz and
            Jen have sailed every inch of this coast — their knowledge is yours to use.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/itineraries" variant="gold" size="lg">
              View Sample Itineraries <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/booking" variant="ghost" size="lg">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
