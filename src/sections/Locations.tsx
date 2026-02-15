import { useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  {
    id: 1,
    type: 'Legal address',
    address: 'Level 12, 99 Walker Street\nNorth Sydney, NSW 2060 Australia',
    hasButton: false,
  },
  {
    id: 2,
    type: 'Actual address',
    address: 'Unit 4, 21 Industrial Circuit\nPrestons, NSW 2170 Australia',
    hasButton: true,
  },
];

const Locations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-title animate-on-scroll opacity-0">Our Locations</p>
        <h2 className="section-subtitle animate-on-scroll opacity-0">Where you can find us</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="animate-on-scroll opacity-0 bg-[#242424] rounded-3xl p-8"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                  <MapPin size={20} className="text-[#e85d04]" />
                </div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wider">{location.type}</h3>
              </div>
              <p className="text-lg md:text-xl whitespace-pre-line mb-6">{location.address}</p>
              {location.hasButton && (
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Navigation size={16} />
                  Get Direction
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
