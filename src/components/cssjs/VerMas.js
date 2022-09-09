import styled from "styled-components";

export const BtnVerMas = styled.button`
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
`