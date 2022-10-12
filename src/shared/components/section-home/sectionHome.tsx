import { Botao, Container, Conteudo, Empresa, SubTitulo, Titulo, TituloContainer } from "./style"
import background from "../../../assets/img/fundo_home.webp"

export const SectionHome: React.FC = () =>{

    return(
        <Container background={ background }>
                <Conteudo>
                    <TituloContainer>
                        <Titulo>
                            seja bem vindo a
                            <Empresa>gol software</Empresa>
                        </Titulo>
                        <SubTitulo>Há 30 anos inovando em tecnologia.</SubTitulo>
                    </TituloContainer>
                    <Botao >Saiba mais</Botao>
                </Conteudo>
        </Container>
    )
} 