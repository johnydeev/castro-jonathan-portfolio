import Image from 'next/image'
import React from 'react'

const Proyects = () => {
    return (
      <div id="proyectos">
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/infinit2.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  INFINIT
                </h2>
                <p className="leading-relaxed text-base">
                  Ecommerce con el proposito de ofrecer un servicio de renta
                  online de un automovil segun las necesidades y ubicacion del
                  usuario
                </p>
                <div className="flex justify-center">
                  <picture className="w-20 p-2">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/github-mark.svg"
                      alt="Github"
                    />
                  </picture>
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/dentist2.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Dentistas
                </h2>
                <p className="leading-relaxed text-base">
                  10 Cards de dentistas que se renderizan con la informacion obtenida de una API publica.
                </p>
                <div className="flex justify-center">
                  <picture className="w-20 p-2">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/github-mark.svg"
                      alt="Github"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Proyects