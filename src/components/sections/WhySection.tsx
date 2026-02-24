import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FEATURES = [
  { icon: '🤖', title: 'AI-Powered Matching', desc: 'Smart recommendations based on your marks, interests and budget' },
  { icon: '✅', title: 'Verified Data', desc: 'All fees, cutoffs and placement data verified directly from colleges' },
  { icon: '👨‍💼', title: 'Expert Counsellors', desc: '15+ years experienced counsellors available for free consultation' },
  { icon: '📊', title: 'College Comparisons', desc: 'Compare colleges side-by-side on fees, placements, campus & more' },
];

const STATS = [
  { num: '2', suffix: 'L+', label: 'Students Successfully Placed', wide: true },
  { num: '5', suffix: 'K+', label: 'Colleges Across India', wide: false },
  { num: '50', suffix: '+', label: 'Courses Covered', wide: false },
  { num: '28', suffix: '+', label: 'States & UTs', wide: false },
];

export default function WhySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)' }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[3px] text-neutral-on-dark mb-2">
            Why CollegeWale?
          </p>
          <h2 className="font-heading font-semibold text-h2 text-white leading-tight mb-4">
            India's Most Trusted{' '}
            <span className="text-cta">College Discovery</span> Platform
          </h2>
          <p className="text-neutral-on-dark/80 leading-relaxed mb-8">
            We help lakhs of students make the right education choice every
            year. Our expert counsellors, verified data, and AI-powered tools
            make college search simple.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-4 hover:-translate-y-1 transition-all border border-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <p className="text-2xl mb-2">{f.icon}</p>
                <p className="font-heading font-semibold text-white text-sm mb-1">{f.title}</p>
                <p className="text-neutral-on-dark/70 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-8 bg-cta hover:bg-cta-hover text-white py-3 px-7 rounded-btn font-bold text-sm inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cta/30"
          >
            Get Free Counselling →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl p-6 text-center transition-all border border-white/10 ${
                s.wide ? 'col-span-2' : ''
              }`}
              style={{
                background: s.wide ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.06)',
                borderColor: s.wide ? 'rgba(249,115,22,0.3)' : undefined,
              }}
            >
              <p className="font-heading font-bold text-4xl text-white leading-none">
                {s.num}
                <span className="text-cta">{s.suffix}</span>
              </p>
              <p className="text-neutral-on-dark/80 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
