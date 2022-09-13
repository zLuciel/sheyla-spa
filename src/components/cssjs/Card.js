import styled from "styled-components";

export const Cards = styled.div`
margin: 40px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
min-width: 290px;
min-height: 290px;
background: linear-gradient(90deg, #141E30 0%, #243B55 100%);
border: 3px solid rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 56px;
p{
    font-size: 0.9rem;
    padding: 10px 30px;
}
h1{
    font-size: 1.5rem;
}
`
export const CardImg = styled.div`
width: 70px;
height: 70px;
margin-bottom: 10px;
border-radius: 50%;
overflow: hidden;
img{
    width: 100%;
    height: auto;
}
`

export const CardFlexStart = styled.div`

display: flex;
li{
    color:  ${({theme}) => theme.textmain};
    list-style: none;
    margin: 5px 10px;
}
li > *{
    font-size: 1.5rem;
}
`