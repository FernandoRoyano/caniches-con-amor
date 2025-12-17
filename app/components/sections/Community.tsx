'use client';

import { useState } from 'react';

export default function Community() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: '👥',
      title: 'Comunidad Privada VIP',
      desc: 'Acceso exclusivo a dueños comprometidos con la calidad premium',
      features: ['Grupo cerrado y verificado', '+500 miembros activos', 'Moderación experta 24/7'],
      delay: '0'
    },
    {
      icon: '🎓',
      title: 'Soporte de Expertos',
      desc: 'Consultas directas con respuestas en menos de 1 hora garantizado',
      features: ['Respuestas en <1 hora', 'Asesoría personalizada', 'Seguimiento vitalicio'],
      delay: '100'
    },
    {
      icon: '📚',
      title: 'Contenido Premium',
      desc: 'Recursos exclusivos que no encontrarás en ningún otro lado',
      features: ['Videos semanales HD', 'Guías PDF premium descargables', 'Actualizaciones en tiempo real'],
      delay: '200'
    },
  ];

  return (
    <section id="comunidad" className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span 
              className="px-4 py-2 text-white rounded-full text-sm font-semibold border"
              style={{
                borderColor: '#D4AF37',
                backgroundColor: '#1A1A1A'
              }}
            >
              👥 Únete a la Élite
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Donde los amantes de los caniches se reúnen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más que un grupo, es una familia exclusiva. Comparte experiencias, aprende de expertos y crece con otros dueños apasionados
          </p>
        </div>

        {/* CTA Principal Premium */}
        <div className="text-center mb-16">
          <a
            href="https://chat.whatsapp.com/TU_LINK_GRUPO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 text-white font-bold text-lg rounded-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group border-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              borderColor: '#B8860B',
              color: '#1A1A1A'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="text-3xl group-hover:animate-bounce">💬</span>
            <span>Unirse al Grupo Premium de WhatsApp</span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <p className="text-sm text-gray-400 mt-4">
            <strong style={{ color: '#D4AF37' }}>✓ Acceso inmediato</strong> • Sin costo • Comunidad activa 24/7 • Verificación rigurosa
          </p>
        </div>

        {/* Tarjetas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                hoveredCard === null || hoveredCard === index ? '' : 'opacity-40 scale-95'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              {/* Card Premium */}
              <div
                className={`relative h-full rounded-2xl p-8 border-2 transition-all duration-500 overflow-hidden ${
                  hoveredCard === index 
                    ? 'shadow-2xl transform -translate-y-2' 
                    : 'shadow-lg'
                }`}
                style={{
                  backgroundColor: '#1A1A1A',
                  borderColor: hoveredCard === index ? '#D4AF37' : '#2D2D2D'
                }}
              >
                
                {/* Fondo degradado en hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #2D2D2D 100%)'
                  }}
                />

                {/* Icono grande */}
                <div
                  className={`relative mb-6 inline-block p-4 rounded-xl transition-all duration-500 border-2`}
                  style={{
                    backgroundColor: hoveredCard === index ? '#D4AF37' : '#2D2D2D',
                    borderColor: '#D4AF37',
                    color: hoveredCard === index ? '#1A1A1A' : '#D4AF37'
                  }}
                >
                  <span className="text-4xl">{benefit.icon}</span>
                </div>

                {/* Línea decorativa */}
                <div
                  className="absolute top-0 left-0 h-1 rounded-t-2xl transform origin-left transition-all duration-500"
                  style={{
                    width: hoveredCard === index ? '100%' : '0%',
                    background: 'linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)'
                  }}
                />

                {/* Contenido */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {benefit.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span
                        className="text-lg font-bold transition-all duration-500"
                        style={{
                          color: hoveredCard === index ? '#D4AF37' : '#2D2D2D'
                        }}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div
                  className="flex items-center text-sm font-semibold transition-all duration-500"
                  style={{
                    color: hoveredCard === index ? '#D4AF37' : '#2D2D2D'
                  }}
                >
                  <span>Descubre más</span>
                  <span
                    className={`ml-2 transition-transform duration-500 ${
                      hoveredCard === index ? 'translate-x-2' : 'translate-x-0'
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Social Proof */}
        <div 
          className="rounded-3xl p-12 border-2 mb-20"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 20%, #1A1A1A 100%)',
            borderColor: '#D4AF37'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Miembros Verificados', icon: '👥' },
              { number: '24/7', label: 'Soporte Premium', icon: '📞' },
              { number: '98%', label: 'Recomendación', icon: '⭐' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-5xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  {stat.number}
                </p>
                <p className="text-gray-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonios mini */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Lo que dicen los miembros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "La comunidad me salvó cuando tuve problemas con la salud de mi caniche. ¡Respuestas en minutos!",
                author: "Ana G.",
                rating: 5
              },
              {
                text: "Nunca imaginé encontrar un grupo tan comprometido. Aprendemos juntos cada día sin parar.",
                author: "Roberto M.",
                rating: 5
              },
              {
                text: "Los contenidos exclusivos valen más que oro. ¡100% recomendado para quien busca calidad!",
                author: "Laura P.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="rounded-xl p-6 hover:shadow-lg transition-shadow border-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: '#1A1A1A',
                  borderColor: '#2D2D2D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.backgroundColor = '#2D2D2D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D2D2D';
                  e.currentTarget.style.backgroundColor = '#1A1A1A';
                }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-white text-sm" style={{ color: '#D4AF37' }}>— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Final - Premium */}
        <div 
          className="rounded-3xl p-12 text-center shadow-2xl overflow-hidden relative border-2"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
            borderColor: '#D4AF37'
          }}
        >
          
          {/* Elementos decorativos */}
          <div 
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
            style={{ backgroundColor: '#D4AF37' }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Listo para formar parte de la élite?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Únete a cientos de dueños de caniches premium que ya están compartiendo experiencias, 
              aprendiendo de expertos y protegiéndose mutuamente con garantía de calidad
            </p>
            <a
              href="https://chat.whatsapp.com/TU_LINK_GRUPO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                borderColor: '#B8860B',
                color: '#1A1A1A'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="text-2xl">💬</span>
              <span>Unirme Ahora a la Comunidad Premium</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
