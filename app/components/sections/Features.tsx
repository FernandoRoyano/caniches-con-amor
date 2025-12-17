'use client';

import { useState } from 'react';

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: "🔍",
      title: "Criadores Verificados",
      desc: "Acceso exclusivo a criadores éticos con genética responsable certificada",
      features: ['Verificación rigurosa', 'Certificados internacionales', 'Seguimiento continuo'],
      color: '#D4AF37',
      colorLight: '#E8D5B7'
    },
    {
      icon: "🧬",
      title: "Genética Premium",
      desc: "Análisis detallado para garantizar caniches sin enfermedades hereditarias",
      features: ['Estudios genéticos', 'Historial familiar', 'Garantía de salud'],
      color: '#D4AF37',
      colorLight: '#E8D5B7'
    },
    {
      icon: "🛡️",
      title: "Protección Total",
      desc: "Asesoría honesta y legal para evitar estafas y falsas promesas",
      features: ['Contratos verificados', 'Asesoría legal', 'Garantía vitalicia'],
      color: '#D4AF37',
      colorLight: '#E8D5B7'
    },
    {
      icon: "📚",
      title: "Contenido Exclusivo",
      desc: "Recursos premium: guías, videos y acceso a comunidad privada",
      features: ['Guías PDF descargables', 'Videos semanales', 'Comunidad VIP'],
      color: '#D4AF37',
      colorLight: '#E8D5B7'
    },
  ];

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
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
              ¿Por qué nosotros?
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Asesoría que marca la diferencia
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más de 500 familias ya encontraron su caniche ideal con garantía de calidad premium
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                hoveredIndex === null || hoveredIndex === index ? '' : 'opacity-40'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card premium */}
              <div
                className={`relative h-full rounded-2xl p-8 border-2 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'shadow-2xl transform -translate-y-2' 
                    : 'shadow-lg'
                }`}
                style={{
                  backgroundColor: '#1A1A1A',
                  borderColor: hoveredIndex === index ? '#D4AF37' : '#2D2D2D',
                }}
              >
                
                {/* Fondo degradado en hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
                  style={{
                    backgroundColor: '#D4AF37'
                  }}
                />

                {/* Icono grande con círculo de fondo */}
                <div
                  className={`relative mb-6 inline-block p-4 rounded-xl transition-all duration-500 border-2`}
                  style={{
                    backgroundColor: hoveredIndex === index ? '#D4AF37' : '#2D2D2D',
                    borderColor: '#D4AF37',
                    color: hoveredIndex === index ? '#1A1A1A' : '#D4AF37'
                  }}
                >
                  <span className="text-4xl">{feature.icon}</span>
                </div>

                {/* Línea decorativa superior */}
                <div
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r rounded-t-2xl transform origin-left transition-all duration-500"
                  style={{
                    width: hoveredIndex === index ? '100%' : '0%',
                    background: `linear-gradient(90deg, #D4AF37 0%, #B8860B 100%)`
                  }}
                />

                {/* Contenido */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {feature.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span
                        className="text-lg font-bold transition-all duration-500"
                        style={{
                          color: hoveredIndex === index ? '#D4AF37' : '#2D2D2D'
                        }}
                      >
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div
                  className="flex items-center text-sm font-semibold transition-all duration-500"
                  style={{
                    color: hoveredIndex === index ? '#D4AF37' : '#2D2D2D'
                  }}
                >
                  <span>Descubre más</span>
                  <span
                    className={`ml-2 transition-transform duration-500 ${
                      hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional - Garantías Premium */}
        <div 
          className="mt-20 pt-20 border-t"
          style={{ borderColor: '#2D2D2D' }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Garantías que te respaldan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "24/7",
                title: "Soporte Disponible",
                desc: "Respuestas rápidas a todas tus dudas en cualquier momento",
                icon: "📞"
              },
              {
                number: "100%",
                title: "Confidencial",
                desc: "Tu información y datos están completamente protegidos",
                icon: "🔐"
              },
              {
                number: "Vitalicia",
                title: "Garantía Premium",
                desc: "Apoyo continuo para tu caniche durante toda su vida",
                icon: "💎"
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl transition-all duration-300 group cursor-pointer border-2"
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
                <p className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                  {benefit.icon}
                </p>
                <p className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                  {benefit.number}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección CTA final */}
        <div
          className="mt-20 rounded-3xl p-12 text-center border-2"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
            borderColor: '#D4AF37'
          }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para garantizar calidad premium?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Únete a cientos de familias que confían en nuestra asesoría certificada
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              borderColor: '#B8860B',
              color: '#1A1A1A'
            }}
          >
            <span>👑 Comenzar Asesoría Premium</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
