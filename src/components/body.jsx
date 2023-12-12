import Image from 'next/image';
import React from 'react'

const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans">
        <section id="inicio" className="py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              ¡Hola! Soy un Desarrollador Full Stack
            </h1>
            <p className="text-lg">Bienvenido a mi portafolio profesional.</p>
          </div>
        </section>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Stack Tecnológico
        </h2>
        <section id="stack" className="py-4 bg-gray-200">
          <div className="container mx-auto">
            <span className="block w-full h-px bg-gray-600 my-8"></span>
            <h2 className="text-2xl font-bold mb-8 text-center">Frontend</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image
                  width={110}
                  height={115}
                  src="/javascript.svg"
                  alt="javascript"
                />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/html5.svg" alt="html5" />
                <span className="mt-2">HTML5</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/css.svg" alt="css" />
                <span className="mt-2">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={120} height={100} src="/react.svg" alt="react" />
                <span className="mt-2">HTML</span>
              </div>
            </div>
            <span className="block w-full h-px bg-gray-600 my-8"></span>
            <h2 className="text-2xl font-bold mb-8 text-center">Backend</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  src="/nodejs.svg"
                  alt="nodejs"
                />
                <span className="mt-2">Node js</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={53}
                  height={100}
                  src="/mongodb.svg"
                  alt="mongodb"
                />
                <span className="mt-2">Mongo DB</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={115} height={115} src="/mysql.svg" alt="mysql" />
                <span className="mt-2">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={85} height={100} src="/java.svg" alt="java" />
                <span className="mt-2">JAVA</span>
              </div>
            </div>
            <span className="block w-full h-px bg-gray-600 my-8"></span>
            <h2 className="text-2xl font-bold mb-8 text-center">Frameworks</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image
                  className="my-6"
                  width={130}
                  height={50}
                  src="/next.svg"
                  alt="next"
                />
                <span className="mt-4">NEXT js</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={90}
                  height={100}
                  src="/expressjs.svg"
                  alt="expressjs"
                />
                <span className="mt-2">Express</span>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={115}
                  height={115}
                  src="/tailwindcss.svg"
                  alt="tailwindcss"
                />
                <span className="mt-2">Tailwind</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );    
}

export default Body