"use client";

import Navbar from '../navbar';
import Title from '../title'
import Image from 'next/image';
import { useState } from 'react';
import { Switch } from '@headlessui/react'
import tailwindConfig from '../../../tailwind.config';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  {
    "name": "Papa François",
    "age": 76,
    "gender": "male",
    "origin": "Neuvic",
    "present": true
  },
  {
    "name": "Maman Chatchat",
    "age": 77,
    "gender": "female",
    "origin": "Neuvic",
    "present": true
  },
  {
    "name": "Emmanuelle",
    "age": 53,
    "gender": "female",
    "origin": "Munich",
    "present": true
  },
  {
    "name": "Vincent",
    "age": 53,
    "gender": "male",
    "origin": "Munich",
    "present": true
  },
  {
    "name": "Hugo",
    "age": 27,
    "gender": "male",
    "origin": "Lisbon",
    "present": true
  },
  {
    "name": "André",
    "age": 25,
    "gender": "male",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Jules",
    "age": 21,
    "gender": "male",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Zoé",
    "age": 19,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Helene",
    "age": 54,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Lionel",
    "age": 53,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Ines",
    "age": 33,
    "gender": "female",
    "origin": "Marseille",
    "present": false
  },
  {
    "name": "Phillipe",
    "age": 55,
    "gender": "male",
    "origin": "Toulon",
    "present": false
  },
  {
    "name": "Paul",
    "age": 15,
    "gender": "male",
    "origin": "Marseille",
    "present": true
  },
  {
    "name": "Arthur",
    "age": 30,
    "gender": "male",
    "origin": "Bordeaux",
    "present": true
  },
  {
    "name": "Mathilde",
    "age": 30,
    "gender": "female",
    "origin": "Bordeaux",
    "present": true
  },
  {
    "name": "Joseph",
    "age": 3,
    "gender": "male",
    "origin": "Bordeaux",
    "present": true
  },
  {
    "name": "Hermine",
    "age": 26,
    "gender": "female",
    "origin": "Montréal",
    "present": false
  },
  {
    "name": "Ondine",
    "age": 25,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Pauline",
    "age": 23,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Arsène",
    "age": 20,
    "gender": "male",
    "origin": "Paris",
    "present": false
  },
  {
    "name": "Eugène",
    "age": 15,
    "gender": "female",
    "origin": "Paris",
    "present": true
  },
  {
    "name": "Benjamin",
    "age": 44,
    "gender": "male",
    "origin": "Cranillere",
    "present": true
  },
  {
    "name": "Stéphanie",
    "age": 43,
    "gender": "female",
    "origin": "Cranillere",
    "present": true
  },
  {
    "name": "Achille",
    "age": 2,
    "gender": "male",
    "origin": "Cranillere",
    "present": true
  },
  {
    "name": "Gautier",
    "age": 42,
    "gender": "male",
    "origin": "Nouillac",
    "present": true
  },
  {
    "name": "Léontine",
    "age": 13,
    "gender": "female",
    "origin": "Nouillac",
    "present": true
  },
  {
    "name": "Juliette",
    "age": 8,
    "gender": "female",
    "origin": "Nouillac",
    "present": true
  },
  {
    "name": "Blanche",
    "age": 19,
    "gender": "female",
    "origin": "St-Ouen",
    "present": true
  },
  {
    "name": "Michel",
    "age": 76,
    "gender": "male",
    "origin": "Toulouse",
    "present": false
  },
  {
    "name": "Jérémie",
    "age": 43,
    "gender": "male",
    "origin": "Paris",
    "present": false
  },
  {
    "name": "Ismaël",
    "age": 8,
    "gender": "male",
    "origin": "Paris",
    "present": false
  },
  {
    "name": "Yasmine",
    "age": 13,
    "gender": "female",
    "origin": "Paris",
    "present": false
  },

]

export default function Home() {
  const [hidden, setHidden] = useState(true);
  const [names, setNames] = useState(people);

  const toggleName = (index) => {
    setNames((prevNames) =>
      prevNames.map((name, i) =>
        i === index ? { ...name, present: !name.present } : name
      )
    );
  };

  const computeUniqueTowns = () => {
    const presentPeople = names.filter(person => person.present);

    // Récupérer uniquement leurs origines dans un nouveau tableau
    const presentPeopleTowns = presentPeople.map(person => person.origin)
    const uniqueTowns = new Set()

    if (presentPeopleTowns.length === 0) {
      return 0;
    }

    for (let i=0 ;i< presentPeopleTowns.length;++i){
      uniqueTowns.add(presentPeopleTowns[i])
    }

    return uniqueTowns.size

  }

  const calculateAverageAge = () => {
    // Filtrer les personnes présentes
    const presentPeople = names.filter((person) => person.present);

    // Vérifier s'il y a des personnes présentes pour éviter la division par zéro
    if (presentPeople.length === 0) {
      return 0;
    }

    // Calculer la somme des âges des personnes présentes
    const sumOfAges = presentPeople.reduce((total, person) => total + person.age, 0);

    // Calculer la moyenne d'âge
    const averageAge = sumOfAges / presentPeople.length;

    // Arrondir la moyenne à deux décimales
    return averageAge.toFixed(2);
  };

  const nbrPresentPeople = () => {
    const presentPeople = names.filter((person) => person.present);
    return presentPeople.length;
  }

  const GenderPeople = () => {
    const genderPresentPeoplePourcent = [[],[]];
    const presentPeople = names.filter((person) => person.present);
    const genderPresentPeople = presentPeople.map(person => person.gender);


    for (let i=0; i<genderPresentPeople.length; ++i){
      if (genderPresentPeople[i] === 'male'){
        genderPresentPeoplePourcent[0].push(1);
      } else {
        genderPresentPeoplePourcent[1].push(1);
      }
    }

    const finalList = [[],[]];

    // console.log("homme ", ((genderPresentPeoplePourcent[0].length*100)));

    finalList[0].push(((genderPresentPeoplePourcent[0].length*100)/presentPeople.length));
    finalList[1].push(((genderPresentPeoplePourcent[1].length*100)/presentPeople.length));

    return finalList;
  }

  return (
    <div>

      <Navbar/>
      <Title children={"Statistiques"}/>

         <div className="text-slate-600 text-center font-medium mt-4 lg:text-xl md:text-xl sm:text-xs bg-white rounded-xl shadow-xl p-4 mt-14 ml-2 mr-2 grid place-items-center">
          <p>
            {nbrPresentPeople()}, nombres de personnes présentes 
            <br></br> 
            {calculateAverageAge()}, moyenne d'âge des personnes présentes
            <br></br>
            {computeUniqueTowns()} lieux d'origines différents
            <br></br>
            {GenderPeople()[0][0].toFixed(2)} % d'hommes
            <br></br>
            {GenderPeople()[1][0].toFixed(2)} % de femmes
            <br></br>
          </p>
        </div>


      <div className='grid place-items-center'>
        <button
          className="text-slate-700 text-md rounded-xl hover:bg-slate-400 font-medium w-36 h-12 bg-slate-300 mt-4"
          onClick={() => setHidden(!hidden) && setButtonName(!buttonName)}
        >
          {hidden ? "Afficher détails" : "Masquer détails"}     
        </button>
      </div>


      {!hidden &&
        <div className='grid place-items-center'>
          <div className="bg-white rounded-xl shadow-xl w-96 p-4 sm:mr-2 sm:ml-2 lg:mr-0 lg:ml-0 md:mr-0 md:ml-0 mt-11 mb-11 w-96">
            {names.map((el, i) => (
              <div key={i} className='mb-2'>

                <div className="grid grid-cols-3 gap-4">
                  <div className='grid place-items-start col-span-2'>
                    <span className="text-sm font-medium text-gray-900">{el.name}</span>
                    <span className="text-xs font-medium text-gray-900">Age: {el.age}</span>
                  </div>

                  <div className='grid place-items-end'>
            
                    <Switch
                      checked={el.present}
                      onChange={() => toggleName(i)}
                      className={classNames(
                        el.present ? 'bg-gray-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 '
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          el.present
                            ? 'translate-x-5 bg-white'
                            : 'translate-x-0 bg-white',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                      
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>}
    </div>
  );
}
