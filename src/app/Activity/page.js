"use client";

import Image from 'next/image';
import Navbar from '../navbar';
import Title from '../title'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar/>
      <Title children={"Activités"}></Title>

      </div>
  );
}
