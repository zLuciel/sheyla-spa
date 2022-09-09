import styled from "styled-components";
export const BtnInfoMain = styled.div`
    display: flex;
    margin: 15px;
`
export const BtnIcon = styled.div`
border-radius: 50%;
    color: black;
    width: 40px;
    height: 40px;
    background:  ${({theme}) => theme.text};
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        padding: 4px;
        width: 40px;
        height: 40px;
    }
`
export const BtnInfo = styled.div`
 background: ${({theme}) => theme.btninfomain};
    width: 150px;
    height: 50px;
    position: relative;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center; 
p{
 font-size: 0.8rem;
 padding: 0 15px;
 line-height: normal;
}
&:before {
    content: '';
    width: 20px; 
    height: 20px;
    background:  ${({theme}) => theme.btninfomain};
    position: absolute;
    left: -8px;
       transform: rotate(45deg) ;
       Top: 40%; 
    margin-top: -5px;
  }
`