import React from 'react'
import CardPaquete from '../cardpaquete/CardPaquete'
import InfoCard from "../../json/CardPaquete.json"
import masaje from "../../assets/main-spa/masajes.jpg"
import facial from "../../assets/main-spa/facials.jpg"
import reductor from "../../assets/main-spa/reductor.jpg"
import { ContainerPaquete, PaquetesBg } from '../cssjs/PaqueteStyle'
import Circle from '../svg/Circle'
 const Paquetes = () => {
  return (
    <PaquetesBg>
      <Circle className="SvgCircle"/>
    <ContainerPaquete>
        <h2 className='title-paquete'>Plan Paquetes</h2>
        <p className='title-paquete'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
        <CardPaquete  reverse={false} jsoninfo={InfoCard[0]} img={masaje} />
        <CardPaquete reverse={true} jsoninfo={InfoCard[1]} img={reductor} />
        <CardPaquete reverse={false} jsoninfo={InfoCard[2]} img={facial}/>
    </ContainerPaquete>
    </PaquetesBg>
  )
}
export default Paquetes