import React from 'react'
import Datos from "./Datos";
import Card from "@/components/Card/Card";
import './App.css'


export default function page() {
  return (
    <section className="cards">
          {Datos.map((Dato, index) => (
            <Card key={index} datos={Dato}  />
          ))} 
    </section>
  )
}
