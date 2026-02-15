import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Product', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
            <span className="text-[#e85d04]">◢</span>
            Ekvator
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-gray-400 hover:text-[#e85d04] hover:bg-[#1a1a1a] transition-all"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 Ekvator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
