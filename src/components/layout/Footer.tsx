import { GraduationCap, Mail } from 'lucide-react';

const SUPPORT_EMAIL = 'support@collegewale.in';

export default function Footer() {
  const links = {
    Courses: [
      'B.Tech / Engineering', 'MBA / PGDM', 'MBBS / Medical',
      'Law (LLB / BA LLB)', 'B.Com / M.Com', 'BCA / MCA', 'B.Design',
    ],
    Exams: [
      'JEE Main & Advanced', 'CAT / MAT', 'NEET UG', 'CLAT',
      'GATE', 'CUET', 'GMAT / GRE',
    ],
    'Quick Links': [
      'College Predictor', 'Compare Colleges', 'Scholarships',
      'Campus Life', 'Career Library', 'Contact Us',
    ],
  };

  return (
    <footer className="text-neutral-on-dark" style={{ backgroundColor: '#0F172A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cta rounded-btn flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                College<span className="text-cta">Wale</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-on-dark/90">
              CollegeWale – India's Trusted College Discovery Platform. Helping students and parents make the right education choice.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-cta shrink-0" />
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="flex gap-3 mt-4 text-lg">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((label, i) => (
                <a
                  key={label}
                  href="#"
                  className="text-neutral-on-dark hover:text-white transition-colors"
                  aria-label={label}
                >
                  {['📘', '📸', '🐦', '▶️'][i]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-heading font-bold text-white text-sm mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-on-dark hover:text-cta transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust & legal */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 pt-6 text-xs text-neutral-on-dark/70">
          <span>© 2025 CollegeWale. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
