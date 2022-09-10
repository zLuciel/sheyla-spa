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
    grid-template-columns: 60% 40%;
    grid-template-areas: "VitaminaInfo VitaminaImg";
`
export const VitaminaInfo = styled.div`
grid-area: VitaminaInfo;
h1{
  font-family: var(--letra1);
    background: ${({theme}) => theme.text};
     -webkit-background-clip: text;
      color: transparent;  
    line-height: 1.5;
    font-size: 5rem;
}
p{
  font-family: var(--letra1);
  line-height: 1.5;
  font-size: 1.8rem;
  max-width: 700px;
 color: ${({theme}) => theme.textpq};
 margin-bottom: 15px;
}
button{
  font-size: 1.2rem;
  width: 157px;
  height: 40.04px;
  border-radius: 2px;
  border: none;
  background: ${({theme}) => theme.text};
  &:hover{
    cursor: pointer;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
  &:active{
    transform: translateY(-1px);
  }
}
`
export const VitaminaImg = styled.div`
grid-area: VitaminaImg;
  align-self: center;
  justify-self: center;
/*overflow: hidden; /*Vamos hacer que sea un slider */

`