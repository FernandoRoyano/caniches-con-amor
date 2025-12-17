'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Aquí iría la integración con MailerLite
    console.log('Email a suscribir:', email);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal */}
        <div
          className="rounded-3xl p-12 lg:p-16 text-center border-2 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
            borderColor: '#D4AF37'
          }}
        >
          
          {/* Elementos decorativos de fondo */}
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
            style={{ backgroundColor: '#D4AF37' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
            style={{ backgroundColor: '#D4AF37' }}
          />

          {/* Contenido */}
          <div className="relative z-10">
            
            {/* Icono/Badge superior */}
            <div className="inline-block mb-6">
              <div
                className="p-4 rounded-2xl border-2"
                style={{
                  backgroundColor: '#D4AF37',
                  borderColor: '#B8860B',
                  color: '#1A1A1A'
                }}
              >
                <span className="text-4xl">📧</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Recibe guías
              <span className="block text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)'
              }}>
                exclusivas premium
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Suscríbete y obtén acceso inmediato a contenido exclusivo sobre 
              <strong style={{ color: '#D4AF37' }}> salud, alimentación, convivencia, educación y cuidados premium</strong> de caniches
            </p>

            {/* Puntos de valor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { icon: '✓', text: 'Guías PDF descargables' },
                { icon: '✓', text: 'Videos semanales HD' },
                { icon: '✓', text: 'Actualizaciones en tiempo real' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg transition-all duration-300 border-2"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#2D2D2D'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D2D2D';
                    e.currentTarget.style.borderColor = '#D4AF37';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A1A1A';
                    e.currentTarget.style.borderColor = '#2D2D2D';
                  }}
                >
                  <p className="text-white font-semibold">
                    <span style={{ color: '#D4AF37' }} className="mr-2">{item.icon}</span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Formulario de suscripción */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 border-2 focus:outline-none"
                style={{
                  backgroundColor: '#1A1A1A',
                  borderColor: '#2D2D2D',
                  color: '#F5F5F5'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#2D2D2D';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 whitespace-nowrap"
                style={{
                  background: loading ? '#B8860B' : 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                  borderColor: '#B8860B',
                  color: '#1A1A1A',
                  opacity: loading ? 0.8 : 1
                }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block animate-spin">⏳</span>
                    Suscribiendo...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>🚀</span>
                    Suscribirse
                  </span>
                )}
              </button>
            </form>

            {/* Mensaje de éxito */}
            {success && (
              <div
                className="p-4 rounded-xl mb-6 border-2 animate-pulse"
                style={{
                  backgroundColor: '#2D2D2D',
                  borderColor: '#D4AF37'
                }}
              >
                <p className="text-white font-semibold">
                  <span style={{ color: '#D4AF37' }}>✓</span> ¡Gracias! Revisa tu correo para confirmar
                </p>
              </div>
            )}

            {/* Nota de privacidad */}
            <p className="text-sm text-gray-400">
              <span style={{ color: '#D4AF37' }}>🔐 Privacidad garantizada</span> • No compartimos tu información • 
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#D4AF37' }}>
                {' '}Política de privacidad
              </a>
            </p>

            {/* Beneficios adicionales */}
            <div className="mt-12 pt-12 border-t" style={{ borderColor: '#2D2D2D' }}>
              <p className="text-gray-400 mb-6">
                <strong style={{ color: '#F5F5F5' }}>Qué recibirás cada semana:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { emoji: '🧬', text: 'Análisis genético y selección de criadores' },
                  { emoji: '🏥', text: 'Guía de salud preventiva y cuidados premium' },
                  { emoji: '🎓', text: 'Tips de educación y entrenamiento avanzado' },
                  { emoji: '💎', text: 'Acceso prioritario a ofertas exclusivas' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border-2" 
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
                    <span className="text-2xl">{benefit.emoji}</span>
                    <span className="text-white font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats de confianza */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { number: '5000+', label: 'Suscriptores' },
            { number: '98%', label: 'Tasa de Apertura' },
            { number: '⭐⭐⭐⭐⭐', label: 'Satisfacción' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                {stat.number}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
