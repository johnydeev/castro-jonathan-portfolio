import Image from 'next/image';
import React from 'react'

const Perfil = () => {
  return (
    <div id="inicio">
      <section>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2 px-20 py-2">
            ¡Hola! Mi nombre es Jonathan
          </h1>
          <h1 className="text-xl py-2">Desarrollador Full Stack</h1>
          <article className="flex flex-wrap justify-center items-center py-6 mx-auto gap-20">
            <p className="w-1/3">
              Me considero un amante de la tecnologia e innovacion... siento que
              tengo mucho para dar en el campo IT gracias a mi creatividad y
              dedicacion. Espero algun dia ser ejemplo o referente en este mundo
              tan basto de la programacion.
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
    </div>
  );
}

export default Perfil