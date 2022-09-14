import styled from "styled-components";

export const PlanCardGrid = styled.div`
/*border: 1px solid red;*/
  height: 500px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "titleimg infocard";
   /* gap: 40px;*/ //** prpdoia usarlo para reponsive*/
   
`;
export const ColumImg = styled.div`
  grid-area:   ${(props) => (props.bol ? "infocard" : "titleimg")};
  justify-self: center; //** deberia estar en center pero quiero probar end serviria para responsive*/
  align-self: center;
  h1 {
    text-align: center;
    margin-bottom: 15px;
    background: ${({ theme }) => theme.text};
    -webkit-background-clip: text;
    color: transparent;
  }
  div {
    /*width: 450px; 
    height: 250px;*//**muy pequeño probare algo nuevo pordria usar este valor para responsive*/
    width: 605px;
    height: 361px;
    border-radius: 10px;
  }
  div > img {
    width: 100%;
    height: 100%;
  }
`;
export const Colum2InfoAnimation = styled.div`
  grid-area:   ${(props) => (props.bol ? "titleimg" : "infocard")};
  justify-self: center; //** igual este deberia ser center xd pero start por responsive */
  align-self: center;
  .colum2-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 20px;
  }
  .info-link-buttom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ContainerBolitas = styled.div`
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    margin: 12px;
  }
`;
export const TextoCardPack = styled.div`
  //** podria ir un width aqui para reducir el texto */
 //** width: 600px; solo responsive*/
 max-width: 600px;
 min-width: 500px;
  p {
    font-size: 1rem;
    margin-bottom: 6px;
    font-family: var(--letra2);
  }
  h1 {
    font-size: 1.5rem;
    background: ${({ theme }) => theme.text};
    -webkit-background-clip: text;
    color: transparent;
  }
`;
export const PackNum = styled.div`
  h2 {
    text-align: center;
    color: gray;
    font-size: 3rem;
    line-height: 0.9;
  }
  h3 {
    background: ${({ theme }) => theme.text};
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.5rem;
  }
`;
