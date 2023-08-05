"use client";

import Image from 'next/image';
import { useState } from 'react';
import Navbar from './navbar';
import Title from './title'


export default function Home() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Title children={"Bienvenue à la casa rural de la Portella"}></Title>
      <div className="flex ml-8 rounded-lh">
        <Image
          className='rounded-3xl mt-11 mb-11'
          src="https://media.er2.co/es/lleida/0000000016775/635/516d1e8ae292b.jpg"
          alt="JACUZZI"
          width={350}
          height={100}
        />
        <Image
          className='rounded-3xl mt-11 mb-11 ml-4' 
          src="https://media.er2.co/es/lleida/0000000016775/1600/5040875544a6f.jpg"
          alt="MAISON"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl mt-11 mb-11 ml-4' 
          src="https://media.er2.co/es/lleida/0000000016775/1600/53b9011c9e46f.jpg"
          alt="PISCINE"
          width={350}
          height={100}
        />
      </div>
    </div>
  );
}



        {/* {hidden ? 'Hidden!' : 'Visible'}
        <button className="text-lime-600 w-24 h-12 bg-black" onClick={() => setHidden(!hidden)}>
          Click me
        </button> */}