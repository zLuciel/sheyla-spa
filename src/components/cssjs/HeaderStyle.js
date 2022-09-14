import styled from "styled-components";

export const Cabezera = styled.header`
    font-family: var(--letra1);
    width: 100%;
    height: 60px;
    background: ${({theme}) => theme.bg};
    position: fixed;
    z-index: 999999999;
    /*top: 0;*/
`

export const RedeSocial = styled.div`
 svg{
    color: ${({theme}) => theme.textmain};
    margin-right: 10px;
 }
`