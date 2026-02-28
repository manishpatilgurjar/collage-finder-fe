import { Star, Building2, GraduationCap, Briefcase } from 'lucide-react';

const ITEMS = [
  { Icon: Star, text: 'Rated 4.8/5 by Students' },
  { Icon: Building2, text: '5,000+ Verified Colleges' },
  { Icon: GraduationCap, text: '2L+ Students Helped' },
  { Icon: Briefcase, text: 'Real Placement Data' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-neutral-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-neutral-muted text-sm font-medium">
          {ITEMS.map(({ Icon, text }) => (
            <span key={text} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-cta shrink-0" />
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
