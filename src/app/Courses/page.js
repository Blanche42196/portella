"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Title from "../title";
import axios from "axios"
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Courses() {


    const [liste, setListe] = useState([])

    const url = "http://localhost:3000/api/"
    async function readDb() {
        console.log("add to db")
        try {
            let res = await axios(url+"read")
            console.log("res", res.data.body)
            setListe(res.data.body)
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteFromDB(name) {
        console.log("deleting from db", name)
        try {
            let res = await axios(url+"delete?=query"+name)
            // remove name from the list 
            console.log("res", res.data.body)
            setListe(res.data.body)
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

            {liste.length == 0 ? "Loading..."  : 
            (<div className="flex items-center">
                {liste.map((el,i)=>(
                <div key={i} className="flex items-center text-xl">
                    - {el} <XMarkIcon className="h-5 w-5"
                    onClick={() => {deleteFromDB(el)}}
                    />
                </div>
                ))}


            </div>)
            
            }

        </div>
    )

}