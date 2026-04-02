import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";

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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Post Not Found | DSYC" };
  }
  return {
    title: `${post.title} | DSYC`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
      />

      {/* Article content area */}
      <section className="section-light" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Meta line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "2.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-slate)",
                fontFamily: "var(--font-body)",
              }}
            >
              {formatDate(post.date)}
            </span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "var(--color-slate)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-slate)",
                fontFamily: "var(--font-body)",
              }}
            >
              {post.readTime}
            </span>
          </div>

          {/* Coming soon notice */}
          <div
            style={{
              background: "rgba(39,107,124,0.07)",
              border: "1px solid rgba(39,107,124,0.25)",
              borderRadius: "0.75rem",
              padding: "2rem 2.25rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--color-ink)",
                lineHeight: 1.7,
                margin: "0 0 1.5rem",
              }}
            >
              Full article coming soon. In the meantime, explore our destinations and itineraries below.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Button href="/itineraries" variant="primary" size="md">
                Browse Itineraries
              </Button>
              <Button href="/charter" variant="outline" size="md">
                Plan Your Charter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section
        style={{
          background: "var(--color-sand)",
          paddingTop: "4rem",
          paddingBottom: "5rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              marginBottom: "2rem",
            }}
          >
            More from the Log
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                style={{
                  background: "var(--color-white)",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--color-border)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
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
                    alignSelf: "flex-start",
                  }}
                >
                  {related.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {related.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--color-slate)",
                    lineHeight: 1.6,
                    margin: 0,
                    flexGrow: 1,
                  }}
                >
                  {related.excerpt}
                </p>
                <a
                  href={`/blog/${related.slug}`}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-body)",
                    color: "var(--color-teal)",
                    textDecoration: "none",
                    marginTop: "0.25rem",
                  }}
                >
                  Read Article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-deep" style={{ textAlign: "center", padding: "5rem 1.5rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            fontWeight: 600,
            color: "var(--color-white)",
            marginBottom: "1rem",
          }}
        >
          Ready to Experience This?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.72)",
            marginBottom: "2rem",
          }}
        >
          Your Desolation Sound adventure is waiting. Let&apos;s make it happen.
        </p>
        <Button href="/booking" variant="gold" size="lg">
          Book Your Charter
        </Button>
      </section>
    </>
  );
}
