import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
overflow: hidden;
position: relative;
svg{
    position: absolute;
    width: 350px;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`

export const SliderImg = styled.div`
min-width: 100%;
overflow: hidden;
`
export const ContainerSliderHiden = styled.div`
width: 540px;
display: flex;
flex-wrap: nowrap;
transition: .3s ease all;
z-index: 520;
max-height: 540px;
position: relative; //**por si quiero poner texto encima del slider o svg */
img{
    width: 100%;
    vertical-align:top;
}
`
export const ControlSlider = styled.div`
border:1px solid red ;
display : flex;
justify-content: center;
align-items: center;
`