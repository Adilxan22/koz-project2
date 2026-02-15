import { useEffect, useRef } from 'react';
import { Cpu, Mountain, Truck, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Smart construction',
    description:
      'Our smart construction solutions reduce rework, improve accuracy, and help you stay ahead in a fast-changing industry.',
    icon: Cpu,
    large: true,
  },
  {
    id: 2,
    title: 'Mining solutions',
    description:
      "Whether it's surface or underground operations, we supply machinery that delivers high productivity, durability, and safety for every mining.",
    icon: Mountain,
    large: false,
  },
  {
    id: 3,
    title: 'Autonomous haulage system',
    description:
      'Take productivity and safety to the next level with our AHS-ready equipment.',
    icon: Truck,
    large: false,
  },
  {
    id: 4,
    title: 'Komtrax',
    description:
      'Improve fleet management, anticipate maintenance, and reduce fuel costs—all from your dashboard.',
    icon: BarChart3,
    large: false,
  },
];

const Services = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`animate-on-scroll opacity-0 bg-[#242424] rounded-3xl p-8 card-hover cursor-pointer group ${
                  service.large ? 'md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                      <Icon size={24} className="text-[#e85d04]" />
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-gray-500 transition-all group-hover:text-[#e85d04] group-hover:translate-x-1"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
