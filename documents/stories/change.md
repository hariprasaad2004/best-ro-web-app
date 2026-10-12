Act as a Senior Full-Stack Developer and UI/UX Designer. Refactor the entire "Best Water Systems" web platform (including index.html, water-purifiers.html, style.css, and app.js) from a Kent-exclusive website into a Multi-Brand Water Purifier & Softener Superstore with dedicated brand sections.

### 1. Brand Identity & Business Positioning
- Rebrand the site from "Authorised Kent RO Partner" to:
  "Best Water Systems — Multi-Brand Water Purification & Softener Specialists (Erode & Tamil Nadu)"
- Clearly communicate that we are an authorized multi-brand showroom & service center offering:
  1. KENT RO (Flagship Official Partner)
  2. OLIVAR International (Smart WiFi & IoT Series)
  3. Dolphin Drinking Water Systems (High-Efficiency Everyday RO)
  4. BIS Certified Heavy-Duty Series (Volcano, Cyclone, Storm)

### 2. Navigation & Header Overhaul
1. Replace the single-brand header navigation with a Multi-Brand Architecture:
   - Primary Brand Switcher in Header/Nav:
     • "KENT RO Zone" (Dedicated dropdown: Mineral RO, Alkaline, IoT, Softeners)
     • "OLIVAR International" (Smart S1 WiFi, Cyclone Series)
     • "Dolphin Water Systems" (Dolphin 9L Series)
     • "BIS Certified Range" (Volcano, Cyclone, Storm with Zinc & Copper)
     • "Water Softeners & Filters" (Whole House, Bathroom, Appliance)
2. Add a prominent "Shop by Brand" quick-select bar above the catalog grid with brand logo badges and active indicators.

### 3. Product Catalog & Data Schema Refactoring (app.js)
Update the `sampleProducts` array to add a top-level `brand` attribute (`'kent'`, `'olivar'`, `'dolphin'`, `'bis-series'`) and incorporate the following new models alongside the Kent models:

#### A. Dolphin Series:
- Model: "Dolphin Drinking Water System"
  • Brand: "dolphin" | Category: "water-purifier" | Subcategory: "Standard RO"
  • Tagline: "Your First Line of Health Defense • Bringing Nature Back to Your Glass"
  • Specs: Technology: RO | Inlet TDS: Up to 2000 ppm | Flow Rate: 12 L/hr | Storage Tank: 9 Litres Food-Grade | Indicators: Smart LED Power & Purification
  • Badge: "VALUE PICK"

#### B. OLIVAR International Series:
- Model: "Olivar One S1 Smart WiFi RO"
  • Brand: "olivar" | Category: "water-purifier" | Subcategory: "Digital Display RO"
  • Tagline: "Three Signatures: Panther Black, Cosmic Orange & Stealth Grey"
  • Specs: Technology: RO + UV + Copper + Alkaline + Zinc (Active 6-Stage) | Connectivity: Built-in WiFi Smart App | Inlet TDS: Up to 2000 ppm | Flow: 12 L/hr | Tank: 10 Litres
  • Badge: "SMART IOT"
- Model: "Olivar Cyclone RO"
  • Brand: "olivar" | Category: "water-purifier" | Subcategory: "Mineral RO"
  • Specs: Technology: RO | Inlet TDS: 2000 ppm | Flow: 12 L/hr | Tank: 12 Litres High Capacity
  • Badge: "FAMILY CAPACITY"

#### C. BIS Certified Heavy-Duty Series:
- Model: "Volcano 6-Stage Copper-Alkaline-Zinc"
  • Brand: "bis-series" | Category: "water-purifier" | Subcategory: "Alkaline RO"
  • Price: ₹21,499 | Tank: 10 Litres | Flow: 18 L/hr | Colors: Black, White, Grey | Features: Smart LED Display, 6-Stage Filtration (RO+UV+TDS+ALK+CU+ZN), Wall Mount & Table Top
- Model: "Storm Heavy-Duty 14L RO"
  • Brand: "bis-series" | Category: "water-purifier" | Subcategory: "Alkaline RO"
  • Price: ₹22,499 | Tank: 14 Litres Jumbo Storage | Flow: 20 L/hr High Recovery | Colors: Black, White | Features: Smart LED Display, 6-Stage RO+UV+TDS+ALK+CU+ZN
- Model: "Cyclone BIS Multi-Color RO"
  • Brand: "bis-series" | Category: "water-purifier" | Subcategory: "Alkaline RO"
  • Price: ₹19,499 | Tank: 11 Litres | Flow: 18 L/hr | Colors: Dual-Tone Contrast Series

### 4. Interactive Brand & Category Filtering
- Implement two-tier filtering in app.js:
  1. Tier 1 (Brand Tabs): [ All Brands | 🔷 KENT RO | 🌿 OLIVAR | 🐬 Dolphin | 🛡️ BIS Certified ]
  2. Tier 2 (Technology Pills): [ All Technologies | Mineral RO™ | Alkaline + Zinc | Smart WiFi/IoT | Copper Infusion | Softeners ]
- Ensure clicking any brand tab instantly isolates that brand's products, updates product counts, and dynamically adjusts the subcategory filter options.

### 5. Multi-Brand Comparison Drawer & Specs Modal
- Update the side-by-side comparison matrix to allow comparing models across brands (e.g., compare KENT Grand Plus vs Olivar One S1 vs Volcano).
- Add "Brand", "Mineral Tech (Copper/Zinc/Alkaline)", and "IoT/WiFi Connectivity" rows to the comparison modal.

### 6. Free Doorstep Demo & Water Test Form
- Update the "Book Free Demo" modal and on-page form to include a "Preferred Brand" dropdown:
  [ "Help Me Choose (Free Water TDS Test)", "KENT RO", "OLIVAR International", "Dolphin", "BIS Certified Series" ].
- Tailor confirmation toasts to state:
  "Our multi-brand water specialist will bring test kits and sample units for your selected brand to your doorstep."

Ensure all responsive layouts, mobile drawers, and existing Kent-specific assets remain intact, with the new brand cards styled to the same visual fidelity.