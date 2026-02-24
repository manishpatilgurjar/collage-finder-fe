# CollegeWale – API Specification

Base URL (configurable): `https://api.collegewale.com` or `http://localhost:3001/api`

All JSON responses use `Content-Type: application/json`. Use `Accept: application/json` for requests that return JSON.

---

## 1. Colleges

### 1.1 List colleges

Returns a paginated list of colleges. Supports filtering by category, state, and search query.

**Endpoint:** `GET /api/colleges`

**Query parameters:**

| Parameter   | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| `category` | string | No       | Filter by course category (see CourseCategory).  |
| `state`    | string | No       | Filter by Indian state (e.g. "Maharashtra").     |
| `search`   | string | No       | Search in name, location, courses.               |
| `page`     | number | No       | Page number (1-based). Default: 1.              |
| `limit`    | number | No       | Items per page. Default: 12, max: 50.           |

**Example:** `GET /api/colleges?category=Engineering&state=Maharashtra&page=1&limit=12`

**Response:** `200 OK`

```json
{
  "success": true,
  "data": {
    "colleges": [
      {
        "id": "iit-bombay",
        "name": "IIT Bombay",
        "location": "Mumbai, Maharashtra",
        "state": "Maharashtra",
        "category": "Engineering",
        "courses": ["B.Tech", "M.Tech", "MBA"],
        "fee": "₹2.5L/yr",
        "rating": 4.9,
        "badge": "NIRF #1",
        "emoji": "🏛️",
        "nirf": 1,
        "placementRate": 98,
        "avgPackage": "₹18 LPA"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 12,
      "total": 45,
      "totalPages": 4
    }
  }
}
```

**Error:** `500 Internal Server Error`

```json
{
  "success": false,
  "error": "Internal server error message"
}
```

---

### 1.2 Get college by ID (details)

Returns full details for a single college (for the college details page).

**Endpoint:** `GET /api/colleges/:id`

**Path parameters:**

| Parameter | Type   | Required | Description        |
|-----------|--------|----------|--------------------|
| `id`      | string | Yes      | College slug or ID |

**Example:** `GET /api/colleges/iit-bombay`

**Response:** `200 OK`

```json
{
  "success": true,
  "data": {
    "id": "iit-bombay",
    "name": "IIT Bombay",
    "location": "Mumbai, Maharashtra",
    "state": "Maharashtra",
    "category": "Engineering",
    "courses": ["B.Tech", "M.Tech", "MBA", "PhD"],
    "fee": "₹2.5L/yr",
    "rating": 4.9,
    "badge": "NIRF #1",
    "emoji": "🏛️",
    "nirf": 1,
    "placementRate": 98,
    "avgPackage": "₹18 LPA",
    "description": "Indian Institute of Technology Bombay is a leading engineering and technology institute...",
    "highlights": [
      "NIRF Rank #1 in Engineering",
      "Strong industry partnerships",
      "World-class research facilities"
    ],
    "eligibility": "JEE Advanced qualified; minimum percentile as per JoSAA criteria.",
    "facilities": ["Hostel", "Library", "Labs", "Sports", "Placement Cell"],
    "website": "https://www.iitb.ac.in",
    "phone": "+91-22-2572-2545",
    "address": "Powai, Mumbai, Maharashtra 400076"
  }
}
```

**Error:** `404 Not Found`

```json
{
  "success": false,
  "error": "College not found"
}
```

---

## 2. Counselling enquiry

Collects basic student details for free career counselling. Used by the CTA / “Get Expert Guidance” form.

**Endpoint:** `POST /api/counselling-enquiry`

**Request headers:** `Content-Type: application/json`

**Request body:**

| Field           | Type   | Required | Description                          |
|-----------------|--------|----------|--------------------------------------|
| `name`          | string | Yes      | Student full name                    |
| `email`         | string | Yes      | Valid email address                  |
| `phone`         | string | Yes      | 10-digit Indian mobile number        |
| `courseInterest`| string | No       | e.g. "Engineering", "MBA"            |
| `currentStatus` | string | No       | e.g. "Class 12", "Graduate", "Working" |
| `message`       | string | No       | Optional message or question         |

**Example request:**

```json
{
  "name": "Rahul Sharma",
  "email": "rahul.sharma@example.com",
  "phone": "9876543210",
  "courseInterest": "Engineering",
  "currentStatus": "Class 12",
  "message": "Interested in CSE and AI/ML courses."
}
```

**Response:** `201 Created`

```json
{
  "success": true,
  "data": {
    "id": "enq_abc123",
    "message": "We'll call you within 24 hours for free counselling."
  }
}
```

**Validation errors:** `400 Bad Request`

```json
{
  "success": false,
  "error": "Validation failed",
  "errors": [
    { "field": "phone", "message": "Must be a valid 10-digit number" },
    { "field": "email", "message": "Invalid email format" }
  ]
}
```

---

## 3. College application (Apply Now)

Optional: record when a user clicks “Apply Now” for a college. Can be extended later for full application flow.

**Endpoint:** `POST /api/college-apply`

**Request body:**

| Field       | Type   | Required | Description   |
|-------------|--------|----------|---------------|
| `collegeId` | string | Yes      | College ID    |
| `email`     | string | Yes      | Applicant email |
| `phone`     | string | No       | Phone number  |

**Response:** `201 Created`

```json
{
  "success": true,
  "data": {
    "message": "Application started. Check your email for next steps."
  }
}
```

---

## 4. Reference: Course categories

Values for `category` (colleges) and `courseInterest` (enquiry):

- `All`, `Engineering`, `MBA`, `Medical`, `Law`, `Design`, `Commerce`, `Pharmacy`, `Architecture`, `Data Science`, `MCA`

---

## 5. CORS and auth (for backend implementation)

- **CORS:** Allow frontend origin (e.g. `https://collegewale.com`, `http://localhost:5173`) for `GET` and `POST`.
- **Auth:** List and details endpoints are public. Enquiry and apply can remain public; add rate limiting and optional API key if needed later.

---

## Summary table

| Method | Endpoint                  | Purpose                          |
|--------|---------------------------|----------------------------------|
| GET    | `/api/colleges`           | List colleges (with filters)     |
| GET    | `/api/colleges/:id`       | College details (for details page) |
| POST   | `/api/counselling-enquiry`| Submit counselling form (student details) |
| POST   | `/api/college-apply`      | Apply to a college (optional)    |
