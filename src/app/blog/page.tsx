import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | DSYC — Desolation Sound Yacht Charters",
  description:
    "Cruising guides, planning tips, and stories from the BC coast. Explore anchorages, charter advice, wildlife encounters, and more.",
};

const posts = [
  {
    slug: "best-anchorages-desolation-sound",
    title: "The 7 Best Anchorages in Desolation Sound",
    date: "2024-08-15",
    excerpt:
      "From the warm swimming waters of Tenedos Bay to the dramatic granite walls of Grace Harbour, these are the anchorages that make Desolation Sound unforgettable.",
    category: "Destinations",
    readTime: "6 min read",
  },
  {
    slug: "bareboat-vs-skippered-charter",
    title: "Bareboat vs. Skippered Charter: Which is Right for You?",
    date: "2024-07-20",
    excerpt:
      "Not sure whether to skipper yourself or bring a professional? We break down the key differences so you can make the right choice for your BC adventure.",
    category: "Charter Tips",
    readTime: "5 min read",
  },
  {
    slug: "packing-list-bc-sailing",
    title: "The Ultimate Packing List for a BC Sailing Charter",
    date: "2024-06-10",
    excerpt:
      "From foul weather gear to provisions, here's everything you need to pack for a comfortable week aboard in the Pacific Northwest.",
    category: "Planning",
    readTime: "8 min read",
  },
  {
    slug: "whale-watching-johnstone-strait",
    title: "Whale Watching in Johnstone Strait: What to Expect",
    date: "2024-05-28",
    excerpt:
      "The waters around the northern tip of Vancouver Island are home to some of the world's best orca viewing. Here's how to make the most of your encounter.",
    category: "Wildlife",
    readTime: "7 min read",
  },
  {
    slug: "princess-louisa-inlet-guide",
    title: "A Complete Guide to Princess Louisa Inlet",
    date: "2024-04-15",
    excerpt:
      "Chatterbox Falls, Malibu Rapids, and a fjord so dramatic it defies description. Our complete guide to navigating this BC treasure.",
    category: "Destinations",
    readTime: "9 min read",
  },
  {
    slug: "sailing-certification-bc",
    title: "Do You Need a Sailing Certification to Charter in BC?",
    date: "2024-03-02",
    excerpt:
      "The rules around sailing certifications in BC can be confusing. Here's exactly what you need — and what DSYC requires for bareboat charters.",
    category: "Charter Tips",
    readTime: "4 min read",
  },
];

const categories = ["All", "Destinations", "Charter Tips", "Planning", "Wildlife"];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="From the Log"
        title="The DSYC Blog"
        subtitle="Cruising guides, planning tips, and stories from the BC coast."
      />

      <section
        className="section-light"
        style={{ paddingTop: "3rem", paddingBottom: "5rem" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Category filter */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "1.5rem",
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${cat.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  color: cat === "All" ? "var(--color-teal)" : "var(--color-slate)",
                  textDecoration: "none",
                  padding: "0.375rem 1rem",
                  borderRadius: "9999px",
                  border: `1px solid ${cat === "All" ? "var(--color-teal)" : "var(--color-border)"}`,
                  background: cat === "All" ? "rgba(39,107,124,0.08)" : "transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Post grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="blog-card"
                style={{
                  background: "var(--color-white)",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--color-border)",
                  padding: "1.75rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {/* Category badge + read time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      background: "var(--color-teal)",
                      color: "var(--color-white)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-slate)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--color-slate)",
                    lineHeight: 1.65,
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Footer: date + read link */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-slate)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-body)",
                      color: "var(--color-teal)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
