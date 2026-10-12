# Best Water Systems — Agile User Stories & Requirements

This document outlines the core User Stories, User Personas, Acceptance Criteria (Given/When/Then), and Technical Mappings for the **Best Water Systems** web application (Kent RO Authorized Partner Platform).

---

## 👥 User Personas

1. **Priya (Homeowner in Erode):**
   - *Goal:* Needs a reliable water purifier for high TDS borewell water (1200 ppm) with mineral retention.
   - *Pain Point:* Confused about RO vs UV vs Alkaline technology and whether water will taste bitter.

2. **Karthik (Villa Owner / Builder in Perundurai):**
   - *Goal:* Needs a central water softener for 4 bathrooms to prevent salt deposits on expensive chrome faucets, geysers, and eliminate hairfall.
   - *Pain Point:* Doesn't want manual salt-regeneration hassle; needs automatic whole-house softening.

3. **Murugesan (Service Customer):**
   - *Goal:* Existing customer needing filter replacement, AMC renewal, or same-day technician visit.
   - *Pain Point:* Hard to reach call centers; prefers instant WhatsApp / direct call to local Erode showroom.

---

## 📋 Epic 1: Product Discovery & Interactive Catalog

### Story 1.1: Browse by Primary Categories
- **As a** prospective customer,
- **I want to** filter between Water Purifiers and Water Softeners with one click,
- **So that** I only see products that fit my specific water treatment needs.
- **Acceptance Criteria:**
  - **Given** the user lands on the product catalog,
  - **When** they click the "Water Purifiers" tab,
  - **Then** only RO, UV, Alkaline, and Copper purifiers are displayed, and softener products are hidden.
  - **And** the product count updates dynamically.

### Story 1.2: Fine-Grained Subcategory Filtering
- **As a** health-conscious buyer,
- **I want to** filter by specific technologies (e.g., Mineral RO™, Alkaline RO, Whole House Autosoft),
- **So that** I can compare specialized health features.
- **Acceptance Criteria:**
  - **Given** the "Water Purifiers" category is active,
  - **When** the user clicks the "Alkaline RO" pill,
  - **Then** only models with alkaline remineralization (pH 8.0–9.5) are visible.

### Story 1.3: Real Photographic Product Cards
- **As a** buyer,
- **I want to** view high-resolution photographic images of the actual purifier / softener,
- **So that** I know exactly how it looks before installing it in my kitchen or utility area.
- **Acceptance Criteria:**
  - **Given** any product card in the grid,
  - **When** the page renders,
  - **Then** the card displays a realistic product photo (`.webp`), verified rating, review count, discount tag, and key feature badges.

---

## 📋 Epic 2: Technical Specifications & Product Inspection

### Story 2.1: View Detailed Technical Specifications Modal
- **As a** technical buyer evaluating water parameters,
- **I want to** view a comprehensive specifications modal without leaving the catalog,
- **So that** I can review purification stages, storage capacity, flow rate, and suitable inlet TDS levels.
- **Acceptance Criteria:**
  - **Given** a product card,
  - **When** the user clicks "Specs",
  - **Then** an accessible modal overlay appears displaying technical specifications (Technology, Storage, Flow Rate, Dimensions, Warranty).
  - **And** clicking outside the modal or pressing "✕" smoothly closes it.

---

## 📋 Epic 3: Free In-Home Demo Booking & Lead Capture

### Story 3.1: 1-Click Free Home Demo Request
- **As a** homeowner considering a water purifier,
- **I want to** schedule a 100% free home demo with digital TDS testing,
- **So that** a certified technician can test my tap water live at my residence.
- **Acceptance Criteria:**
  - **Given** any product card or sticky sidebar button,
  - **When** the user clicks "Book Demo",
  - **Then** a modal opens with the selected product pre-filled.
  - **When** the user enters Name, WhatsApp Number, and Address in Erode/Tamil Nadu and clicks "Confirm",
  - **Then** the lead is registered in MongoDB with a success confirmation toast.

### Story 3.2: Right Edge Floating Action Stack
- **As a** browsing user,
- **I want to** have persistent access to "Book a Demo", WhatsApp chat, and Customer Helpline regardless of scroll depth,
- **So that** I can contact an executive the moment I decide to inquire.
- **Acceptance Criteria:**
  - **Given** the user scrolls down through catalog or advisor sections,
  - **Then** the vertical "Book a Demo" pill, WhatsApp green button, and Agent avatar remain fixed at `right: 0; top: 50%`.

---

## 📋 Epic 4: Brand Identity & Mobile Responsiveness

### Story 4.1: Official Best Water Systems BPK Logo Integration
- **As the** business owner,
- **I want** our official transparent BPK water droplet logo displayed in the header with corporate styling,
- **So that** customers clearly identify our brand while recognizing our authorized Kent RO partnership.
- **Acceptance Criteria:**
  - **Given** the desktop, tablet, or mobile viewport,
  - **Then** the header displays the BPK logo in a frosted glass badge with "BEST WATER SYSTEMS" and "Pure Water • Better Life".
  - **And** the logo and navigation links never overlap on any screen resolution.

### Story 4.2: Mobile Slide-Out Drawer Navigation
- **As a** smartphone user,
- **I want to** open a smooth slide-out drawer menu,
- **So that** all categories, service numbers, and store hours are easily navigable with one hand.
- **Acceptance Criteria:**
  - **Given** viewport width `<= 1180px`,
  - **When** the user taps the hamburger icon (☰),
  - **Then** the side drawer slides in from the left with dark backdrop blur.

---

## 📋 Epic 5: Kent RO Reference Functionality Parity

### Story 5.1: Navigation Bar with Mega-Menu Hover Dropdowns
- **As a** shopper exploring products,
- **I want to** hover over "Water Purifiers" or "Water Softeners" in the main navigation,
- **So that** I instantly see an organized 2-column mega-menu displaying categorized sub-technologies on the left and a featured flagship spotlight card on the right.
- **Acceptance Criteria:**
  - **Given** the desktop navigation bar,
  - **When** the user hovers over "Water Purifiers",
  - **Then** the mega-menu smoothly drops down with Mineral RO™, Alkaline RO, IoT Digital Display, Active Copper, Under-Counter options, and the Kent Grand Plus spotlight card with live pricing and direct specs link.
  - **And** mouse movement between the nav link and dropdown never loses hover state (bridged by `::before` pseudo-element).

### Story 5.2: Side-by-Side Product Comparison Drawer & Matrix Modal
- **As a** cautious buyer evaluating between 2 to 4 purifiers/softeners,
- **I want to** check the "Compare" checkbox on product cards and view them in a comparison matrix,
- **So that** I can compare purification technologies, tank capacity, flow rate, suitable inlet TDS, and warranties side-by-side.
- **Acceptance Criteria:**
  - **Given** any product card in the grid,
  - **When** the user checks "Compare",
  - **Then** the floating bottom tray slides up showing thumbnails of selected models with removal buttons.
  - **When** the user clicks "Compare Now",
  - **Then** an expansive modal opens with a full comparative matrix table.

### Story 5.3: Dedicated On-Page "Book Free Demo" Section (Kent-Exact Form)
- **As a** visitor interested in home water testing,
- **I want to** submit a free home demo request directly from the homepage form section,
- **So that** an authorized technician can test my tap water quality at my doorstep.
- **Acceptance Criteria:**
  - **Given** the on-page "Book Free Demo" section,
  - **When** the user fills First Name, Last Name, 10-digit Mobile, City (Erode), 6-digit Pin Code, and selects an interested category,
  - **Then** clicking "Book Free Demo Now" triggers a loading spinner animation, simulates the lead capture, resets the form, and displays a confirmation toast notification.

