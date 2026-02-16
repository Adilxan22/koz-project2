import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 'engineering',
      title: 'Engineering',
      description: 'Full-cycle engineering solutions from feasibility studies to detailed design. We handle E, EP, and EPC contracts with precision and innovation.',
      image: '/services/engineering.png'
    },
    {
      id: 'construction',
      title: 'Construction', 
      description: 'Comprehensive construction services including site preparation, concrete works, steel structures, and infrastructure development.',
      image: '/services/construction.png'
    },
    {
      id: 'special-equipment',
      title: 'Special Equipment',
      description: 'Rental and supply of heavy machinery: excavators, bulldozers, cranes, dump trucks, and specialized oil & gas equipment.',
      image: '/services/equipment.png'
    },
    {
      id: 'logistics',
      title: 'Logistics Services',
      description: 'End-to-end logistics management for industrial projects, ensuring timely delivery of materials and equipment to any location.',
      image: '/services/logistics.png'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    if (!section || !textContainer) return;

    const ctx = gsap.context(() => {
      gsap.to(textContainer, {
        yPercent: -75,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${window.innerHeight * 3}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self: ScrollTrigger) => {
            const progress = self.progress;
            const slideIndex = Math.min(
              Math.floor(progress * services.length), 
              services.length - 1
            );
            setCurrentSlide(slideIndex);
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#222] h-screen z-10 overflow-hidden">
      
      {/* Левая половина — КАРТИНКИ (фиксированная ширина) */}
      <div className="absolute left-0 top-0 w-1/2 h-full hidden lg:flex items-center justify-center pointer-events-none">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-[80%] h-[60%] flex items-center justify-center">
              <img 
                src={service.image} 
                alt={service.title}
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Правая половина — ТЕКСТ (скроллится) */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full overflow-hidden">
        <div 
          ref={textContainerRef}
          className="absolute top-0 left-0 w-full"
          style={{ height: `${services.length * 100}vh` }}
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="h-screen flex items-center px-6 lg:px-16"
            >
              <div className="max-w-lg">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6 drop-shadow-lg">
                  {service.title}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-10">
                  {service.description}
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[#e85d04] hover:bg-[#d35400] text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                  Get Fast Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Мобильная версия — картинка сверху, текст снизу */}
      <div className="lg:hidden absolute top-16 left-0 right-0 h-[40vh] flex items-center justify-center pointer-events-none">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={service.image} 
              alt={service.title}
              className="max-w-[80%] max-h-full object-contain drop-shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;