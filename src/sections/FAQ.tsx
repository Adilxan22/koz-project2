import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What types of construction equipment do you offer?',
    answer:
      'We provide a wide range of heavy machinery including excavators, bulldozers, wheel loaders, motor graders, backhoe loaders, compactors, and dump trucks.',
  },
  {
    id: 2,
    question: 'Do you offer rental or purchase options?',
    answer:
      'Yes, we offer both rental and purchase options depending on your project needs and budget. Our team can help you determine the best solution for your specific requirements.',
  },
  {
    id: 3,
    question: 'Can I get after-sales support and maintenance?',
    answer:
      'Absolutely. We provide full after-sales services including regular maintenance, spare parts, and technical support to ensure your equipment runs smoothly.',
  },
  {
    id: 4,
    question: 'Are your machines equipped with smart technology?',
    answer:
      'Yes. Many of our machines come with integrated smart systems like Komtrax and Autonomous Haulage System for real-time monitoring and automation.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<number | null>(null);

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

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-title animate-on-scroll opacity-0">Any QUESTIONS?</p>
        <h2 className="section-subtitle animate-on-scroll opacity-0">Frequently asked questions</h2>

        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="animate-on-scroll opacity-0 bg-[#242424] rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#e85d04]">
                  {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
