export default function TrustBar() {
  const items = [
    { icon: '⭐', text: 'Rated 4.8/5 by Students' },
    { icon: '🏫', text: '5,000+ Verified Colleges' },
    { icon: '🎓', text: '2L+ Students Helped' },
    { icon: '💼', text: 'Real Placement Data' },
  ];

  return (
    <section className="bg-white border-b border-neutral-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-neutral-muted text-sm font-medium">
          {items.map((item) => (
            <span key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
