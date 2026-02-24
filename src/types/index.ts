export type CourseCategory =
  | 'All'
  | 'Engineering'
  | 'MBA'
  | 'Medical'
  | 'Law'
  | 'Design'
  | 'Commerce'
  | 'Pharmacy'
  | 'Architecture'
  | 'Data Science'
  | 'MCA';

export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  category: CourseCategory;
  courses: string[];
  fee: string;
  rating: number;
  badge: string;
  emoji: string;
  nirf?: number;
  placementRate?: number;
  avgPackage?: string;
}

export interface Course {
  key: CourseCategory;
  name: string;
  icon: string;
  count: string;
  colorBg: string;
  colorText: string;
  borderColor: string;
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
  date: string;
  colleges: string;
  emoji: string;
  mode: string;
}

export interface HeroStat {
  value: string;
  suffix: string;
  label: string;
}

export interface WhyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface FilterState {
  category: CourseCategory;
  state: string;
  searchQuery: string;
}

// ---------- API / Backend types ----------

/** Full college details (from GET /api/colleges/:id) */
export interface CollegeDetail extends College {
  description?: string;
  highlights?: string[];
  eligibility?: string;
  facilities?: string[];
  website?: string;
  phone?: string;
  address?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface CollegesListResponse {
  colleges: College[];
  pagination: Pagination;
}

/** Payload for POST /api/counselling-enquiry */
export interface CounsellingEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  courseInterest?: string;
  currentStatus?: string;
  message?: string;
}
