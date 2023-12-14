import React from 'react'
import Stack from './Stack';
import Image from 'next/image';

const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans mx-auto p-4 w-fit">
        <section id="inicio" className="py-4">
          <div className="container mx-auto text-center ">
            <h1 className="text-4xl font-bold mb-4 px-28">
              ¡Hola! Mi nombre es Jonathan y soy Desarrollador Full Stack
            </h1>
            <h3 className="text-lg">Bienvenido a mi portafolio profesional.</h3>
            <article className="flex justify-around text-center items-center py-10">
              <p className="w-1/3">
                Me considero un amante de la tecnologia e innovacion y siento
                que tengo mucho para dar en el campo IT gracias a mi creatividad
                y dedicacion. Espero algun dia ser ejemplo o referente en este
                mundo tan basto de la programacion.
              </p>
              <Image className=' rounded-full' width={300} height={300} src="/castro.jpeg" alt="" />
            </article>
          </div>
        </section>
        <Stack />
      </div>
    );    
}

export default Body