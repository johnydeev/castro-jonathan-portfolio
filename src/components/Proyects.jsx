import Image from 'next/image'
import React from 'react'

const Proyects = () => {
    return (
      <div id='proyectos'>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -mb-10 text-center">
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="/infinit.png"
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    INFINIT
                </h2>
                <p class="leading-relaxed text-base">
                  Ecommerce con el proposito de ofrecer un servicio de renta online de un automovil segun las necesidades y ubicacion del usuario
                </p>
                <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
              <div class="sm:w-1/2 mb-10 px-4">
                <div class="rounded-lg overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="/dentistCard.png"
                  />
                </div>
                <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Dentistas
                </h2>
                <p class="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
                <button class="flex mx-auto mt-6 text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Proyects