import styled from "styled-components";

interface IContainerProps{
    background: string
}

export const Container = styled.div<IContainerProps>`
    background-image: url(${(props) => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1600px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 80px;
    background-color: rgba(0,0,0,.5);
    height: 100vh;

`
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const TituloContainer = styled.div`
margin-top: -70px;
`

export const Titulo = styled.h1`

    font-family: 'Poppins', sans-serif;
    text-shadow: 0 8px 20px #000;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: transparent;
    line-height: 66px;
    padding-left: 0;
    text-indent: 2.2rem;
    font-weight: 300;
    font-size: 72px;
    color: #ffffff;

`

export const Empresa = styled.span`
    display: block;
    text-indent: 0;
    padding-left: 0;
                margin-bottom: .8rem;

    &::after{
        content: '|';
        margin-left: 6px;
        opacity: 1;
        font-weight: 100;
        animation: pisca .7s infinite;


    @keyframes pisca{
        0%, 100%{
                    opacity: 1;
                }
                      
                50%{
                        opacity: 0;
                }
            }
        }
`
export const SubTitulo = styled.p`
color: rgb(226, 226, 226);
font-size: 1.2rem;
font-weight: 200;
text-shadow: 0 8px 20px #000;
letter-spacing: 1px;
margin-bottom: 2.1rem;
`

export const Botao = styled.button`
font-weight: 300;
letter-spacing: 1px;
border-style: none;
color: #fff;
padding: 17px 30px;
background-color: rgb(43, 46, 63);
font-size: 15px;
text-align: center;
cursor: pointer;
border-radius: 10px;
text-transform: inherit;
&:hover{
    background-color: rgb(61, 66, 88);
}
`
