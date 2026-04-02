import type { Metadata } from "next";
import { CheckCircle, FileText, UserCheck, Shield, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { DsycJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Plan Your BC Charter — Desolation Sound Yacht Charters",
  description:
    "Planning your charter with DSYC — experience requirements, what's included, booking process, professional skipper hire.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/charter" },
};

const infoCards = [
  {
    icon: CheckCircle,
    title: "What's Included",
    items: [
      "Full navigational briefing with Maz or Jen",
      "Yacht manuals and passage planning resources",
      "All safety equipment to Transport Canada standards",
      "Dinghy and outboard motor",
      "Snorkelling gear, kayaks (select vessels)",
      "Full linen and towel pack",
      "Welcome provisions (select vessels)",
    ],
  },
  {
    icon: FileText,
    title: "Experience Requirements",
    items: [
      "Well-qualified skippers required for bareboat",
      "Completion of DSYC Experience Resume",
      "Demonstrated offshore passage experience",
      "Familiarity with BC coastal waters preferred",
      "Skipper for hire available for all vessels",
      "DSYC Cruise N' Learn combines charter + training",
    ],
  },
  {
    icon: UserCheck,
    title: "Professional Skipper",
    items: [
      "Available for hire on any vessel in the fleet",
      "Maz holds MCA/RYA Ocean Master Unlimited",
      "100,000+ combined sea miles of coastal BC experience",
      "Ideal for less-experienced groups",
      "Enables focus on the experience, not the navigation",
      "Pricing on request — contact us to discuss",
    ],
  },
  {
    icon: Shield,
    title: "Insurance",
    items: [
      "Mandatory daily insurance required for all charters",
      "Covers hull and machinery",
      "$2,000,000 third-party liability",
      "Arranged and charged daily by DSYC",
      "Included in your charter cost summary",
      "No charter departs without valid insurance in place",
    ],
  },
];

const bookingSteps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out with your preferred dates, party size, and vessel interest. We respond personally to every enquiry — usually within one business day.",
  },
  {
    number: "02",
    title: "Complete Your Experience Resume",
    description:
      "All charterers must submit a DSYC Experience Resume detailing their sailing or powerboating background. This allows us to match you with the right vessel and confirm suitability for bareboat.",
  },
  {
    number: "03",
    title: "50% Deposit to Confirm",
    description:
      "Once we've reviewed your experience and agreed on the booking, a 50% deposit secures your dates. All amounts are in Canadian dollars plus 12% tax.",
  },
  {
    number: "04",
    title: "Balance Due 60 Days Prior",
    description:
      "The remaining 50% of your charter fee is due 60 days before your departure date. We'll send a reminder well in advance.",
  },
];

const keyTerms = [
  {
    label: "Early Boarding",
    value: "$250 + tax",
    detail: "Available if the vessel is free the evening before your charter start date. Subject to availability.",
  },
  {
    label: "Payment Currency",
    value: "All CAD + 12% Tax",
    detail:
      "All charter fees, insurance, and ancillary charges are in Canadian dollars. Provincial tax of 12% applies to all amounts.",
  },
  {
    label: "Security Deposit",
    value: "Visa or MasterCard Pre-Auth",
    detail:
      "A security deposit equal to the first day's charter fee is pre-authorised on your Visa or MasterCard on departure day. Released on satisfactory return.",
  },
  {
    label: "No Pets",
    value: "Strict Policy — No Exceptions",
    detail:
      "No animals of any kind are permitted aboard any DSYC vessel at any time. This policy is absolute and non-negotiable.",
  },
  {
    label: "Skipper for Hire",
    value: "Available — Any Vessel",
    detail:
      "A professional skipper can be hired for any vessel in the fleet. Contact us for current rates and availability.",
  },
];

export default function CharterPage() {
  return (
    <>
      <DsycJsonLd />

      <PageHero
        eyebrow="Plan Your Adventure"
        title="Everything You Need to Know Before You Sail"
        subtitle="Chartering with DSYC is straightforward — we've been doing this since 1978. Here's what to expect from enquiry to departure."
      />

      {/* ============================================================
          SECTION 1 — Chartering with DSYC: info cards
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="charter-info-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Chartering with DSYC"
            title="What You Need to Know"
            subtitle="Bareboat and skippered charters from Comox. We're transparent about what's included, what's required, and how the process works."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg p-8"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--color-deep)" }}
                    aria-hidden="true"
                  >
                    <card.icon size={18} style={{ color: "var(--color-gold)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      color: "var(--color-deep)",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2.5" role="list">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                      style={{ color: "var(--color-slate)" }}
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-teal)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — Booking Process: 4-step numbered flow
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-mist)" }}
        aria-labelledby="booking-process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="The Booking Process"
            subtitle="Four steps from first contact to setting sail. We keep it simple."
          />
          <ol className="relative grid gap-0 md:grid-cols-4" role="list">
            {/* Connector line — desktop only */}
            <div
              className="absolute top-8 left-0 right-0 hidden h-px md:block"
              style={{
                background: `linear-gradient(to right, transparent 0%, var(--color-border) 10%, var(--color-border) 90%, transparent 100%)`,
                top: "2rem",
                zIndex: 0,
              }}
              aria-hidden="true"
            />
            {bookingSteps.map((step, index) => (
              <li
                key={step.number}
                className="relative flex flex-col px-0 pb-10 md:pb-0 md:pr-8 last:pr-0"
                style={{ zIndex: 1 }}
              >
                {/* Mobile connector */}
                {index < bookingSteps.length - 1 && (
                  <div
                    className="absolute left-8 top-16 bottom-0 w-px md:hidden"
                    style={{ backgroundColor: "var(--color-border)" }}
                    aria-hidden="true"
                  />
                )}
                <div
                  className="mb-5 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "var(--color-deep)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-gold)",
                    }}
                    aria-label={`Step ${step.number}`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h4)",
                    color: "var(--color-deep)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)", maxWidth: "28ch" }}
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — Key Terms
          ============================================================ */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
        aria-labelledby="key-terms-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Terms"
            title="Important Details"
            subtitle="A few policies worth knowing before you book. No surprises."
          />
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyTerms.map((term) => (
              <div
                key={term.label}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="mb-1 h-0.5 w-8 rounded-full"
                  style={{ backgroundColor: "var(--color-teal)" }}
                  aria-hidden="true"
                />
                <dt
                  className="mb-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-stone)" }}
                >
                  {term.label}
                </dt>
                <dd
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    color: "var(--color-deep)",
                  }}
                >
                  {term.value}
                </dd>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                  {term.detail}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================================
          CTA — Dark section
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32"
        style={{ backgroundColor: "var(--color-ocean)" }}
        aria-labelledby="charter-cta-heading"
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
          <p className="eyebrow eyebrow-gold mb-4">Ready to Plan?</p>
          <h2
            id="charter-cta-heading"
            className="mb-6 text-white"
            style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)" }}
          >
            Your Charter Starts with a Conversation.
          </h2>
          <p
            className="mx-auto mb-10 max-w-lg text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.75 }}
          >
            Tell us your dates, how many are in your crew, and which destination calls to you. We'll
            take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/booking" variant="gold" size="lg">
              Enquire Now <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/fleet" variant="ghost" size="lg">
              Browse the Fleet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
