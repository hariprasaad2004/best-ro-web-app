# Story 02: Products Catalog REST API
**ID:** `STORY-02`  
**Priority:** `P0 (Backend Core)`  
**Scope:** Build and test public and admin product REST API endpoints  

---

## 1. Description & Goal
Implement Express REST API routes for the product catalog supporting multi-brand query filters (`brand`, `category`), individual model lookup, and admin CRUD (Create, Update, Delete) for price changes and festive offers.

---

## 2. Endpoints to Implement (`backend/routes/productRoutes.js`)
- `GET /api/products` — Returns all products. Supports query parameters:
  - `?brand=kent` (Returns 7 Kent models)
  - `?brand=olivar` (Returns 4 Oliver models)
  - `?brand=nile` (Returns 3 Nile models)
  - `?category=water-softener` (Returns 6 Softener models)
- `GET /api/products/:id` — Returns single product with full specs matrix.
- `POST /api/products` — Admin route: Adds a new model with specifications and images.
- `PUT /api/products/:id` — Admin route: Updates pricing, MRP, stock status, and the `offer` object.
- `DELETE /api/products/:id` — Admin route: Removes or archives a product.

---

## 3. Verification Test Protocol
Execute terminal verification using PowerShell:
```powershell
# 1. Fetch all 20 products
Invoke-RestMethod -Uri "http://localhost:5000/api/products"

# 2. Test brand filter for Oliver
Invoke-RestMethod -Uri "http://localhost:5000/api/products?brand=olivar"

# 3. Test brand filter for Nile
Invoke-RestMethod -Uri "http://localhost:5000/api/products?brand=nile"
```

### Acceptance Criteria:
- HTTP Status `200 OK`.
- Oliver filter returns exactly 4 items (`Oliver One S1`, `Volcano`, `Storm`, `Cyclone`).
- Nile filter returns exactly 3 items (`Nile Era Advance`, `Aqua Innovica`, `Aqua 2090`).
