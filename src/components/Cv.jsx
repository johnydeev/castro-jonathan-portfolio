"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cv = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      const stopPosition = 2700

      // console.log("scroll>>", scrollPosition);
      setIsFixed(scrollPosition > stopPosition)
    };

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, [])

  return (
    <div className="relative ">
      <div
        className={`transition-all duration-300 hover:-translate-y-1 ${
          isFixed
            ? "fixed top-0 right-0"
            : "fixed bottom-0 right-0 mr-2 mb-2 sm:mb-24 sm:mr-5 lg:mr-8"
        } ${isFixed && window.scrollY > 2700 ? "translate-y-32" : ""}`}
      >
        <p id="desktop" className="font-bold">
          Descargar CV
        </p>
        <div className="py-2 px-4 transition-transform transform hover:-translate-y-1 ">
          <a
            href="/CV Jonathan Castro - Desarrollador Full Stack.pdf"
            download="CV - Castro Jonathan - Full Stack"
          >
            <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-black dark:shadow-gray-600 w-16 h-16 hover:bg-gray-700 shadow-lg dark:bg-gray-600">
              <Image
                width={40}
                height={100}
                alt="Download Document CV"
                className="object-cover object-center" 
                src="/download.svg"
                style={{ filter: "invert(1)" }}
              ></Image>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cv
