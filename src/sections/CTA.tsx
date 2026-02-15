import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
          Ekvator delivers the heavy equipment and innovation your site needs to move forward with
          confidence.
        </h2>
        <button className="animate-on-scroll opacity-0 btn-primary text-lg px-8 py-4">
          Get Fast Quote
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
