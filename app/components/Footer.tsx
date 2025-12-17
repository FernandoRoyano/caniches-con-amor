'use client';

import { useState } from 'react';

export default function Footer() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <footer style={{ backgroundColor: '#0F0F0F', borderTopColor: '#D4AF37' }} className="border-t-2">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Grid: 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding */}
          <div
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSection(0)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                👑
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-none">
                  Caniches con Amor
                </h3>
                <p className="text-xs font-semibold" style={{ color: '#D4AF37' }}>
                  Asesoría Premium
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Asesoría experta basada en ética, genética responsable y amor profundo por los caniches de calidad.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-4">
              {[
                { icon: '📱', label: 'Instagram', href: '#' },
                { icon: '💬', label: 'WhatsApp', href: '#' },
                { icon: '🎵', label: 'TikTok', href: '#' },
                { icon: '▶️', label: 'YouTube', href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-2xl transition-all duration-300 transform hover:scale-125"
                  style={{
                    color: hoveredSection === 0 ? '#D4AF37' : '#F5F5F5'
                  }}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSection(1)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 className="font-bold text-white text-lg mb-6 pb-3" style={{ borderBottom: '2px solid #D4AF37' }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre Elena', href: '#sobre-elena' },
                { label: 'Testimonios', href: '#testimonios' },
                { label: 'Comunidad', href: '#comunidad' },
                { label: 'Newsletter', href: '#newsletter' },
                { label: 'Contacto', href: '#contacto' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span 
                      className="transform group-hover:translate-x-2 transition-transform"
                      style={{
                        color: hoveredSection === 1 ? '#D4AF37' : 'transparent'
                      }}
                    >
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSection(2)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 className="font-bold text-white text-lg mb-6 pb-3" style={{ borderBottom: '2px solid #D4AF37' }}>
              Recursos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog Premium', href: '#' },
                { label: 'Guías Descargables', href: '#' },
                { label: 'Preguntas Frecuentes', href: '#' },
                { label: 'Comunidad VIP', href: '#comunidad' },
                { label: 'Soporte 24/7', href: '#contacto' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span 
                      className="transform group-hover:translate-x-2 transition-transform"
                      style={{
                        color: hoveredSection === 2 ? '#D4AF37' : 'transparent'
                      }}
                    >
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div
            className="transition-all duration-300"
            onMouseEnter={() => setHoveredSection(3)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h4 className="font-bold text-white text-lg mb-6 pb-3" style={{ borderBottom: '2px solid #D4AF37' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Política de Privacidad', href: '#' },
                { label: 'Términos de Servicio', href: '#' },
                { label: 'Política de Cookies', href: '#' },
                { label: 'Aviso Legal', href: '#' },
                { label: 'Contacto Soporte', href: '#contacto' }
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span 
                      className="transform group-hover:translate-x-2 transition-transform"
                      style={{
                        color: hoveredSection === 3 ? '#D4AF37' : 'transparent'
                      }}
                    >
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Premium en footer */}
        <div
          className="rounded-2xl p-8 text-center mb-16 border-2"
          style={{
            backgroundColor: '#1A1A1A',
            borderColor: '#D4AF37'
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Aún no eres parte de la élite?
          </h3>
          <p className="text-gray-400 mb-6">
            Únete a cientos de dueños de caniches premium y recibe asesoría exclusiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#newsletter"
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                borderColor: '#B8860B',
                color: '#1A1A1A'
              }}
            >
              📧 Suscribirse
            </a>
            <a
              href="https://wa.me/c/34680541997"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{
                backgroundColor: '#2D2D2D',
                borderColor: '#D4AF37',
                color: '#F5F5F5'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
                e.currentTarget.style.color = '#1A1A1A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2D2D';
                e.currentTarget.style.color = '#F5F5F5';
              }}
            >
              💬 WhatsApp Directo
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #2D2D2D' }} className="mb-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm">
              &copy; 2025 Caniches con Amor. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Hecho con <span style={{ color: '#D4AF37' }}>❤️</span> para los amantes de los caniches premium
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center gap-6">
            {[
              { emoji: '🔐', label: '100% Seguro' },
              { emoji: '✓', label: 'Verificado' },
              { emoji: '⭐', label: 'Premium' }
            ].map((badge, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <p className="text-2xl group-hover:scale-125 transition-transform">{badge.emoji}</p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>

          {/* Stats finales */}
          <div className="text-right">
            <div className="space-y-1">
              <p className="text-sm text-gray-400">
                <strong style={{ color: '#D4AF37' }}>500+</strong> familias satisfechas
              </p>
              <p className="text-sm text-gray-400">
                <strong style={{ color: '#D4AF37' }}>4.9/5</strong> calificación promedio
              </p>
              <p className="text-sm text-gray-400">
                <strong style={{ color: '#D4AF37' }}>15+</strong> años de experiencia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top scroll button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 border-2 hidden lg:flex items-center justify-center"
          style={{
            backgroundColor: '#D4AF37',
            borderColor: '#B8860B',
            color: '#1A1A1A'
          }}
          title="Volver arriba"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
