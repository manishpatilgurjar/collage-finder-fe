import { ArrowRight } from 'lucide-react';
import { CourseCategory } from '../../types';
import { COURSES } from '../../data';
import CourseCard from '../cards/CourseCard';
import SectionHeader from '../ui/SectionHeader';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CoursesSectionProps {
  onCourseSelect: (key: CourseCategory) => void;
}

export default function CoursesSection({ onCourseSelect }: CoursesSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="courses" className="bg-neutral-bg py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeader
          eyebrow="Browse by Stream"
          title="Explore "
          highlight="Popular Courses"
          action={
            <a
              href="#colleges"
              className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </a>
          }
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {COURSES.map((course) => (
            <CourseCard
              key={course.key}
              course={course}
              onClick={() => onCourseSelect(course.key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
