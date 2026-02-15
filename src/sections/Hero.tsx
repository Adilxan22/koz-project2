import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background Text */}
      <div className="hero-bg-text">EKVATOR</div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll opacity-0">
            <p className="flex items-center gap-2 text-sm tracking-[0.2em] text-[#e85d04] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e85d04]"></span>
              GEAR UP. DIG IN. BUILD FORWARD.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Designing and
              <br />
              building backbone
              <br />
              of Industry.
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Ekvator is where heavy-duty meets high-performance.
            </p>
          </div>

          {/* Right Content - Excavator Image */}
          <div className="animate-on-scroll opacity-0 delay-200 relative">
            <img
              src="/excavator-hero.png"
              alt="Excavator"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
