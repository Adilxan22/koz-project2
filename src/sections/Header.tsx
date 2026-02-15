import { useState, useEffect } from 'react';
import { MapPin, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="text-[#e85d04]">◢</span>
          Ekvator
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link text-sm uppercase tracking-wider transition-colors ${
                link.active ? 'text-[#e85d04]' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin size={16} className="text-[#e85d04]" />
            <span>Australia, Victoria</span>
          </div>
          <a
            href="tel:+61407931770"
            className="btn-primary"
          >
            <Phone size={16} />
            +61 407 931 770
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 py-6 px-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider ${
                  link.active ? 'text-[#e85d04]' : 'text-gray-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <MapPin size={16} className="text-[#e85d04]" />
              <span>Australia, Victoria</span>
            </div>
            <a href="tel:+61407931770" className="btn-primary w-full justify-center">
              <Phone size={16} />
              +61 407 931 770
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
