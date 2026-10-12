# Story 05: Multi-Brand Catalog & Filter Engine
**ID:** `STORY-05`  
**Priority:** `P1 (Catalog Grid)`  
**Scope:** Dynamic 20-product cards connected to API with brand tabs and technology pills  

---

## 1. Description & Goal
Build the `ProductGrid.jsx` and `ProductCard.jsx` components in React. Fetch products asynchronously from `GET /api/products`, implement two-tier filtering (Brand tabs + Technology pills), display dynamic discount badges when offers are active, and provide quick checkboxes for side-by-side comparison.

---

## 2. Key Component Features
- **Brand Tabs:** `[ All (20) | 🔷 KENT (7) | 🌿 OLIVAR (4) | 💧 NILE (3) | 🚿 Softeners (6) ]`
- **Product Card (`ProductCard.jsx`):**
  - Displays primary photo, title, brand tag, capacity, and technology subtitle.
  - Dynamically renders active offer badge (e.g. `FESTIVE ₹2,000 OFF`) and calculates sale price vs MRP.
  - "View Specs" button and "Add to Compare" checkbox.

---

## 3. Verification Test Protocol
- Filter by OLIVAR ➔ Exactly 4 models render (`Oliver One S1`, `Volcano`, `Storm`, `Cyclone`).
- Filter by Softeners ➔ Exactly 6 models render.
- Search input ➔ Typing "WiFi" isolates `Oliver One S1` in real time.
