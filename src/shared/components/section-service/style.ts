import styled from "styled-components";

export const Container = styled.section`
max-width: 1600px;
color: #fff;
background: rgba(21,20,25);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
padding-bottom: 2rem;

`

export const Conteudo = styled.div`
    position: relative;
    width: 90%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export const ServicoArqui = styled.div`
        background: transparent ;
        width: 100%;
        height: 200px;
        display: flex;
        flex-flow: column nowrap;
        position: absolute;

        bottom: 70px;
        left: 1%;
        h2{
            text-align: left;
                
        }
        p{
            text-align: left !important;
        }

`

export const Titulo = styled.h2`
        color: #0170e4;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 2.8rem;
        line-height: 3.3rem;
        font-family: 'Poppins', sans-serif;
        text-shadow: 0 8px 20px #000;
        letter-spacing: 5px;
`

export const Subtitulo = styled.p`
        font-size: 1.2rem;
        text-indent: 15px;
        padding-bottom: 7px;
        color: rgb(148, 148, 148);
        letter-spacing: 1.7px;
        font-weight: 300;
        line-height: 20px;
`

export const Descricao = styled.p`
        color: rgb(216, 216, 216);
        font-size: 13px;
        letter-spacing: 2px;
        line-height: 20px;

`

export const ServicoSoft = styled.div`
position: absolute;
top: -45px;
right: 1%;

h2{
    text-align: right;
}

p{
    text-align: right !important;
}
background: transparent ;
           
            width: 100%;
            height: 200px;
            display: flex;
            flex-flow: column nowrap;
`

export const ServicoFlex = styled.div`

position: absolute;
top: 190px;
left: 1%;
h2{
    text-align: left;
}

p{
    text-align: left !important;
}

background: transparent ;
           
    width: 100%;
    height: 200px;
    display: flex;
    flex-flow: column nowrap;
`