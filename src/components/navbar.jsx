import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white ">
        <div className="container mx-auto flex justify-between items-center p-4">
          <span className="text-xl font-bold">Castro Jonathan</span>

          <ul className="flex space-x-4">
            <li>
              <Link href="#inicio" className="hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#stack" className="hover:text-gray-300">
                Stack
              </Link>
            </li>
            <li>
              <Link href="#proyectos" className="hover:text-gray-300">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-gray-300">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold">Castro Jonathan</span>

          <ul className="flex space-x-4">
            <li>
              <Link href="#inicio" className="hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#stack" className="hover:text-gray-300">
                Stack
              </Link>
            </li>
            <li>
              <Link href="#proyectos" className="hover:text-gray-300">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-gray-300">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar