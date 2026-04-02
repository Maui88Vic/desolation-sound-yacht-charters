"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { DsycJsonLd } from "@/components/JsonLd";

// NOTE: Metadata is exported from a separate server component wrapper because
// this file is "use client". The metadata constant below documents the values
// used by the parent layout or a server wrapper.
// Title: "Book Your Charter — Rates & Availability | DSYC"
// Description: "Contact DSYC to book your charter. 50% deposit to confirm. All prices CAD + 12% tax. Experienced team responds personally."

const VESSEL_NAMES = [
  "No preference",
  "Lea Lee",
  "San Miquel",
  "Gloman Magic",
  "Meera",
  "Sand Piper",
  "Sea Moss",
  "Gulf Mariner",
  "Kittiwake",
  "At Last",
  "Son Seeker",
];

type InterestType = "Chartering" | "Training" | "Ownership" | "Service" | "Other";

interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  interest: InterestType;
  startDate?: string;
  numberOfDays?: number;
  vessel?: string;
  boatType?: "Sail" | "Power";
  message?: string;
}

const cancellationPolicy = [
  {
    condition: "91+ days prior to departure",
    charge: "Full refund less $500 + tax admin fee",
  },
  {
    condition: "61–90 days prior to departure",
    charge: "50% of total charter fee charged, plus admin fee",
  },
  {
    condition: "Less than 60 days prior to departure",
    charge: "100% of total charter cost charged — no refund",
  },
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    defaultValues: {
      interest: "Chartering",
      vessel: "No preference",
    },
  });

  const interest = watch("interest");
  const isChartering = interest === "Chartering";

  async function onSubmit(data: BookingFormData) {
    setServerError(false);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError(true);
    }
  }

  // ─── Shared style helpers ───────────────────────────────────────────────────
  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "0.375rem",
    fontSize: "var(--text-sm)",
    fontWeight: 600,
    color: "var(--color-ink)",
  };

  const inputBase: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "0.625rem 0.875rem",
    fontSize: "var(--text-body)",
    lineHeight: 1.5,
    color: "var(--color-ink)",
    backgroundColor: "var(--color-white)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-sm)",
    outline: "none",
    transition: "border-color var(--transition-fast)",
  };

  const inputError: React.CSSProperties = {
    ...inputBase,
    borderColor: "var(--color-error)",
  };

  const errorMsgStyle: React.CSSProperties = {
    marginTop: "0.375rem",
    fontSize: "var(--text-xs)",
    color: "var(--color-error)",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  };

  const radioLabelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "var(--text-sm)",
    color: "var(--color-slate)",
    cursor: "pointer",
    fontWeight: 500,
  };

  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="Book Your Charter"
        title="Enquire About Your Charter"
        subtitle="We respond personally to every enquiry. Usually within one business day."
      />

      {/* ============================================================
          MAIN CONTENT — Two-column layout
          ============================================================ */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="booking-form-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:items-start">

            {/* ── LEFT: Contact sidebar ─────────────────────────────── */}
            <aside aria-label="Contact information and booking terms">
              {/* Contact details */}
              <div
                className="mb-8 rounded-lg p-8"
                style={{
                  backgroundColor: "var(--color-deep)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <p
                  className="eyebrow eyebrow-gold mb-5"
                  style={{ color: "var(--color-gold)" }}
                >
                  Contact Us Directly
                </p>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <Phone
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <div>
                      <a
                        href="tel:+12503397222"
                        className="block text-sm font-semibold text-white no-underline hover:underline"
                      >
                        250-339-7222
                      </a>
                      <a
                        href="tel:+18776473815"
                        className="block text-sm text-white/70 no-underline hover:underline hover:text-white"
                      >
                        1-877-647-3815 (Toll-free)
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:Charter@DesolationSoundYachtCharters.com"
                      className="text-sm text-white no-underline hover:underline break-all"
                    >
                      Charter@DesolationSoundYachtCharters.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--color-gold)" }}
                      aria-hidden="true"
                    />
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                      Monday–Friday, 9 AM–5 PM Pacific
                    </p>
                  </li>
                </ul>
                <p
                  className="mt-6 text-sm italic"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                  }}
                >
                  &ldquo;We respond personally to every enquiry.&rdquo;
                </p>
              </div>

              {/* Booking terms summary */}
              <div
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    color: "var(--color-deep)",
                  }}
                >
                  Booking Terms Summary
                </h3>
                <ul className="space-y-3" role="list">
                  {[
                    "50% deposit to confirm your booking",
                    "Balance due 60 days prior to departure",
                    "All prices in CAD + 12% tax",
                    "Mandatory daily insurance required",
                    "Experience Resume required for bareboat",
                  ].map((term) => (
                    <li
                      key={term}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                      style={{ color: "var(--color-slate)" }}
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-teal)" }}
                        aria-hidden="true"
                      />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* ── RIGHT: Enquiry form ───────────────────────────────── */}
            <div>
              {/* Success state */}
              {submitted ? (
                <div
                  className="rounded-lg p-10 text-center"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-md)",
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle
                    size={48}
                    className="mx-auto mb-4"
                    style={{ color: "var(--color-success)" }}
                    aria-hidden="true"
                  />
                  <h2
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      color: "var(--color-deep)",
                    }}
                  >
                    Enquiry Received
                  </h2>
                  <p
                    className="mx-auto mb-6 text-base leading-relaxed"
                    style={{ color: "var(--color-slate)", maxWidth: "45ch" }}
                  >
                    Thank you — we&apos;ve received your enquiry and will be in touch personally,
                    usually within one business day. We look forward to helping you plan your
                    charter.
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-stone)" }}>
                    If you need to reach us urgently, call{" "}
                    <a href="tel:+12503397222" className="font-semibold">
                      250-339-7222
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <div
                  className="rounded-lg p-8 lg:p-10"
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <h2
                    id="booking-form-heading"
                    className="mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      color: "var(--color-deep)",
                    }}
                  >
                    Send an Enquiry
                  </h2>

                  {serverError && (
                    <div
                      className="mb-6 flex items-start gap-3 rounded-md p-4"
                      style={{
                        backgroundColor: "#FEF2F2",
                        border: "1px solid #FECACA",
                      }}
                      role="alert"
                      aria-live="assertive"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "var(--color-error)" }}
                        aria-hidden="true"
                      />
                      <p className="text-sm" style={{ color: "var(--color-error)" }}>
                        Something went wrong. Please try again or call us at{" "}
                        <a href="tel:+12503397222" className="font-semibold underline">
                          250-339-7222
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    aria-label="Charter enquiry form"
                  >
                    <div className="space-y-6">

                      {/* Name */}
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Full Name <span aria-hidden="true" style={{ color: "var(--color-error)" }}>*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          aria-required="true"
                          aria-describedby={errors.name ? "name-error" : undefined}
                          {...register("name", { required: "Your name is required" })}
                          style={errors.name ? inputError : inputBase}
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" style={errorMsgStyle}>
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email Address <span aria-hidden="true" style={{ color: "var(--color-error)" }}>*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-required="true"
                          aria-describedby={errors.email ? "email-error" : undefined}
                          {...register("email", {
                            required: "Your email address is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email address",
                            },
                          })}
                          style={errors.email ? inputError : inputBase}
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" style={errorMsgStyle}>
                            <AlertCircle size={12} aria-hidden="true" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" style={labelStyle}>
                          Phone Number{" "}
                          <span style={{ fontWeight: 400, color: "var(--color-stone)" }}>
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          {...register("phone")}
                          style={inputBase}
                        />
                      </div>

                      {/* Interested In */}
                      <fieldset>
                        <legend style={{ ...labelStyle, marginBottom: "0.625rem" }}>
                          I&apos;m interested in{" "}
                          <span aria-hidden="true" style={{ color: "var(--color-error)" }}>*</span>
                        </legend>
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                          {(["Chartering", "Training", "Ownership", "Service", "Other"] as InterestType[]).map(
                            (opt) => (
                              <label key={opt} style={radioLabelStyle}>
                                <input
                                  type="radio"
                                  value={opt}
                                  {...register("interest", { required: true })}
                                  style={{ accentColor: "var(--color-teal)" }}
                                />
                                {opt}
                              </label>
                            )
                          )}
                        </div>
                      </fieldset>

                      {/* Chartering-conditional fields */}
                      {isChartering && (
                        <>
                          {/* Start Date */}
                          <div>
                            <label htmlFor="startDate" style={labelStyle}>
                              Preferred Start Date
                            </label>
                            <input
                              id="startDate"
                              type="date"
                              aria-describedby={errors.startDate ? "startDate-error" : undefined}
                              {...register("startDate")}
                              style={inputBase}
                            />
                          </div>

                          {/* Number of Days */}
                          <div>
                            <label htmlFor="numberOfDays" style={labelStyle}>
                              Number of Days{" "}
                              <span style={{ fontWeight: 400, color: "var(--color-stone)" }}>
                                (minimum 6)
                              </span>
                            </label>
                            <input
                              id="numberOfDays"
                              type="number"
                              min={6}
                              aria-describedby={errors.numberOfDays ? "numberOfDays-error" : undefined}
                              {...register("numberOfDays", {
                                min: { value: 6, message: "Minimum charter duration is 6 days" },
                                valueAsNumber: true,
                              })}
                              style={errors.numberOfDays ? inputError : inputBase}
                            />
                            {errors.numberOfDays && (
                              <p id="numberOfDays-error" role="alert" style={errorMsgStyle}>
                                <AlertCircle size={12} aria-hidden="true" />
                                {errors.numberOfDays.message}
                              </p>
                            )}
                          </div>

                          {/* Preferred Vessel */}
                          <div>
                            <label htmlFor="vessel" style={labelStyle}>
                              Preferred Vessel
                            </label>
                            <select
                              id="vessel"
                              {...register("vessel")}
                              style={{
                                ...inputBase,
                                cursor: "pointer",
                                appearance: "auto",
                              }}
                            >
                              {VESSEL_NAMES.map((name) => (
                                <option key={name} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Boat Type */}
                          <fieldset>
                            <legend style={{ ...labelStyle, marginBottom: "0.625rem" }}>
                              Boat Type Preference
                            </legend>
                            <div className="flex gap-6">
                              {(["Sail", "Power"] as const).map((type) => (
                                <label key={type} style={radioLabelStyle}>
                                  <input
                                    type="radio"
                                    value={type}
                                    {...register("boatType")}
                                    style={{ accentColor: "var(--color-teal)" }}
                                  />
                                  {type}
                                </label>
                              ))}
                            </div>
                          </fieldset>
                        </>
                      )}

                      {/* Message */}
                      <div>
                        <label htmlFor="message" style={labelStyle}>
                          Message{" "}
                          <span style={{ fontWeight: 400, color: "var(--color-stone)" }}>
                            (optional)
                          </span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          {...register("message")}
                          placeholder={
                            isChartering
                              ? "Tell us about your group, experience level, destination preferences, or any questions you have…"
                              : "Tell us how we can help…"
                          }
                          style={{
                            ...inputBase,
                            resize: "vertical",
                            minHeight: "7rem",
                          }}
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="gold"
                          size="lg"
                          disabled={isSubmitting}
                          aria-label="Send charter enquiry"
                        >
                          {isSubmitting ? "Sending…" : "Send Enquiry"}
                        </Button>
                      </div>

                      <p
                        className="text-xs"
                        style={{ color: "var(--color-stone)" }}
                      >
                        Required fields marked{" "}
                        <span aria-hidden="true" style={{ color: "var(--color-error)" }}>*</span>.
                        We do not share your information with third parties.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CANCELLATION POLICY
          ============================================================ */}
      <section
        className="py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="cancellation-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="eyebrow mb-3">Cancellation Policy</p>
            <h2
              id="cancellation-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                color: "var(--color-deep)",
              }}
            >
              Cancellation &amp; Refund Terms
            </h2>
          </div>

          {/* Admin fee callout */}
          <div
            className="mb-8 rounded-md p-5"
            style={{
              backgroundColor: "var(--color-deep)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <p className="text-sm font-semibold text-white">
              <span style={{ color: "var(--color-gold)" }}>Admin Fee: </span>
              A non-refundable administration fee of <strong>$500 + tax</strong> applies to{" "}
              <strong>ALL</strong> cancellations, regardless of how far in advance notice is given.
            </p>
          </div>

          {/* Policy table */}
          <div
            className="overflow-hidden rounded-lg"
            style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}
          >
            <table className="w-full" aria-label="Cancellation refund schedule">
              <thead>
                <tr style={{ backgroundColor: "var(--color-deep)" }}>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white"
                    scope="col"
                  >
                    Notice Period
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white"
                    scope="col"
                  >
                    Charge
                  </th>
                </tr>
              </thead>
              <tbody>
                {cancellationPolicy.map((row, i) => (
                  <tr
                    key={row.condition}
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "var(--color-white)" : "var(--color-sand)",
                    }}
                  >
                    <td
                      className="px-6 py-4 text-sm font-medium"
                      style={{ color: "var(--color-ocean)" }}
                    >
                      {row.condition}
                    </td>
                    <td
                      className="px-6 py-4 text-sm"
                      style={{ color: "var(--color-slate)" }}
                    >
                      {row.charge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No pets callout */}
          <div
            className="mt-6 rounded-md p-5"
            style={{
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--color-deep)" }}
            >
              No Pets — Strict Policy, No Exceptions
            </p>
            <p
              className="mt-1 text-sm leading-relaxed"
              style={{ color: "var(--color-slate)" }}
            >
              No animals of any kind are permitted aboard any DSYC vessel at any time. This policy
              is absolute and cannot be negotiated or waived under any circumstances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
