import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cancellation Policy — DSYC | Desolation Sound Yacht Charters",
  description:
    "Cancellation and refund policy for Desolation Sound Yacht Charters. Deposit terms, cancellation windows, security deposit, and charter modification conditions.",
  alternates: {
    canonical:
      "https://desolationsoundyachtcharters.com/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking Terms"
        title="Cancellation Policy"
        subtitle="Please read our cancellation and refund policy carefully before booking."
      />

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-dsyc">

            {/* --------------------------------------------------------
                DEPOSIT & PAYMENT TERMS
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              Deposit &amp; Payment Terms
            </h2>
            <ul>
              <li>
                A <strong>50% deposit</strong> is required to confirm a charter
                booking.
              </li>
              <li>
                The remaining balance of 50% is due{" "}
                <strong>60 days prior</strong> to the charter start date.
              </li>
              <li>
                Payment is accepted by{" "}
                <strong>
                  credit card, bank transfer, or certified cheque
                </strong>
                .
              </li>
            </ul>

            {/* --------------------------------------------------------
                CANCELLATION BY CHARTERER
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              Cancellation by Charterer
            </h2>
            <p>
              All cancellations must be received{" "}
              <strong>in writing</strong> via email to{" "}
              <a href="mailto:Charter@DesolationSoundYachtCharters.com">
                Charter@DesolationSoundYachtCharters.com
              </a>
              . The date on which the written cancellation is received by DSYC
              is the date used to calculate any applicable refund.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Notice Period</th>
                  <th>Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>More than 90 days before charter</td>
                  <td>Full refund minus $500 administration fee</td>
                </tr>
                <tr>
                  <td>60–89 days before charter</td>
                  <td>50% refund of total charter fee</td>
                </tr>
                <tr>
                  <td>30–59 days before charter</td>
                  <td>25% refund of total charter fee</td>
                </tr>
                <tr>
                  <td>Less than 30 days before charter</td>
                  <td>No refund</td>
                </tr>
              </tbody>
            </table>

            <p>
              DSYC <strong>strongly recommends</strong> that all charterers
              purchase comprehensive{" "}
              <strong>trip cancellation insurance</strong> at the time of
              booking to protect against unforeseen circumstances.
            </p>

            {/* --------------------------------------------------------
                CANCELLATION BY DSYC
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              Cancellation by DSYC
            </h2>
            <ul>
              <li>
                In the event DSYC must cancel a charter due to{" "}
                <strong>mechanical failure</strong> or a{" "}
                <strong>vessel safety concern</strong>, a full refund will be
                provided or an alternative vessel of equal or greater value
                will be offered at DSYC&rsquo;s discretion.
              </li>
              <li>
                DSYC is <strong>not responsible</strong> for cancellation due
                to weather. Charterers are responsible for their own
                weather-related decisions while on charter.
              </li>
              <li>
                In the case of <strong>force majeure</strong> events (natural
                disasters, government-mandated travel restrictions, or similar
                circumstances beyond DSYC&rsquo;s control), a full refund or
                rescheduling will be offered at DSYC&rsquo;s discretion.
              </li>
            </ul>

            {/* --------------------------------------------------------
                SECURITY DEPOSIT
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              Security Deposit
            </h2>
            <ul>
              <li>
                A <strong>security/damage deposit</strong> is required prior
                to charter start. The amount varies by vessel and will be
                communicated at the time of booking.
              </li>
              <li>
                The deposit will be returned{" "}
                <strong>within 14 days</strong> of charter completion, less
                the cost of any documented damage.
              </li>
              <li>
                The charterer is responsible for all damage to the vessel or
                its equipment{" "}
                <strong>beyond normal wear and tear</strong> that occurs
                during the charter period.
              </li>
            </ul>

            {/* --------------------------------------------------------
                CHARTER MODIFICATIONS
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              Charter Modifications
            </h2>
            <ul>
              <li>
                Date changes are subject to availability and a{" "}
                <strong>$250 modification fee</strong> if requested within 60
                days of the charter start date.
              </li>
              <li>
                Vessel upgrades are subject to availability and the charterer
                will be responsible for any price difference between the
                original and upgraded vessel.
              </li>
            </ul>

            <hr />

            <p>
              For any questions regarding these terms, please contact us at{" "}
              <a href="mailto:Charter@DesolationSoundYachtCharters.com">
                Charter@DesolationSoundYachtCharters.com
              </a>{" "}
              or call{" "}
              <a href="tel:+12503397222">250-339-7222</a>.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
