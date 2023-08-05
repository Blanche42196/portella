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

      <div className="grid lg:grid-cols-3 gap-4 rounded-lh mt-11 mb-11 place-items-stretch">
        <Image
          className='rounded-3xl grid bg-white'
          src="https://media.er2.co/es/lleida/0000000016775/1600/5489a0c7dec29.jpg"
          alt="JACUZZI"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="https://media.er2.co/es/lleida/0000000016775/1600/5040875544a6f.jpg"
          alt="MAISON"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="https://media.er2.co/es/lleida/0000000016775/1600/53b9011c9e46f.jpg"
          alt="PISCINE"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="https://media.er2.co/es/lleida/0000000016775/1600/5f628610463f3.jpg"
          alt="PISCINE"
          width={650}
          height={100}
        />
        
        <Image
          className='rounded-3xl grid bg-white'
          src="https://i.postimg.cc/VNrMBwXK/Capture-d-e-cran-2023-08-05-a-13-32-52.png"
          alt="PISCINE"
          width={650}
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