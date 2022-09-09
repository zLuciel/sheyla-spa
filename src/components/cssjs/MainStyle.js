import styled from "styled-components";

export const MainPrincipalGrid = styled.div`
  width: 100%;
  min-height: calc(90vh - 60px);
  position: relative;
  display: grid;
  overflow: hidden;
  grid-template-columns: 95% 5%;
  grid-template-areas: "main-info main-bolitas";

  .imagen-main2 {
    z-index: -1;
    background: black;
    opacity: 0.8;
    position: absolute;
    width: 100%; /**para celular width: auto; height: 100%;*/
    height: auto;
  }
`;
export const MainInfo = styled.div`
  margin-left: 150px;
  grid-area: main-info;
  align-self: center;
  justify-self: center; /**Centrado cuando usamos grid*/
  width: max-content;
  h1 {
    text-align: center;
    font-size: 4rem;
    u{
     color: ${({theme}) => theme.textmain};  
    }
  }
   
  .subtitle {
    text-align: center;
    line-height: 3rem;
    margin-bottom: 4px;
    b{
      background: ${({theme}) => theme.text};
     -webkit-background-clip: text;
      color: transparent;  
    }
  }
`;
export const MainBolitas = styled.section`
  grid-area: main-bolitas;
  align-self: center;
  justify-self: start;
  div {
    cursor: pointer;
    margin-bottom: 50px;
    background: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  div:hover {
    transform: scale(1.5);
    background: var(--grenyellow);
  }
`;
export const ButtomMain = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
export const ButtomInfoMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    padding-top: 20px;

`
