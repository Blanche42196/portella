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

      <div className="grid lg:grid-cols-3 gap-4 rounded-lh mt-11 mb-11 place-items-stretch mx-4">
        {/* <Image
          className='rounded-3xl grid bg-white'
          src="https://media.er2.co/es/lleida/0000000016775/1600/5489a0c7dec29.jpg"
          alt="JACUZZI"
          width={650}
          height={100}
        /> */}
        
        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image14.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image17.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image18.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image8.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image9.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image15.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 
        
        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image16.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image12.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image13.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image11.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image10.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image7.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image2.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        /> 

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image3.jpg' 
          alt='FAMILIA'
          width={650} 
          height={100}
        />

        <Image 
          className='rounded-3xl grid bg-white' 
          src='/image5.jpg' 
          alt='FAMILIA'
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