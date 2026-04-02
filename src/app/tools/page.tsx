"use client";

import { useState, useMemo } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { boats, formatPrice } from "@/lib/fleet";

type ProvisioningOption = "none" | "basic" | "premium";

const SKIPPER_RATE_PER_DAY = 350;
const PROVISIONING_BASIC_PER_PERSON_DAY = 50;
const PROVISIONING_PREMIUM_PER_PERSON_DAY = 85;

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 700,
  fontFamily: "var(--font-body)",
  color: "var(--color-ink)",
  marginBottom: "0.5rem",
  letterSpacing: "0.03em",
  textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--color-border)",
  borderRadius: "0.375rem",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  fontFamily: "var(--font-body)",
  color: "var(--color-ink)",
  background: "var(--color-white)",
  outline: "none",
  boxSizing: "border-box",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
};

export default function ToolsPage() {
  const [selectedBoatSlug, setSelectedBoatSlug] = useState(boats[0]?.slug ?? "");
  const [season, setSeason] = useState<"high" | "low">("high");
  const [duration, setDuration] = useState(7);
  const [includeSkipper, setIncludeSkipper] = useState(false);
  const [provisioning, setProvisioning] = useState<ProvisioningOption>("none");
  const [people, setPeople] = useState(4);

  const selectedBoat = useMemo(
    () => boats.find((b) => b.slug === selectedBoatSlug) ?? boats[0],
    [selectedBoatSlug]
  );

  const calculation = useMemo(() => {
    if (!selectedBoat) return null;

    const weeklyRate =
      season === "high" ? selectedBoat.highSeason : selectedBoat.lowSeason;

    const charterFee = Math.round(weeklyRate * (duration / 7));
    const skipperFee = includeSkipper ? SKIPPER_RATE_PER_DAY * duration : 0;

    let provisioningFee = 0;
    if (provisioning === "basic") {
      provisioningFee = PROVISIONING_BASIC_PER_PERSON_DAY * people * duration;
    } else if (provisioning === "premium") {
      provisioningFee = PROVISIONING_PREMIUM_PER_PERSON_DAY * people * duration;
    }

    const total = charterFee + skipperFee + provisioningFee;

    return { charterFee, skipperFee, provisioningFee, total };
  }, [selectedBoat, season, duration, includeSkipper, provisioning, people]);

  return (
    <>
      <PageHero
        eyebrow="Plan Your Budget"
        title="Charter Cost Calculator"
        subtitle="Estimate your charter cost in minutes. Adjust the options to see a live price estimate."
      />

      <section className="section-light" style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div
          style={{
            maxWidth: "42rem",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Calculator card */}
          <div
            style={{
              background: "var(--color-white)",
              borderRadius: "1rem",
              boxShadow: "0 8px 40px rgba(15,28,34,0.10)",
              padding: "2.5rem",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Form inputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

              {/* Vessel */}
              <div style={fieldStyle}>
                <label style={labelStyle} htmlFor="vessel-select">
                  Vessel
                </label>
                <select
                  id="vessel-select"
                  value={selectedBoatSlug}
                  onChange={(e) => setSelectedBoatSlug(e.target.value)}
                  style={inputStyle}
                >
                  {boats.map((boat) => (
                    <option key={boat.slug} value={boat.slug}>
                      {boat.name} — {boat.model} ({boat.type === "sail" ? "Sailboat" : "Powerboat"})
                    </option>
                  ))}
                </select>
              </div>

              {/* Season */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Season</label>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {(["high", "low"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSeason(s)}
                      style={{
                        flex: 1,
                        padding: "0.75rem 1rem",
                        borderRadius: "0.375rem",
                        border: `1.5px solid ${season === s ? "var(--color-teal)" : "var(--color-border)"}`,
                        background: season === s ? "rgba(39,107,124,0.08)" : "var(--color-white)",
                        color: season === s ? "var(--color-teal)" : "var(--color-slate)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: season === s ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                      }}
                    >
                      {s === "high" ? "High Season (Jul–Sep)" : "Low Season (Oct–Jun)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div style={fieldStyle}>
                <label style={labelStyle} htmlFor="duration-input">
                  Duration — {duration} {duration === 1 ? "day" : "days"}
                </label>
                <input
                  id="duration-input"
                  type="range"
                  min={3}
                  max={14}
                  step={1}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "var(--color-teal)",
                    cursor: "pointer",
                    height: "6px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "0.35rem",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    3 days
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                    14 days
                  </span>
                </div>
              </div>

              {/* Skipper */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Skipper</label>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setIncludeSkipper(val)}
                      style={{
                        flex: 1,
                        padding: "0.75rem 1rem",
                        borderRadius: "0.375rem",
                        border: `1.5px solid ${includeSkipper === val ? "var(--color-teal)" : "var(--color-border)"}`,
                        background:
                          includeSkipper === val
                            ? "rgba(39,107,124,0.08)"
                            : "var(--color-white)",
                        color: includeSkipper === val ? "var(--color-teal)" : "var(--color-slate)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: includeSkipper === val ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                      }}
                    >
                      {val ? "Yes — +$350/day" : "No (Bareboat)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Provisioning */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Provisioning Package</label>
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  {(
                    [
                      { value: "none", label: "None" },
                      { value: "basic", label: "Basic ($50/person/day)" },
                      { value: "premium", label: "Premium ($85/person/day)" },
                    ] as { value: ProvisioningOption; label: string }[]
                  ).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setProvisioning(opt.value)}
                      style={{
                        padding: "0.6rem 1rem",
                        borderRadius: "0.375rem",
                        border: `1.5px solid ${provisioning === opt.value ? "var(--color-teal)" : "var(--color-border)"}`,
                        background:
                          provisioning === opt.value
                            ? "rgba(39,107,124,0.08)"
                            : "var(--color-white)",
                        color:
                          provisioning === opt.value ? "var(--color-teal)" : "var(--color-slate)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8375rem",
                        fontWeight: provisioning === opt.value ? 700 : 500,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of people — only if provisioning selected */}
              {provisioning !== "none" && (
                <div style={fieldStyle}>
                  <label style={labelStyle} htmlFor="people-input">
                    Number of People — {people}
                  </label>
                  <input
                    id="people-input"
                    type="range"
                    min={1}
                    max={8}
                    step={1}
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    style={{
                      width: "100%",
                      accentColor: "var(--color-teal)",
                      cursor: "pointer",
                      height: "6px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "0.35rem",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem", color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                      1
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-slate)", fontFamily: "var(--font-body)" }}>
                      8
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--color-border)",
                margin: "2.25rem 0",
              }}
            />

            {/* Results */}
            {calculation && (
              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-slate)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Cost Estimate
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {/* Charter fee row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-slate)",
                      }}
                    >
                      Charter Fee ({duration} days)
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        color: "var(--color-ink)",
                      }}
                    >
                      {formatPrice(calculation.charterFee)}
                    </span>
                  </div>

                  {/* Skipper row */}
                  {includeSkipper && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-body)",
                          color: "var(--color-slate)",
                        }}
                      >
                        Skipper ({duration} days)
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          color: "var(--color-ink)",
                        }}
                      >
                        {formatPrice(calculation.skipperFee)}
                      </span>
                    </div>
                  )}

                  {/* Provisioning row */}
                  {provisioning !== "none" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-body)",
                          color: "var(--color-slate)",
                        }}
                      >
                        Provisioning ({people} pax × {duration} days)
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          color: "var(--color-ink)",
                        }}
                      >
                        {formatPrice(calculation.provisioningFee)}
                      </span>
                    </div>
                  )}

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "var(--color-border)",
                      margin: "0.5rem 0",
                    }}
                  />

                  {/* Total */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginTop: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-ink)",
                      }}
                    >
                      Estimated Total
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.25rem",
                        fontWeight: 700,
                        color: "var(--color-gold)",
                        lineHeight: 1.1,
                      }}
                    >
                      {formatPrice(calculation.total)}
                    </span>
                  </div>
                </div>

                {/* Disclaimer */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-slate)",
                    lineHeight: 1.6,
                    marginTop: "1.5rem",
                    padding: "0.875rem 1rem",
                    background: "var(--color-sand)",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  Estimate only. Final pricing confirmed on booking. Fuel, marina fees, and provisions not included unless selected.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section
        style={{
          background: "var(--color-sand)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "4rem",
          paddingBottom: "5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              marginBottom: "0.75rem",
            }}
          >
            Next Steps
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Like what you see?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "var(--color-slate)",
              lineHeight: 1.65,
              marginBottom: "2rem",
            }}
          >
            Get in touch to confirm dates and vessel availability. Our team typically responds within one business day.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button href="/booking" variant="primary" size="lg">
              Enquire Now
            </Button>
            <Button href="/fleet" variant="outline" size="lg">
              Browse the Fleet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
