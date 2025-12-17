'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre Elena', href: '#sobre-elena' },
    { label: 'Servicios', href: '#features' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  const goldGradient = {
    background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)'
  };

  const goldLine = {
    backgroundColor: '#D4AF37'
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-2xl py-3'
          : 'backdrop-blur-sm py-4'
      }`}
      style={{
        backgroundColor: isScrolled ? '#1A1A1A' : '#1A1A1AE8'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - MINIMALISTA */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
              👑
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-none">
                Caniches
              </h1>
              <p className="text-xs font-semibold" style={{ color: '#D4AF37' }}>
                Premium
              </p>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-gray-300 font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={goldLine}
                />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden sm:inline-flex px-6 py-2.5 text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-yellow-400"
              style={goldGradient}
            >
              Contactar
            </a>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
              style={{ color: '#F5F5F5' }}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navegación Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t transition-all duration-300" style={{ borderColor: '#690505' }}>
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: '#1A1A1A20'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#690505';
                    e.currentTarget.style.color = '#F5F5F5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A1A1A20';
                    e.currentTarget.style.color = '#D1D5DB';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="block px-4 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mt-2"
                style={goldGradient}
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Línea dorada en el fondo */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
        style={{
          background: isScrolled 
            ? 'linear-gradient(90deg, transparent, #D4AF37 20%, #D4AF37 80%, transparent)' 
            : 'transparent'
        }}
      />
    </header>
  );
}
