import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { boats, getBoatBySlug, formatPrice } from "@/lib/fleet";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return boats.map((boat) => ({ slug: boat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const boat = getBoatBySlug(slug);

  if (!boat) {
    return {
      title: "Vessel Not Found | DSYC",
    };
  }

  return {
    title: `${boat.name} — ${boat.model} Charter | DSYC`,
    description: `Charter the ${boat.name}, a ${boat.year} ${boat.model} from Comox, BC. ${boat.loa} — ${boat.cabins} cabin${boat.cabins !== 1 ? "s" : ""}, ${boat.heads} head${boat.heads !== 1 ? "s" : ""}. Low season from ${formatPrice(boat.lowSeason)} CAD/week.`,
    alternates: {
      canonical: `https://desolationsoundyachtcharters.com/fleet/${boat.slug}`,
    },
  };
}

export default async function BoatDetailPage({ params }: Props) {
  const { slug } = await params;
  const boat = getBoatBySlug(slug);

  if (!boat) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${boat.name} — ${boat.model} Yacht Charter`,
    description: boat.description,
    image: `https://desolationsoundyachtcharters.com${boat.heroImage}`,
    brand: {
      "@type": "Brand",
      name: "Desolation Sound Yacht Charters",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: boat.lowSeason,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: boat.lowSeason,
        priceCurrency: "CAD",
        name: "Low Season Weekly Charter",
      },
      availability: "https://schema.org/InStock",
      url: `https://desolationsoundyachtcharters.com/fleet/${boat.slug}`,
      seller: {
        "@type": "Organization",
        name: "Desolation Sound Yacht Charters",
        url: "https://desolationsoundyachtcharters.com",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHero
        eyebrow={boat.model}
        title={boat.name}
        subtitle={`${boat.loa} · ${boat.cabins} Cabin${boat.cabins !== 1 ? "s" : ""} · ${boat.heads} Head${boat.heads !== 1 ? "s" : ""} · ${boat.year}`}
      />

      {/* Main Content */}
      <section
        aria-labelledby="boat-detail-heading"
        style={{
          background: "var(--color-sand)",
          paddingTop: "var(--space-section)",
          paddingBottom: "var(--space-section)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal)]"
              style={{ color: "var(--color-teal)" }}
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Fleet
            </Link>
          </nav>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8">
              {/* Hero Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-mist)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <Image
                  src={boat.heroImage}
                  alt={`${boat.name} — ${boat.model} at anchor in Desolation Sound`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div>
                <h2
                  id="boat-detail-heading"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    color: "var(--color-deep)",
                    marginBottom: "0.75rem",
                  }}
                >
                  About This Vessel
                </h2>
                <p className="prose-dsyc" style={{ maxWidth: "60ch", color: "var(--color-ink)" }}>
                  {boat.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-h4)",
                    color: "var(--color-deep)",
                    marginBottom: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  Highlights
                </h3>
                <ul
                  className="flex flex-col gap-2"
                  role="list"
                  aria-label={`${boat.name} highlights`}
                >
                  {boat.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ color: "var(--color-ink)", fontSize: "var(--text-body)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 flex-shrink-0 w-5 h-5 rounded-full inline-flex items-center justify-center"
                        style={{ background: "var(--color-teal)" }}
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spec Table */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-h4)",
                    fontWeight: 600,
                    color: "var(--color-deep)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Specifications
                </h3>
                <table
                  className="spec-table"
                  aria-label={`${boat.name} technical specifications`}
                >
                  <thead>
                    <tr>
                      <th scope="col">Specification</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(boat.specs).map(([key, value]) => (
                      <tr key={key}>
                        <td style={{ fontWeight: 600, color: "var(--color-slate)" }}>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT COLUMN — Pricing Card */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-lg)",
                  overflow: "hidden",
                }}
              >
                {/* Card Header */}
                <div
                  style={{
                    background: "var(--color-deep)",
                    padding: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-gold)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Charter Pricing
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      color: "var(--color-white)",
                      lineHeight: 1.15,
                    }}
                  >
                    {boat.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "rgba(255,255,255,0.70)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {boat.model} · {boat.loa}
                  </p>
                </div>

                {/* Pricing Rows */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Low Season */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      padding: "1rem",
                      background: "var(--color-sand)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.15rem",
                        }}
                      >
                        Low Season
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                        }}
                      >
                        May, Jun, Sep, Oct
                      </p>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--color-deep)",
                        lineHeight: 1,
                      }}
                    >
                      {formatPrice(boat.lowSeason)}
                    </p>
                  </div>

                  {/* High Season */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      padding: "1rem",
                      background: "var(--color-mist)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          marginBottom: "0.15rem",
                        }}
                      >
                        High Season
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-stone)",
                        }}
                      >
                        July &amp; August
                      </p>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--color-deep)",
                        lineHeight: 1,
                      }}
                    >
                      {formatPrice(boat.highSeason)}
                    </p>
                  </div>

                  {/* Early Boarding */}
                  <div
                    className="flex items-center justify-between"
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px dashed var(--color-border)",
                    }}
                  >
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-slate)" }}>
                      Early Boarding Option
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      + $250 CAD
                    </p>
                  </div>

                  {/* Tax Note */}
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-stone)",
                      textAlign: "center",
                      lineHeight: 1.5,
                    }}
                  >
                    All prices in Canadian dollars. 12% HST applies.
                    <br />
                    Weekly charter rates — 7 nights.
                  </p>

                  {/* Enquire Button */}
                  <Button
                    href={`/booking?vessel=${boat.slug}`}
                    variant="gold"
                    size="lg"
                    className="w-full"
                    aria-label={`Enquire about chartering ${boat.name}`}
                  >
                    Enquire About This Boat
                  </Button>

                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-stone)",
                      textAlign: "center",
                    }}
                  >
                    No booking fees. Direct with DSYC since 1978.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
