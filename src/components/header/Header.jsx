
import "./Header.css"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookSquare,FaTiktok} from "react-icons/fa"
import logo from "../../assets/img/Sheyla-logo.png"
import {Cabezera,RedeSocial} from "../cssjs/HeaderStyle"
 const Header = ({theme,setTheme}) => {
    const changeMode = () => {
        if(theme === "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
  return (
      <Cabezera>
        <nav className="nav">
            <div className="nav-logo">
           <img src={logo} alt="logo" />
           <label className="switch" >
            <input type="checkbox" onClick={changeMode}/>
         <span className="slider"></span>
         </label>
            </div>
            <ul>
                <li><a href="#0">Inicio</a></li>
                <li><a href="#1">Paquetes</a></li>
                <li><a href="#2">Vitaminas</a></li>
                <li><a href="#3">Videos</a></li>
                <li><a href="#4">Fotos</a></li>
            </ul>
            <RedeSocial >
                <BsInstagram/>
                <FaFacebookSquare/>
                <FaTiktok/>
            </RedeSocial>
        </nav>
      </Cabezera>
  );
};
export default Header