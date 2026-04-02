import type { Metadata } from "next";
import { Cormorant, Figtree, Fira_Code } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DsycJsonLd } from "@/components/JsonLd";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Yacht Charter Desolation Sound, BC — DSYC",
    template: "%s | Desolation Sound Yacht Charters",
  },
  description:
    "Charter a sail or power yacht from Comox into Desolation Sound — one of the most spectacular marine environments on earth. Bareboat & skippered. Since 1978.",
  keywords: [
    "yacht charter Desolation Sound",
    "boat charter Comox BC",
    "bareboat charter BC",
    "Desolation Sound sailing",
    "yacht rental Vancouver Island",
    "skippered charter BC coast",
  ],
  authors: [{ name: "Desolation Sound Yacht Charters" }],
  metadataBase: new URL("https://desolationsoundyachtcharters.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://desolationsoundyachtcharters.com",
    siteName: "Desolation Sound Yacht Charters",
    title: "Yacht Charter Desolation Sound, BC — DSYC",
    description:
      "Bareboat & skippered yacht charters into Desolation Sound, the Broughtons, and Princess Louisa Inlet. Based in Comox, BC. Since 1978.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Sailing yacht at anchor in Desolation Sound, BC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Charter Desolation Sound, BC — DSYC",
    description: "Bareboat & skippered yacht charters into Desolation Sound from Comox, BC.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/images/dsyc-logo.png",
    apple: "/images/dsyc-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${cormorant.variable} ${figtree.variable} ${firaCode.variable}`}>
      <body>
        <DsycJsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
