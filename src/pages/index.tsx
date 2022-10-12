import { Image, SectionHome, SectionProducts, SectionService } from "../shared/exports"
import { NavBar } from "../shared/exports"
import background from "../assets/img/sessao_2.png"
import Image2 from "../assets/img/image2.png"



export const Index: React.FC  = () =>{
    return(
        <>
            <NavBar />
            <SectionHome />
            <SectionProducts />
            <Image background={background} height="20"/>
            <SectionService />
            <Image background={Image2} height="23"/>
        </>
    )
} 