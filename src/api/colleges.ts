import { College, CollegeDetail, CourseCategory } from '../types';
import { get } from './client';

export interface CollegesListParams {
  category?: CourseCategory | string;
  state?: string;
  search?: string;
  page?: number;
  limit?: number;
}

interface CollegesListApiResponse {
  success: boolean;
  data?: {
    colleges: College[];
    pagination: { page: number; limit: number; total: number; totalPages: number };
  };
}

interface CollegeDetailApiResponse {
  success: boolean;
  data?: CollegeDetail;
}

/** Fetch colleges list from backend. Returns empty array if API is not configured or fails. */
export async function fetchCollegesList(
  params: CollegesListParams = {}
): Promise<{ colleges: College[]; pagination?: { page: number; limit: number; total: number; totalPages: number } }> {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (!base) return { colleges: [] };

  try {
    const q: Record<string, string | number> = {};
    if (params.category && params.category !== 'All') q.category = params.category;
    if (params.state && params.state !== 'All India') q.state = params.state;
    if (params.search) q.search = params.search;
    if (params.page) q.page = params.page;
    if (params.limit) q.limit = params.limit;

    const res = await get<CollegesListApiResponse>('/api/colleges', q);
    if (res.success && res.data) {
      return {
        colleges: res.data.colleges,
        pagination: res.data.pagination,
      };
    }
    return { colleges: [] };
  } catch {
    return { colleges: [] };
  }
}

/** Fetch single college details by id. Returns null if not found or API unavailable. */
export async function fetchCollegeById(id: string): Promise<CollegeDetail | null> {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (!base) return null;

  try {
    const res = await get<CollegeDetailApiResponse>(`/api/colleges/${encodeURIComponent(id)}`);
    if (res.success && res.data) return res.data;
    return null;
  } catch {
    return null;
  }
}
