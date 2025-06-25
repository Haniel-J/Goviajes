import React, { useState } from "react";
import cancunImg from "../../assets/cancun.png";
import cancunImg2 from "../../assets/cancun2.png";
import cabosImg from "../../assets/cabos.png";
import cabosImg2 from "../../assets/cabos2.png";

import { Link } from "react-router-dom";
import { Plane, Train, Bus, Ship, MapPin, Users, User } from "lucide-react"

export default function Home() {
  const destinos = [cancunImg, cabosImg, cancunImg2, cabosImg2];
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % destinos.length);
  };
  const anterior = () => {
    setIndex((prev) => (prev - 1 + destinos.length) % destinos.length);
  };

  return (
    <div className="home-container">
      <header className="topbar">
        <div className="title-wrapper">
          <div className="circle-deco" />
          <h1 className="site-title">GoViaje</h1>
        </div>
        <nav className="main-nav">
          <Link to="/destination" className="nav-item">
            <MapPin className="icon" />
            <span>Destinos</span>
          </Link>
          <Link to="/about" className="nav-item">
            <Users className="icon" />
            <span>Nosotros</span>
          </Link>
          <Link to="/login" className="nav-item">
            <User className="icon" />
            <span>Iniciar sesión</span>
          </Link>
        </nav>
      </header>

      {/* Transporte moderno con botones estilizados */}
      <nav className="transport-nav">
        <button className="icon-button">
          <Plane />
          <span>Vuelos</span>
        </button>
        <button className="icon-button">
          <Train />
          <span>Trenes</span>
        </button>
        <button className="icon-button">
          <Bus />
          <span>Autobuses</span>
        </button>
        <button className="icon-button">
          <Ship />
          <span>Cruceros</span>
        </button>
      </nav>

      {/* Slider hero con animación */}
      <section className="hero">
        <button className="arrow arrow-left" onClick={anterior}>{'<'}</button>
        <div className="hero-slider">
          {destinos.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Destino ${i}`}
              className={`hero-img ${i === index ? "active" : ""}`}
            />
          ))}
          <div className="hero-overlay">
            <i className="hero-icon">🏝️</i>
            <h2 className="hero-title">Agencia DE Viajes</h2>
          </div>
        </div>
        <button className="arrow arrow-right" onClick={siguiente}>{'>'}</button>
      </section>
    </div>
  );
}
