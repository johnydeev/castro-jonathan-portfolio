import React from 'react'
import Stack from './Stack';
import Image from 'next/image';
import Contact from './Contact';
import Proyects from './Proyects';

const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans mx-auto p-4 w-fit">
        <section id="inicio" className="py-4">
          <div className="container mx-auto text-center ">
            <h1 className="text-4xl font-bold mb-4 px-28">
              ¡Hola! Mi nombre es Jonathan y soy Desarrollador Full Stack
            </h1>
            <h3 className="text-lg py-2">
              Bienvenido a mi portafolio profesional.
            </h3>
            <article className="flex flex-wrap justify-around text-center items-center py-6 mx-5 gap-2">
              <p className="w-1/3">
                Me considero un amante de la tecnologia e innovacion... siento
                que tengo mucho para dar en el campo IT gracias a mi creatividad
                y dedicacion. Espero algun dia ser ejemplo o referente en este
                mundo tan basto de la programacion.
              </p>
              <Image
                className="rounded-full overflow-hidden"
                width={250}
                height={250}
                src="/Jonathan-pic.jpg"
                alt="Jonathan-pic"
              />
            </article>
          </div>
        </section>
        <Stack />
        <Proyects />
        <Contact />
      </div>
    );    
}

export default Body