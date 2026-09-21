import { MenuItem, LabPillar, ReviewItem } from '../types';

/**
 * SS BAKERY — CENTRAL CONFIGURATION & EDITABLE DATA
 * Modify prices, titles, images, and descriptions below.
 */

export const BAKERY_INFO = {
  name: "SS Bakery",
  monogram: "SS",
  tagline: "Futuristic Artisan Hearth & Molecular Patisserie",
  founded: "2026",
  address: "Sector 07, Cyber Culinary District, Neo-Metropolis",
  phone: "+1 (800) 772-2537",
  email: "concierge@ssbakery.future",
  coordinates: "37.7749° N, 122.4194° W",
  openingHours: {
    morning: "06:00 - 14:00 (Dawn Hearth Bake)",
    evening: "17:00 - 22:00 (Twilight Patisserie & Tasting)",
    closed: "Monday Maintenance & Yeast Culture Reset"
  },
  metrics: {
    batchesBaked: "148,920",
    sourdoughAgeYears: "18",
    rating: "4.98 / 5.0",
    satisfactionRate: "99.4%"
  }
};

export const NAVIGATION_LINKS = [
  { id: "hero", label: "Overview", href: "#hero" },
  { id: "creations", label: "Quantum Menu", href: "#creations" },
  { id: "lab", label: "The Lab", href: "#lab" },
  { id: "matrix", label: "Flavor Matrix", href: "#matrix" },
  { id: "reviews", label: "Sensory Critics", href: "#reviews" },
  { id: "concierge", label: "Reservations", href: "#concierge" }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "quantum-croissant",
    name: "Hyper-Laminated Quantum Croissant",
    category: "viennoiserie",
    tagline: "81-Layer Aerated Butter Honeycomb",
    description: "Cold-fermented for 48 hours using Normandy AOP butter and micro-milled Einkorn flour. Finished with a flash-crystallized wildflower honey glaze.",
    price: 8.50,
    hydration: "68%",
    fermentHours: 48,
    temperature: "215°C Infrared",
    flavorNotes: ["Salted Brioche", "Torched Hazelnut", "Acacia Honey"],
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    badge: "Signature Icon",
    inStock: true
  },
  {
    id: "obsidian-sourdough",
    name: "Obsidian Reserve 72h Sourdough",
    category: "sourdough",
    tagline: "Ancient Emmer & Black Sesame Crust",
    description: "Our heirloom starter active since 2008. Slow cryo-proofed for 72 hours, resulting in a blistered caramelized crust and an airy, custard-soft open crumb.",
    price: 14.00,
    hydration: "85%",
    fermentHours: 72,
    temperature: "245°C Stone Deck",
    flavorNotes: ["Malted Umami", "Lactic Acidity", "Toasted Sesame"],
    imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=1200&auto=format&fit=crop",
    badge: "Grand Cru",
    inStock: true
  },
  {
    id: "choc-sphere-sphere",
    name: "Solar Gold & Valrhona Entremet",
    category: "patisserie",
    tagline: "Single-Origin 74% Cacao & Saffron Gel",
    description: "Futuristic geometric sphere with dark chocolate mirror glaze, crisp hazelnut praline feuilletine base, and a molten core of bergamot caramel.",
    price: 16.50,
    hydration: "55%",
    fermentHours: 24,
    temperature: "Chilled -4°C",
    flavorNotes: ["Dark Cocoa", "Persian Saffron", "Smoked Citrus"],
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    badge: "Molecular",
    inStock: true
  },
  {
    id: "truffle-brioche-cube",
    name: "Aerostatic Truffle Brioche Cube",
    category: "savory",
    tagline: "Perigord Black Truffle & Smoked Gruyère",
    description: "Geometric cubic loaf with micro-perforated steam vents. Infused with winter black truffle compound butter and aged Swiss Alpine Gruyère.",
    price: 18.00,
    hydration: "74%",
    fermentHours: 36,
    temperature: "205°C Convection",
    flavorNotes: ["Earthy Truffle", "Brown Butter", "Nutty Gruyère"],
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop",
    badge: "Savory Reserve",
    inStock: true
  },
  {
    id: "ruby-pain-raisin",
    name: "Nebula Berry & Cardamom Escargot",
    category: "viennoiserie",
    tagline: "Freeze-Dried Raspberry & Spun Sugar",
    description: "Spiral pastry laminated with Madagascar vanilla custard, organic freeze-dried raspberries, and green cardamom essence.",
    price: 9.00,
    hydration: "70%",
    fermentHours: 42,
    temperature: "210°C Deck",
    flavorNotes: ["Tart Raspberry", "Aromatic Spice", "Creme Patissiere"],
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Seasonal",
    inStock: true
  },
  {
    id: "bio-seeded-rye",
    name: "Khorasan & Golden Flax Loaf",
    category: "sourdough",
    tagline: "100% Ancient Heritage Grains",
    description: "Nutrient-dense stoneground Khorasan wheat blended with sprouted golden flax, pumpkin seeds, and smoked sea salt crystals.",
    price: 13.50,
    hydration: "82%",
    fermentHours: 60,
    temperature: "235°C Hearth",
    flavorNotes: ["Toasted Grains", "Earthy Molasses", "Sea Salt Crunch"],
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop",
    badge: "Nutrient Dense",
    inStock: true
  }
];

export const LAB_PILLARS: LabPillar[] = [
  {
    id: "cryo",
    title: "72-Hour Cryo Ferment",
    metric: "4.2°C Controlled Chamber",
    subtitle: "Enzymatic Carbohydrate Breakdown",
    description: "Slow, sub-5°C fermentation extends protein breakdown into rich amino acids, delivering maximum digestibility and extraordinary aromatic complexity.",
    iconName: "ThermometerSnowflake",
    details: [
      "Lowers gluten index naturally",
      "Maximizes natural lactic sweetness",
      "Zero artificial enhancers or shelf stabilizers"
    ]
  },
  {
    id: "infrared",
    title: "Infrared Radiant Deck",
    metric: "245°C Penetrative Heat",
    subtitle: "Precision Crust Polymerization",
    description: "Quartz infrared emitters penetrate deep within the dough loaf instantaneously, expanding the steam cell structure before caramelizing the outer shell to a micro-thin crisp.",
    iconName: "Flame",
    details: [
      "Ultra-crisp 0.8mm shell geometry",
      "Custardy, steam-retained interior crumb",
      "Maillard caramelization without bitterness"
    ]
  },
  {
    id: "grains",
    title: "Heirloom Grain Genetics",
    metric: "100% Regenerative Terroir",
    subtitle: "Ancient Einkorn & Khorasan",
    description: "Sourced directly from organic micro-mills preserving ancestral wheat genotypes unaltered for over 5,000 years, ground fresh on stone mills 12 hours before baking.",
    iconName: "Wheat",
    details: [
      "High mineral bioavailability (Zinc, Iron, Magnesium)",
      "Unmodified ancient gluten strands",
      "Nutty, naturally sweet botanical profile"
    ]
  },
  {
    id: "hydration",
    title: "Algorithmic Hydration",
    metric: "84% Hydro-Retention",
    subtitle: "Dynamic Ambient Moisture Balancing",
    description: "Real-time atmospheric barometric sensors dynamically calculate water-to-flour absorption down to the milligram, maintaining open honeycombed crumb structure regardless of outside weather.",
    iconName: "Droplets",
    details: [
      "Dynamic barometric humidity compensation",
      "Velvety gelatinized starches",
      "Prolonged freshness without dehydration"
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    criticName: "Chef Julian Vane",
    publication: "The Modernist Gastronomy Review",
    role: "Three-Star Culinary Director",
    rating: 5,
    quote: "SS Bakery has achieved what traditional boulangeries thought impossible: mathematical perfection in lamination without sacrificing the soul of warm heritage flour.",
    verdict: "A triumph of 21st-century culinary engineering.",
    avatarUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop",
    awardBadge: "Critique Choice 2026"
  },
  {
    id: "rev-2",
    criticName: "Elena Rostova",
    publication: "Vanguard Food & Wine",
    role: "Senior Bread Evaluator",
    rating: 5,
    quote: "The blistered crust on the Obsidian Reserve produces a resonant crackle that sounds like breaking thin spun glass. Inside, it's silky, custardy, and endlessly fragrant.",
    verdict: "The benchmark for modern sourdough.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    awardBadge: "Grand Gold Medal"
  },
  {
    id: "rev-3",
    criticName: "Dr. Marcus Chen",
    publication: "Biomolecular Food Science Journal",
    role: "Fermentation Scientist & Epicure",
    rating: 5,
    quote: "Their 72-hour cryo-fermentation profile breaks down complex gluten polymers to an unprecedented degree. Remarkably light on the digestion with deep umami notes.",
    verdict: "Gastronomy meets biotechnology.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    awardBadge: "Innovation Laureate"
  },
  {
    id: "rev-4",
    criticName: "Sophia Delacroix",
    publication: "Paris Patisserie Dispatch",
    role: "Master Pastry Laureate",
    rating: 5,
    quote: "The hyper-laminated croissant has 81 distinct gossamer tiers. When sliced with a heated blade, the internal honeycomb geometry is as exact as an architectural render.",
    verdict: "Flawless technical execution.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    awardBadge: "Best Croissant Global"
  }
];
