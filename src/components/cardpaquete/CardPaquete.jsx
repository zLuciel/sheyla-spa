import React from "react";
import VerMas from "../buttoms/vermas/VerMas";
import "./CardPaquete.css"
const CardPaquete = ({reverse,jsoninfo,img}) => {
    const reves = reverse ? "plan-card-grid-reverse" :"plan-card-grid";
  return (
    <div className={reves}>
      <div className="colum1-img-title">
        <h1>{jsoninfo.titleimg}</h1>
        <div className="container-img-card">
          <img src={img} alt="belleza" />
        </div>
      </div>
      <div className="colum2-grid-info">
      <div className="colum2-info">
        <div className="pack-num">
          <h3>Pack</h3>
          <h2>0{jsoninfo.id}</h2>
        </div>
        <div className="div-bolitas">
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
        </div>
        <div className="info-card-preciso">
          <h1>{jsoninfo.titulo1}</h1>
          <p>
            {jsoninfo.contenido1}
          </p>
          <h1>{jsoninfo.titulo2}</h1>
          <p>
            {jsoninfo.contenido2}
          </p>
          <h1>{jsoninfo.titulo3}</h1>
          <p>
           {jsoninfo.contenido3}
          </p>
        </div>
      </div>
      <div className="info-link-buttom">
            <VerMas/>
    </div>
        </div>
    </div>
  );
};

export default CardPaquete;
