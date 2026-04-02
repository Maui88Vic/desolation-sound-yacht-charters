interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{
        background: `linear-gradient(135deg, var(--color-deep) 0%, var(--color-ocean) 100%)`,
      }}
      aria-labelledby="page-hero-heading"
    >
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="eyebrow eyebrow-gold mb-4">{eyebrow}</p>}
        <h1
          id="page-hero-heading"
          className="mb-4 text-white"
          style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", fontWeight: 500 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
