import  { Container, LogoMarca, Menu, Opcao } from "./style"

export const NavBar:React.FC = ()=>{
    return(
        <Container>
           <LogoMarca>Go Software</LogoMarca>
            <Menu>
                <Opcao>Home</Opcao>
                <Opcao>Nossos Produtos</Opcao>
                <Opcao>Diferenciais</Opcao>
                <Opcao>Fale Conosco</Opcao>
            </Menu>
        </Container>

    )
}