import { useEffect, useRef } from 'react';

const Partners = () => {
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

  // Имена файлов: partner-1.png, partner-2.png ... partner-18.png
  const row1 = ['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png', 'partner-6.png'];
  const row2 = ['partner-7.png', 'partner-8.png', 'partner-9.png', 'partner-10.png', 'partner-11.png', 'partner-12.png'];
  const row3 = ['partner-13.png', 'partner-14.png', 'partner-15.png', 'partner-16.png', 'partner-17.png', 'partner-18.png'];

  const renderLogo = (filename: string, index: number) => (
  <div 
    key={`${filename}-${index}`} 
    className="flex items-center justify-center h-20 w-32 md:w-40"
  >
    <img 
      src={`/logos/${filename}`} 
      alt={`Partner ${index + 1}`} 
      className="max-h-full max-w-full object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent && !parent.querySelector('.fallback')) {
          const div = document.createElement('div');
          div.className = 'fallback w-full h-10 bg-gray-300/50 rounded border border-gray-400/30';
          parent.appendChild(div);
        }
      }}
    />
  </div>
);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#e8e8e8] py-24 md:py-32 overflow-hidden"
    >
      {/* Декоративные серые квадраты */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none">
        <div className="absolute top-12 right-12 w-32 h-32 bg-[#222]/5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"></div>
        <div className="absolute top-4 right-48 w-24 h-24 bg-[#222]/10 reveal opacity-0 translate-y-8 transition-all duration-700 delay-200"></div>
        <div className="absolute top-48 right-4 w-40 h-40 bg-[#222]/5 reveal opacity-0 translate-y-8 transition-all duration-700 delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Заголовок */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-8 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="w-2 h-2 rounded-full bg-[#e85d04]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#222]">
              Engineering & Construction
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] leading-[1.1] tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            Koz project is where<br />
            engineering precision<br />
            meets industrial scale.
          </h2>
        </div>

        {/* Партнеры */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#666] mb-8">
            
          </p>
          
          {/* Ряд 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center border-t border-[#222]/20 pt-8">
            {row1.map((file, i) => renderLogo(file, i))}
          </div>

          {/* Ряд 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center border-t border-[#222]/20 pt-8 mt-8">
            {row2.map((file, i) => renderLogo(file, i + 6))}
          </div>

          {/* Ряд 3 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center border-t border-b border-[#222]/20 py-8 mt-8">
            {row3.map((file, i) => renderLogo(file, i + 12))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;