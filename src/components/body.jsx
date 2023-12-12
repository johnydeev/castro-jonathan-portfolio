import Image from 'next/image';
import React from 'react'

const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans h-screen">
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
        <section id="stack" className="py-16 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frontend</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/html5.svg" alt="" />
                <span className="mt-2">HTML</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/css.svg" alt="" />
                <span className="mt-2">CSS</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={110} height={115} src="/javascript.svg" alt="" />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={120} height={100} src="/react.svg" alt="" />
                <span className="mt-2">HTML</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-8 text-center">Backend</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/nodejs.svg" alt="" />
                <span className="mt-2">Node js</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={53} height={100} src="/mongodb.svg" alt="" />
                <span className="mt-2">Mongo DB</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={115} height={115} src="/mysql.svg" alt="" />
                <span className="mt-2">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <Image width={85} height={100} src="/java.svg" alt="" />
                <span className="mt-2">JAVA</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-8 text-center">Frameworks</h2>
            <div className="flex flex-wrap:wrap justify-evenly items-center min-w-full gap-4">
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src="/next.svg" alt="" />
                <span className="mt-2">NEXT js</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={53} height={100} src="/expressjs.svg" alt="" />
                <span className="mt-2">Express</span>
              </div>

              <div className="flex flex-col items-center">
                <Image width={115} height={115} src="/tailwindcss.svg" alt="" />
                <span className="mt-2">Tailwind</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );    
}

export default Body