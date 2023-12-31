"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Title from "../title";
import axios from "axios"
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Courses() {

    const [liste, setListe] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const url = "https://portella.vercel.app/api/"
    // const url = "http://localhost:3000/api/"
    async function readDb() {
        console.log("reading db...")
        try {
            let res = await axios(url+"read")
            console.log("res", res.data.body)
            setListe(res.data.body)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteFromDB(name) {
        console.log("deleting from db", name)
        let newList = liste.filter((list,i) => liste[i]!==name)
        console.log("new list", newList)
        setListe(newList)
        try {
            await axios(url+"delete?=query"+name)
            // remove name from the list 
        } catch (err) {
            console.log(err)
        }
    }

    async function addToDB(name) {
        console.log("Add to db", name)
        let newList = liste.concat([name])
        console.log("new list")
        setListe(newList)
        try {
            let res = await axios(url+"add?=query"+name)
            // remove name from the list 
            console.log("res", res.data.body)
            // let newList = liste.push(name)
            console.log("new list", newList)
            // setListe(newList)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        readDb()
    }, [])


    return(
        <div>
            <Navbar/>
            <Title children={"Listes de Courses"}/>

            <div className="flex items-center grid grid-cols-2 px-1 py-1 sm:px-6 mt-8 overflow-hidden text-center justify-items-stretch">
                <div className="mt-2 grid col-span-2">
                    <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="rounded-md w-full border-0 py-1.5 text-gray-900 shadow-md"
                    placeholder=" À ajouter : "
                    defaultValue={''}
                    />
                </div>
            </div>
            <div className="grid justify-items-center "> 
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  mt-5"
                    onClick={(e) => {addToDB(document.getElementById("comment").value)}}
                >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true"/>
                    Ajouter
                </button>
            </div> 

            {isLoading && <div className="text-center text-xl mt-8">Chargement... 🥦🥦🥦</div>}
            {!isLoading && liste.length == 0  && <div className="text-center text-xl mt-8">La liste est vide 🥳</div>}

            <ul role="list" className="space-y-3 m-5">
                {liste.map((el,i) => (
                    <li key={i} className="grid gap-2 grid-cols-2 overflow-hidden flex items-center text-center px-1 py-1 shadow sm:px-6 bg-stone-500 rounded-md">
                        <div className="grid justify-items-start text-md capitalize">
                            {el} 
                        </div>
                        <div className="grid justify-items-end">
                            <XMarkIcon className="h-8 w-8 hover:text-white"
                            onClick={() => {deleteFromDB(el)}}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
