import { ImageContainer, Sombra } from "./style"

interface ImageProps{
    background: string
    height: string
    rgba: string

}

export const Image: React.FC<ImageProps> = ({background, height, rgba })=>{
    return(
        <ImageContainer background={background} height={height}>
            <Sombra rgba={rgba }/>
        </ImageContainer>
    )
}