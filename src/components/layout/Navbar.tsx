import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onCounsellingClick: () => void;
}

const NAV_LINKS = [
  { label: 'Courses', href: '#courses' },
  { label: 'Top Colleges', href: '#colleges' },
  { label: 'Exams', href: '#exams' },
  { label: 'MBA', href: '#colleges' },
  { label: 'Engineering', href: '#colleges' },
];

export default function Navbar({ onCounsellingClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar — #F97316, white text */}
      <div className="bg-cta text-white text-center text-xs sm:text-sm py-2 px-4 font-medium">
        Admissions 2025–26 Open | Free Career Counselling Available —{' '}
        <button
          onClick={onCounsellingClick}
          className="underline font-bold hover:no-underline"
        >
          Book Now →
        </button>
      </div>

      {/* Main Navbar — navy */}
      <nav
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ backgroundColor: 'rgba(15,23,42,0.95)', borderColor: 'rgba(229,231,235,0.2)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cta rounded-btn flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              College<span className="text-cta">Wale</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-neutral-on-dark hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={onCounsellingClick}
              className="hidden sm:block bg-cta hover:bg-cta-hover text-white py-3 px-5 rounded-btn text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cta/30"
            >
              Free Counselling
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden border-t px-4 pb-4"
            style={{ backgroundColor: '#0F172A', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <ul className="flex flex-col gap-1 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-neutral-on-dark hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onCounsellingClick();
                  }}
                  className="w-full bg-cta text-white py-3 rounded-btn text-sm font-semibold"
                >
                  Free Counselling
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
