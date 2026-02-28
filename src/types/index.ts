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
  rating?: number;
  badge: string;
  emoji?: string;
  nirf?: number;
  placementRate?: number;
  avgPackage?: string;
  shortName?: string | null;
  city?: string;
  stateId?: string | null;
  cityId?: string | null;
  description?: string | null;
  logoUrl?: string | null;
  coverImageUrl?: string | null;
  isVerified?: boolean;
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
  /** Course ID from GET /api/courses (24-char hex). Filter colleges by this course. */
  courseId?: string | null;
}

/** Course from GET /api/courses (for dropdown; use _id as courseId when filtering colleges) */
export interface ApiCourse {
  _id: string;
  name: string;
  slug: string;
}

// ---------- API / Backend types ----------

/** Fee for a single course (from API) */
export interface CourseFee {
  course: string;
  fee: string;
}

/** Full college details (from GET /api/colleges/:slug) */
export interface CollegeDetail extends College {
  slug?: string;
  feeAmount?: number;
  feePeriod?: string;
  /** Fees per course – show when API provides them */
  courseFees?: CourseFee[];
  description?: string;
  highlights?: string[];
  eligibility?: string;
  facilities?: string[];
  website?: string;
  phone?: string;
  email?: string;
  address?: string;
  pinCode?: string;
  galleryUrls?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext?: boolean;
  hasPrev?: boolean;
}

/** Sort option for college list API */
export type CollegeListSort =
  | 'name_asc'
  | 'name_desc'
  | 'fee_asc'
  | 'fee_desc'
  | 'rating_desc'
  | 'nirf_asc'
  | 'newest'
  | 'relevance';

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
