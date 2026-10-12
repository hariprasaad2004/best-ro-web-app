# Story 04: React Client Setup & Logo-Driven Navbar
**ID:** `STORY-04`  
**Priority:** `P1 (Frontend Core)`  
**Scope:** Initialize Vite React client, import design tokens, and build the multi-brand navbar with official logos  

---

## 1. Description & Goal
Initialize the React frontend in `frontend-web/` using Vite. Import the verified CSS design tokens and fonts from the mockup. Build the sticky `Navbar.jsx` component featuring the 3 official logos (`logo-kent.png`, `logo-olivar.png`, `logo-nile.png`) and the mega-menu dropdown with links for each brand.

---

## 2. Dependencies to Install
Run in `frontend-web/`:
```bash
npm install react-router-dom lucide-react
```

---

## 3. Component Architecture
- `src/components/Navbar.jsx`
  - Best Water Systems brand lockup.
  - "Water Purifiers" Mega-Menu split into 3 columns:
    • KENT RO (logo-kent.png)
    • OLIVAR INTERNATIONAL (logo-olivar.png)
    • NILE (logo-nile.png)
  - "Water Softeners & Filters" dropdown (Autosoft, Bathroom, Appliance, Iron & Sand).
  - Floating sticky action stack: "Free Consultation" pill, WhatsApp icon (`098427 25958`), and Agent button.

---

## 4. Verification Test Protocol
```bash
npm run dev
```
Open `http://localhost:5173`:
- Hover over "Water Purifiers" ➔ Verify all 3 brand columns render with correct logos and zero layout shift.
- Mobile test (≤1180px) ➔ Verify hamburger button toggles slide-out drawer with collapsible brand accordions.
