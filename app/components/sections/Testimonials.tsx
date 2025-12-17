'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonios = [
    {
      nombre: "María García",
      ciudad: "Madrid",
      imagen: "👩‍🦰",
      role: "Dueña de Max",
      texto: "Gracias a Elena encontré mi caniche ideal. Max es perfectamente saludable y con carácter increíble. La experiencia fue impecable de principio a fin.",
      stars: 5,
      highlight: "Salud garantizada",
      caniches: 1,
      verified: true
    },
    {
      nombre: "Carlos López",
      ciudad: "Barcelona",
      imagen: "👨",
      role: "Criador Certificado",
      texto: "La mejor inversión fue hacer la asesoría primero. Evité muchos problemas hereditarios que hubiera cometido. Ahora crío con confianza total.",
      stars: 5,
      highlight: "Asesoría experta",
      caniches: 3,
      verified: true
    },
    {
      nombre: "Patricia Rodríguez",
      ciudad: "Valencia",
      imagen: "👩",
      role: "Dueña de Luna y Bella",
      texto: "La comunidad privada es excepcional. Siempre hay alguien dispuesto a ayudar. He aprendido más aquí que en cualquier otro lugar. ¡Totalmente recomendado!",
      stars: 5,
      highlight: "Comunidad VIP",
      caniches: 2,
      verified: true
    },
    {
      nombre: "David Martínez",
      ciudad: "Sevilla",
      imagen: "👨‍💼",
      role: "Empresario",
      texto: "Buscaba un caniche para compañía y terminé encontrando mucho más. La asesoría cambió mi perspectiva sobre qué significa tener un perro de raza premium.",
      stars: 5,
      highlight: "Cambio de vida",
      caniches: 1,
      verified: true
    },
  ];

  // Auto-play del carrusel
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonios.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonios.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false);
  };

  const currentTestimonial = testimonios[currentSlide];

  return (
    <section id="testimonios" className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
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
              Historias de Éxito
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más de 500 familias han transformado sus vidas encontrando su compañero ideal con garantía premium
          </p>
        </div>

        {/* Carrusel Principal */}
        <div className="relative mb-8">
          <div 
            className="rounded-3xl shadow-2xl overflow-hidden border-2"
            style={{
              backgroundColor: '#1A1A1A',
              borderColor: '#D4AF37'
            }}
          >
            
            {/* Contenido del testimonio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Lado izquierdo - Contenido */}
              <div 
                className="p-8 lg:p-12 flex flex-col justify-center"
                style={{ backgroundColor: '#1A1A1A' }}
              >
                
                {/* Estrellas */}
                <div className="mb-6 flex items-center gap-1">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-500 animate-bounce"
                      style={{ animationDelay: `${i * 100}ms` }}>
                      ⭐
                    </span>
                  ))}
                  <span className="ml-3 text-sm text-green-400 font-semibold">Verificado</span>
                </div>

                {/* Texto del testimonio */}
                <p className="text-xl lg:text-2xl text-gray-100 font-medium mb-8 leading-relaxed italic">
                  "{currentTestimonial.texto}"
                </p>

                {/* Información del cliente */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-6xl">{currentTestimonial.imagen}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {currentTestimonial.nombre}
                    </h3>
                    <p className="text-sm text-gray-400">{currentTestimonial.role}</p>
                    <p className="text-xs" style={{ color: '#D4AF37' }}>
                      📍 {currentTestimonial.ciudad}
                    </p>
                  </div>
                </div>

                {/* Highlight */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit border-2"
                  style={{
                    borderColor: '#D4AF37',
                    backgroundColor: '#1A1A1A'
                  }}
                >
                  <span className="text-lg" style={{ color: '#D4AF37' }}>✨</span>
                  <span className="text-sm font-semibold text-white">
                    {currentTestimonial.highlight}
                  </span>
                </div>
              </div>

              {/* Lado derecho - Stats y Visual */}
              <div 
                className="p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
                  borderLeft: '3px solid #D4AF37'
                }}
              >
                
                {/* Elementos decorativos */}
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"
                  style={{ backgroundColor: '#D4AF37' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
                  style={{ backgroundColor: '#D4AF37' }}
                />

                {/* Contenido */}
                <div className="relative z-10 space-y-8">
                  
                  {/* Número de caniches */}
                  <div>
                    <p className="text-5xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                      {currentTestimonial.caniches}
                    </p>
                    <p className="text-gray-300 font-medium">
                      Caniche(s) con nuestra asesoría
                    </p>
                  </div>

                  {/* Badges de confianza */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border-2"
                        style={{
                          backgroundColor: '#D4AF37',
                          borderColor: '#B8860B',
                          color: '#1A1A1A'
                        }}
                      >
                        ✓
                      </div>
                      <span className="text-gray-300 font-medium">Genética verificada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border-2"
                        style={{
                          backgroundColor: '#D4AF37',
                          borderColor: '#B8860B',
                          color: '#1A1A1A'
                        }}
                      >
                        ✓
                      </div>
                      <span className="text-gray-300 font-medium">Sin problemas hereditarios</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border-2"
                        style={{
                          backgroundColor: '#D4AF37',
                          borderColor: '#B8860B',
                          color: '#1A1A1A'
                        }}
                      >
                        ✓
                      </div>
                      <span className="text-gray-300 font-medium">Apoyo vitalicio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones Navegación */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full text-white hover:shadow-2xl shadow-lg transform hover:scale-110 transition-all duration-300 border-2"
              aria-label="Testimonio anterior"
              style={{
                backgroundColor: '#D4AF37',
                borderColor: '#B8860B',
                color: '#1A1A1A'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8860B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full text-white hover:shadow-2xl shadow-lg transform hover:scale-110 transition-all duration-300 border-2"
              aria-label="Siguiente testimonio"
              style={{
                backgroundColor: '#D4AF37',
                borderColor: '#B8860B',
                color: '#1A1A1A'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8860B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="mt-24 flex justify-center gap-3 mb-12">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 rounded-full"
              aria-label={`Ir al testimonio ${index + 1}`}
              style={{
                backgroundColor: index === currentSlide ? '#D4AF37' : '#2D2D2D',
                width: index === currentSlide ? '32px' : '12px',
                height: '12px',
                border: '2px solid #D4AF37'
              }}
            />
          ))}
        </div>

        {/* Grid de miniatura de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonios.map((t, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 text-left"
              style={{
                backgroundColor: i === currentSlide ? '#2D2D2D' : '#1A1A1A',
                borderColor: i === currentSlide ? '#D4AF37' : '#2D2D2D'
              }}
              onMouseEnter={(e) => {
                if (i !== currentSlide) {
                  e.currentTarget.style.borderColor = '#D4AF37';
                }
              }}
              onMouseLeave={(e) => {
                if (i !== currentSlide) {
                  e.currentTarget.style.borderColor = '#2D2D2D';
                }
              }}
            >
              <div className="text-4xl mb-3">{t.imagen}</div>
              <h3 className="font-bold text-white text-sm mb-1">{t.nombre}</h3>
              <p className="text-xs text-gray-400 mb-3">{t.role}</p>
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-yellow-500 text-xs">⭐</span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Sección final - Estadísticas Premium */}
        <div className="mt-20 pt-20" style={{ borderTop: '2px solid #2D2D2D' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Clientes Satisfechos' },
              { number: '4.9/5', label: 'Calificación Promedio' },
              { number: '98%', label: 'Tasa de Recomendación' },
              { number: '15+', label: 'Años de Experiencia' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
