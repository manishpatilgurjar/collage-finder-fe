import { useState, useEffect } from 'react';
import { fetchCourses } from '../api/courses';
import type { ApiCourse } from '../types';

/**
 * Fetch courses from GET /api/courses for dropdown.
 * Use returned course _id as courseId when calling GET /api/colleges?courseId=...
 */
export function useCourses() {
  const [courses, setCourses] = useState<ApiCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCourses()
      .then(setCourses)
      .finally(() => setLoading(false));
  }, []);

  return { courses, loading };
}
