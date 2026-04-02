import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Enquiry",
  description:
    "Send a charter enquiry to Desolation Sound Yacht Charters. Tell us your preferred dates, vessel, and party size and we'll confirm availability within one business day.",
  alternates: { canonical: "https://desolationsoundyachtcharters.com/booking" },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
