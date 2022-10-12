import styled from "styled-components";

export const Container = styled.div`
    max-width: 1600px;
    width: 100%;
    height: 60vh;
    color: #ececec;
    background: #141316;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


export const Descricao = styled.p`
width: 90%;
        text-indent: 20px;
        text-align: center;
      position: relative;
      font-size: 1.4rem;
      line-height: 30px;
      letter-spacing: 4px;
      font-weight: 300;
      text-shadow: 5px 5px 10px rgba(25, 82, 90, 0.425);

        &::before{
            content: "";
            position: absolute;
            left: 0;
            bottom: -60px;
        
            height: 1px;
            width: 100%;
            background-color: #b0b6c0;
            border-radius: 10px;
           }

`