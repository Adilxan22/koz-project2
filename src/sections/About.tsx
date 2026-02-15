import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-title animate-on-scroll opacity-0">About Ekvator</p>
        
        <h2 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-8 mb-8">
          Driven by power.
          <br />
          built on trust.
        </h2>
        
        <p className="animate-on-scroll opacity-0 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At Ekvator, we do more than sell equipment — we deliver the power behind progress.
          With a deep focus on quality, innovation, and reliability, we provide heavy machinery
          and industrial solutions that help businesses build smarter, move faster, and work safer.
        </p>

        <div className="animate-on-scroll opacity-0 grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#e85d04] mb-2">15+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#e85d04] mb-2">500+</div>
            <div className="text-gray-400 text-sm">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#e85d04] mb-2">50+</div>
            <div className="text-gray-400 text-sm">Expert Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
