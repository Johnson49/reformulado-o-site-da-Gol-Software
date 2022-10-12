import { Image, SectionHome, SectionProducts } from "../shared/exports"
import { NavBar } from "../shared/exports"



export const Index: React.FC  = () =>{
    return(
        <>
            <NavBar />
            <SectionHome />
            <SectionProducts />
            <Image />
        </>
    )
} 