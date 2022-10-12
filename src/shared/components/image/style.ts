import styled from "styled-components";

interface IContainerProps{
    background: string
    height: string
}

export const ImageContainer = styled.div<IContainerProps>`
background-image: url(${(props) => props.background});
max-width: 1600px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: ${(props) => props.height}vh;
`

export const Sombra = styled.div`
background-color: rgba(0,0,0,.3);
width: 100%;
height: 100%;
`