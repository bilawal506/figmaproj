import Image from 'next/image'
import React from 'react';
import Hero from './Hero';
import Nav from './Navbar';
export default function Home() {
  return (
    <>
      <Nav />
      <Hero/>
    </>
  )
}
