import { CourseCategory, College, FilterState } from '../../types';
import { INDIAN_STATES } from '../../data';
import CollegeCard from '../cards/CollegeCard';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CATEGORY_TABS: CourseCategory[] = [
  'All', 'Engineering', 'MBA', 'Medical', 'Law', 'Design',
];

interface CollegesSectionProps {
  colleges: College[];
  filters: FilterState;
  onCategoryChange: (c: CourseCategory) => void;
  onStateChange: (s: string) => void;
  onApply: (name: string) => void;
  onView: (name: string) => void;
}

export default function CollegesSection({
  colleges,
  filters,
  onCategoryChange,
  onStateChange,
  onApply,
  onView,
}: CollegesSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="colleges" className="bg-white py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeader
          eyebrow="Handpicked for You"
          title="Top Colleges "
          highlight="in India"
        />

        <div className="flex gap-1 bg-neutral-bg rounded-xl p-1 w-fit mb-6 flex-wrap">
          {CATEGORY_TABS.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filters.category === cat
                  ? 'bg-white text-neutral-text shadow-md border border-neutral-border'
                  : 'text-neutral-muted hover:text-neutral-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {INDIAN_STATES.map((state) => {
            const displayState = state === 'All India' ? 'All India' : state;
            const filterValue = state === 'All India' ? 'All India' : state;
            return (
              <button
                key={state}
                onClick={() => onStateChange(filterValue)}
                className={`px-4 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                  filters.state === filterValue
                    ? 'border-cta text-cta bg-cta/5'
                    : 'border-neutral-border text-neutral-muted hover:border-cta hover:text-cta'
                }`}
              >
                {displayState}
              </button>
            );
          })}
        </div>

        {colleges.length === 0 ? (
          <div className="text-center py-16 text-neutral-muted">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold text-lg text-neutral-text">No colleges found</p>
            <p className="text-sm">Try changing your filters or search query</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onApply={onApply}
                onView={onView}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <button className="border-2 border-cta text-cta hover:bg-cta hover:text-white py-3 px-8 rounded-btn font-bold text-sm transition-all">
            Load More Colleges →
          </button>
        </div>
      </div>
    </section>
  );
}
