import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font text-center">
        <h1 className="text-4xl font-bold px-20 py-5">
          ¡Hola! Mi nombre es Jonathan
        </h1>
        <h1 className="text-xl py-4">Desarrollador Full Stack</h1>
        <div class="container mx-auto flex sm:px-20 md:px-20 lg:px-48 md:flex-row flex-col items-center gap-4">
          <div class="lg:flex-grow md:w-2/3 lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Me considero un amante de la tecnologia e innovacion... siento que
              tengo mucho para dar en el campo IT gracias a mi creatividad y
              dedicacion. Espero algun dia ser ejemplo o referente en este mundo
              tan basto de la programacion.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <picture>
                  <img
                    className="rounded-full"
                    src="/Jonathan-pic.jpg"
                    alt="Castro-Jonathan"
                  />
                </picture>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
            <picture>
              <img
                className="rounded-full"
                src="/Jonathan-pic.jpg"
                alt="Castro-Jonathan"
              />
            </picture>
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero