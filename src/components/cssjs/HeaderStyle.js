import styled from "styled-components";

export const Cabezera = styled.header`
    font-family: var(--letra1);
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.438);
    position: sticky;
`

export const RedeSocial = styled.div`
 svg{
    color: ${({theme}) => theme.textmain};
    margin-right: 10px;
 }
`