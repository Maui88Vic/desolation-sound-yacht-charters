import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Fleet — Sailboats & Powerboats",
  description:
    "Browse the DSYC fleet of 10 sail and power vessels — from the 36' Beneteau Lea Lee to the 55' Sea Ray Son Seeker. All boats based at Comox Marina, BC.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/fleet" },
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
