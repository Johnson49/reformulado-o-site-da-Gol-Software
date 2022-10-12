import styled from "styled-components";



export const Container = styled.section`
    max-width: 1600px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(21,20,25);
    padding-bottom: 7rem;    

`

export const Conteudo = styled.div`
        border: 1px solid grey;
        width: 95%;
        display: flex;
        flex-flow: row nowrap;
        column-gap: 3rem;

`

interface IContainerProps{
    background: string
}


export const AreaInfo = styled.div<IContainerProps>`

    flex-basis: 35%;
    border-right: 1px solid grey;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    height: 90vh;
    background-image: url(${(props) => props.background});
    background-color: rgba(0,0,0,.6);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`

export const Mensagem = styled.div`
    padding: 0 10px 0 20px;
    font-weight: 200;
    text-align: start;
    font-size: 45px;
    color: #ececec;
    background: transparent;
    letter-spacing: 5px;
    line-height: 1.7em;

`

export const Produtos = styled.div`
            flex-basis: 70%;
            background-color: rgba(19,21,23);
            display: flex;
            flex-flow: row wrap;
            position: relative;
`

export const ServicoRH = styled.div`
position: absolute;
padding: 0 20px;
width: 240px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1B1C1E;
top:  5%;
left: .1%;

`
interface IconeProps{
    size: number
}

export const Icone = styled.i<IconeProps>`
position: relative; 
right: 72px;
font-size: ${(props) => props.size}px;
bottom: 30px;
color: #fd6262;

`

export const Titulo = styled.h2`
    color: #889CEF;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 25px;
    text-align: left;
    font-weight: 400;

`

export const Descricao = styled.p`

        font-size: 15px;
                    font-family: 'Open Sans', sans-serif;
                    position: relative;
                    font-weight: 500;
                    color: #8A8A8A;
                    line-height: 1.6rem;
                    text-align: left;

                    &::before{
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: -20px;
                        height: 3px;
                        width: 100%;
                        background-color: #3d4147;
                        border-radius: 10px;
                       }
`

export const ServicoAC = styled.div`
top: 5%;
left: 67%;
height: 410px;
position: absolute;
padding: 0 20px;
width: 240px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1B1C1E;

`
export const ServicoSC = styled.div`
left: 34.5%;
top: 35%;
i{
    margin-top: 30px;
}              


position: absolute;
padding: 0 20px 15px;
width: 240px;
height: 380px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #1B1C1E;

`