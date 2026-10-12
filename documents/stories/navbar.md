Act as a Senior Full-Stack Developer and UI/UX Designer. Refactor the entire "Best Water Systems" web platform (including index.html, water-purifiers.html, style.css, and app.js) into an enterprise Multi-Brand Water Purifier and Water Softener Superstore.

---

### 1. Business Positioning & Brand Identity
- Business Name: **Best Water Systems**
- Subtitle / Positioning: **Multi-Brand Water Purification & Softener Specialists (Erode & Western Tamil Nadu)**
- Core Message: We are an authorized multi-brand showroom & service center offering:
  1. **KENT RO** (House of Purity — Flagship Official Partner)
  2. **OLIVAR INTERNATIONAL** (Smart WiFi IoT & Multi-Mineral Infusion)
  3. **NILE** (The Name Inspires Trust — High-Durability Borewell Specialists)
  4. **Whole-House Water Softeners & Media Filtration** (Autosoft, Iron & Sand Filters)
- Primary Service: **Free Doorstep Water TDS & Hardness Testing, Consultation, and Same-Day Installation** (No physical home demos; focus on doorstep water quality tests and expert sales).

---

### 2. Header Navigation & Brand-Driven Mega Menu

#### A. Main Navigation Bar:
1. **Brand Lockup (Left):** Best Water Systems logo + "Pure Water • Better Life" tagline.
2. **Water Purifiers (Mega Menu Dropdown on Hover):**
   Full-width elevated card split into 3 distinct brand columns with official logos:
   - **Column 1: KENT RO**
     • Logo: `images/logo-kent.png`
     • Subtitle: "Patented Mineral RO™ • Zero Water Wastage"
     • Featured Links:
       - KENT Grand Plus Mineral RO™
       - KENT Grand IoT & Sapphire IoT (Digital Display)
       - KENT Pearl IoT (11L Detachable Tank)
       - KENT Elegant (Compact Wall Mount)
       - KENT Undersink (Sterling IoT & Excel Plus)
     • CTA: `View All KENT Purifiers (7 Models) →` (`water-purifiers.html?brand=kent`)
   - **Column 2: OLIVAR INTERNATIONAL**
     • Logo: `images/logo-olivar.png`
     • Subtitle: "Smart WiFi IoT Series • Copper, Alkaline & Zinc"
     • Featured Links:
       - Oliver One S1 (Smart WiFi App • 3 Colors)
       - Oliver Volcano (18 LPH • Smart LED Bar)
       - Oliver Storm (14L Jumbo Tank • 20 LPH)
       - Oliver Cyclone (12L High Capacity)
     • CTA: `View All Oliver Models (4 Models) →` (`water-purifiers.html?brand=olivar`)
   - **Column 3: NILE**
     • Logo: `images/logo-nile.png`
     • Subtitle: "The Name Inspires Trust • Heavy-Duty Borewell"
     • Featured Links:
       - Nile Era Advance (7-Stage Bio-Mineral)
       - Nile Aqua Innovica (Heavy Copper Motor)
       - Nile Aqua 2090 (Value Workhorse)
     • CTA: `View All Nile Models (3 Models) →` (`water-purifiers.html?brand=nile`)

3. **Water Softeners & Filters (Dropdown on Hover):**
   - Whole-House Systems: Autosoft 25L & Autosoft 40L Villa
   - Point-of-Use Softeners: Bathroom Shower Softener & Washing Machine Softener
   - Whole-House Filtration Media: Multi-Media Iron Removal & High-Flow Sand Filter 5000 LPH
   • CTA: `Explore All Softeners & Media (6 Models) →` (`water-purifiers.html?category=water-softener`)

4. **Shop by Brand (Dropdown / Quick-Select):** Direct shortcuts to KENT, OLIVAR, NILE, and SOFTENERS.
5. **Free Consultation (CTA Button):** Links smoothly to `#consultation`.
6. **Utility Controls (Right):** Search pill, Phone hotline (`098427 25958`), WhatsApp link, and Compare / Cart badge.

---

### 3. Complete 20-Product Catalog Schema (`app.js`)
Replace the `sampleProducts` array in `app.js` with the full 20-product inventory matching the official Excel spreadsheet:

#### Brand: OLIVAR INTERNATIONAL (4 Models)
1. **Oliver One S1**
   - Category: `water-purifier` | Subcategory: `Digital Display RO` | Brand: `olivar`
   - Tech: `6-Stage RO + UV + Active Copper + Alkaline + Zinc`
   - Tank: `10 Litres` | Flow: `12 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹22,999` (MRP: ₹25,999)
   - Features: Built-in WiFi Smart App, Circular Smart LED Dial, Panther Black / Cosmic Orange / Stealth Grey finishes.
   - Badge: `SMART IOT`

2. **Oliver Volcano**
   - Category: `water-purifier` | Subcategory: `Alkaline RO` | Brand: `olivar`
   - Tech: `6-Stage RO + UV + TDS + Alkaline + Copper + Zinc`
   - Tank: `10 Litres` | Flow: `18 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹21,499` (MRP: ₹24,500)
   - Features: Smart Vertical LED Display Bar, High-Recovery 18 LPH Booster, Rose-Gold Faucet.
   - Badge: `HIGH RECOVERY`

3. **Oliver Storm**
   - Category: `water-purifier` | Subcategory: `Alkaline RO` | Brand: `olivar`
   - Tech: `6-Stage RO + UV + TDS + Alkaline + Copper + Zinc`
   - Tank: `14 Litres Jumbo` | Flow: `20 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹22,499` (MRP: ₹26,000)
   - Features: Jumbo 14L storage capacity, High-output commercial-grade pump, Black & White options.
   - Badge: `JUMBO CAPACITY`

4. **Oliver Cyclone**
   - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `olivar`
   - Tech: `Multi-Stage RO + UV + Mineral Cartridge`
   - Tank: `12 Litres` | Flow: `12 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹19,499` (MRP: ₹22,500)
   - Features: Dual-Tone Contrast Designer Cabinet, Front Water Level Window.
   - Badge: `POPULAR`

#### Brand: KENT RO — WALL-MOUNT (5 Models)
5. **KENT Grand Plus Mineral RO™**
   - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `kent`
   - Tech: `RO + UV + UF + TDS Control + In-Tank UV LED`
   - Tank: `9 Litres` | Flow: `20 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹18,499` (MRP: ₹21,500)
   - Features: India's #1 Selling Purifier, Zero Water Wastage Technology, In-Tank UV Disinfection.
   - Badge: `BESTSELLER`

6. **KENT Grand IoT**
   - Category: `water-purifier` | Subcategory: `Digital Display RO` | Brand: `kent`
   - Tech: `RO + UV + UF + Alkaline + Copper + In-Tank UV`
   - Tank: `8 Litres` | Flow: `20 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹21,500` (MRP: ₹24,000)
   - Features: WiFi IoT with Kent CamEye App, Automated Service Request Alerts, Digital Purity Log.
   - Badge: `SMART IOT`

7. **KENT Pearl IoT**
   - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `kent`
   - Tech: `RO + UV + UF + Alkaline + Copper + IoT`
   - Tank: `11 Litres Detachable` | Flow: `20 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹21,000` (MRP: ₹23,500)
   - Features: 100% Detachable & Hand-Washable 11L Tank, IoT Connectivity.
   - Badge: `HYGIENIC TANK`

8. **KENT Sapphire IoT**
   - Category: `water-purifier` | Subcategory: `Digital Display RO` | Brand: `kent`
   - Tech: `RO + UV + UF + Alkaline + Copper + TDS Control`
   - Tank: `8 Litres` | Flow: `20 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹21,999` (MRP: ₹25,000)
   - Features: Interactive Real-Time Digital Purity Screen, TDS Display, Filter Life Alarm.
   - Badge: `PREMIUM`

9. **KENT Elegant**
   - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `kent`
   - Tech: `Mineral RO™ (RO + UF + TDS Control)`
   - Tank: `8 Litres` | Flow: `15 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹14,500` (MRP: ₹16,500)
   - Features: Compact Wall-Mount Chassis, Patented Mineral Retention, Fully Automatic.
   - Badge: `VALUE PICK`

#### Brand: KENT RO — UNDERSINK (2 Models)
10. **KENT Sterling IoT**
    - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `kent`
    - Tech: `RO + UV + UF + TDS Control + Alkaline + Copper + IoT`
    - Tank: `6 Litres Hydrostatic` | Flow: `20 L/hr` | Price: `₹23,500` (MRP: ₹26,500)
    - Features: Under-the-counter concealed mount, Pressurized tank supplies water without electricity, Chrome swan-neck tap.
    - Badge: `MODULAR KITCHEN`

11. **KENT Excel Plus**
    - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `kent`
    - Tech: `RO + UV + UF + TDS Control`
    - Tank: `7 Litres Hydrostatic` | Flow: `15–20 L/hr` | Price: `₹18,500` (MRP: ₹21,000)
    - Features: Split-skid compact design for tighter under-sink cabinets, Stainless faucet.
    - Badge: `UNDER SINK`

#### Brand: NILE (3 Models)
12. **Nile Era Advance**
    - Category: `water-purifier` | Subcategory: `Alkaline RO` | Brand: `nile`
    - Tech: `7-Stage RO + UV + UF + Alkaline + Copper + Zinc`
    - Tank: `10 Litres` | Flow: `12–15 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹9,500` (MRP: ₹12,000)
    - Features: Heavy-duty booster pump, Bio-mineral cartridge, Dual-tone cabinet with LED indicators.
    - Badge: `BEST VALUE`

13. **Nile Aqua Innovica**
    - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `nile`
    - Tech: `7/8-Stage RO + UV + UF + TDS + Copper + Zinc`
    - Tank: `12 Litres` | Flow: `12–15 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹10,500` (MRP: ₹13,500)
    - Features: High-torque copper-wound motor, High-flow membrane, Geometric fascia with chrome tap.
    - Badge: `BOREWELL TOUGH`

14. **Nile Aqua 2090**
    - Category: `water-purifier` | Subcategory: `Mineral RO` | Brand: `nile`
    - Tech: `6/7-Stage RO + UV + UF + Active Copper + Alkaline`
    - Tank: `10 Litres` | Flow: `12–15 L/hr` | Inlet TDS: `Up to 2000 ppm` | Price: `₹8,500` (MRP: ₹11,000)
    - Features: High-durability ABS body, Transparent water reservoir, Lowest annual filter maintenance cost.
    - Badge: `ECONOMY PICK`

#### Category: WATER SOFTENERS & WHOLE-HOUSE FILTERS (6 Models)
15. **KENT Autosoft 25L Whole House**
    - Category: `water-softener` | Subcategory: `Whole House Autosoft` | Brand: `kent`
    - Tech: `Automated Ion-Exchange Softening (Food-Grade Resin 25L)`
    - Tank: `35 kg Brine Storage` | Flow: `2,000 L/hr` | Hardness Limit: `Up to 1,000 ppm` | Price: `₹28,500` (MRP: ₹32,500)
    - Features: Microprocessor-controlled automatic regeneration, Stops severe hair fall & tap scaling, Protects geysers.
    - Badge: `AUTOMATIC`

16. **KENT Autosoft 40L Villa Softener**
    - Category: `water-softener` | Subcategory: `Whole House Autosoft` | Brand: `kent`
    - Tech: `High-Capacity Automated Ion-Exchange (40L Resin)`
    - Tank: `60 kg Brine Tank` | Flow: `3,500 L/hr` | Hardness Limit: `Up to 1,500 ppm` | Price: `₹42,000` (MRP: ₹48,000)
    - Features: Built for 4–8 bathroom luxury villas, duplexes, and commercial properties; High-flow digital multiport valve.
    - Badge: `LUXURY VILLA`

17. **KENT Compact Bathroom Softener**
    - Category: `water-softener` | Subcategory: `Bathroom Softener` | Brand: `kent`
    - Tech: `Point-of-Use Food Grade Ion-Exchange Resin (5.5L)`
    - Flow: `Shower & Geyser Direct Flow` | Hardness Limit: `Up to 800 ppm` | Price: `₹8,499` (MRP: ₹9,999)
    - Features: Compact non-electric unit, Mounted directly before shower or geyser, Eliminates shampoo curdling & skin dryness.
    - Badge: `HAIR & SKIN CARE`

18. **KENT Washing Machine Softener**
    - Category: `water-softener` | Subcategory: `Bathroom Softener` | Brand: `kent`
    - Tech: `Polyphosphate Scale Inhibition Media + Resin`
    - Flow: `Direct 3/4" Washing Machine Inlet Flow` | Price: `₹3,299` (MRP: ₹3,999)
    - Features: Screws directly to 3/4" tap inlet, Protects drum heater coil, Saves 40% detergent, Keeps clothes soft.
    - Badge: `APPLIANCE CARE`

19. **KENT Multi-Media Iron Removal Filter**
    - Category: `water-softener` | Subcategory: `Whole House Autosoft` | Brand: `kent`
    - Tech: `Catalytic Birm & Manganese Dioxide Oxidation Media`
    - Tank: `10x54 Composite FRP Vessel` | Flow: `2,500 L/hr` | Iron Limit: `Up to 5.0 ppm Iron` | Price: `₹24,500` (MRP: ₹27,999)
    - Features: Eliminates yellow/reddish rust stains on sanitaryware, Removes metallic odor from borewell water.
    - Badge: `IRON REMOVAL`

20. **KENT High-Flow Sand & Turbidity Filter (5000 LPH)**
    - Category: `water-softener` | Subcategory: `Whole House Autosoft` | Brand: `kent`
    - Tech: `Multi-Grade Quartz Silica Filtration Media`
    - Tank: `High-Strength FRP Vessel` | Flow: `5,000 L/hr Heavy Flow` | Price: `₹38,000` (MRP: ₹43,000)
    - Features: Extracts suspended silt, sand, and mud; Provides crystal-clear water for villas and apartments.
    - Badge: `WHOLE APARTMENT`

---

### 4. Interactive Brand & Category Filter Engine
Update state management and controls in `app.js`:
- State variables: `currentBrand = 'all'`, `currentCategory = 'all'`, `currentSubcategory = 'all'`.
- **Top Brand Selector Bar:**
  `[ All Brands (20) | 🔷 KENT RO (7) | 🌿 OLIVAR (4) | 💧 NILE (3) | 🚿 Softeners & Media (6) ]`
- **Subcategory / Technology Pills:**
  `[ All Technologies | Mineral RO™ | Alkaline + Zinc | Smart WiFi / IoT | Whole-House Softeners | Bathroom & Appliance ]`
- When any brand button is clicked:
  1. Filter products instantly without reloading the page.
  2. Update the dynamic product count text (`Showing X of 20 products`).
  3. Support direct deep-linking via URL query params (`?brand=kent`, `?brand=olivar`, `?brand=nile`, `?category=water-softener`).

---

### 5. Multi-Brand Side-by-Side Comparison Matrix
Update the comparison modal in `app.js` and `index.html`:
- Allow users to select up to 3 products from any brand to compare simultaneously.
- Comparison Matrix Rows:
  • Brand & Model Name
  • Price & Warranty
  • Purification / Softening Technology
  • Mineral Infusion (Copper / Zinc / Alkaline)
  • Storage Tank / Resin Capacity
  • Flow Rate (L/hr)
  • Suitable Water Source & Max TDS / Hardness
  • Smart IoT / Display Connectivity
  • Action Button: "Schedule Free Water Test for this Model"

---

### 6. Doorstep Water Quality Test & Consultation Form
Refactor the on-page form and popup modal:
- Title: **"Book Free Doorstep Water Quality & TDS Test"**
- Subtitle: *"Our water specialist will test your borewell or tap water TDS and hardness right at your doorstep in Erode & Western TN."*
- Form Fields:
  1. Full Name
  2. WhatsApp Mobile Number
  3. Street Address & Locality (Erode, Perundurai, Thindal, Bhavani, etc.)
  4. Raw Water Source: `[ Deep Borewell | Municipal Tap | Tanker Water | Not Sure ]`
  5. Interested Brand: `[ Help Me Choose Based on TDS Test | KENT RO | OLIVAR International | NILE Series | Water Softeners ]`
- Submission Toast:
  *"✓ Water Test Request Received! Thank you [Name]. Our technician will bring digital TDS meters and sample units to [Address] shortly."*

---

### 7. CSS Styling & Responsive Mobile Navigation (`style.css`)
- Header Brand Accent Bars:
  • Kent Cards: `#1C2F76` (Navy accent)
  • Olivar Cards: `#047857` (Emerald accent)
  • Nile Cards: `#DC2626` (Crimson accent)
  • Softeners: `#0284C7` (Sky Blue accent)
- Mega Menu Container: Max-width 1400px, 3 equal columns, frosted elevation, smooth 0.22s hover transition.
- Brand Logos: Sized cleanly (`height: 38px–44px; object-fit: contain;`).
- Mobile Drawer (≤1180px): Transform the header into a slide-out hamburger navigation drawer with collapsible brand accordions.