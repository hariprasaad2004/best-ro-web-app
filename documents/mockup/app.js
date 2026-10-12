/**
 * BEST WATER SYSTEMS - ENTERPRISE MULTI-BRAND WATER SUPERSTORE
 * Refactored to official schema: KENT RO | OLIVAR INTERNATIONAL | NILE | WATER SOFTENERS & MEDIA
 * Supports:
 * - 20-Product Verified Inventory
 * - 2-Tier Interactive Brand & Technology Filter Engine with URL Deep-Linking
 * - 3-Product Cross-Brand Side-by-Side Comparison Matrix
 * - Doorstep Water Quality & TDS Test Form Handlers
 * - Mobile Drawer Collapsible Accordions & Toast System
 */

// ============================================================================
// 1. OFFICIAL 20-PRODUCT CATALOG SCHEMA
// ============================================================================
const sampleProducts = [
  // --------------------------------------------------------------------------
  // BRAND: OLIVAR INTERNATIONAL (4 Models)
  // --------------------------------------------------------------------------
  {
    id: 1,
    brand: 'olivar',
    title: 'Oliver One S1',
    category: 'water-purifier',
    subcategory: 'Digital Display RO',
    techSubtitle: '6-Stage RO + UV + Active Copper + Alkaline + Zinc',
    badge: 'SMART IOT',
    badgeClass: 'badge-new',
    shortDesc: 'Built-in WiFi Smart App, Circular Smart LED Dial, Panther Black / Cosmic Orange / Stealth Grey finishes.',
    price: 22999,
    mrp: 25999,
    discount: '12% OFF',
    rating: 4.9,
    reviews: 840,
    features: ['Built-in WiFi Smart App', 'Circular Smart LED Dial', 'Active Copper + Alkaline + Zinc', '10L Food-Grade Tank', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'OLIVAR INTERNATIONAL',
      'Purification Technology': '6-Stage RO + UV + Active Copper + Alkaline + Zinc',
      'Mineral Tech': 'Active Copper + Alkaline (pH 8.5+) + Zinc Immunity Booster',
      'IoT / Connectivity': 'Built-in WiFi Smart App & Circular Smart LED Dial',
      'Storage Tank': '10 Litres Food-Grade Tank',
      'Production Rate': '12 Litres/Hour Flow',
      'Suitable For': 'Borewell & Municipal Water (Up to 2,000 ppm TDS)',
      'Finishes': 'Panther Black, Cosmic Orange, Stealth Grey',
      'Warranty': '1 Year Comprehensive Warranty + 2 Years Free Service'
    },
    image: 'images/olivar-s1.webp'
  },
  {
    id: 2,
    brand: 'olivar',
    title: 'Oliver Volcano',
    category: 'water-purifier',
    subcategory: 'Alkaline RO',
    techSubtitle: '6-Stage RO + UV + TDS + Alkaline + Copper + Zinc',
    badge: 'HIGH RECOVERY',
    badgeClass: 'badge-bestseller',
    shortDesc: 'Smart Vertical LED Display Bar, High-Recovery 18 LPH Booster pump, and elegant Rose-Gold Faucet.',
    price: 21499,
    mrp: 24500,
    discount: '12% OFF',
    rating: 4.9,
    reviews: 960,
    features: ['Smart Vertical LED Display Bar', 'High-Recovery 18 LPH Booster', 'Rose-Gold Faucet', 'Copper + Zinc + Alkaline', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'OLIVAR INTERNATIONAL',
      'Purification Technology': '6-Stage RO + UV + TDS + Alkaline + Copper + Zinc',
      'Mineral Tech': 'Active Copper + Zinc Immunity Booster + Alkaline Balance',
      'IoT / Connectivity': 'Smart Vertical LED Display Bar',
      'Storage Tank': '10 Litres Storage Tank',
      'Production Rate': '18 Litres/Hour High Recovery Flow',
      'Suitable For': 'High-TDS Borewell Water (Up to 2,000 ppm TDS)',
      'Faucet': 'Designer Rose-Gold Faucet Included',
      'Warranty': '1 Year Comprehensive Warranty'
    },
    image: 'images/volcano-ro.webp'
  },
  {
    id: 3,
    brand: 'olivar',
    title: 'Oliver Storm',
    category: 'water-purifier',
    subcategory: 'Alkaline RO',
    techSubtitle: '6-Stage RO + UV + TDS + Alkaline + Copper + Zinc',
    badge: 'JUMBO CAPACITY',
    badgeClass: 'badge-special',
    shortDesc: 'Jumbo 14L storage capacity with 20 L/hr commercial-grade pump. Available in Black & White options.',
    price: 22499,
    mrp: 26000,
    discount: '13% OFF',
    rating: 4.8,
    reviews: 780,
    features: ['14L Jumbo Storage Tank', '20 L/hr Commercial-Grade Pump', 'Copper + Zinc + Alkaline', 'Black & White Color Options', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'OLIVAR INTERNATIONAL',
      'Purification Technology': '6-Stage RO + UV + TDS + Alkaline + Copper + Zinc',
      'Mineral Tech': 'Active Copper + Alkaline pH 8.5+ + Zinc Booster',
      'IoT / Connectivity': 'Smart LED Operational & Tank Indicator',
      'Storage Tank': '14 Litres Jumbo Storage Tank',
      'Production Rate': '20 Litres/Hour High-Output Flow',
      'Suitable For': 'Large Households, Villas & Offices (Up to 2,000 ppm TDS)',
      'Warranty': '1 Year Comprehensive Warranty'
    },
    image: 'images/storm-ro.webp'
  },
  {
    id: 4,
    brand: 'olivar',
    title: 'Oliver Cyclone',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'Multi-Stage RO + UV + Mineral Cartridge',
    badge: 'POPULAR',
    badgeClass: 'badge-special',
    shortDesc: 'Dual-Tone Contrast Designer Cabinet with front transparent water level window and 12L capacity.',
    price: 19499,
    mrp: 22500,
    discount: '13% OFF',
    rating: 4.8,
    reviews: 690,
    features: ['Dual-Tone Contrast Cabinet', '12 Litres Tank', 'Front Water Level Window', 'Multi-Stage RO + UV', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'OLIVAR INTERNATIONAL',
      'Purification Technology': 'Multi-Stage RO + UV + Mineral Cartridge',
      'Mineral Tech': 'Natural Mineral Balancer Cartridge',
      'IoT / Connectivity': 'Dual-Tone Operational LEDs',
      'Storage Tank': '12 Litres Capacity',
      'Production Rate': '12 Litres/Hour Flow',
      'Suitable For': 'Borewell & Municipal Water (Up to 2,000 ppm TDS)',
      'Warranty': '1 Year Comprehensive Warranty'
    },
    image: 'images/olivar-cyclone.webp'
  },

  // --------------------------------------------------------------------------
  // BRAND: KENT RO — WALL-MOUNT (5 Models)
  // --------------------------------------------------------------------------
  {
    id: 5,
    brand: 'kent',
    title: 'KENT Grand Plus Mineral RO™',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'RO + UV + UF + TDS Control + In-Tank UV LED',
    badge: 'BESTSELLER',
    badgeClass: 'badge-bestseller',
    shortDesc: "India's #1 Selling Purifier with Zero Water Wastage Technology and In-Tank UV Disinfection.",
    price: 18499,
    mrp: 21500,
    discount: '14% OFF',
    rating: 4.9,
    reviews: 4280,
    features: ["India's #1 Selling Purifier", 'Zero Water Wastage Technology', 'In-Tank UV Disinfection', 'Mineral RO™ Retention', '20 L/hr Capacity'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + TDS Control + In-Tank UV LED',
      'Mineral Tech': 'Patented Mineral RO™ Retention (TDS Controller)',
      'IoT / Connectivity': 'In-Tank UV LED Disinfection & UV Fail Alarm',
      'Storage Tank': '9 Litres Food-Grade Tank',
      'Production Rate': '20 Litres/Hour Flow',
      'Suitable For': 'Borewell, Municipal & Tanker Water (Up to 2000 ppm TDS)',
      'Warranty': '1 Year Comprehensive + 3 Years Extended Service Free'
    },
    image: 'images/kent-grand-plus.webp'
  },
  {
    id: 6,
    brand: 'kent',
    title: 'KENT Grand IoT',
    category: 'water-purifier',
    subcategory: 'Digital Display RO',
    techSubtitle: 'RO + UV + UF + Alkaline + Copper + In-Tank UV',
    badge: 'SMART IOT',
    badgeClass: 'badge-new',
    shortDesc: 'WiFi IoT with Kent CamEye App, Automated Service Request Alerts, and Digital Purity Log.',
    price: 21500,
    mrp: 24000,
    discount: '10% OFF',
    rating: 4.9,
    reviews: 1450,
    features: ['WiFi IoT with Kent CamEye App', 'Automated Service Request Alerts', 'Digital Purity Log', 'Alkaline & Copper Infusion', 'In-Tank UV Protection'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + Alkaline + Copper + In-Tank UV',
      'Mineral Tech': 'Active Alkaline Mineralizer + Copper Fortifier',
      'IoT / Connectivity': 'WiFi IoT App (Kent CamEye) & Automatic Alerts',
      'Storage Tank': '8 Litres Storage Tank',
      'Production Rate': '20 Litres/Hour Flow',
      'Suitable For': 'All Water Sources up to 2000 ppm TDS',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-prime-plus.webp'
  },
  {
    id: 7,
    brand: 'kent',
    title: 'KENT Pearl IoT',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'RO + UV + UF + Alkaline + Copper + IoT',
    badge: 'HYGIENIC TANK',
    badgeClass: 'badge-special',
    shortDesc: '100% Detachable & Hand-Washable 11L Tank with IoT Connectivity and multi-mineral enrichment.',
    price: 21000,
    mrp: 23500,
    discount: '11% OFF',
    rating: 4.8,
    reviews: 1220,
    features: ['100% Detachable & Hand-Washable Tank', '11 Litres Storage Capacity', 'IoT Smart Connectivity', 'Alkaline + Copper Enrichment', '20 L/hr Flow'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + Alkaline + Copper + IoT',
      'Mineral Tech': 'Mineral RO™ + Copper & Alkaline Infusion',
      'IoT / Connectivity': 'Smart Mobile App IoT Connectivity',
      'Storage Tank': '11 Litres Detachable Tank (Hand-Washable)',
      'Production Rate': '20 Litres/Hour Flow',
      'Suitable For': 'Borewell & Municipal Water up to 2000 ppm TDS',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-supreme-alkaline.webp'
  },
  {
    id: 8,
    brand: 'kent',
    title: 'KENT Sapphire IoT',
    category: 'water-purifier',
    subcategory: 'Digital Display RO',
    techSubtitle: 'RO + UV + UF + Alkaline + Copper + TDS Control',
    badge: 'PREMIUM',
    badgeClass: 'badge-special',
    shortDesc: 'Interactive Real-Time Digital Purity Screen, TDS Display, and intelligent Filter Life Alarm.',
    price: 21999,
    mrp: 25000,
    discount: '12% OFF',
    rating: 4.9,
    reviews: 1890,
    features: ['Real-Time Digital Purity Screen', 'Live TDS Numeric Display', 'Filter Life Alarm', 'Alkaline & Copper Infusion', 'Zero Water Wastage'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + Alkaline + Copper + TDS Control',
      'Mineral Tech': 'Mineral RO™ + Active Alkaline (pH 8.0 - 9.5) + Copper',
      'IoT / Connectivity': 'Interactive Real-Time Digital Purity Screen & Filter Alarm',
      'Storage Tank': '8 Litres Storage Tank',
      'Production Rate': '20 Litres/Hour Flow',
      'Suitable For': 'All Water Sources up to 2000 ppm TDS',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-sapphire-iot.webp'
  },
  {
    id: 9,
    brand: 'kent',
    title: 'KENT Elegant',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'Mineral RO™ (RO + UF + TDS Control)',
    badge: 'VALUE PICK',
    badgeClass: 'badge-new',
    shortDesc: 'Compact Wall-Mount Chassis, Patented Mineral Retention, and Fully Automatic operation.',
    price: 14500,
    mrp: 16500,
    discount: '12% OFF',
    rating: 4.8,
    reviews: 1540,
    features: ['Compact Wall-Mount Chassis', 'Patented Mineral Retention', 'Fully Automatic Operation', '8L Storage Tank', '15 L/hr Flow'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Mineral RO™ (RO + UF + TDS Control)',
      'Mineral Tech': 'Patented Mineral RO™ Retention (TDS Controller)',
      'IoT / Connectivity': 'Fully Automatic Auto-On / Auto-Off Sensor',
      'Storage Tank': '8 Litres Storage Tank',
      'Production Rate': '15 Litres/Hour Flow',
      'Suitable For': 'Borewell & Municipal Water up to 2000 ppm TDS',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-elegant.webp'
  },

  // --------------------------------------------------------------------------
  // BRAND: KENT RO — UNDERSINK (2 Models)
  // --------------------------------------------------------------------------
  {
    id: 10,
    brand: 'kent',
    title: 'KENT Sterling IoT',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'RO + UV + UF + TDS Control + Alkaline + Copper + IoT',
    badge: 'MODULAR KITCHEN',
    badgeClass: 'badge-special',
    shortDesc: 'Under-the-counter concealed mount, pressurized tank supplies water without electricity, and Chrome swan-neck tap.',
    price: 23500,
    mrp: 26500,
    discount: '11% OFF',
    rating: 4.9,
    reviews: 980,
    features: ['Concealed Under-the-Counter Mount', 'Pressurized Tank (Works without Power)', 'Chrome Swan-Neck Tap', 'IoT Mobile App Monitoring'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + TDS Control + Alkaline + Copper + IoT',
      'Mineral Tech': 'Alkaline + Copper + Mineral RO™ Retention',
      'IoT / Connectivity': 'Under-Sink IoT Smart Connectivity',
      'Storage Tank': '6 Litres Hydrostatic Pressurized Tank',
      'Production Rate': '20 Litres/Hour Flow',
      'Suitable For': 'Modular Kitchens & Concealed Sinks (up to 2000 ppm TDS)',
      'Faucet': 'Solid Chrome Swan-Neck Faucet Included',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-sterling-plus.webp'
  },
  {
    id: 11,
    brand: 'kent',
    title: 'KENT Excel Plus',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: 'RO + UV + UF + TDS Control',
    badge: 'UNDER SINK',
    badgeClass: 'badge-new',
    shortDesc: 'Split-skid compact design for tighter under-sink cabinets with stainless steel faucet.',
    price: 18500,
    mrp: 21000,
    discount: '12% OFF',
    rating: 4.8,
    reviews: 730,
    features: ['Split-Skid Compact Design', 'Concealed Under-Sink Mount', 'Stainless Steel Faucet', 'Mineral RO™ Retention', 'Hydrostatic Tank'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'RO + UV + UF + TDS Control',
      'Mineral Tech': 'Patented Mineral RO™ Retention (TDS Controller)',
      'IoT / Connectivity': 'Automatic Hydrostatic Pressure System',
      'Storage Tank': '7 Litres Hydrostatic Tank',
      'Production Rate': '15–20 Litres/Hour Flow',
      'Suitable For': 'Under-Sink Cabinets up to 2000 ppm TDS',
      'Faucet': 'Stainless Steel Faucet Included',
      'Warranty': '1 Year Full Warranty + 3 Years Free Service'
    },
    image: 'images/kent-sterling-plus.webp'
  },

  // --------------------------------------------------------------------------
  // BRAND: NILE (3 Models)
  // --------------------------------------------------------------------------
  {
    id: 12,
    brand: 'nile',
    title: 'Nile Era Advance',
    category: 'water-purifier',
    subcategory: 'Alkaline RO',
    techSubtitle: '7-Stage RO + UV + UF + Alkaline + Copper + Zinc',
    badge: 'BEST VALUE',
    badgeClass: 'badge-bestseller',
    shortDesc: 'Heavy-duty booster pump, Bio-mineral cartridge, and dual-tone cabinet with LED indicators.',
    price: 9500,
    mrp: 12000,
    discount: '21% OFF',
    rating: 4.9,
    reviews: 1420,
    features: ['Heavy-Duty Booster Pump', 'Bio-Mineral Cartridge', 'Dual-Tone Cabinet with LED Indicators', 'Alkaline + Copper + Zinc 7-Stage', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'NILE (The Name Inspires Trust)',
      'Purification Technology': '7-Stage RO + UV + UF + Alkaline + Copper + Zinc',
      'Mineral Tech': 'Bio-Mineral Cartridge (Copper + Zinc + Alkaline pH 8.0+)',
      'IoT / Connectivity': 'LED Smart Status Indicators',
      'Storage Tank': '10 Litres Food-Grade Tank',
      'Production Rate': '12–15 Litres/Hour Flow',
      'Suitable For': 'Borewell & Hard Water (Up to 2,000 ppm TDS)',
      'Pump': 'High-Pressure Heavy-Duty 100 GPD Booster Pump',
      'Warranty': '1 Year Full Warranty + 2 Years Free Support'
    },
    image: 'images/dolphin-ro.webp'
  },
  {
    id: 13,
    brand: 'nile',
    title: 'Nile Aqua Innovica',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: '7/8-Stage RO + UV + UF + TDS + Copper + Zinc',
    badge: 'BOREWELL TOUGH',
    badgeClass: 'badge-special',
    shortDesc: 'High-torque copper-wound motor, high-flow membrane, geometric fascia with chrome tap.',
    price: 10500,
    mrp: 13500,
    discount: '22% OFF',
    rating: 4.9,
    reviews: 1180,
    features: ['High-Torque Copper-Wound Motor', 'High-Flow Borewell Membrane', 'Geometric Fascia with Chrome Tap', '12L Capacity', 'Inlet TDS up to 2000 ppm'],
    specs: {
      'Brand': 'NILE (The Name Inspires Trust)',
      'Purification Technology': '7/8-Stage RO + UV + UF + TDS + Copper + Zinc',
      'Mineral Tech': 'Active Copper + Zinc Immunity + Mineral Guard',
      'IoT / Connectivity': 'Power & Purification Smart LED Bar',
      'Storage Tank': '12 Litres Storage Tank',
      'Production Rate': '12–15 Litres/Hour Flow',
      'Suitable For': 'Heavy Borewell & High Hardness (Up to 2,000 ppm TDS)',
      'Motor': '100% Copper-Wound High-Torque Booster Motor',
      'Warranty': '1 Year Full Warranty + 2 Years Free Support'
    },
    image: 'images/cyclone-bis.webp'
  },
  {
    id: 14,
    brand: 'nile',
    title: 'Nile Aqua 2090',
    category: 'water-purifier',
    subcategory: 'Mineral RO',
    techSubtitle: '6/7-Stage RO + UV + UF + Active Copper + Alkaline',
    badge: 'ECONOMY PICK',
    badgeClass: 'badge-new',
    shortDesc: 'High-durability ABS body, transparent water reservoir, lowest annual filter maintenance cost.',
    price: 8500,
    mrp: 11000,
    discount: '23% OFF',
    rating: 4.8,
    reviews: 1310,
    features: ['High-Durability ABS Body', 'Transparent Water Reservoir', 'Lowest Annual Filter Maintenance Cost', 'Active Copper + Alkaline', '10L Capacity'],
    specs: {
      'Brand': 'NILE (The Name Inspires Trust)',
      'Purification Technology': '6/7-Stage RO + UV + UF + Active Copper + Alkaline',
      'Mineral Tech': 'Active Copper & Alkaline Bio-Infusion',
      'IoT / Connectivity': 'LED Operational Indicator',
      'Storage Tank': '10 Litres Transparent Reservoir',
      'Production Rate': '12–15 Litres/Hour Flow',
      'Suitable For': 'Borewell & Municipal Water (Up to 2,000 ppm TDS)',
      'Maintenance': 'Lowest Annual Filter Replacement Cost in Class',
      'Warranty': '1 Year Full Warranty'
    },
    image: 'images/best-pro-foodgrade.webp'
  },

  // --------------------------------------------------------------------------
  // CATEGORY: WATER SOFTENERS & WHOLE-HOUSE FILTERS (6 Models)
  // --------------------------------------------------------------------------
  {
    id: 15,
    brand: 'kent',
    title: 'KENT Autosoft 25L Whole House',
    category: 'water-softener',
    subcategory: 'Whole House Autosoft',
    techSubtitle: 'Automated Ion-Exchange Softening (Food-Grade Resin 25L)',
    badge: 'AUTOMATIC',
    badgeClass: 'badge-bestseller',
    shortDesc: 'Microprocessor-controlled automatic regeneration, stops severe hair fall & tap scaling, protects geysers.',
    price: 28500,
    mrp: 32500,
    discount: '12% OFF',
    rating: 4.9,
    reviews: 860,
    features: ['Microprocessor Automatic Regeneration', 'Stops Severe Hair Fall & Scaling', 'Protects Geysers & Solar Heaters', '25L Food-Grade Resin', '2,000 L/hr Flow'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Automated Ion-Exchange Softening (Food-Grade Resin 25L)',
      'Mineral Tech': 'Ion-Exchange Calcium & Magnesium Softening',
      'IoT / Connectivity': 'Microprocessor Controlled Digital Multiport Valve',
      'Storage Tank': '35 kg Brine Storage Tank (25L Resin)',
      'Production Rate': '2,000 Litres/Hour Flow Rate',
      'Suitable For': 'Hard Borewell Water (Hardness up to 1,000 ppm)',
      'Dimensions': 'Compact High-Density Cabinet',
      'Warranty': '1 Year Comprehensive Onsite Warranty'
    },
    image: 'images/kent-autosoft-25l.webp'
  },
  {
    id: 16,
    brand: 'kent',
    title: 'KENT Autosoft 40L Villa Softener',
    category: 'water-softener',
    subcategory: 'Whole House Autosoft',
    techSubtitle: 'High-Capacity Automated Ion-Exchange (40L Resin)',
    badge: 'LUXURY VILLA',
    badgeClass: 'badge-special',
    shortDesc: 'Built for 4–8 bathroom luxury villas, duplexes, and commercial properties; High-flow digital multiport valve.',
    price: 42000,
    mrp: 48000,
    discount: '13% OFF',
    rating: 4.9,
    reviews: 520,
    features: ['Built for 4–8 Bathroom Villas & Duplexes', 'High-Flow Digital Multiport Valve', 'Continuous High-Volume Soft Water', '40L Heavy-Duty Resin', '3,500 L/hr Flow'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'High-Capacity Automated Ion-Exchange (40L Resin)',
      'Mineral Tech': 'High-Capacity Ion-Exchange Resin Softener',
      'IoT / Connectivity': 'High-Flow Digital Multiport Automated Valve',
      'Storage Tank': '60 kg Brine Tank (40L Resin)',
      'Production Rate': '3,500 Litres/Hour Flow Rate',
      'Suitable For': 'Luxury Villas & Duplexes (Hardness up to 1,500 ppm)',
      'Dimensions': 'Heavy-Duty FRP Vessel with Brine Tank',
      'Warranty': '1 Year Comprehensive Onsite Warranty'
    },
    image: 'images/kent-autosoft-40l.webp'
  },
  {
    id: 17,
    brand: 'kent',
    title: 'KENT Compact Bathroom Softener',
    category: 'water-softener',
    subcategory: 'Bathroom Softener',
    techSubtitle: 'Point-of-Use Food Grade Ion-Exchange Resin (5.5L)',
    badge: 'HAIR & SKIN CARE',
    badgeClass: 'badge-new',
    shortDesc: 'Compact non-electric unit, mounted directly before shower or geyser, eliminates shampoo curdling & skin dryness.',
    price: 8499,
    mrp: 9999,
    discount: '15% OFF',
    rating: 4.8,
    reviews: 1140,
    features: ['Non-Electric Point-of-Use Softener', 'Direct Shower & Geyser Mounting', 'Eliminates Shampoo Curdling & Hairfall', 'Easy DIY Table Salt Regeneration', 'Up to 800 ppm Hardness'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Point-of-Use Food Grade Ion-Exchange Resin (5.5L)',
      'Mineral Tech': 'Softens Hard Salts for Silky Bath Water',
      'IoT / Connectivity': 'Manual Direct-Flow Regeneration Valve',
      'Storage Tank': '5.5 Litres Food-Grade Resin',
      'Production Rate': 'Shower & Geyser Direct Flow',
      'Suitable For': 'Single Bathroom / Shower (Hardness up to 800 ppm)',
      'Warranty': '1 Year Comprehensive Warranty'
    },
    image: 'images/kent-bathroom-softener.webp'
  },
  {
    id: 18,
    brand: 'kent',
    title: 'KENT Washing Machine Softener',
    category: 'water-softener',
    subcategory: 'Bathroom Softener',
    techSubtitle: 'Polyphosphate Scale Inhibition Media + Resin',
    badge: 'APPLIANCE CARE',
    badgeClass: 'badge-special',
    shortDesc: 'Screws directly to 3/4" tap inlet, protects drum heater coil, saves 40% detergent, keeps clothes soft.',
    price: 3299,
    mrp: 3999,
    discount: '18% OFF',
    rating: 4.9,
    reviews: 1680,
    features: ['Screws Directly to 3/4" Tap Inlet', 'Protects Drum Heater Coil & Pump', 'Saves 40% Detergent & Electricity', 'Keeps Fabrics Soft & Bright', 'No Tools Required'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Polyphosphate Scale Inhibition Media + Resin',
      'Mineral Tech': 'Scale Conditioning & Anti-Precipitation',
      'IoT / Connectivity': 'Direct Inline Flow Operation',
      'Storage Tank': 'Inline Cartridge (No Power Required)',
      'Production Rate': 'Direct 3/4" Washing Machine Inlet Flow',
      'Suitable For': 'All Automatic Front & Top Load Washing Machines',
      'Warranty': '1 Year Comprehensive Warranty'
    },
    image: 'images/kent-washing-machine-softener.webp'
  },
  {
    id: 19,
    brand: 'kent',
    title: 'KENT Multi-Media Iron Removal Filter',
    category: 'water-softener',
    subcategory: 'Whole House Autosoft',
    techSubtitle: 'Catalytic Birm & Manganese Dioxide Oxidation Media',
    badge: 'IRON REMOVAL',
    badgeClass: 'badge-special',
    shortDesc: 'Eliminates yellow/reddish rust stains on sanitaryware, removes metallic odor from borewell water.',
    price: 24500,
    mrp: 27999,
    discount: '13% OFF',
    rating: 4.8,
    reviews: 490,
    features: ['Eliminates Yellow & Reddish Rust Stains', 'Removes Metallic Odor from Borewell Water', 'Heavy 10x54 Composite FRP Vessel', '2,500 L/hr Flow Rate', 'Treats up to 5.0 ppm Iron'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Catalytic Birm & Manganese Dioxide Oxidation Media',
      'Mineral Tech': 'Catalytic Iron & Manganese Oxidation Filtration',
      'IoT / Connectivity': 'Manual/Auto Backwash Multiport Valve',
      'Storage Tank': '10x54 Composite FRP Pressure Vessel',
      'Production Rate': '2,500 Litres/Hour Flow Rate',
      'Suitable For': 'Iron-Rich Borewell Water (Up to 5.0 ppm Iron)',
      'Warranty': '1 Year Comprehensive Onsite Warranty'
    },
    image: 'images/kent-iron-filter.webp'
  },
  {
    id: 20,
    brand: 'kent',
    title: 'KENT High-Flow Sand & Turbidity Filter (5000 LPH)',
    category: 'water-softener',
    subcategory: 'Whole House Autosoft',
    techSubtitle: 'Multi-Grade Quartz Silica Filtration Media',
    badge: 'WHOLE APARTMENT',
    badgeClass: 'badge-bestseller',
    shortDesc: 'Extracts suspended silt, sand, and mud; Provides crystal-clear water for villas and apartments.',
    price: 38000,
    mrp: 43000,
    discount: '12% OFF',
    rating: 4.9,
    reviews: 380,
    features: ['Extracts Suspended Silt, Sand, and Mud', 'Crystal-Clear Water for Villas & Apartments', 'High-Strength FRP Pressure Vessel', '5,000 L/hr Heavy-Duty Flow', 'Protects Whole-House Plumbing'],
    specs: {
      'Brand': 'KENT RO (Flagship Official Partner)',
      'Purification Technology': 'Multi-Grade Quartz Silica Filtration Media',
      'Mineral Tech': 'Graded Quartz & Anthracite Silt Filtration',
      'IoT / Connectivity': 'High-Flow Multiport Backwash Control',
      'Storage Tank': 'High-Strength Composite FRP Vessel',
      'Production Rate': '5,000 Litres/Hour Heavy Flow',
      'Suitable For': 'Silt, Mud & Turbidity in Borewell & River Water',
      'Warranty': '1 Year Comprehensive Onsite Warranty'
    },
    image: 'images/kent-sand-filter.webp'
  }
];

// Brand Metadata Helper
function getBrandMeta(brandKey, category) {
  if (category === 'water-softener') {
    return { name: 'KENT Softener', badgeClass: 'brand-tag-softener', icon: '🚿' };
  }
  switch (brandKey) {
    case 'kent':
      return { name: 'KENT RO', badgeClass: 'brand-tag-kent', icon: '🔷' };
    case 'olivar':
      return { name: 'OLIVAR', badgeClass: 'brand-tag-olivar', icon: '🌿' };
    case 'nile':
      return { name: 'NILE', badgeClass: 'brand-tag-nile', icon: '💧' };
    default:
      return { name: 'Official Brand', badgeClass: 'brand-tag-default', icon: '💧' };
  }
}

// ============================================================================
// 2. STATE MANAGEMENT (INTERACTIVE BRAND & CATEGORY FILTER ENGINE)
// ============================================================================
let currentBrand = 'all';         // 'all' | 'kent' | 'olivar' | 'nile' | 'softener'
let currentCategory = 'all';      // 'all' | 'water-purifier' | 'water-softener'
let currentSubcategory = 'all';   // 'all' | 'Mineral RO' | 'Alkaline RO' | 'Digital Display RO' | 'Whole House Autosoft' | 'Bathroom Softener'
let currentSearch = '';
let currentSort = 'featured';
let comparedProductIds = [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const productCountText = document.getElementById('product-count-text');
const brandTabs = document.querySelectorAll('.brand-tab-btn');
const categoryTabs = document.querySelectorAll('.category-tab-btn');
const subcatPills = document.querySelectorAll('.subcat-pill-btn');
const catalogSearchInput = document.getElementById('catalog-search');
const catalogSortSelect = document.getElementById('catalog-sort');
const siteHeader = document.getElementById('site-header');

// ============================================================================
// 3. PRODUCT RENDERING ENGINE
// ============================================================================
function renderProducts() {
  if (!productGrid) return;

  const filtered = sampleProducts.filter(p => {
    // 1. Brand / Softeners filter
    if (currentBrand === 'softener') {
      if (p.category !== 'water-softener') return false;
    } else if (currentBrand !== 'all') {
      if (p.brand !== currentBrand || p.category === 'water-softener') return false;
    }

    // 2. Category Filter
    if (currentCategory !== 'all' && p.category !== currentCategory) {
      return false;
    }

    // 3. Subcategory / Technology Filter
    if (currentSubcategory !== 'all' && p.subcategory !== currentSubcategory) {
      return false;
    }

    // 4. Keyword Search Filter
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      const matchBrand = (p.specs && p.specs['Brand'] && p.specs['Brand'].toLowerCase().includes(q)) || p.brand.toLowerCase().includes(q);
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.shortDesc.toLowerCase().includes(q);
      const matchTech = p.techSubtitle.toLowerCase().includes(q);
      const matchFeatures = p.features.some(f => f.toLowerCase().includes(q));
      if (!matchBrand && !matchTitle && !matchDesc && !matchTech && !matchFeatures) {
        return false;
      }
    }
    return true;
  });

  // Sort
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update product count label: Showing X of 20 products
  if (productCountText) {
    productCountText.textContent = `Showing ${filtered.length} of ${sampleProducts.length} products`;
  }

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 12px; border: 1.5px dashed #cbd5e1;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.4rem; color: #113c71; margin-bottom: 8px;">No matching systems found</h3>
        <p style="color: #64748b; margin-bottom: 20px;">Try adjusting your brand tab, subcategory filter, or search keywords.</p>
        <button class="btn-compare-now" onclick="resetAllFilters()">Reset Filters & View All ${sampleProducts.length} Models</button>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(p => {
    const isCompared = comparedProductIds.includes(p.id);
    const brandMeta = getBrandMeta(p.brand, p.category);

    return `
      <article class="kent-product-card" data-id="${p.id}" data-brand="${p.brand}" data-category="${p.category}">
        <!-- Top Badges Row -->
        <div class="card-top-badges">
          <span class="card-brand-pill ${brandMeta.badgeClass}">${brandMeta.icon} ${brandMeta.name}</span>
          <span class="card-badge ${p.badgeClass}">${p.badge}</span>
        </div>

        <!-- Compare Checkbox -->
        <label class="compare-checkbox-wrapper" title="Compare this model side-by-side across brands (up to 3)">
          <input type="checkbox" onchange="toggleCompare(${p.id}, this)" ${isCompared ? 'checked' : ''}>
          <span>Compare</span>
        </label>

        <!-- Product Image Box -->
        <div class="card-image-box" onclick="openSpecsModal(${p.id})" title="Click to view full specifications">
          <img src="${p.image}" alt="${p.title}" class="card-product-img" loading="lazy">
        </div>

        <!-- Product Details Box -->
        <div class="card-details-box">
          <!-- Ratings Row -->
          <div class="card-ratings-row">
            <span>★ ${p.rating}</span>
            <span class="reviews-count-text">(${p.reviews.toLocaleString()} reviews)</span>
          </div>

          <!-- Title & Tech Subtitle -->
          <h3 class="card-product-title" onclick="openSpecsModal(${p.id})" style="cursor:pointer;" title="${p.title}">${p.title}</h3>
          <div class="card-tech-subtitle">${p.techSubtitle}</div>

          <!-- Description -->
          <p class="card-description-text">${p.shortDesc}</p>

          <!-- Feature Chips -->
          <div class="card-feature-chips">
            ${p.features.map(f => `<span class="feature-chip">${f}</span>`).join('')}
          </div>

          <!-- Pricing Row -->
          <div class="card-price-container">
            <span class="price-main">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="price-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
            <span class="price-discount-pill">${p.discount}</span>
          </div>

          <!-- Action Buttons Row -->
          <div class="card-buttons-row">
            <button class="btn-book-demo-action" onclick="openDemoModal('${p.title}', '${p.brand}')">Free Water Test</button>
            <button class="btn-view-specs-action" onclick="openSpecsModal(${p.id})">Specs</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Reset all filters helper
function resetAllFilters() {
  currentBrand = 'all';
  currentCategory = 'all';
  currentSubcategory = 'all';
  currentSearch = '';
  if (catalogSearchInput) catalogSearchInput.value = '';

  brandTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-brand') === 'all'));
  categoryTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-category') === 'all'));
  subcatPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-sub') === 'all'));

  renderProducts();
}

// ============================================================================
// 4. FILTER CONTROLS & EVENT LISTENERS
// ============================================================================

// Filter by Brand (Tier 1)
function filterBrand(brandKey, clickedEl) {
  currentBrand = brandKey;

  if (brandKey === 'softener') {
    currentCategory = 'water-softener';
  } else if (brandKey !== 'all') {
    currentCategory = 'water-purifier';
  } else {
    currentCategory = 'all';
  }

  // Update Brand Tabs UI
  brandTabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-brand') === brandKey);
  });

  // Update Category Tabs UI if present
  categoryTabs.forEach(tab => {
    if (brandKey === 'softener') {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'water-softener');
    } else if (brandKey !== 'all') {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'water-purifier');
    } else {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'all');
    }
  });

  renderProducts();

  const catalogEl = document.getElementById('catalog');
  if (catalogEl && window.location.pathname.includes('water-purifiers')) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

brandTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const brand = tab.getAttribute('data-brand') || 'all';
    filterBrand(brand, tab);
  });
});

// Category Filter Tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.getAttribute('data-category');

    if (currentCategory === 'water-softener') {
      currentBrand = 'softener';
    } else if (currentCategory === 'all') {
      currentBrand = 'all';
    }

    brandTabs.forEach(bt => {
      bt.classList.toggle('active', bt.getAttribute('data-brand') === currentBrand);
    });

    renderProducts();
  });
});

// Subcategory / Technology Pills (Tier 2)
subcatPills.forEach(pill => {
  pill.addEventListener('click', () => {
    subcatPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentSubcategory = pill.getAttribute('data-sub');
    renderProducts();
  });
});

if (catalogSearchInput) {
  catalogSearchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });
}

if (catalogSortSelect) {
  catalogSortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// Helpers called from Navbar Mega Menu
function filterCategory(cat, clickedEl) {
  currentCategory = cat;
  currentSubcategory = 'all';
  if (cat === 'water-softener') {
    currentBrand = 'softener';
  } else {
    currentBrand = 'all';
  }

  brandTabs.forEach(bt => {
    bt.classList.toggle('active', bt.getAttribute('data-brand') === currentBrand);
  });
  categoryTabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-category') === cat);
  });
  subcatPills.forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-sub') === 'all');
  });

  renderProducts();
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

function filterSubcategory(sub, clickedEl) {
  currentSubcategory = sub;

  subcatPills.forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-sub') === sub);
  });

  renderProducts();
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================================
// 5. STICKY HEADER SCROLL LISTENER
// ============================================================================
if (siteHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
}

// ============================================================================
// 6. HERO BANNER PAGINATION & AUTO-CYCLE
// ============================================================================
const heroHeadline = document.getElementById('hero-headline');
const heroSubtext = document.getElementById('hero-subtext');
const heroDots = document.querySelectorAll('.hero-dot');

const heroSlides = [
  {
    head: 'Multi-Brand Water<br>Superstore & Service<br>Center',
    sub: 'Authorized showroom in Erode for KENT RO, OLIVAR Smart WiFi, and NILE Borewell Tough drinking systems and whole-house softeners.'
  },
  {
    head: 'Smart Next-Gen IoT<br>Real-Time Digital<br>Monitoring',
    sub: 'Oliver One S1 & Kent Sapphire IoT with mobile app control, live TDS reading & active copper-zinc multi-mineralization.'
  },
  {
    head: 'Borewell Specialists &<br>Automatic Whole-House<br>Softener Solutions',
    sub: 'Stop severe hair fall and geyser scaling with KENT Autosoft, Iron Removal media & NILE heavy-duty borewell purifiers.'
  }
];

let activeSlideIdx = 0;
function setHeroSlide(idx) {
  activeSlideIdx = idx;
  heroDots.forEach((d, i) => d.classList.toggle('active', i === idx));
  if (heroHeadline) heroHeadline.innerHTML = heroSlides[idx].head;
  if (heroSubtext) heroSubtext.innerHTML = heroSlides[idx].sub;
}

if (heroDots.length > 0) {
  setInterval(() => {
    const nextIdx = (activeSlideIdx + 1) % heroSlides.length;
    setHeroSlide(nextIdx);
  }, 6500);
}

// ============================================================================
// 7. MULTI-BRAND COMPARISON MATRIX (MAX 3 MODELS)
// ============================================================================
const compareTray = document.getElementById('compare-tray');
const compareThumbs = document.getElementById('compare-thumbs');
const compareCountText = document.getElementById('compare-count-text');
const headerCartBadge = document.getElementById('header-cart-badge');

function toggleCompare(productId, checkboxEl) {
  const idx = comparedProductIds.indexOf(productId);
  if (checkboxEl.checked) {
    if (comparedProductIds.length >= 3) {
      checkboxEl.checked = false;
      showToast('⚠️ You can compare up to 3 models simultaneously across brands.');
      return;
    }
    if (idx === -1) {
      comparedProductIds.push(productId);
    }
  } else {
    if (idx > -1) {
      comparedProductIds.splice(idx, 1);
    }
  }
  updateCompareTrayUI();
}

function removeCompareItem(productId) {
  const idx = comparedProductIds.indexOf(productId);
  if (idx > -1) {
    comparedProductIds.splice(idx, 1);
  }
  const cardCheckbox = document.querySelector(`.kent-product-card[data-id="${productId}"] input[type="checkbox"]`);
  if (cardCheckbox) cardCheckbox.checked = false;

  updateCompareTrayUI();
}

function clearCompareSelection() {
  comparedProductIds = [];
  document.querySelectorAll('.compare-checkbox-wrapper input[type="checkbox"]').forEach(cb => cb.checked = false);
  updateCompareTrayUI();
}

function updateCompareTrayUI() {
  // Update Header badge
  if (headerCartBadge) {
    headerCartBadge.textContent = comparedProductIds.length;
  }

  if (!compareTray) return;

  if (comparedProductIds.length > 0) {
    compareTray.classList.add('active');
    if (compareCountText) compareCountText.textContent = `Compare Models (${comparedProductIds.length}/3)`;

    if (compareThumbs) {
      compareThumbs.innerHTML = comparedProductIds.map(id => {
        const prod = sampleProducts.find(p => p.id === id);
        if (!prod) return '';
        const brandMeta = getBrandMeta(prod.brand, prod.category);
        return `
          <div class="compare-thumb-card" title="${prod.title}">
            <img src="${prod.image}" alt="${prod.title}" class="compare-thumb-img">
            <span class="compare-thumb-brand">${brandMeta.name}</span>
            <button class="compare-thumb-remove" onclick="removeCompareItem(${prod.id})" title="Remove">&times;</button>
          </div>
        `;
      }).join('');
    }
  } else {
    compareTray.classList.remove('active');
  }
}

function openCompareModal() {
  if (comparedProductIds.length < 2) {
    showToast('💡 Please select at least 2 models (up to 3) to compare specifications across brands.');
    return;
  }

  const selectedItems = comparedProductIds.map(id => sampleProducts.find(p => p.id === id)).filter(Boolean);
  const modalContent = document.getElementById('compare-modal-content');
  if (!modalContent) return;

  // Exact 8 comparison rows + action CTA specified in navbar.md:
  // 1. Brand & Model Name
  // 2. Price & Warranty
  // 3. Purification / Softening Technology
  // 4. Mineral Infusion (Copper / Zinc / Alkaline)
  // 5. Storage Tank / Resin Capacity
  // 6. Flow Rate (L/hr)
  // 7. Suitable Water Source & Max TDS / Hardness
  // 8. Smart IoT / Display Connectivity
  // 9. Action Button: "Schedule Free Water Test for this Model"

  modalContent.innerHTML = `
    <div class="compare-table-wrapper">
      <table class="compare-table">
        <thead>
          <tr>
            <th style="min-width: 220px;">Specification</th>
            ${selectedItems.map(p => {
              const brandMeta = getBrandMeta(p.brand, p.category);
              return `
                <td style="text-align:center; min-width: 240px;">
                  <div class="compare-product-header">
                    <span class="card-brand-pill ${brandMeta.badgeClass}" style="margin-bottom:6px;">${brandMeta.icon} ${brandMeta.name}</span>
                    <img src="${p.image}" alt="${p.title}" class="compare-header-img">
                    <div class="compare-header-title">${p.title}</div>
                    <div class="compare-header-price">₹${p.price.toLocaleString('en-IN')}</div>
                    <button class="btn-book-demo-action" style="padding:6px 14px; font-size:0.8rem; margin-top:8px;" onclick="closeCompareModal(); openDemoModal('${p.title}', '${p.brand}');">
                      Schedule Free Water Test
                    </button>
                  </div>
                </td>
              `;
            }).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Brand & Model Name</th>
            ${selectedItems.map(p => `<td><strong>${p.title}</strong><br><span style="color:#64748b; font-size:0.85rem;">${p.specs['Brand'] || p.brand}</span></td>`).join('')}
          </tr>
          <tr>
            <th>Price & Warranty</th>
            ${selectedItems.map(p => `<td><strong style="color:#113c71;">₹${p.price.toLocaleString('en-IN')}</strong> (MRP: ₹${p.mrp.toLocaleString('en-IN')})<br><span style="color:#059669; font-weight:700; font-size:0.85rem;">${p.specs['Warranty'] || '1 Year Warranty'}</span></td>`).join('')}
          </tr>
          <tr>
            <th>Purification / Softening Technology</th>
            ${selectedItems.map(p => `<td>${p.specs['Purification Technology'] || p.techSubtitle}</td>`).join('')}
          </tr>
          <tr>
            <th>Mineral Infusion (Copper / Zinc / Alkaline)</th>
            ${selectedItems.map(p => `<td>${p.specs['Mineral Tech'] || 'Multi-Mineral Balance'}</td>`).join('')}
          </tr>
          <tr>
            <th>Storage Tank / Resin Capacity</th>
            ${selectedItems.map(p => `<td>${p.specs['Storage Tank'] || 'Standard'}</td>`).join('')}
          </tr>
          <tr>
            <th>Flow Rate (L/hr)</th>
            ${selectedItems.map(p => `<td>${p.specs['Production Rate'] || 'Standard Flow'}</td>`).join('')}
          </tr>
          <tr>
            <th>Suitable Water Source & Max TDS / Hardness</th>
            ${selectedItems.map(p => `<td>${p.specs['Suitable For'] || 'Borewell & Corporation Water'}</td>`).join('')}
          </tr>
          <tr>
            <th>Smart IoT / Display Connectivity</th>
            ${selectedItems.map(p => `<td>${p.specs['IoT / Connectivity'] || 'LED Operational Display'}</td>`).join('')}
          </tr>
          <tr>
            <th>Schedule Consultation</th>
            ${selectedItems.map(p => `
              <td style="text-align:center; padding:16px;">
                <button class="btn-submit-demo" style="width:100%; font-size:0.85rem; padding:10px;" onclick="closeCompareModal(); openDemoModal('${p.title}', '${p.brand}');">
                  Schedule Free Water Test for this Model
                </button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('compare-modal').classList.add('active');
}

function closeCompareModal() {
  const modal = document.getElementById('compare-modal');
  if (modal) modal.classList.remove('active');
}

// ============================================================================
// 8. PRODUCT SPECIFICATIONS MODAL
// ============================================================================
function openSpecsModal(productId) {
  const product = sampleProducts.find(p => p.id === productId);
  if (!product) return;

  const brandMeta = getBrandMeta(product.brand, product.category);
  const titleEl = document.getElementById('specs-title');
  if (titleEl) titleEl.textContent = product.title;

  const specsRows = Object.entries(product.specs || {}).map(([key, val]) => `
    <div style="display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #f1f5f9; font-size:0.92rem;">
      <strong style="color:#475569; width:45%;">${key}:</strong>
      <span style="color:#0f172a; width:55%; text-align:right; font-weight:600;">${val}</span>
    </div>
  `).join('');

  const contentEl = document.getElementById('specs-content');
  if (contentEl) {
    contentEl.innerHTML = `
      <div style="display:flex; gap:24px; align-items:center; margin-bottom:24px; padding-bottom:18px; border-bottom:1px solid #e2e8f0;">
        <img src="${product.image}" alt="${product.title}" style="height:120px; width:120px; object-fit:contain; border-radius:8px; background:#f8fafc; padding:8px;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
            <span class="card-brand-pill ${brandMeta.badgeClass}">${brandMeta.icon} ${brandMeta.name}</span>
            <span style="font-size:0.75rem; font-weight:800; color:#e11d48; text-transform:uppercase;">${product.badge}</span>
          </div>
          <h4 style="font-size:1.35rem; font-weight:800; color:#113c71; margin-bottom:6px;">${product.title}</h4>
          <div style="font-size:1.3rem; font-weight:900; color:#0f172a;">
            ₹${product.price.toLocaleString('en-IN')} 
            <span style="font-size:0.9rem; color:#94a3b8; text-decoration:line-through; font-weight:500;">₹${product.mrp.toLocaleString('en-IN')}</span>
            <span style="font-size:0.85rem; color:#16a34a; font-weight:800; background:#dcfce7; padding:2px 8px; border-radius:4px; margin-left:8px;">${product.discount}</span>
          </div>
        </div>
      </div>
      <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:12px; color:#1e293b;">Verified Technical Specifications</h4>
      <div style="margin-bottom:24px;">${specsRows}</div>
      <button class="btn-submit-demo" onclick="closeSpecsModal(); openDemoModal('${product.title}', '${product.brand}');">
        Book Free Doorstep Water Quality & TDS Test
      </button>
    `;
  }

  const modal = document.getElementById('specs-modal');
  if (modal) modal.classList.add('active');
}

function closeSpecsModal() {
  const modal = document.getElementById('specs-modal');
  if (modal) modal.classList.remove('active');
}

// ============================================================================
// 9. DOORSTEP WATER QUALITY TEST & CONSULTATION (SECTION 6)
// ============================================================================

// Modal consultation trigger
function openDemoModal(productName, brandKey) {
  const prodInput = document.getElementById('demo-selected-product');
  if (prodInput) prodInput.value = productName || 'Multi-Brand Water System';

  const brandSelect = document.getElementById('modal-brand-select');
  if (brandSelect && brandKey) {
    if (brandKey === 'kent') brandSelect.value = 'KENT RO';
    else if (brandKey === 'olivar') brandSelect.value = 'OLIVAR International';
    else if (brandKey === 'nile') brandSelect.value = 'NILE Series';
    else if (brandKey === 'softener') brandSelect.value = 'Water Softeners';
  }

  const modal = document.getElementById('demo-modal');
  if (modal) modal.classList.add('active');
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) modal.classList.remove('active');
}

// Modal Form Submit Handler
function handleModalDemoSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('modal-submit-btn');
  const submitText = document.getElementById('modal-submit-text');
  const name = document.getElementById('modal-full-name').value;
  const address = document.getElementById('modal-address').value;

  submitBtn.disabled = true;
  submitText.innerHTML = `<span class="spinner-icon"></span> Booking Free Water Test...`;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitText.innerHTML = `Book Free Water TDS Test`;
    closeDemoModal();
    showToast(`✓ Water Test Request Received! Thank you ${name}. Our technician will bring digital TDS meters and sample units to ${address} shortly.`);
  }, 900);
}

// On-Page Form Submit Handler (matches Section 6)
function handleOnPageDemoSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById('btn-submit-demo');
  const btnText = document.getElementById('btn-submit-text');
  const name = document.getElementById('demo-full-name').value;
  const address = document.getElementById('demo-address').value;

  btn.disabled = true;
  btnText.innerHTML = `<span class="spinner-icon"></span> Processing Water Test Request...`;

  setTimeout(() => {
    btn.disabled = false;
    btnText.innerHTML = `Book Free Doorstep Water Test`;
    const form = document.getElementById('book-free-demo-form');
    if (form) form.reset();
    showToast(`✓ Water Test Request Received! Thank you ${name}. Our technician will bring digital TDS meters and sample units to ${address} shortly.`);
  }, 900);
}

// ============================================================================
// 10. EDUCATIONAL BLOG MODAL
// ============================================================================
const blogArticles = {
  1: {
    title: 'Understanding Water TDS: What is Safe for Your Family in Erode?',
    category: 'WATER QUALITY',
    date: 'October 2026 • 4 min read',
    content: `
      <p>Total Dissolved Solids (TDS) refers to the combined content of all inorganic and organic substances contained in water in molecular, ionized, or micro-granular suspended form.</p>
      <h4>Borewell TDS in Erode & Western Tamil Nadu</h4>
      <p>In locations across Erode such as Thindal, Perundurai, Modakkurichi, and Bhavani, deep borewell water regularly reaches TDS levels between 900 ppm and 2,200 ppm. At these concentrations, water tastes brackish, forms persistent mineral scales in plumbing, and causes long-term digestive strain.</p>
      <h4>Ideal Drinking Water TDS Standards:</h4>
      <ul>
        <li><strong>Under 300 ppm:</strong> Excellent drinking water purity.</li>
        <li><strong>300 - 600 ppm:</strong> Good and acceptable.</li>
        <li><strong>600 - 900 ppm:</strong> Fair; multi-stage filtration advised.</li>
        <li><strong>900 - 2,000+ ppm:</strong> Unacceptable; requires multi-stage Reverse Osmosis (RO) with TDS Controller.</li>
      </ul>
      <h4>Multi-Brand Purification Solutions at Best Water Systems</h4>
      <p>Whether you choose Kent Mineral RO™, Olivar Smart WiFi RO with Copper-Zinc, or NILE Borewell Tough, our team tests your water source and recommends the exact system configured for your home.</p>
    `
  },
  2: {
    title: 'The Science of Alkaline & Copper Infusion: Benefits of pH 8.0 – 9.5 & Zinc',
    category: 'HEALTH & WELLNESS',
    date: 'September 2026 • 5 min read',
    content: `
      <p>Human bodily fluids maintain a fine-tuned pH balance. Modern urban lifestyles with processed foods, stress, and caffeine often create acidic metabolic waste.</p>
      <h4>Why Choose Alkaline & Active Copper Systems?</h4>
      <p>Our Oliver One S1, Oliver Volcano, and Nile Era Advance series elevate purified water pH between 8.0 and 9.5 while infusing essential copper and zinc ions.</p>
      <h4>Key Health Advantages:</h4>
      <ul>
        <li><strong>Acidity Reduction:</strong> Helps soothe acid reflux and gastric symptoms.</li>
        <li><strong>Antioxidant Properties:</strong> Neutralizes reactive oxygen free radicals.</li>
        <li><strong>Zinc & Copper Immunity:</strong> Supports natural cellular defense and energy metabolism.</li>
      </ul>
    `
  },
  3: {
    title: 'Why Hard Water Causes Hairfall & Scales Geysers: The Autosoft Solution',
    category: 'HOME CARE',
    date: 'August 2026 • 4 min read',
    content: `
      <p>Hard water is water rich in dissolved Calcium and Magnesium minerals. When hard water touches soaps or heated heating coils, aggressive mineral reactions occur.</p>
      <h4>Destructive Effects of Hard Borewell Water:</h4>
      <ul>
        <li><strong>Severe Hair Fall:</strong> Hard salts curdle with bath shampoos, clogging follicles and weakening roots.</li>
        <li><strong>Geyser & Solar Burnout:</strong> Hard scale forms insulating crusts on heating rods, hiking electricity bills by 30% and causing premature failure.</li>
        <li><strong>Limescale on Taps & Tiles:</strong> White staining destroys bathroom aesthetic and chokes fixtures.</li>
      </ul>
      <h4>The KENT Autosoft Ion-Exchange Solution:</h4>
      <p>KENT Autosoft automatically exchanges hardness minerals with soft sodium ions using food-grade ion exchange resin. With automated microprocessor regeneration, your entire home gets continuous soft water without manual effort.</p>
    `
  },
  4: {
    title: 'Zero Water Wastage & Smart IoT: The Future of Drinking Water',
    category: 'SUSTAINABILITY',
    date: 'July 2026 • 3 min read',
    content: `
      <p>Typical domestic RO purifiers discharge 65% to 75% of inlet water into the kitchen sink drain. For water-conscious families, this waste is a serious concern.</p>
      <h4>Next-Gen Water Conservation:</h4>
      <p>With Kent Zero Water Wastage systems and Olivar IoT Smart series, you can monitor purifier health on your smartphone while recirculating water to overhead storage tanks.</p>
      <h4>Family Water Conservation Impact:</h4>
      <p>A family of 4 saves more than <strong>20,000 litres of clean potable water every single year</strong> with high-recovery water systems.</p>
    `
  }
};

function openBlogModal(blogId) {
  const article = blogArticles[blogId];
  if (!article) return;
  const modal = document.getElementById('blog-modal');
  const titleEl = document.getElementById('blog-modal-title');
  const bodyEl = document.getElementById('blog-modal-body');
  if (titleEl) titleEl.textContent = article.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px; font-size:0.825rem; color:#64748b;">
        <span style="background:#e0f2fe; color:#0369a1; padding:3px 10px; border-radius:12px; font-weight:800; font-size:0.75rem;">${article.category}</span>
        <span>${article.date}</span>
      </div>
      <div class="blog-article-content">
        ${article.content}
      </div>
      <div style="margin-top:24px; padding-top:16px; border-top:1px solid #f1f5f9; text-align:right;">
        <button class="btn-submit-demo" style="width:auto; padding:10px 22px; display:inline-block;" onclick="closeBlogModal(); openDemoModal('Consultation from Article');">
          Book Free Doorstep Water Test
        </button>
      </div>
    `;
  }
  if (modal) modal.classList.add('active');
}

function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  if (modal) modal.classList.remove('active');
}

// ============================================================================
// 11. MOBILE DRAWER NAVIGATION & ACCORDIONS
// ============================================================================
function toggleMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  if (drawer && overlay) {
    const isActive = drawer.classList.contains('active');
    drawer.classList.toggle('active', !isActive);
    overlay.classList.toggle('active', !isActive);
    document.body.style.overflow = isActive ? '' : 'hidden';
  }
}

function toggleMobileAccordion(el) {
  const parent = el.closest('.drawer-accordion-item');
  if (!parent) return;
  parent.classList.toggle('open');
}

// ============================================================================
// 12. TOAST NOTIFICATION UTILITY
// ============================================================================
function showToast(message) {
  const existing = document.querySelector('.toast-notice');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// Close modals when clicking backdrop overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});

// ============================================================================
// 13. URL PARAMETERS PARSING & INITIALIZATION
// ============================================================================
function initFromUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const brandParam = params.get('brand');
  const catParam = params.get('category');
  const subParam = params.get('sub');

  if (catParam === 'water-softener') {
    currentCategory = 'water-softener';
    currentBrand = 'softener';
    brandTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-brand') === 'softener');
    });
    categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'water-softener');
    });
  } else if (brandParam) {
    currentBrand = brandParam;
    currentCategory = 'water-purifier';
    brandTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-brand') === brandParam);
    });
    categoryTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === 'water-purifier');
    });
  }

  if (subParam) {
    currentSubcategory = subParam;
    subcatPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-sub') === subParam);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFromUrlParams();
  renderProducts();
  updateCompareTrayUI();
});
