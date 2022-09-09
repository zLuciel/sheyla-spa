import {useState,useEffect} from "react";
import InfoMain from "../buttoms/InfoMain/InfoMain";
import BtSobremi from "../buttoms/sobremi/BtSobremi";
import { IoTime } from "react-icons/io5";
import { RiMapPin2Fill} from "react-icons/ri";
import { ButtomInfoMain, ButtomMain, MainBolitas, MainInfo,MainPrincipalGrid } from "../cssjs/MainStyle";
const mainspa = require.context(`../../assets/main-spa`, true);
const Main = () => {

   const [cont,setCont] = useState(0);
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
    <MainPrincipalGrid>
      <video id="videomain" src={mainspa(`./masaje${cont}.mp4`)} className="imagen-main2" autoPlay muted></video>
      <MainInfo >
        <h1>La mejor experiencia de belleza <br /> con <u> Sheyla Maza</u></h1>
        <p className="subtitle">
          Con más de <b>10 años de experiencia</b>  Certificada, no dude en realizar
          consultas.
        </p>
        <ButtomMain>
          <BtSobremi text={"Reservar cita"} />
          <BtSobremi text={"Sobre mi"} />
        </ButtomMain>
         <ButtomInfoMain>
          <InfoMain  info={"9.00 AM A 1.00 PM 3.00 PM A 7.00 PM"} icon={<IoTime/> } />
          <InfoMain  info={"JR .SOL.ORO 7028"} icon={<RiMapPin2Fill/>} />
        </ButtomInfoMain>
      </MainInfo>
      <MainBolitas>
        <div style={{background:video0}} className="bol-1" onClick={()=> setCont(0)}></div>
        <div style={{background:video1}} className="bol-2" onClick={()=> setCont(1)}></div>
        <div style={{background:video2}} className="bol-3" onClick={()=> setCont(2)}></div>
        <div style={{background:video3}} className="bol-4" onClick={()=> setCont(3)}></div>
      </MainBolitas>
    </MainPrincipalGrid>
  );
};

export default Main;
