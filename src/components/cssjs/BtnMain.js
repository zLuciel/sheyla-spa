import styled from "styled-components";
export const ReservarCita = styled.button`
 position: relative;
    margin-right: 10px;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    font-family: inter;
    :before{
        content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background:  ${({theme}) => theme.hover};
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    }
    span {
    position: relative;
    font-family: inter;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: black;
   }
   svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: black;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
   }
   :hover:before {
    width: 100%;
    background:  ${({theme}) => theme.hover};
   }
   :hover svg {
    transform: translateX(0);
   }
   :active {
    transform: scale(0.95);
   }
`