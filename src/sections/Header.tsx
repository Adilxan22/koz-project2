import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

// --- Компонент переключения языков ---
const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('EN');
  const languages = ['EN', 'KZ', 'RU'];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <div key={lang} className="flex items-center">
          <button
            onClick={() => setCurrentLang(lang)}
            className={`text-sm font-bold tracking-wider transition-colors hover:text-white ${
              currentLang === lang 
                ? 'text-[#e85d04] drop-shadow-[0_0_8px_rgba(232,93,4,0.6)]' 
                : 'text-gray-500'
            }`}
          >
            {lang}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-700 text-sm mx-1.5">/</span>
          )}
        </div>
      ))}
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 py-3 shadow-lg shadow-black/20' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-8">
            
            {/* Лого */}
            <a 
              href="#home" 
              className="text-xl font-bold text-white uppercase tracking-[0.15em] hover:tracking-[0.2em] transition-all duration-300 flex-shrink-0"
              onClick={() => setActiveLink('Home')}
            >
              <span className="text-[#e85d04] drop-shadow-[0_0_8px_rgba(232,93,4,0.5)]">KOZ</span> Project
            </a>

            {/* Навигация */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 group ${
                    activeLink === link.name 
                      ? 'text-[#e85d04] drop-shadow-[0_0_8px_rgba(232,93,4,0.6)]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#e85d04] transition-all duration-300 shadow-[0_0_10px_#e85d04] ${
                    activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Пустое пространство */}
            <div className="flex-1"></div>

            {/* Правая часть */}
            <div className="hidden lg:flex items-center gap-8 flex-shrink-0">
              <LanguageSwitcher />
              
              {/* Локация - кликабельная ссылка на карту */}
              <a 
                href="https://maps.google.com/?q=Atyrau,Kazakhstan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
                title="Открыть в Google Maps"
              >
                <MapPin size={18} className="text-[#e85d04] drop-shadow-[0_0_8px_rgba(232,93,4,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(232,93,4,0.8)] transition-all" />
                <span className="tracking-wide border-b border-transparent group-hover:border-[#e85d04]/50 transition-colors">Atyrau, Kazakhstan</span>
              </a>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/77000000000"
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 font-bold text-sm shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-0.5 group"
                aria-label="Contact via WhatsApp"
              >
                <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full"></span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="relative z-10">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1-3.647-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 9.91 4.45 9.91 9.91 0 5.453-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="relative z-10 tracking-wide">WhatsApp</span>
              </a>
            </div>

            {/* Бургер */}
            <div className="lg:hidden flex-shrink-0">
              <button
                className="relative w-10 h-10 flex items-center justify-center text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute left-0 block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}></span>
                  <span className={`absolute left-0 block w-6 h-0.5 bg-white top-2 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute left-0 block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <div className={`relative h-full flex flex-col items-center justify-center px-6 transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <nav className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-3xl font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:scale-110 ${
                  activeLink === link.name 
                    ? 'text-[#e85d04] drop-shadow-[0_0_15px_rgba(232,93,4,0.6)]' 
                    : 'text-white hover:text-[#e85d04]'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)'
                }}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div 
            className="flex flex-col items-center gap-6"
            style={{ 
              transitionDelay: '400ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <LanguageSwitcher />
            
            {/* Мобильная локация - тоже кликабельная */}
            <a 
              href="https://maps.google.com/?q=Atyrau,Kazakhstan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 mt-4 hover:text-white transition-colors"
            >
              <MapPin size={24} className="text-[#e85d04] drop-shadow-[0_0_10px_rgba(232,93,4,0.5)]" />
              <span className="text-white tracking-wide border-b border-[#e85d04]/30">Atyrau, Kazakhstan</span>
            </a>
            
            <a 
              href="https://wa.me/77000000000"
              className="mt-6 bg-[#25D366] text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1-3.647-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 9.91 4.45 9.91 9.91 0 5.453-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;