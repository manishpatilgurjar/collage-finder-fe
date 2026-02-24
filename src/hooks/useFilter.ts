import { useState, useMemo } from 'react';
import { College, CourseCategory, FilterState } from '../types';
import { COLLEGES } from '../data';

export function useFilter() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    state: 'All India',
    searchQuery: '',
  });

  const filteredColleges = useMemo<College[]>(() => {
    return COLLEGES.filter((college) => {
      const categoryMatch =
        filters.category === 'All' || college.category === filters.category;

      const stateMatch =
        filters.state === 'All India' || college.state === filters.state;

      const query = filters.searchQuery.toLowerCase();
      const searchMatch =
        !query ||
        college.name.toLowerCase().includes(query) ||
        college.location.toLowerCase().includes(query) ||
        college.courses.some((c) => c.toLowerCase().includes(query)) ||
        college.category.toLowerCase().includes(query);

      return categoryMatch && stateMatch && searchMatch;
    });
  }, [filters]);

  const setCategory = (category: CourseCategory) =>
    setFilters((prev) => ({ ...prev, category }));

  const setState = (state: string) =>
    setFilters((prev) => ({ ...prev, state }));

  const setSearchQuery = (searchQuery: string) =>
    setFilters((prev) => ({ ...prev, searchQuery }));

  const resetFilters = () =>
    setFilters({ category: 'All', state: 'All India', searchQuery: '' });

  return {
    filters,
    filteredColleges,
    setCategory,
    setState,
    setSearchQuery,
    resetFilters,
  };
}
