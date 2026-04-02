export function DsycJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: "Desolation Sound Yacht Charters",
    alternateName: "DSYC",
    description:
      "Bareboat and skippered yacht charters from Comox, BC into Desolation Sound, the Broughton Archipelago, and Princess Louisa Inlet. IYT and CRYA certified training. Yacht ownership and marine services. Since 1978.",
    url: "https://desolationsoundyachtcharters.com",
    telephone: "+12503397222",
    email: "Charter@DesolationSoundYachtCharters.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1797 Comox Ave #103",
      addressLocality: "Comox",
      addressRegion: "BC",
      postalCode: "V9M 3L9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.6747,
      longitude: -124.9283,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/pages/category/Boat-Service/Desolation-Sound-Yacht-Charters-143250702398653/",
      "https://www.youtube.com/channel/UCPsDlEM5OTAD4_reqEcCjxQ",
    ],
    foundingDate: "1978",
    logo: "https://desolationsoundyachtcharters.com/images/dsyc-logo.png",
    image: "https://desolationsoundyachtcharters.com/images/og-image.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
