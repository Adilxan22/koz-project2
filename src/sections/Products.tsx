import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Excavator',
    description:
      'Built for maximum digging power and control, our excavators are ideal for trenching, foundation work, demolition, and more.',
    image: '/excavator-product.png',
    reverse: false,
  },
  {
    id: 2,
    name: 'Dozers',
    description:
      "From site clearing to heavy grading, Ekvator's bulldozers are engineered for raw power and smooth control.",
    image: '/dozer.png',
    reverse: true,
  },
  {
    id: 3,
    name: 'Backhoes',
    description:
      "Ekvator's backhoes are perfect for urban construction, roadwork, and tight-access jobsites. Reliable, flexible, and easy to operate.",
    image: '/backhoe.png',
    reverse: false,
  },
];

const Products = () => {
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
    <section id="products" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-title animate-on-scroll opacity-0">Our Products</p>

        <div className="space-y-16 mt-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`animate-on-scroll opacity-0 bg-[#242424] rounded-3xl p-8 md:p-12 ${
                product.reverse ? 'delay-200' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  product.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={product.reverse ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{product.name}</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="btn-outline group">
                    Get Fast Quote
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
                <div className={product.reverse ? 'lg:order-1' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
