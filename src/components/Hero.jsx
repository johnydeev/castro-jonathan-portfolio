/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutMe from "./AboutMe";

const Hero = () => {
		return (
      <div>
        <section className="text-gray-600 body-font text-center p-5">
          <h1 className="text-4xl font-bold sm:px-20 py-2">
            ¡Hola! Mi nombre es Jonathan
          </h1>
          <h1 className="text-xl pb-8">Bienvenid@ a mi portfolio</h1>

          <div className="container mx-auto flex justify-between sm:px-16 md:px-8 md:flex-row lg:px-4 xl:px-12 flex-col items-center gap-4 max-w-5xl">
            <div className=" 2xl:mr-54 lg:flex-grow md:w-2/3 md:items-start md:text-left mb-6 md:mb-0 flex flex-col items-center text-center">
              <AboutMe />
              <div className="flex justify-center">
                <picture className="w-20 p-2">
                  <a href="https://github.com/johnydeev">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/github-mark.svg"
                      alt="Github"
                    />
                  </a>
                </picture>
                <picture className="w-20">
                  <a href="https://www.linkedin.com/in/johnydeev/">
                    <img
                      className="rounded-full w-15 h-15"
                      src="/linkedin.svg"
                      alt="LinkedIn"
                    />
                  </a>
                </picture>
              </div>
            </div>
            <div className="lg:max-w-xs lg:w-full md:w-1/2 w-3/4">
              <picture>
                <img
                  className="rounded-full"
                  src="/Jonathan-pic.jpg"
                  alt="Castro-Jonathan"
                />
              </picture>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;
