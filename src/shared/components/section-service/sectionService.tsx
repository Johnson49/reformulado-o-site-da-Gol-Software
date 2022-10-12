import { Container, Conteudo, Descricao, ServicoArqui, ServicoFlex, ServicoSoft, Subtitulo, Titulo } from "./style"



export const SectionService = () =>{
    return(
        <Container>
            <Conteudo>
                <ServicoArqui>
                    <Titulo>Arquitetura Gol</Titulo>
                    <Subtitulo>Padroniza recursos e maximiza a produtividade de desenvolvimento.</Subtitulo>
                    <Descricao>
                    Mais que um conjunto de tecnologias, temos uma forma de produzir software que entrega o que o cliente precisa com muito mais agilidade.
                    </Descricao>
                </ServicoArqui>

                <ServicoSoft>
                    <Titulo>Qualidade de Software</Titulo>
                    <Subtitulo>Certificados com o nível G do MPS.BR. de Qualidade de Software.</Subtitulo>
                    <Descricao>Nossa forma de trabalhar é constantemente revisada – técnicas, ferramentas e práticas inovadoras são apenas mecanismos diferentes para melhorarmos nossos produtos.      </Descricao>
                </ServicoSoft>

                <ServicoFlex>
                    <Titulo>Flexibilidade</Titulo>
                    <Subtitulo>Cada cliente tem uma necessidade diferente.</Subtitulo>
                    <Descricao>Nossos produtos estão prontos para atender as particularidades de cada cenário em que são usados.</Descricao>
                </ServicoFlex>
            </Conteudo>
        </Container>
    )
}