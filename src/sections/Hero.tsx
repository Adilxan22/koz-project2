import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal-text');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-[#222] overflow-hidden flex items-end"
    >
      {/* KOZ PROJECT - опущен до top-20 (8rem) и растянут tracking'ом */}
      <div className="absolute top-20 left-0 right-0 px-4 pointer-events-none select-none z-0">
        <h2 className="text-[14vw] font-black text-white/[0.06] leading-none tracking-[0.00000001em] text-center whitespace-nowrap">
          KOZ PROJECT
        </h2>
      </div>

      {/* Лого справа - УМЕНЬШЕН (max-w-md вместо max-w-4xl) */}
      <div className="absolute right-4 md:right-12 top-[25%] w-full max-w-sm md:max-w-md lg:max-w-lg z-10">
        <div className="relative reveal-text opacity-0 translate-y-8 transition-all duration-1000 delay-500">
          <img 
            src="/image_f25fa3.png" 
            alt="KOZ Project Logo"
            className="w-full h-auto object-contain brightness-0 opacity-90"
          />
        </div>
      </div>

{/* Контент слева снизу */}
<div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 pb-16 md:pb-24">
  <div className="max-w-2xl">
    {/* Надзаголовок чуть крупнее */}
    <div className="flex items-center gap-3 mb-8 reveal-text opacity-0 translate-y-8 transition-all duration-700 ease-out">
      <span className="w-3 h-3 rounded-full bg-[#e85d04]"></span>
      <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
        Engineering & Construction
      </span>
    </div>

    {/* Слоган - крупнее */}
    <h1 className="space-y-2 reveal-text opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
      <span className="block text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight">
        Reliable solutions
      </span>
      <span className="block text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight">
        for complex
      </span>
      <span className="block text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight">
        challenges.
      </span>
    </h1>
  </div>
</div>
    </section>
  );
};

export default Hero;