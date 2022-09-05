import React from 'react'
import CardPaquete from '../cardpaquete/CardPaquete'
import "./Paquetes.css"
import InfoCard from "../../json/CardPaquete.json"
import masaje from "../../assets/main-spa/masajes.jpg"
import facial from "../../assets/main-spa/facials.jpg"
import reductor from "../../assets/main-spa/reductor.jpg"
export const Paquetes = () => {
  return (
    <div className='container-paquete'>
        <h2>Plan Paquetes</h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
        <CardPaquete jsoninfo={InfoCard[0]} img={masaje} />
        <CardPaquete reverse={true} jsoninfo={InfoCard[1]} img={reductor} />
        <CardPaquete jsoninfo={InfoCard[2]} img={facial}/>
    </div>
  )
}
