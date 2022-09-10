import React from "react";
import { ContainerVitamina, ContenidoGrid, TituloPrincipal, VitaminaImg, VitaminaInfo, VitaminaMargin } from "../cssjs/VitaminaStyle";
import Slider from "../Slider"
const Vitamina = () => {
  return (
    <ContainerVitamina>
        <VitaminaMargin>
      <TituloPrincipal>
        <h2>Vitaminas</h2>
        <p>
          Power pack (5) Coctel vitaminico intregral, tratamiento ideal para
          todos los organos y tejidos
        </p>
      </TituloPrincipal>
      <ContenidoGrid>
        <VitaminaInfo>
          <h1>Power pack (5) Coctel vitaminico intregral</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <button>Ver Más</button>
        </VitaminaInfo>
        <VitaminaImg>
          <Slider/>
        </VitaminaImg>
      </ContenidoGrid>
      </VitaminaMargin>
    </ContainerVitamina>
  );
};
export default Vitamina;
