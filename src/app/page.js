import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">

      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold">Mi Portafolio</span>
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="hover:text-gray-300">Inicio</a></li>
            <li><a href="#stack" className="hover:text-gray-300">Stack</a></li>
            <li><a href="#proyectos" className="hover:text-gray-300">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
          </ul>
        </div>
      </nav>

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
              {/* <Image src="ruta_de_la_imagen_html.png" alt="HTML" className="h-16" /> */}
              <span className="mt-2">HTML</span>
            </div>

            {/* Agrega más elementos del stack con sus imágenes */}
            {/* Ejemplo para CSS */}
            {/* <div className="flex flex-col items-center">
              <img src="ruta_de_la_imagen_css.png" alt="CSS" className="h-16" />
              <span className="mt-2">CSS</span>
            </div> */}
          </div>
        </div>
      </section>      

    </div>
  );
};

export default Home;

