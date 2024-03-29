"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[theme,setTheme] = useState(false)
  const changeTheme=()=>{
    setTheme(!theme)
  }  
  return (
    <nav id="nav" className="bg-gray-800 text-white px-4 h-auto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <span className="text-xl font-bold">Castro Jonathan</span>

        <div
          className={`link ${
            isOpen ? "open" : "close"
          } text-center flex space-x-7`}
        >
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="#inicio"
            className="hover:text-gray-300"
          >
            Inicio
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="#stack"
            className="hover:text-gray-300"
          >
            Stack
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="#proyectos"
            className="hover:text-gray-300"
          >
            Proyectos
          </Link>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href="#contacto"
            className="hover:text-gray-300"
          >
            Contacto
          </Link>
        </div>

        <div
          className={`hamburg ${isOpen && "open h-[35px]"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>


        <button
          id="theme"
          onClick={changeTheme}
          className={`mr-4 text-lg rounded-full p-3 bg-gray-500 
          ${theme ? "" : "!bg-white"}`}
        >
          <picture>
            <img
              width={30}
              height={30}
              src={theme ? "/moon-stars-svgrepo-com2.svg" : "/sun-black.svg"}
              alt={theme ? "Dark" : "Light"}
            />
          </picture>
        </button>
      </div>
    </nav>
  );
}

export default Navbar