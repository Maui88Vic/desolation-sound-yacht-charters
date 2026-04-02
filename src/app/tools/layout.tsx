import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charter Cost Calculator",
  description:
    "Estimate your Desolation Sound yacht charter cost instantly. Select a vessel, duration, and options to get a live price estimate.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
