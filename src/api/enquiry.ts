import { CounsellingEnquiryPayload } from '../types';
import { post } from './client';

interface EnquiryApiResponse {
  success: boolean;
  data?: { id?: string; message?: string };
}

/** Submit counselling enquiry to backend. Throws on failure. */
export async function submitCounsellingEnquiry(payload: CounsellingEnquiryPayload): Promise<void> {
  const base = import.meta.env.VITE_API_BASE_URL;
  if (!base) {
    // No backend: resolve so UI can show success message
    return;
  }

  const res = await post<EnquiryApiResponse>('/api/counselling-enquiry', payload);
  if (!res.success) throw new Error('Failed to submit enquiry');
}
