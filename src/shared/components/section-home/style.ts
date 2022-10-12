import styled from "styled-components";

interface IContainerProps{
    urlImage: string
}

export const Container = styled.div<IContainerProps>`
    background-image: ${(props) => props.urlImage};
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