import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans h-screen">
      <section id="inicio" className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">¡Hola! Soy un Desarrollador Web</h1>
          <p className="text-lg">Bienvenido a mi portafolio profesional.</p>
        </div>
      </section>

      <section id="stack" className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Stack Tecnológico</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center">              
              {/* <img src="ruta_de_la_imagen_css.png" alt="HTML" className="h-16" /> */}
              <span className="mt-2">HTML</span>
            </div>

            <div className="flex flex-col items-center">
              {/* <img src="ruta_de_la_imagen_css.png" alt="CSS" className="h-16" /> */}
              <span className="mt-2">CSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

