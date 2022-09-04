//import {useState,useEffect} from "react";
import { Buttom2 } from "../buttoms/Buttom2/Buttom2";
import BtSobremi from "../buttoms/sobremi/BtSobremi";
import "./Main.css";
const mainspa = require.context(`../../assets/main-spa`, true);
const Main = () => {



  return (
    <main className="main-principal-grid">
      {/*<img src={mainspa(`./main1.jpg`)} alt="spa" className="imagen-main" />*/}
      <video src={mainspa("./masaje.mp4")} className="imagen-main2" autoPlay muted loop></video>
      <div className="main-info">
        <h1>La mejor experiencia de belleza <br /> con <u> Sheyla Maza</u></h1>
        <p>
          Con más de <b>10 años de experiencia</b>  Certificada, no dude en realizar
          consultas.
        </p>
        <div className="container-buttom-main">
          <BtSobremi/>
          <Buttom2/>
        </div>
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