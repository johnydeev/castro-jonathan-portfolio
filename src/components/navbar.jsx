import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-bold">Mi Portafolio</span>
            <ul className="flex space-x-4">
            <li>
                <a href="#inicio" className="hover:text-gray-300">
                Inicio
                </a>
            </li>
            <li>
                <a href="#stack" className="hover:text-gray-300">
                Stack
                </a>
            </li>
            <li>
                <a href="#proyectos" className="hover:text-gray-300">
                Proyectos
                </a>
            </li>
            <li>
                <a href="#contacto" className="hover:text-gray-300">
                Contacto
                </a>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar