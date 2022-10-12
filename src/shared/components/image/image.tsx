import { ImageContainer, Sombra } from "./style"
import background from "../../../assets/img/sessao_2.png"


export const Image = ()=>{
    return(
        <ImageContainer background={background}>
            <Sombra/>
        </ImageContainer>
    )
}