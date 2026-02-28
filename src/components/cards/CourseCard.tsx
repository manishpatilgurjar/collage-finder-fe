import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Cog,
  TrendingUp,
  Stethoscope,
  Scale,
  Palette,
  ShoppingCart,
  Pill,
  Building,
  Cpu,
  Monitor,
} from 'lucide-react';
import { Course } from '../../types';
import { cn } from '../../utils/cn';

const COURSE_ICONS: Record<string, LucideIcon> = {
  Engineering: Cog,
  MBA: TrendingUp,
  Medical: Stethoscope,
  Law: Scale,
  Design: Palette,
  Commerce: ShoppingCart,
  Pharmacy: Pill,
  Architecture: Building,
  'Data Science': Cpu,
  MCA: Monitor,
};

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  const Icon = COURSE_ICONS[course.key] || Building;

  return (
    <button
      onClick={onClick}
      className={cn(
        'group text-left bg-white rounded-xl p-5 border-2 border-transparent',
        'hover:border-cta hover:-translate-y-1.5 hover:shadow-card',
        'transition-all duration-300 w-full'
      )}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-btn flex items-center justify-center mb-3',
          course.colorBg,
          course.colorText
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <p className="font-heading font-semibold text-neutral-text text-sm leading-tight mb-1">
        {course.name}
      </p>
      <p className="text-neutral-muted text-xs mb-3">{course.count}</p>
      <span
        className={cn(
          'inline-flex items-center gap-1 text-xs font-semibold text-primary',
          'group-hover:gap-2 transition-all'
        )}
      >
        Explore Verified Colleges <ArrowRight className="w-3 h-3" />
      </span>
    </button>
  );
}
