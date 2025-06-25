import React, { useState, useEffect } from "react";
import cancunImg from "../../assets/cancun.png";
import cancunImg3 from "../../assets/cancun3.png";
import cabosImg from "../../assets/cabos.png";
import cabosImg3 from "../../assets/cabos3.png";
// Si usas React Router, descomenta la siguiente línea
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const fondos = [cancunImg, cabosImg, cancunImg3, cabosImg3];
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        // Guarda el correo en localStorage para mostrarlo en el navbar
        localStorage.setItem("user", email);
        // Redirige a Home
        window.location.href = "/";
        // Si usas React Router:
        // navigate("/");
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (err) {
      alert("Error de conexión");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo carrusel */}
      {fondos.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`fondo-${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          } login-bg-blur`}
        />
      ))}

      {/* Capa oscura */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(0,0,0,0.4)" }}
      ></div>

      {/* Cuadro del login */}
      <div className="form">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Inicia sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-gray-600 space-y-1">
          <a href="/recuperar" className="block hover:text-blue-600">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/register" className="block hover:text-blue-600">
            ¿No tienes cuenta? Regístrate
          </a>
        </div>
      </div>
    </div>
  );
}