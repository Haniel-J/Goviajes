import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 border-t-8 border-[#8b1f3b]">
        <h1 className="text-3xl font-bold text-[#8b1f3b] mb-4 text-center">Sobre Nosotros</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          En <span className="font-semibold text-[#8b1f3b]">GoViaje</span> somos un equipo apasionado por los viajes y las experiencias únicas. 
          Nuestra misión es ayudarte a descubrir destinos increíbles y vivir aventuras inolvidables, siempre con la mejor atención y confianza.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
          <div className="flex-1 text-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
              alt="Equipo GoViaje"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2 border-4 border-[#8b1f3b]"
            />
            <h2 className="text-xl font-semibold text-[#8b1f3b]">Nuestro Equipo</h2>
            <p className="text-gray-600 text-sm">
              Profesionales dedicados a planear tu viaje ideal.
            </p>
          </div>
          <div className="flex-1 text-center">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80"
              alt="Experiencia"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2 border-4 border-[#8b1f3b]"
            />
            <h2 className="text-xl font-semibold text-[#8b1f3b]">Nuestra Experiencia</h2>
            <p className="text-gray-600 text-sm">
              Más de 10 años creando recuerdos para nuestros viajeros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}