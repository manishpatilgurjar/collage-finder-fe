import { Search } from 'lucide-react';
import { CourseCategory } from '../../types';

interface SearchSectionProps {
  query: string;
  onQueryChange: (q: string) => void;
  onCategoryChange: (c: CourseCategory) => void;
  onSearch: () => void;
}

const COURSE_OPTIONS: { value: CourseCategory; label: string }[] = [
  { value: 'All', label: 'All Courses' },
  { value: 'Engineering', label: 'Engineering (B.Tech)' },
  { value: 'MBA', label: 'MBA / PGDM' },
  { value: 'Medical', label: 'Medical (MBBS)' },
  { value: 'Law', label: 'Law (LLB)' },
  { value: 'Commerce', label: 'Commerce (B.Com)' },
  { value: 'Design', label: 'Design (B.Des)' },
  { value: 'Pharmacy', label: 'Pharmacy (B.Pharm)' },
  { value: 'MCA', label: 'MCA / BCA' },
];

const POPULAR = ['B.Tech', 'MBA', 'MBBS', 'Law', 'Design', 'Data Science', 'Pharmacy'];

export default function SearchSection({
  query,
  onQueryChange,
  onCategoryChange,
  onSearch,
}: SearchSectionProps) {
  return (
    <section className="bg-white shadow-sm border-b border-neutral-border py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-heading font-semibold text-center text-neutral-text text-lg mb-5">
          Search from 5,000+ verified colleges across India
        </p>

        <div className="flex rounded-xl overflow-hidden shadow-md border-2 border-neutral-border focus-within:border-cta transition-colors">
          <div className="flex items-center px-4 bg-neutral-bg border-r border-neutral-border">
            <Search className="w-5 h-5 text-neutral-muted" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Search college, course, city..."
            className="flex-1 px-4 py-4 text-base outline-none bg-white text-neutral-text placeholder-neutral-muted"
          />
          <select
            onChange={(e) => onCategoryChange(e.target.value as CourseCategory)}
            className="hidden sm:block px-4 py-4 bg-white border-l border-neutral-border text-neutral-muted text-sm outline-none cursor-pointer min-w-[180px]"
          >
            {COURSE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={onSearch}
            className="bg-cta hover:bg-cta-hover text-white py-3 px-6 text-sm font-bold transition-colors whitespace-nowrap"
          >
            Search →
          </button>
        </div>

        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="text-sm text-neutral-muted font-medium">Popular:</span>
          {POPULAR.map((term) => (
            <button
              key={term}
              onClick={() => {
                onQueryChange(term);
                onSearch();
              }}
              className="bg-neutral-bg hover:bg-cta hover:text-white text-neutral-text py-1.5 px-3.5 rounded-full text-xs font-semibold transition-all"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
