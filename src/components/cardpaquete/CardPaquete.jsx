import React from "react";
import VerMas from "../buttoms/vermas/VerMas";
import { Colum2InfoAnimation, ColumImg, ContainerBolitas, PackNum, PlanCardGrid, TextoCardPack } from "../cssjs/CardPaquet";
import "./CardPaquete.css"
const CardPaquete = ({reverse,jsoninfo,img}) => {
   
  return (
    <PlanCardGrid>
      <ColumImg bol={reverse}>
        <h1>{jsoninfo.titleimg}</h1>
        <div >
          <img src={img} alt="belleza" />
        </div>
      </ColumImg>
      <Colum2InfoAnimation bol={reverse}>
      <div className="colum2-flex">
        <PackNum>
          <h3>Pack</h3>
          <h2>0{jsoninfo.id}</h2>
        </PackNum>
        <ContainerBolitas>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ContainerBolitas>
        <TextoCardPack>
          <h1>{jsoninfo.titulo1}</h1>
          <p >
            {jsoninfo.contenido1}
          </p>
          <h1 >{jsoninfo.titulo2}</h1>
          <p>
            {jsoninfo.contenido2}
          </p>
          <h1>{jsoninfo.titulo3}</h1>
          <p>
           {jsoninfo.contenido3}
          </p>
        </TextoCardPack>
      </div>
      <div className="info-link-buttom">
            <VerMas/>
    </div>
    </Colum2InfoAnimation>
    </PlanCardGrid>
  );
};

export default CardPaquete;
