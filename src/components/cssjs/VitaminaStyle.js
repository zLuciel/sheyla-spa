import styled from "styled-components";

export const ContainerVitamina = styled.div`
  width: 100%;
  //**aqui ira el backgraound dark o depende */
`
export const VitaminaMargin = styled.div`
width: 80%;
margin: auto;
`
export const TituloPrincipal = styled.div`
width:100%;
text-align: center;
h2{
  margin-bottom: 20px;
}
p{
  margin-bottom: 20px;
}
`
export const ContenidoGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: "VitaminaInfo VitaminaImg";
`
export const VitaminaInfo = styled.div`
grid-area: VitaminaInfo;
h1{
  font-family: var(--letra1);
    background: ${({theme}) => theme.text};
     -webkit-background-clip: text;
      color: transparent;  
    line-height: 142px;
    font-size: 5rem;
}
p{
  font-family: var(--letra3);
  line-height: 1.5;
  font-size: 2rem;
 color: ${({theme}) => theme.textpq};
}
`
export const VitaminaImg = styled.div`
grid-area: VitaminaImg;
`