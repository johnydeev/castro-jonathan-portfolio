"use client"

import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Proyects from '@/components/Proyects';
import Stack from '@/components/Stack';
import React from 'react';

const Home = () => {
  return (
    <div className='lg:w-4/5 mx-auto'>
      <Hero />
      <Stack />
      <Proyects />
      <Contact />
    </div>
    
  );
};
export default Home;

