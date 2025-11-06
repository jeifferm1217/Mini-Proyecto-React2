import React from "react";
import "./styles.css";

export default function App() {
  const programas = [
    "ADSO",
    "REDES DE DATOS",
    "ANIMACIÓN 3D",
    "LOGÍSTICA",
    "MERCADEO",
    "SISTEMAS",
  ];

  return (
    <div className="outer-frame">
      {/* HEADER */}
      <header className="top-area">
        <div className="logo-circle" aria-hidden></div>
        <nav className="top-menu">
          <a href="#">INICIO</a>
          <a href="#">PROGRAMAS</a>
          <a href="#">CONTACTO</a>
        </nav>
      </header>

      {/* TITLES */}
      <div className="titles">
        <div className="title-line">SERVICIO NACIONAL DE APRENDIZAJE</div>
        <div className="title-line small">CENTRO DE GESTIÓN DE MERCADOS</div>
        <div className="title-line tiny">BOGOTÁ</div>
      </div>

      <hr className="separator" />

      {/* PROGRAM CARDS */}
      <section className="programs-area">
        <div className="programs-grid">
          {programas.map((p) => (
            <div key={p} className="program-card">
              <span>{p}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="separator large" />

      {/* BOTTOM LARGE BOX with contact form centered */}
      <section className="bottom-area">
        <div className="form-outer">
          <form className="contact-card" onSubmit={(e) => e.preventDefault()}>
            <label className="lbl">NOMBRES</label>
            <input className="inp" type="text" placeholder="Ingrese su nombre" />

            <label className="lbl">CORREO</label>
            <input className="inp" type="email" placeholder="Ingrese su correo" />

            <label className="lbl">MENSAJE</label>
            <textarea className="txt" placeholder="Escriba su mensaje"></textarea>

            <button className="btn-send" type="submit">ENVIAR</button>
          </form>
        </div>
      </section>
    </div>
  );
}
