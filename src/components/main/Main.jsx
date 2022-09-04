import React from "react";
import "./Main.css";
const mainspa = require.context(`../../assets/main-spa`, true);
const Main = () => {
  return (
    <main className="main-principal-grid">
      <img src={mainspa(`./main1.jpg`)} alt="spa" className="imagen-main" />
      <div className="main-info">
        <h1>La mejor experiencia de belleza <br /> con <u> Sheyla Maza</u></h1>
        <p>
          Con más de 10 años de experiencia Certificada, no dude en realizar
          consultas.
        </p>
      </div>
      <div className="main-bolitas">
        <div className="bol-1"></div>
        <div className="bol-2"></div>
        <div className="bol-3"></div>
        <div className="bol-4"></div>
        <div className="bol-5"></div>
      </div>
    </main>
  );
};

export default Main;
