import { Check, GraduationCap, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCounsellingClick: () => void;
}

const TRUST_POINTS = [
  '100% Free Counselling',
  'No Spam or Hidden Charges',
  'Verified College Data',
];

const STATS = [
  { value: '5,000+', label: 'Verified Colleges' },
  { value: '2,00,000+', label: 'Students Guided' },
  { value: '50+', label: 'Courses' },
  { value: '28+', label: 'States Covered' },
];

export default function HeroSection({
  onExploreClick,
  onCounsellingClick,
}: HeroSectionProps) {
  return (
    <section
      className="min-h-[90vh] flex items-center relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, #1E2A45 0%, #2A3B60 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="animate-fade-up">
          <h1 className="font-heading font-bold text-hero text-white leading-tight mb-5">
            Find the Right College with Confidence
          </h1>

          <p className="text-neutral-on-dark text-lg leading-relaxed mb-6 max-w-lg">
            Compare 5,000+ verified colleges, real placement data, and get free expert guidance.
            <br />
            <span className="text-white font-medium">Trusted by 2,00,000+ students across India.</span>
          </p>

          <div className="flex gap-3 flex-wrap mb-6">
            <Button size="lg" onClick={onCounsellingClick}>
              Get Free Counselling
            </Button>
            <Button size="lg" variant="secondary" onClick={onExploreClick}>
              Compare Colleges
            </Button>
          </div>

          {/* Trust points */}
          <p className="text-neutral-on-dark text-sm flex flex-wrap items-center gap-x-4 gap-y-1">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-success shrink-0" /> {point}
              </span>
            ))}
          </p>

          {/* Trust Stats row */}
          <div className="flex gap-8 mt-10 flex-wrap">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-2xl text-white leading-none">
                  {s.value}
                </p>
                <p className="text-neutral-on-dark text-[13px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — floating cards (social proof) */}
        <div className="hidden lg:block relative">
          <div
            className="animate-float rounded-2xl p-6 shadow-card"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/80">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-base">IIT Bombay</p>
                <p className="text-neutral-on-dark text-xs">Mumbai · NIRF #1</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {['B.Tech CSE', 'M.Tech AI/ML', 'MBA (SJMSOM)', 'Ph.D'].map((c) => (
                <div
                  key={c}
                  className="rounded-lg px-3 py-2 text-neutral-on-dark text-xs flex items-center gap-1.5"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cta shrink-0" /> {c}
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {['NIRF #1', 'JEE Advanced', '₹2.5L/yr'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-primary/20 border border-primary/30 text-neutral-on-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Placement card */}
          <div
            className="animate-float-slow absolute -top-5 -right-8 rounded-xl p-4 w-40 shadow-card"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p className="font-heading font-bold text-white text-2xl">98%</p>
            <p className="text-neutral-on-dark text-[11px]">Placement Rate</p>
            <p className="text-success text-[11px] mt-1.5 font-semibold">Avg. ₹18 LPA</p>
          </div>

          {/* Verified Admit card */}
          <div
            className="absolute -bottom-4 -left-6 rounded-xl p-4 w-48 shadow-card"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
              style={{ background: '#16A34A' }}
            >
              Verified Admit
            </span>
            <p className="text-white text-sm font-semibold mt-2">
              Rahul Sharma – VIT CSE
            </p>
            <p className="text-neutral-on-dark text-[11px] mt-0.5">JEE Rank: 18,234</p>
          </div>
        </div>
      </div>
    </section>
  );
}
