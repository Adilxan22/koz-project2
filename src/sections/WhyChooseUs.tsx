// src/sections/WhyChooseUs.tsx
import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      title: 'Turnkey Solutions',
      description: 'We offer construction, engineering, and logistics services, managing your projects from start to finish. Streamlined processes ensure fast and productive work without the need to manage multiple contractors.',
      image: '/advantages/turnkey.jpg'
    },
    {
      title: 'Professionalism',
      description: 'Our highly qualified employees with over 5 years of experience guarantee the highest standard of professionalism in every project.',
      image: '/advantages/professional.jpg'
    },
    {
      title: 'Individual Approach',
      description: 'We uniquely approach each project, developing a work plan that takes into account your requests and company specifics.',
      image: '/advantages/approach.jpg'
    },
    {
      title: 'On Time & On Budget',
      description: 'Our team strives to complete every project on time and within budget, providing clients with transparent and reliable solutions.',
      image: '/advantages/deadline.jpg'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="why-us"
      className="relative bg-[#e8e8e8] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="flex items-center gap-3 mb-4 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="w-2 h-2 rounded-full bg-[#e85d04]"></span>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#222]/70">
            Engineering & Construction
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] leading-tight mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left — Accordion */}
          <div className="space-y-0 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            {advantages.map((item, index) => (
              <div 
                key={item.title}
                className={`border-b border-[#222]/10 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'pb-8' : 'py-6'
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between group">
                  <h3 
                    className={`text-2xl md:text-3xl font-medium transition-all duration-300 ${
                      activeIndex === index 
                        ? 'text-[#1a1a1a]' 
                        : 'text-[#1a1a1a]/30 group-hover:text-[#1a1a1a]/60'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <ChevronRight 
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'text-[#e85d04] rotate-90' 
                        : 'text-[#1a1a1a]/20 group-hover:text-[#1a1a1a]/40'
                    }`} 
                  />
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#1a1a1a]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Image */}
          <div className="relative h-[400px] lg:h-[600px] reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === index 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-[#222]/10 flex items-center justify-center"><span class="text-6xl font-bold text-[#222]/20">${index + 1}</span></div>`;
                    }
                  }}
                />
                <div className="absolute top-8 right-8 w-24 h-24 bg-white/80 backdrop-blur-sm"></div>
                <div className="absolute top-24 right-32 w-16 h-16 bg-white/60 backdrop-blur-sm"></div>
              </div>
            ))}
          </div>

        </div>

        {/* Certificates */}
        <div className="mt-24 pt-16 border-t border-[#222]/10">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#222]/50 mb-8">
            Licenses & Certificates
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'MCHS License'].map((cert) => (
              <div 
                key={cert}
                className="aspect-[3/4] bg-[#222]/5 border border-[#222]/10 hover:border-[#e85d04]/30 p-4 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-[#222]/[0.08]"
              >
                <div className="w-full h-full bg-[#222]/10 mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#222]/20">{cert[0]}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#222]/50 text-center">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;