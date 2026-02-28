import { useState } from 'react';
import { Phone, Check, Star, GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CTASectionProps {
  onSubmit: (phone: string) => void;
}

export default function CTASection({ onSubmit }: CTASectionProps) {
  const [phone, setPhone] = useState('');
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = () => {
    if (!phone || phone.length < 10) return;
    onSubmit(phone);
    setPhone('');
  };

  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 bg-neutral-bg"
    >
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs font-bold uppercase tracking-[3px] text-cta mb-2">
          Free Career Counselling
        </p>
        <h2 className="font-heading font-semibold text-h2 text-neutral-text leading-tight mb-4">
          Not Sure Which College{' '}
          <span className="text-primary">to Choose?</span>
        </h2>
        <p className="text-neutral-muted text-base leading-relaxed mb-8">
          Talk to our expert counsellors for <strong className="text-neutral-text">FREE</strong>. We'll help
          you pick the right course, college, and career path based on your
          interests and scores.
        </p>

        <div className="flex gap-3 max-w-md mx-auto">
          <div className="flex-1 flex items-center border-2 border-neutral-border focus-within:border-cta rounded-lg bg-white overflow-hidden transition-colors px-3 gap-2">
            <Phone className="w-4 h-4 text-neutral-muted shrink-0" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your mobile number"
              maxLength={10}
              className="flex-1 py-3 outline-none text-sm text-neutral-text placeholder-neutral-muted"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-cta hover:bg-cta-hover text-white py-3 px-5 rounded-btn font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cta/30 whitespace-nowrap"
          >
            Get Expert Guidance
          </button>
        </div>

        <p className="text-xs text-neutral-muted mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-success" /> 100% Free</span>
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-success" /> No Spam</span>
          <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-success" /> Response within 24 hrs</span>
        </p>

        <p className="text-xs text-neutral-muted mt-3 max-w-sm mx-auto">
          Your details are safe. We never share your data.
        </p>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {[
            { Icon: Star, text: '4.8/5 Rating' },
            { Icon: GraduationCap, text: '2 Lakh+ Students' },
            { Icon: Award, text: '15+ Years Experience' },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-neutral-muted font-medium">
              <Icon className="w-5 h-5 text-cta shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
