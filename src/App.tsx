import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TrustBar from './components/sections/TrustBar';
import SearchSection from './components/sections/SearchSection';
import CollegesSection from './components/sections/CollegesSection';
import CoursesSection from './components/sections/CoursesSection';
import StudentReviewsSection from './components/sections/StudentReviewsSection';
import PlacementInsightsSection from './components/sections/PlacementInsightsSection';
import WhySection from './components/sections/WhySection';
import ExamsSection from './components/sections/ExamsSection';
import CTASection from './components/sections/CTASection';
import FAQSection from './components/sections/FAQSection';
import ToastContainer from './components/ui/ToastContainer';
import { useFilter } from './hooks/useFilter';
import { useToast } from './hooks/useToast';
import { CourseCategory } from './types';

export default function App() {
  const { filters, filteredColleges, setCategory, setState, setSearchQuery, resetFilters } =
    useFilter();
  const { toasts, showToast } = useToast();

  const scrollToColleges = () => {
    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCourseSelect = (key: CourseCategory) => {
    setCategory(key);
    resetFilters();
    setCategory(key);
    scrollToColleges();
  };

  const handleApply = (name: string) => {
    showToast(`Application started for ${name}. Check your email for next steps.`);
  };

  const handleView = (name: string) => {
    showToast(`Loading details for ${name}...`);
  };

  const handleCTASubmit = (phone: string) => {
    showToast(`We'll call you at ${phone} within 24 hours. Get expert guidance!`);
  };

  const handleSearch = () => {
    scrollToColleges();
  };

  return (
    <div className="min-h-screen">
      <Navbar onCounsellingClick={scrollToCTA} />

      <main>
        <HeroSection
          onExploreClick={scrollToColleges}
          onCounsellingClick={scrollToCTA}
        />

        <TrustBar />

        <SearchSection
          query={filters.searchQuery}
          onQueryChange={setSearchQuery}
          onCategoryChange={(c) => {
            setCategory(c);
            scrollToColleges();
          }}
          onSearch={handleSearch}
        />

        <CollegesSection
          colleges={filteredColleges}
          filters={filters}
          onCategoryChange={setCategory}
          onStateChange={setState}
          onApply={handleApply}
          onView={handleView}
        />

        <CoursesSection onCourseSelect={handleCourseSelect} />

        <StudentReviewsSection />

        <PlacementInsightsSection />

        <WhySection />

        <ExamsSection />

        <CTASection onSubmit={handleCTASubmit} />

        <FAQSection />
      </main>

      <Footer />

      <ToastContainer toasts={toasts} />
    </div>
  );
}
