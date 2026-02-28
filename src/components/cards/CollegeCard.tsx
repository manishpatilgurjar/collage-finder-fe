import { MapPin, Building2 } from 'lucide-react';
import { College } from '../../types';
import Badge from '../ui/Badge';

interface CollegeCardProps {
  college: College;
  onApply: (name: string) => void;
  onView: (slug: string) => void;
}

export default function CollegeCard({
  college,
  onApply,
  onView,
}: CollegeCardProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-neutral-border hover:border-cta hover:-translate-y-2 hover:shadow-card transition-all duration-300 cursor-pointer group"
      onClick={() => onView(college.id)}
    >
      <div
        className="h-44 bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,58,138,0.2),transparent_60%)]" />
        <Building2 className="w-14 h-14 text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-500" />
        <div className="absolute top-3 right-3">
          <Badge variant="cta">{college.badge}</Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-semibold text-neutral-text text-base leading-tight mb-1 group-hover:text-cta transition-colors line-clamp-2">
          {college.name}
        </h3>
        <div className="flex items-center gap-1.5 text-neutral-muted text-xs mb-3">
          <MapPin className="w-3 h-3 shrink-0" />
          {college.location}
        </div>

        <div className="flex gap-1.5 flex-wrap mb-4">
          {college.courses.slice(0, 3).map((course) => (
            <span
              key={course}
              className="bg-primary/10 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-neutral-border gap-2">
          <div>
            <p className="text-[10px] text-neutral-muted uppercase tracking-wide">Fees</p>
            <p className="text-sm font-bold text-neutral-text">{college.fee}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onApply(college.name);
            }}
            className="bg-cta hover:bg-cta-hover text-white py-2 px-4 rounded-btn text-xs font-bold transition-all hover:shadow-md hover:shadow-cta/30 shrink-0"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
