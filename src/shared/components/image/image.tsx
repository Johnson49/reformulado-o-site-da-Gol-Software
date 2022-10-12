import { ImageContainer, Sombra } from "./style"

interface ImageProps{
    background: string
    height: string

}

export const Image: React.FC<ImageProps> = ({background, height })=>{
    return(
        <ImageContainer background={background} height={height}>
            <Sombra/>
        </ImageContainer>
    )
}