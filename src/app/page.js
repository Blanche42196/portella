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
      <Title children={"Accueil"}/>

      <div className="grid lg:grid-cols-3 gap-4 rounded-lh mt-11 mb-11 place-items-stretch">
        {/* <Image
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
        /> */}
        <Image
          className='rounded-3xl grid bg-white'
          src="/861f63b4-9ef1-4b41-a719-178d99203a4e.jpg"
          alt="FAMILIA"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="/384aaf43-2c0b-4b00-b6a5-66bba05ee1a1.jpg"
          alt="FAMILIA"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="/1600646b-43ce-45de-8331-19a7b3f71a27.jpg"
          alt="FAMILIA"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="/fe87740f-bbc3-4d9f-bf6a-bb9f03163f39.jpg"
          alt="FAMILIA"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="/3176f969-10d6-419b-ae44-d9f3f2a80a67.jpg"
          alt="FAMILIA"
          width={650}
          height={100}
        />
        <Image
          className='rounded-3xl grid bg-white'
          src="/284a974f-48eb-4d70-ba61-cf439a730284.jpg"
          alt="FAMILIA"
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