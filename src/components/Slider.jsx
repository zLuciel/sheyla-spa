import {useRef,useEffect} from 'react'
import img1 from "../assets/img/Vitamina1.png"
import img2 from "../assets/img/Vitamina2.png"
import img3 from "../assets/img/Vitamina3.png"
import { ContainerSliderHiden, ContenedorPrincipal, SliderImg } from '../components/cssjs/SliderStyle'
import { VitaminaSvg } from './svg/VitaminaSvg'
const Slider = () => {
    const SliderHiden = useRef(null);
    const skip = ()=>{
        if(SliderHiden.current.children.length > 0){
            //**Obtenemos el primer hijo */
            const OneElement = SliderHiden.current.children[0];
            //** establecemos la transiccion cada imagen*/
            SliderHiden.current.style.transition = `300ms ease-out all`
            //** tamaño de cada imagen */
            const tamañoSlide = SliderHiden.current.children[0].offsetWidth
            //**movemos el slider */
            SliderHiden.current.style.transform = `translateX(-${tamañoSlide}px)`
            //** reiniciamos ala posicion 0 */
            const transicion = ()=>{
                SliderHiden.current.style.transition = `none`;
                SliderHiden.current.style.transform = `translateX(0)`;
                //**tomamos el primer elemento y lo mandamos al fina */
                SliderHiden.current.appendChild(OneElement);

                SliderHiden.current.removeEventListener(`transitionend`,transicion)
            }
            //**eventlistener para cunado acabe la animacion */
            SliderHiden.current.addEventListener(`transitionend`,transicion);
    }
}
    useEffect(()=>{

            let prueba1 = setInterval(()=>{
                skip();
            },5000);
            //**eliminar el intervalo cuando el usuario pasa el maus  */
        SliderHiden.current.addEventListener('mouseenter',() => {
            clearInterval(prueba1);
        });
        //**volvemos a reanudar */
        SliderHiden.current.addEventListener("mouseleave",()=>{
            prueba1 = setInterval(()=>{
                skip();
            },5000)
        });

    },[])

  return (
    <ContenedorPrincipal>
      <VitaminaSvg/>
        <ContainerSliderHiden ref={SliderHiden}>
      <SliderImg >
        <img src={img1} alt="vitamina"/>
      </SliderImg>
      <SliderImg>
        <img src={img2} alt="vitamina"/>
      </SliderImg>
      <SliderImg>
        <img src={img3} alt="vitamina"/>
      </SliderImg>
      <SliderImg>
        <img src={img1} alt="vitamina"/>
      </SliderImg> 
        </ContainerSliderHiden>
      {/*<ControlSlider>
        <button onClick={skip} >skip</button>
        <button onClick={back} >back</button>
      </ControlSlider>*/}
    </ContenedorPrincipal>
  )
}

export default Slider;
