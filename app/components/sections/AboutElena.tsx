'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AboutElena() {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const tabs = [
    { icon: '🎓', label: 'Certificaciones', id: 0 },
    { icon: '🏆', label: 'Logros', id: 1 },
    { icon: '💎', label: 'Especialidad', id: 2 },
    { icon: '🌟', label: 'Filosofía', id: 3 }
  ];

  const content: Record<number, { title: string; items: string[] }> = {
    0: {
      title: 'Certificaciones Profesionales',
      items: [
        'Certificada en Genética Canina Responsable',
        'Miembro de Asociaciones Internacionales de Criadores',
        'Experta en Salud y Bienestar de Caniches',
        'Asesor Certificado en Selección Genética',
        'Especialista en Comportamiento Canino Premium'
      ]
    },
    1: {
      title: 'Logros Verificables',
      items: [
        '+500 asesorías exitosas completadas',
        '98% de satisfacción en clientes',
        'Tasa de recomendación del 98%',
        '+15 años de experiencia en la raza',
        'Reconocida por asociaciones internacionales'
      ]
    },
    2: {
      title: 'Especialidad Única',
      items: [
        'Selección y asesoría de caniches toy premium',
        'Análisis genético y prevención de enfermedades hereditarias',
        'Verificación de criadores con estándares internacionales',
        'Acompañamiento vitalicio desde la selección',
        'Educación especializada para propietarios premium'
      ]
    },
    3: {
      title: 'Mi Visión',
      items: [
        'No vendo caniches, apadrino compañeros de vida',
        'Ética absoluta en cada decisión profesional',
        'La calidad siempre supera la cantidad',
        'Cada caniche merece un hogar perfecto',
        'El bienestar del perro es mi prioridad absoluta'
      ]
    }
  };

  const currentContent = content[hoveredTab ?? 0];

  return (
    <section id="sobre-elena" className="py-20 overflow-hidden" style={{ backgroundColor: '#0F0F0F', paddingTop: '100px' }}>
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
              👑 La Experta
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Elena: 15+ años
            <span className="block text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)'
            }}>
              protegiendo caniches
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Certificada, verificada y reconocida internacionalmente. Mi misión: garantizar que tu caniche sea el resultado de crianza ética y genética responsable.
          </p>
        </div>

        {/* Grid: Imagen + Historia breve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Lado izquierdo - Imagen REAL de Elena */}
          <div className="relative">
            
            <div 
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30 -z-10"
              style={{
                background: 'linear-gradient(135deg, #2D2D2D 0%, #D4AF37 50%, transparent 100%)'
              }}
            />
            
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl transform rotate-6 blur-sm opacity-40"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #2D2D2D 100%)'
                }}
              />
              
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl" style={{ border: '3px solid #D4AF37' }}>
                
                <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
                  <Image
                    src="/elena-caniches.jpg"
                    alt="Elena - Experta en Caniches Premium"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>

                <div 
                  className="absolute bottom-6 right-6 rounded-full px-6 py-4 shadow-2xl backdrop-blur-sm border-3"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderColor: '#D4AF37'
                  }}
                >
                  <p className="text-lg font-bold text-white">Elena 👑</p>
                  <p className="text-sm" style={{ color: '#D4AF37' }}>Fundadora</p>
                </div>

                <div 
                  className="absolute top-6 left-6 rounded-full w-16 h-16 shadow-lg flex items-center justify-center border-3"
                  style={{
                    backgroundColor: '#D4AF37',
                    borderColor: '#B8860B'
                  }}
                >
                  <span className="text-3xl">✓</span>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl opacity-30 animate-bounce"
                style={{ backgroundColor: '#D4AF37' }}
              />
              <div 
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20 animate-pulse"
                style={{ backgroundColor: '#2D2D2D' }}
              />
            </div>
          </div>

          {/* Lado derecho - Historia */}
          <div className="space-y-8">
            
            <div 
              className="p-6 rounded-2xl border-l-4"
              style={{
                backgroundColor: '#1A1A1A',
                borderLeftColor: '#D4AF37'
              }}
            >
              <p className="text-xl font-bold text-white mb-3">
                ¿Por qué confiar en mí?
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                He visto familias llorar por caniches enfermos. He investigado estafas. He verificado genéticas falsas. Por eso dedico cada día a garantizar que eso no te suceda.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Mi Camino</h3>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  <strong style={{ color: '#D4AF37' }}>Hace 15+ años:</strong> Mi primer caniche cambió mi perspectiva sobre lo que significa tener un compañero de vida premium.
                </p>
                <p>
                  <strong style={{ color: '#D4AF37' }}>En el camino:</strong> Decidí certificarme en genética, verificación de criadores y salud preventiva de la raza.
                </p>
                <p>
                  <strong style={{ color: '#D4AF37' }}>Hoy:</strong> He ayudado a +500 familias a encontrar su caniche ideal con garantía de calidad que persiste de por vida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-20">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setHoveredTab(tab.id)}
                className="p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: hoveredTab === tab.id ? '#2D2D2D' : '#1A1A1A',
                  borderColor: hoveredTab === tab.id ? '#D4AF37' : '#2D2D2D'
                }}
              >
                <p className="text-3xl mb-2">{tab.icon}</p>
                <p className="text-white font-semibold text-sm">{tab.label}</p>
              </button>
            ))}
          </div>

          <div
            className="p-8 lg:p-12 rounded-2xl border-2"
            style={{
              backgroundColor: '#1A1A1A',
              borderColor: '#D4AF37'
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ color: '#D4AF37' }}>
              {currentContent.title}
            </h3>
            <ul className="space-y-4">
              {currentContent.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: '#2D2D2D',
                    borderLeft: '3px solid #D4AF37'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3D3D3D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D2D2D';
                  }}
                >
                  <span className="text-2xl mt-1" style={{ color: '#D4AF37' }}>✓</span>
                  <span className="text-gray-300 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Los 5 pilares */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Los 5 pilares de mi asesoría
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { number: '1', icon: '❤️', title: 'Amor', desc: 'Pasión genuina por los caniches' },
              { number: '2', icon: '🧬', title: 'Genética', desc: 'Responsabilidad en la selección' },
              { number: '3', icon: '🔍', title: 'Verificación', desc: 'Transparencia total' },
              { number: '4', icon: '🛡️', title: 'Protección', desc: 'Garantía vitalicia' },
              { number: '5', icon: '🌟', title: 'Excelencia', desc: 'Solo calidad premium' }
            ].map((pilar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 text-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
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
                <div className="flex items-center justify-center gap-2 mb-3">
                  <p className="text-2xl" style={{ color: '#D4AF37' }}>{pilar.number}</p>
                  <p className="text-4xl">{pilar.icon}</p>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pilar.title}</h4>
                <p className="text-gray-400 text-sm">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div
          className="rounded-3xl p-12 text-center border-2"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
            borderColor: '#D4AF37'
          }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Conecta con Elena directamente
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Habla con la experta y descubre cómo encontrar tu caniche ideal
          </p>
          <a
            href="https://wa.me/c/34680541997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              borderColor: '#B8860B',
              color: '#1A1A1A'
            }}
          >
            <span>💬 Hablar con Elena</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
