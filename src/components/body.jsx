import React from 'react'
import Stack from './Stack';
import Contact from './Contact';
import Proyects from './Proyects';
import Hero from './Hero';


const Body = () => {
    return (
      <div className="bg-gray-100 text-gray-900 font-sans mx-auto w-4/5">        
        <Hero />
        <Stack />
        <Proyects />
        <Contact />
      </div>
    );    
}

export default Body