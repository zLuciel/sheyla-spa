import React from 'react'
import CardPaquete from '../cardpaquete/CardPaquete'
import "./Paquetes.css"
import InfoCard from "../../json/CardPaquete.json"
export const Paquetes = () => {
  return (
    <div className='container-paquete'>
        <h2>Plan Paquetes</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
        <CardPaquete jsoninfo={InfoCard[0]}/>
        <CardPaquete reverse={true} jsoninfo={InfoCard[1]} />
        <CardPaquete jsoninfo={InfoCard[2]}/>
    </div>
  )
}
