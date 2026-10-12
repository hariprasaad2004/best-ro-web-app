# Story 01: Project Foundation & Database Setup
**ID:** `STORY-01`  
**Priority:** `P0 (Critical Foundation)`  
**Scope:** Backend Root Setup, Dependency Installation, Mongoose Schemas & 20-Product Database Seed  

---

## 1. Description & Goal
Set up the backend server foundation for "Best Water Systems". Install all required Node.js dependencies, configure environment variables (`.env`), create Mongoose schemas for Products and Enquiries supporting the 20 Excel products (with 2–3 images and festive offers), and seed MongoDB Atlas with the complete catalog.

---

## 2. Dependencies to Install
Run in `backend/`:
```bash
npm install express mongoose dotenv cors multer express-session bcryptjs
npm install --save-dev nodemon
```

---

## 3. Files to Create & Modify

### A. `backend/.env`
```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:yourpassword@cluster0.mongodb.net/best_water_systems?retryWrites=true&w=majority
ADMIN_API_TOKEN=bws_erode_secure_token_98427
NODE_ENV=development
```

### B. `backend/models/Product.js`
Must include:
- `id` (String, unique)
- `brand` ('kent' | 'olivar' | 'nile' | 'softener')
- `title` (String)
- `category` ('water-purifier' | 'water-softener')
- `subcategory` (String)
- `mrp` (Number)
- `price` (Number)
- `inStock` (Boolean, default true)
- `offer` object (`isActive`, `offerPrice`, `offerBadge`, `freebiePerk`)
- `images` (Array of Strings for 2–3 photos)
- `specs` object (`technology`, `tankCapacity`, `flowRate`, `maxTds`, `features`)

### C. `backend/models/Enquiry.js`
Must include:
- `customerName` (String)
- `phone` (String, 10-digit Indian mobile format)
- `area` (String, e.g. Erode, Perundurai)
- `waterSource` (Borewell / Tap / Tanker)
- `interestedBrand` (Kent / Olivar / Nile / Softener)
- `status` ('New' | 'Contacted' | 'Converted' | 'Lost')
- `createdAt` (Timestamp)

### D. `backend/scripts/seed.js`
Must seed all **20 products** from the official Excel catalog into MongoDB Atlas.

---

## 4. Verification Test Protocol
Execute the following verification command in the terminal:
```bash
node scripts/seed.js
```

### Acceptance Criteria:
- Terminal output logs: `✓ 20 products seeded successfully into MongoDB Atlas`.
- Querying the database confirms that models across all 4 brands exist with complete specs and image paths.
