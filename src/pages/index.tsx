import { AboutMe, Footer, Image, SectionHome, SectionProducts, SectionService } from "../shared/exports"
import { NavBar } from "../shared/exports"
import image1 from "../assets/img/sessao_2.png"
import Image2 from "../assets/img/image2.png"
import Image3 from "../assets/img/39.png"



export const Index: React.FC  = () =>{
    return(
        <>
            <NavBar />
            <SectionHome />         
            <SectionProducts />
            <Image background={image1} height="20" rgba="0,0,0,.3"/>
            <SectionService />
            <Image background={Image2} height="23" rgba="0,0,0,.3"/>
            <AboutMe />     
            <Image background={Image3} height="20"  rgba="0,0,0,.6"/>
            <Footer />
        </>
    )
} 