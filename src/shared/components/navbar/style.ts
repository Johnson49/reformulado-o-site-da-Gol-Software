import styled from "styled-components";


export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    color: white;
    background: rgb(20, 19, 22);
    padding: 17px 25px;
    max-width: 1600px;

`
export const LogoMarca = styled.div`
    cursor: pointer;
    border: 2px solid rgb(239 239 239/71%);
    color: #efefef;
    padding: 4px 4px 4px 6px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 300;

`

export const Menu = styled.div`

    display: flex;
    column-gap: 2rem;
    align-items: center;
    justify-content: space-between;

`


export const Opcao = styled.p`

    font-size: 13px;
    color: hsla(0,0%,100%,.6);
    font-weight: 600;
    cursor: pointer;
    flex: 1 1;
    text-align: center;

    &:hover{
        color: rgba(247, 245, 245, 0.966);
    }       
`
