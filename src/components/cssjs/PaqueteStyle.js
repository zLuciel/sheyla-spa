import styled from "styled-components";

 export const PaquetesBg = styled.div`
 width: 100%;
 position: relative;
 background:  ${({theme}) => theme.bg};
 overflow: hidden;
 `
  export const ContainerPaquete = styled.div`
  z-index: 8000;
   width: 78%;/**100% en o 98% responsive%*/
 margin: auto;
 position: relative;
 font-family: var(--letra1);
.title-paquete{
  text-align: center;
}
  `