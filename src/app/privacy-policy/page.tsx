import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — DSYC | Desolation Sound Yacht Charters",
  description:
    "Privacy policy for Desolation Sound Yacht Charters — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://desolationsoundyachtcharters.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Desolation Sound Yacht Charters collects, uses, and protects your information."
      />

      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "var(--color-sand)" }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-dsyc">

            <p
              className="text-sm"
              style={{ color: "var(--color-slate)" }}
            >
              Last updated: January 2024
            </p>

            <p>
              Desolation Sound Yacht Charters (&ldquo;DSYC&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
              committed to protecting your privacy. This policy explains what
              personal information we collect, how we use it, and your rights
              regarding that information.
            </p>

            {/* --------------------------------------------------------
                1. INFORMATION WE COLLECT
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              1. Information We Collect
            </h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>
                <strong>Contact information</strong> — name, mailing address,
                email address, and phone number, collected when you submit a
                booking inquiry or contact us directly
              </li>
              <li>
                <strong>Payment information</strong> — credit card and banking
                details used to process charter deposits and balances. Payment
                transactions are processed by a third-party payment processor
                and DSYC does not store full payment card numbers.
              </li>
              <li>
                <strong>Website analytics</strong> — anonymous, aggregated
                data about how visitors use our website (pages visited,
                referral sources, browser type). This data is not linked to
                any identifiable individual.
              </li>
            </ul>

            {/* --------------------------------------------------------
                2. HOW WE USE YOUR INFORMATION
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              2. How We Use Your Information
            </h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Process and manage your charter booking</li>
              <li>
                Communicate with you regarding your reservation, including
                confirmation, charter documentation, and pre-departure
                information
              </li>
              <li>
                Send newsletters and promotional communications — only with
                your explicit consent, and you may unsubscribe at any time
              </li>
              <li>
                Improve our website and the quality of our services based on
                aggregate analytics data
              </li>
            </ul>

            {/* --------------------------------------------------------
                3. INFORMATION SHARING
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              3. Information Sharing
            </h2>
            <p>
              We <strong>do not sell</strong> your personal information to
              third parties. We may share your information only in the
              following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Payment processors</strong> — to securely process
                your charter payments
              </li>
              <li>
                <strong>Booking platform partners</strong> — if your booking
                is initiated through a partner platform, relevant booking
                details may be shared with that platform
              </li>
              <li>
                <strong>As required by law</strong> — if we are required to
                disclose information by applicable law, regulation, or legal
                process
              </li>
            </ul>

            {/* --------------------------------------------------------
                4. DATA SECURITY
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              4. Data Security
            </h2>
            <p>
              We take reasonable steps to protect your personal information
              from unauthorised access, use, or disclosure:
            </p>
            <ul>
              <li>
                Our website uses industry-standard{" "}
                <strong>SSL/TLS encryption</strong> for all data transmitted
                between your browser and our servers
              </li>
              <li>
                Access to personal information is restricted to DSYC staff
                who require it to perform their job functions
              </li>
              <li>
                Payment processing is handled by a{" "}
                <strong>PCI-DSS compliant</strong> third-party processor
              </li>
            </ul>

            {/* --------------------------------------------------------
                5. COOKIES
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              5. Cookies
            </h2>
            <p>
              Our website uses basic analytics cookies to understand how
              visitors interact with our site. These cookies do not collect
              personally identifiable information and are used solely to
              improve the website experience.
            </p>
            <p>
              You may disable cookies at any time through your browser
              settings. Note that disabling cookies may affect the
              functionality of some features on our website.
            </p>

            {/* --------------------------------------------------------
                6. YOUR RIGHTS
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal information held by DSYC. To exercise
              any of these rights, please contact us using the details below.
              We will respond to your request within a reasonable timeframe
              and in accordance with applicable privacy legislation.
            </p>

            {/* --------------------------------------------------------
                7. CONTACT
                -------------------------------------------------------- */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-deep)",
              }}
            >
              7. Contact
            </h2>
            <p>
              For privacy inquiries, requests, or complaints, please contact
              us:
            </p>
            <address
              className="not-italic"
              style={{ fontStyle: "normal", color: "var(--color-slate)" }}
            >
              <strong style={{ color: "var(--color-deep)" }}>
                Desolation Sound Yacht Charters
              </strong>
              <br />
              1797 Comox Ave #103
              <br />
              Comox, BC&nbsp;&nbsp;V9M 3L9
              <br />
              <a href="tel:+12503397222">250-339-7222</a>
              <br />
              <a href="mailto:Charter@DesolationSoundYachtCharters.com">
                Charter@DesolationSoundYachtCharters.com
              </a>
            </address>

            <hr />

            <p className="text-sm" style={{ color: "var(--color-slate)" }}>
              This policy may be updated from time to time. The date at the
              top of this page reflects when it was last revised. Continued
              use of our website or services after any update constitutes
              acceptance of the revised policy.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
