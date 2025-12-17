'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Aquí iría la integración con EmailJS
    console.log('Formulario enviado:', formData);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              📞 Ponte en Contacto
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Hablemos de tu caniche ideal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Elena responde personalmente cada consulta. Completa el formulario y te contactaremos en menos de 24 horas
          </p>
        </div>

        {/* Grid: Formulario + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formulario - 2 columnas */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Fila 1: Nombre y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-3 text-sm">
                    Tu nombre <span style={{ color: '#D4AF37' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="María García"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 focus:outline-none"
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderColor: '#2D2D2D',
                      color: '#F5F5F5'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4AF37';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2D2D2D';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3 text-sm">
                    Tu email <span style={{ color: '#D4AF37' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 focus:outline-none"
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderColor: '#2D2D2D',
                      color: '#F5F5F5'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D4AF37';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#2D2D2D';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-white font-semibold mb-3 text-sm">
                  Asunto <span style={{ color: '#D4AF37' }}>*</span>
                </label>
                <input
                  type="text"
                  name="asunto"
                  placeholder="Ej: Quiero un caniche toy de calidad"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 focus:outline-none"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#2D2D2D',
                    color: '#F5F5F5'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#D4AF37';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#2D2D2D';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-white font-semibold mb-3 text-sm">
                  Tu mensaje <span style={{ color: '#D4AF37' }}>*</span>
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntame sobre lo que buscas en tu caniche ideal..."
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 focus:outline-none resize-none"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#2D2D2D',
                    color: '#F5F5F5'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#D4AF37';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#2D2D2D';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2"
                style={{
                  background: loading ? '#B8860B' : 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                  borderColor: '#B8860B',
                  color: '#1A1A1A',
                  opacity: loading ? 0.8 : 1
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block animate-spin">⏳</span>
                    Enviando tu mensaje...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>✉️</span>
                    Enviar Mensaje Premium
                  </span>
                )}
              </button>

              {/* Mensaje de éxito */}
              {success && (
                <div
                  className="p-4 rounded-xl border-2 animate-pulse"
                  style={{
                    backgroundColor: '#2D2D2D',
                    borderColor: '#D4AF37'
                  }}
                >
                  <p className="text-white font-semibold text-center">
                    <span style={{ color: '#D4AF37' }}>✓</span> ¡Mensaje enviado! Elena te contactará pronto
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Info de contacto - 1 columna */}
          <div className="space-y-6">
            
            {/* Tarjeta: WhatsApp directo */}
            <a
              href="https://wa.me/c/34680541997"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
              <p className="text-3xl mb-3">💬</p>
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp Directo</h3>
              <p className="text-gray-400 text-sm mb-3">
                Habla con Elena en tiempo real
              </p>
              <p style={{ color: '#D4AF37' }} className="font-semibold text-sm">
                Respuesta en &lt;5 minutos →
              </p>
            </a>

            {/* Tarjeta: Horarios */}
            <div
              className="p-6 rounded-2xl border-2"
              style={{
                backgroundColor: '#1A1A1A',
                borderColor: '#D4AF37'
              }}
            >
              <p className="text-2xl mb-3">🕐</p>
              <h3 className="text-lg font-bold text-white mb-3">Horarios de Atención</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <strong style={{ color: '#D4AF37' }}>9:00 - 20:00</strong>
                </li>
                <li className="flex justify-between">
                  <span>Sábado - Domingo:</span>
                  <strong style={{ color: '#D4AF37' }}>10:00 - 18:00</strong>
                </li>
              </ul>
            </div>

            {/* Tarjeta: Respuesta garantizada */}
            <div
              className="p-6 rounded-2xl border-2"
              style={{
                backgroundColor: '#1A1A1A',
                borderColor: '#2D2D2D'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2D2D2D';
              }}
            >
              <p className="text-2xl mb-3">⭐</p>
              <h3 className="text-lg font-bold text-white mb-3">Garantía</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  Respuesta en &lt;24h
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  Asesoría 100% confidencial
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#D4AF37' }}>✓</span>
                  Sin compromisos
                </li>
              </ul>
            </div>

            {/* Tarjeta: FAQ rápida */}
            <div
              className="p-6 rounded-2xl border-2"
              style={{
                backgroundColor: '#1A1A1A',
                borderColor: '#2D2D2D'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D4AF37';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2D2D2D';
              }}
            >
              <p className="text-2xl mb-3">❓</p>
              <h3 className="text-lg font-bold text-white mb-3">Preguntas Frecuentes</h3>
              <a href="#" className="text-sm transition-colors" style={{ color: '#D4AF37' }}>
                Ver todas las preguntas →
              </a>
            </div>
          </div>
        </div>

        {/* Nota de privacidad */}
        <div className="mt-12 pt-12 border-t text-center" style={{ borderColor: '#2D2D2D' }}>
          <p className="text-gray-400 text-sm">
            <span style={{ color: '#D4AF37' }}>🔐</span> Tu información está completamente protegida • 
            <a href="#" className="hover:text-white transition-colors ml-1" style={{ color: '#D4AF37' }}>
              Política de privacidad
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
