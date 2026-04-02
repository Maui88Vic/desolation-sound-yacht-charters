interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", dark = false }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 ${alignClass}`} style={{ maxWidth: align === "center" ? "52rem" : undefined }}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${dark ? "eyebrow-gold" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className="mb-4"
        style={{
          fontFamily: "var(--font-display)",
          color: dark ? "var(--color-white)" : "var(--color-deep)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg leading-relaxed"
          style={{
            color: dark ? "rgba(255,255,255,0.78)" : "var(--color-slate)",
            maxWidth: "54ch",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
