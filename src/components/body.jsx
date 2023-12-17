import React from 'react'
import Stack from './Stack';
import Image from 'next/image';
import Contact from './Contact';
import Proyects from './Proyects';
import Hero from './Hero';
import Perfil from './Perfil';

const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans mx-auto w-3/4">
        {/* <Perfil/>         */}
        <Hero/>
        <Stack />
        <Proyects />
        <Contact />
      </div>
    );    
}

export default Body