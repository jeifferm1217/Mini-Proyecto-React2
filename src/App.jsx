import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-sans">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <nav className="flex gap-6 text-sm font-semibold">
          <a href="#">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Encabezado */}
      <section className="text-center my-10">
        <h2 className="text-lg font-semibold">SERVICIO NACIONAL DE APRENDIZAJE</h2>
        <h3 className="text-md">CENTRO DE GESTIÓN DE MERCADOS</h3>
        <p className="text-sm mt-2 text-gray-600">BOGOTÁ</p>
      </section>

      {/* Sección de programas */}
      <section className="grid grid-cols-3 gap-6 w-3/4 mb-10">
        {["ADSO", "Redes de Datos", "Animación 3D", "Logística", "Mercadeo", "Sistemas"].map(
          (programa) => (
            <div
              key={programa}
              className="bg-white shadow-md rounded-xl h-28 flex items-center justify-center text-center font-semibold hover:bg-green-100 transition"
            >
              {programa.toUpperCase()}
            </div>
          )
        )}
      </section>

      {/* Formulario de contacto */}
      <section className="bg-white shadow-lg rounded-2xl p-6 w-1/2 mb-10">
        <h3 className="text-center font-bold mb-4">Contacto</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombres"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Correo"
            className="border border-gray-300 rounded-md p-2"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="border border-gray-300 rounded-md p-2"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;


