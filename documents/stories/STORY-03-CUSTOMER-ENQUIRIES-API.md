# Story 03: Customer Enquiries & Lead Pipeline API
**ID:** `STORY-03`  
**Priority:** `P0 (Business Revenue)`  
**Scope:** Build and test lead capture and management API endpoints  

---

## 1. Description & Goal
Implement REST API endpoints to capture doorstep water test inquiries submitted from the website form, validate customer phone numbers, store records in MongoDB, and provide admin retrieval with status updates.

---

## 2. Endpoints to Implement (`backend/routes/enquiryRoutes.js`)
- `POST /api/enquiries` — Public endpoint:
  - Validates `customerName`, `phone` (10-digit Indian mobile regex `/^[6-9]\d{9}$/`), `area`, `waterSource`, and `interestedBrand`.
  - Saves new record to `Enquiry` collection in MongoDB.
  - Returns `201 Created` with confirmation payload.
- `GET /api/enquiries` — Admin endpoint:
  - Returns all customer inquiries sorted by newest first (`createdAt: -1`).
- `PATCH /api/enquiries/:id/status` — Admin endpoint:
  - Updates lead lifecycle status (`New`, `Contacted`, `Converted`, `Lost`).

---

## 3. Verification Test Protocol
Execute terminal verification using PowerShell:
```powershell
# Submit test enquiry
$body = @{
  customerName = "Karthik Ramanathan"
  phone = "9842725958"
  area = "Perundurai Road, Erode"
  waterSource = "Deep Borewell"
  interestedBrand = "OLIVAR One S1"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/enquiries" -Method Post -Body $body -ContentType "application/json"
```

### Acceptance Criteria:
- HTTP Status `201 Created`.
- Querying `GET /api/enquiries` returns the newly submitted lead.
