export interface Itinerary {
  slug: string;
  name: string;
  duration: string;
  difficulty: "easy" | "moderate" | "experienced";
  boatTypes: string[];
  distance: string;
  bestSeason: string;
  route: string;
  highlights: string[];
  description: string;
  heroImage: string;
}

export const itineraries: Itinerary[] = [
  {
    slug: "desolation-sound-classic",
    name: "Desolation Sound Classic",
    duration: "7 days",
    difficulty: "easy",
    boatTypes: ["sail", "power"],
    distance: "~120 nm round trip",
    bestSeason: "June–September",
    route:
      "Comox → Hernando Island → Cortes Island (Squirrel Cove) → Desolation Sound Marine Park → Refuge Cove → Homfray Channel → Comox",
    highlights: [
      "Warm-water swimming at Tenedos Bay — warmest anchorage north of Mexico",
      "Fresh oysters direct from growers at Refuge Cove",
      "Overnight anchor in the sheltered arms of Grace Harbour",
      "Glassy calm mornings in Desolation Sound Marine Park",
      "Short passages ideal for first-time BC cruisers",
    ],
    description:
      "The quintessential BC cruise. Seven days through the sheltered waters of Desolation Sound Marine Park, where summer sea temperatures reach 24°C and anchorages feel like private lakes. Departing Comox Marina, this route threads through Hernando and Cortes Islands before arriving at some of the finest swimming and anchoring on the BC coast.",
    heroImage: "/images/itineraries/desolation-sound-classic-hero.jpg",
  },
  {
    slug: "princess-louisa",
    name: "Princess Louisa Expedition",
    duration: "10 days",
    difficulty: "moderate",
    boatTypes: ["sail", "power"],
    distance: "~200 nm round trip",
    bestSeason: "June–August",
    route:
      "Comox → Pender Harbour → Jervis Inlet → Princess Louisa Inlet → Chatterbox Falls → Hotham Sound → Comox",
    highlights: [
      "Chatterbox Falls — a 40-metre cascade at the head of the inlet",
      "Dramatic fjord walls rising nearly 2,000 metres above the waterline",
      "Malibu Rapids transit at precise slack water — a genuine seamanship test",
      "Hotham Sound for warm anchorages on the return leg",
      "Pender Harbour's welcoming marinas and provisioning",
    ],
    description:
      "Few destinations on the Pacific coast match Princess Louisa Inlet for sheer drama. Ten days threading Jervis Inlet's fjord walls to reach the famous falls, with the Malibu Rapids narrows adding a tidal timing challenge that rewards careful planning. This route suits crews ready to step beyond protected waters and experience BC cruising at its most spectacular.",
    heroImage: "/images/itineraries/princess-louisa-hero.jpg",
  },
  {
    slug: "broughton-archipelago",
    name: "Broughton Archipelago Adventure",
    duration: "10–14 days",
    difficulty: "experienced",
    boatTypes: ["sail", "power"],
    distance: "~350 nm round trip",
    bestSeason: "July–September",
    route:
      "Comox → Campbell River → Johnstone Strait → Alert Bay (First Nations culture) → Port McNeill → Broughton Archipelago → Tribune Bay",
    highlights: [
      "Orca watching in Johnstone Strait — one of the world's best cetacean corridors",
      "Alert Bay U'mista Cultural Centre and the world's tallest totem pole",
      "Remote archipelago anchorages rarely shared with more than one other boat",
      "Tribune Bay's white-sand beach on the return south",
      "Full-on BC wilderness cruising away from the summer crowds",
    ],
    description:
      "The full northern adventure. Ten to fourteen days takes you past Campbell River and through Johnstone Strait to the Broughton Archipelago, a wilderness of islands, inlets, and First Nations history that sits at the top of the cruising itinerary wish list. Experienced crews only — tidal currents in Johnstone Strait and the Discovery Passage demand sound passage planning.",
    heroImage: "/images/itineraries/broughton-archipelago-hero.jpg",
  },
  {
    slug: "gulf-islands",
    name: "Gulf Islands Explorer",
    duration: "7 days",
    difficulty: "easy",
    boatTypes: ["sail", "power"],
    distance: "~180 nm round trip",
    bestSeason: "May–October",
    route:
      "Comox → Denman Island → Hornby Island → Nanaimo → Sidney → Salt Spring Island → Ganges → Comox",
    highlights: [
      "Hornby Island's Tribune Bay — a Caribbean-blue arc of sand",
      "Salt Spring Island Saturday Market in Ganges",
      "Easy sailing conditions across the Strait of Georgia",
      "Nanaimo's waterfront dining and fuel stop",
      "Longest operating season of any DSYC route — May through October",
    ],
    description:
      "The Gulf Islands offer some of the gentlest sailing in BC and a rich mix of island communities, artisan culture, and sandy beaches. Seven days touring from Comox south through Hornby and Denman, across to Nanaimo and Sidney, then north to Salt Spring Island before returning home. The ideal first charter for families or newcomers to coastal cruising.",
    heroImage: "/images/itineraries/gulf-islands-hero.jpg",
  },
  {
    slug: "discovery-islands",
    name: "Discovery Islands Loop",
    duration: "7 days",
    difficulty: "moderate",
    boatTypes: ["sail", "power"],
    distance: "~140 nm round trip",
    bestSeason: "June–September",
    route:
      "Comox → Campbell River → Quadra Island → Cortes Island → Read Island → Stuart Island → Comox",
    highlights: [
      "Surge Narrows tidal transit — timing the current for an exhilarating ride through",
      "Quadra Island's Rebecca Spit Marine Park",
      "Cortes Island's Squirrel Cove and warm anchorage swimming",
      "Remote Read and Stuart Islands with minimal boat traffic",
      "Stellar stargazing from uncrowded anchorages",
    ],
    description:
      "A tight, rewarding loop through the Discovery Islands that packs remote anchorages and tidal adventure into a single week. Departing Comox for Campbell River, the route threads Quadra and Cortes before exploring the quieter outer islands, with Surge Narrows providing a memorable tidal passage for crews with a sense of timing.",
    heroImage: "/images/itineraries/discovery-islands-hero.jpg",
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast Passage",
    duration: "10 days",
    difficulty: "moderate",
    boatTypes: ["power"],
    distance: "~220 nm round trip",
    bestSeason: "June–September",
    route:
      "Comox → Texada Island → Powell River → Savary Island → Desolation Sound → Secret Cove → Comox",
    highlights: [
      "Savary Island's white sand beach — the 'Little Hawaii of the North'",
      "Powell River's heritage paper-mill townsite and local character",
      "Excellent salmon and prawning grounds throughout",
      "Desolation Sound marine park stop on the return leg",
      "Consistently calmer waters suited to powerboat passages",
    ],
    description:
      "Ten days down the Sunshine Coast and back, with Savary Island's remarkable white sand as the centrepiece. This route is best suited to powerboats, with open-water crossings and longer daily runs across the Strait of Georgia. Strong fishing along the way, and Powell River offers a fascinating glimpse into BC's resource industry heritage.",
    heroImage: "/images/itineraries/sunshine-coast-hero.jpg",
  },
  {
    slug: "weekend-getaway",
    name: "Weekend Getaway",
    duration: "3–4 days",
    difficulty: "easy",
    boatTypes: ["sail", "power"],
    distance: "~60–80 nm round trip",
    bestSeason: "May–October",
    route:
      "Comox → Hornby Island / Denman Island or Comox → Cortes Island (Squirrel Cove)",
    highlights: [
      "Perfect introduction to BC coastal cruising",
      "Easy conditions for first-time charterers",
      "Overnight in the sheltered arms of Squirrel Cove",
      "Hornby Island's Tribune Bay for afternoon swimming",
      "Back at Comox Marina Sunday evening",
    ],
    description:
      "Not every adventure needs a fortnight. Three or four days is all it takes to experience the magic of BC cruising — warm anchorages, clean air, and water so clear you can watch the anchor settle on the bottom. The Weekend Getaway makes an ideal first charter, pairing accessible conditions with genuine destination satisfaction.",
    heroImage: "/images/itineraries/weekend-getaway-hero.jpg",
  },
  {
    slug: "extended-expedition",
    name: "Extended Expedition",
    duration: "14+ days",
    difficulty: "experienced",
    boatTypes: ["sail", "power"],
    distance: "400+ nm",
    bestSeason: "July–August",
    route:
      "Full circumnavigation of northern Vancouver Island or deep Broughton loop — route customised at briefing",
    highlights: [
      "Maximum remoteness — days without seeing another vessel",
      "First Nations cultural sites rarely visited by cruising yachts",
      "Humpback and orca whale watching in open passages",
      "Cape Scott and the wild north tip of Vancouver Island",
      "Fully customised itinerary built around your crew's experience level",
    ],
    description:
      "For crews who want to go further and stay longer, the Extended Expedition is DSYC's most ambitious itinerary. Fourteen or more days opens the door to a full circumnavigation of northern Vancouver Island or a deep Broughton archipelago loop, reaching wilderness anchorages accessible only to those willing to commit the time. Experienced offshore crews only.",
    heroImage: "/images/itineraries/extended-expedition-hero.jpg",
  },
  {
    slug: "toba-inlet",
    name: "Powerboat Special — Toba Inlet",
    duration: "7 days",
    difficulty: "moderate",
    boatTypes: ["power"],
    distance: "~150 nm round trip",
    bestSeason: "June–September",
    route:
      "Comox → Desolation Sound → Toba Inlet → Walsh Cove → Frederick Arm → Comox",
    highlights: [
      "Toba Inlet's glacial scenery — waterfalls straight into saltwater",
      "Walsh Cove Provincial Marine Park — absolute solitude guaranteed",
      "World-class spot prawn fishing in Frederick Arm",
      "Desolation Sound as a warm-water staging ground at the start",
      "Powerboat-optimised daily runs at comfortable cruising speed",
    ],
    description:
      "Toba Inlet is Desolation Sound's secret inner sanctum — a glacially carved fjord where waterfalls plunge directly into the sea and prawn traps come up full. Designed around a powerboat's range and comfort, this seven-day route ventures beyond the Desolation Sound crowds into some of the most dramatic scenery on the coast. Walsh Cove alone justifies the whole trip.",
    heroImage: "/images/itineraries/toba-inlet-hero.jpg",
  },
];

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
