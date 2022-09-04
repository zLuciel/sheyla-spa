import {useState,useEffect} from "react";
//import { Buttom2 } from "../buttoms/Buttom2/Buttom2";
import BtSobremi from "../buttoms/sobremi/BtSobremi";
import "./Main.css";
const mainspa = require.context(`../../assets/main-spa`, true);
const Main = () => {
   const [cont,setCont] = useState(0);
   //const [greenbol,setGreenbol] = useState(greenyellow : white);
  useEffect(()=>{
    const videoxd = document.getElementById("videomain")

     videoxd.addEventListener("ended",updatevideo )
    })

    const updatevideo = ()=> {
      cont === 3 ? setCont(0) : setCont(cont + 1)
     }
     const video0 = cont === 0 ? "greenyellow" : "white"
     const video1 = cont === 1 ? "greenyellow" : "white"
     const video2 = cont === 2 ? "greenyellow" : "white"
     const video3 = cont === 3 ? "greenyellow" : "white"
  return (
    <main className="main-principal-grid">
      {/*<img src={mainspa(`./main1.jpg`)} alt="spa" className="imagen-main" />*/}
      <video id="videomain" src={mainspa(`./masaje${cont}.mp4`)} className="imagen-main2" autoPlay muted ></video>
      <div className="main-info">
        <h1>La mejor experiencia de belleza <br /> con <u> Sheyla Maza</u></h1>
        <p>
          Con más de <b>10 años de experiencia</b>  Certificada, no dude en realizar
          consultas.
        </p>
        <div className="container-buttom-main">
          <BtSobremi text={"Reservar cita"} />
          <BtSobremi text={"Sobre mi"} />
        </div>
        
      </div>
      <div className="main-bolitas">
        <div style={{background:video0}} className="bol-1" onClick={()=> setCont(0)}></div>
        <div style={{background:video1}} className="bol-2" onClick={()=> setCont(1)}></div>
        <div style={{background:video2}} className="bol-3" onClick={()=> setCont(2)}></div>
        <div style={{background:video3}} className="bol-4" onClick={()=> setCont(3)}></div>
      </div>
    </main>
  );
};

export default Main;
