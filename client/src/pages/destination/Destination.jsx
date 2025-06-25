import React from "react";
import { Plane, Train, Bus, Ship } from "lucide-react";

const destinos = [
  // Vuelos
  { nombre: "De México a Cancún", icono: <Plane className="w-5 h-5" />, tipo: "Vuelo" },
  { nombre: "De México a Los Cabos", icono: <Plane className="w-5 h-5" />, tipo: "Vuelo" },
  { nombre: "De México a Cancún", icono: <Plane className="w-5 h-5" />, tipo: "Vuelo" },
  { nombre: "De México a Los Cabos", icono: <Plane className="w-5 h-5" />, tipo: "Vuelo" },
  // Trenes
  { nombre: "De México a Cancún", icono: <Train className="w-5 h-5" />, tipo: "Tren" },
  { nombre: "De México a Los Cabos", icono: <Train className="w-5 h-5" />, tipo: "Tren" },
  { nombre: "De México a Cancún", icono: <Train className="w-5 h-5" />, tipo: "Tren" },
  { nombre: "De México a Los Cabos", icono: <Train className="w-5 h-5" />, tipo: "Tren" },
  // Autobuses
  { nombre: "De México a Cancún", icono: <Bus className="w-5 h-5" />, tipo: "Autobús" },
  { nombre: "De México a Los Cabos", icono: <Bus className="w-5 h-5" />, tipo: "Autobús" },
  { nombre: "De México a Cancún", icono: <Bus className="w-5 h-5" />, tipo: "Autobús" },
  { nombre: "De México a Los Cabos", icono: <Bus className="w-5 h-5" />, tipo: "Autobús" },
  // Cruceros
  { nombre: "De México a Cancún", icono: <Ship className="w-5 h-5" />, tipo: "Crucero" },
  { nombre: "De México a Los Cabos", icono: <Ship className="w-5 h-5" />, tipo: "Crucero" },
  { nombre: "De México a Cancún", icono: <Ship className="w-5 h-5" />, tipo: "Crucero" },
  { nombre: "De México a Los Cabos", icono: <Ship className="w-5 h-5" />, tipo: "Crucero" },
];

const Destination = () => {
  return (
    <div className="fondo-destinos">
      {/* Banner motivador */}
      <div className="relative flex flex-col items-center justify-center mb-10 py-8 px-4 rounded-2xl overflow-hidden banner-destinos">
        {/* Mensaje principal */}
        <div className="relative z-10 flex flex-col items-center">
          <Plane className="w-14 h-14 text-[#A91B60] mb-2 drop-shadow-lg" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#8b1f3b] text-center mb-2 drop-shadow">
            ¡Reserva tu viaje ideal!
          </h2>
          <p className="text-lg md:text-xl text-[#A91B60] text-center font-medium">
            Elige tu destino y medio de transporte favorito.<br />
            ¡Haz de tu próxima aventura una experiencia inolvidable!
          </p>
        </div>
        {/* Forma decorativa */}
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#f8e6ec] rounded-full opacity-40 blur-2xl z-0"></div>
      </div>
      {/* Tarjetas de destinos */}
      <div className="destinos-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {destinos.map((destino, idx) => (
          <div key={idx} className="destino bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[#8b1f3b] font-bold text-lg">{destino.nombre}</span>
            </div>
            <span className="text-sm text-gray-600 mb-4">{destino.tipo}</span>
            <button
              className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#8b1f3b] to-[#A91B60] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-[#A91B60] hover:to-[#8b1f3b] transition-all duration-200"
              style={{ display: "block" }}
            >
              {destino.icono}
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;