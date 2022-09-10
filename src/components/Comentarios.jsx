import { useRef,useEffect } from "react";
import Card from "./Card";
import {
  BtnCard,
  CardConatiner,
  CardSilder,
  CardTituloPrincipal,
  ComentariosBg,
  ContainerComent,
} from "./cssjs/ComentarioStyle";

const Comentarios = () => {
  const SliderCard = useRef(null);
  const skip = () => {
    if (SliderCard.current.children.length > 0) {
      //**Obtenemos el primer hijo */
      const OneElement = SliderCard.current.children[0];
      //** establecemos la transiccion cada imagen*/
      SliderCard.current.style.transition = `300ms ease-out all`;
      //** tamaño de cada imagen */
      const tamañoSlide = SliderCard.current.children[0].offsetWidth;
      //**movemos el slider */
      SliderCard.current.style.transform = `translateX(-${tamañoSlide}px)`;
      //** reiniciamos ala posicion 0 */
      const transicion = () => {
        SliderCard.current.style.transition = `none`;
        SliderCard.current.style.transform = `translateX(0)`;
        //**tomamos el primer elemento y lo mandamos al fina */
        SliderCard.current.appendChild(OneElement);

        SliderCard.current.removeEventListener(`transitionend`, transicion);
      };
      //**eventlistener para cunado acabe la animacion */
      SliderCard.current.addEventListener(`transitionend`, transicion);
    }
  };
  const back = ()=>{
    if(SliderCard.current.children.length > 0){
        //**obtener el ultimo elemento */
        const index = SliderCard.current.children.length - 1;
        const EndElement = SliderCard.current.children[index];
        SliderCard.current.insertBefore(EndElement,SliderCard.current.firstChild);
        SliderCard.current.style.transition = `none`;
        const tamañoSlide = SliderCard.current.children[0].offsetWidth
        SliderCard.current.style.transform = `translateX(-${tamañoSlide}px)`
        setTimeout(()=>{
            SliderCard.current.style.transition = `300ms ease-out all`
            SliderCard.current.style.transform = `translateX(0)`
            
        },30);
    }
}
  useEffect(()=>{

    let TiempoCard = setInterval(()=>{
        skip();
    },6000);
    //**eliminar el intervalo cuando el usuario pasa el maus  */
SliderCard.current.addEventListener('mouseenter',() => {
    clearInterval(TiempoCard);
});
//**volvemos a reanudar */
SliderCard.current.addEventListener("mouseleave",()=>{
    TiempoCard = setInterval(()=>{
        skip();
    },5000)
});

},[])
  return (
    <ComentariosBg>
      <ContainerComent>
        <CardTituloPrincipal>
          <h1>Reseñas</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </CardTituloPrincipal>
        <CardConatiner>
          <BtnCard>
            <button onClick={skip}>SOY butto</button>
            <button onClick={back}>SOY butto</button>
          </BtnCard>
          <CardSilder ref={SliderCard}>
            <Card name={"jose"} />
            <Card name={"manuel"}/>
            <Card name={"pepe"}/>
            <Card name={"jjareth"}/>
            <Card name={"MARISOL"}/>
            <Card name={"ESTEFANI"}/>
            <Card name={"Diana"}/>
            <Card name={"Cielo"}/>
            <Card name={"Remo"}/>
          </CardSilder>
        </CardConatiner>
      </ContainerComent>
    </ComentariosBg>
  );
};

export default Comentarios;
