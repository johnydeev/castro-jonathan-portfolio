"use client"
import Link from 'next/link';
import React, { useState,useEffect } from 'react'
import { useTheme } from "./Context"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
    useEffect(() => {
      if (theme == "dark") {
        document.querySelector("html").classList.add("dark")
      } else {
        document.querySelector("html").classList.remove("dark")
      }
    }, [theme])
    
  return (
    <nav
      id="nav"
      className={`fixed top-0 w-full px-4 h-auto z-50 transition-opacity duration-300 ${
        isScrolled
          ? "bg-gray-800 dark:bg-gray-600 bg-opacity-90"
          : "bg-gray-800 dark:bg-gray-600"
      } text-gray-200 dark:text-white`}
    >
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
          onClick={toggleTheme}
          className={`mr-4 text-lg rounded-full p-3 
          ${theme == "dark" ? "bg-white" : "!bg-gray-600"}`}
        >
          <picture>
            <img
              width={30}
              height={30}
              src={theme == "dark" ? "/sun-black.svg" : "/moon-white2.svg"}
              alt={theme == "dark" ? "Dark" : "Light"}
            />
          </picture>
        </button>
      </div>
    </nav>
  );
}

export default Navbar