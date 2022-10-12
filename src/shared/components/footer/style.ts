import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
background: #141316;
color: #ececec;
padding: 50px 30px 7px;

display: flex;
flex-direction: column;
justify-content: space-between;

row-gap: 2rem;
`

export const Endereco = styled.div`
display: flex;
justify-content: space-between;
`


export const LogoMarca = styled.div`
    p{
        cursor: pointer;
        border: 2px solid rgb(239 239 239/71%);
        color: #efefef;
        padding: 4px 4px 4px 6px;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 300;
    }


`

export const Localizacao = styled.div`
p{
    font-size: 1rem;
    letter-spacing: 1.5px;
    font-weight: 200;
    line-height: 1.5rem;
}
`

export const Contatos = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px; 
`

// 20, 12

interface IconeProps{
    size: string
    paddingRight: string
}
export const Icone = styled.i<IconeProps>`
        font-size: ${(props) => props.size}px;
        padding-right: ${(props) => props.paddingRight}px;
        text-align: center;
      
`


export const Contato = styled.p`
font-size: 1rem;
text-align: center;
letter-spacing: 1.5px;
font-weight: 200;
line-height: 1.5rem;
    
`

export const RedesSocias = styled.div`
display: flex;
        justify-content: space-between;
        column-gap: 1rem;
        align-items: center;

`

export const App = styled.a`
            font-size: 30px;
            text-decoration: none;
            cursor: pointer;
            color: #efefef;

            &:hover{
                color: #d1d1d1;
            }
`


export const NavBar = styled.nav`
border-top: 1px solid rgba(128, 128, 128, 0.452);
border-bottom: 1px solid rgba(128, 128, 128, 0.452);
padding: 15px 3px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: #efefef;
column-gap: 2rem;
`

export const GrupoMenu1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
column-gap: 1.5rem;


`

export const Opcao = styled.p`
font-size: 1rem;
                text-align: center;
                letter-spacing: 1.5px;
                font-weight: 300;
                line-height: 1.5rem;
                cursor: pointer;
                &:hover{
                    color: #d1d1d1;
                }

`


export const GrupoMenu2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
column-gap: 1.5 rem;
`


export const Autor = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Titulo = styled.p`
            font-size: 1.3rem;
            text-align: center;
            letter-spacing: 1.5px;
            font-weight: 300;
            line-height: 1.5rem;
`


export const SubTitulo = styled.p`
            font-size: 1.3rem;
            text-align: center;
            letter-spacing: 1.5px;
            font-weight: 300;
            line-height: 1.5rem;
            font-size: .8rem;
                color: #d1d1d1;
`

export const GrupoContatos = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 2rem;
            padding: 7px 0 0;
`

export const DevCont = styled.a`
padding-top: 5px;
text-decoration: none;
color: #e2e2e2;
font-size: 37px;

&:hover{
    color: #b4b4b4;
}
`