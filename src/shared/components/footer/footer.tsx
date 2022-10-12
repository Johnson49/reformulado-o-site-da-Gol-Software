import { App, Autor, Container, Contato, Contatos, DevCont, Endereco, GrupoContatos, GrupoMenu1, GrupoMenu2, Icone, Info, Localizacao, LogoMarca, NavBar, Opcao, RedesSocias, SubTitulo, Titulo } from "./style"
import {FaGithub, FaRegChartBar, FaMousePointer, FaLaptopHouse, FaInstagram, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


export const Footer: React.FC = () => {
    return(
        <Container>
            <Endereco>
                <LogoMarca>
                    <p> Gol software </p>
                </LogoMarca>

                <Localizacao>
                    <p>Avenida Nazaré 272 - sala 201</p>
                    <p>Belém PA, 66035-115</p>
                </Localizacao>

                <Contatos>
                    <Contato>
                        <Icone size="20" paddingRight="12">
                            <FaPhoneAlt /> 
                        </Icone>
                        (91) 3225-0584
                    </Contato>
                    <Contato> 
                        <Icone size="20" paddingRight="12">
                            <FaEnvelope /> 
                        </Icone>
                        gol@golsoftware.com.br
                    </Contato>
                </Contatos>

                <RedesSocias>
                    <App>
                        <FaFacebookSquare />
                    </App>
                    <App>  
                        <FaLinkedin />
                    </App>
                    <App>
                        <FaInstagram />
                    </App>
                   
                </RedesSocias>

            </Endereco>
            <NavBar>
                <GrupoMenu1>
                    <Opcao> 
                        <Icone size="15" paddingRight="7">
                        <FaPhoneAlt/> 
                        </Icone>
                        91 3225-0584
                    </Opcao>
                    <Opcao>
                        <Icone size="15" paddingRight="4">
                            <FaMousePointer />
                        </Icone>
                        gol@golsoftware.com.br
                    </Opcao>
                </GrupoMenu1>

                <GrupoMenu2>
                    <Opcao>
                        <Icone size="20" paddingRight="7">
                            <FaRegChartBar />
                        </Icone>
                        Acesso à Plataforma Gol
                    </Opcao>
                    <Opcao>
                        <Icone size="20" paddingRight="7">
                            <FaLaptopHouse />
                        </Icone>
                        Acesso ao Gol Condomínio
                    </Opcao>
                </GrupoMenu2>
            </NavBar>

            <Autor>
                <Info>
                    <Titulo>Desenvolvido por Simeone Johnson.</Titulo>
                    <SubTitulo>Todos os Direitos Reservados © 2022</SubTitulo>
                </Info>
                <GrupoContatos>
                    <DevCont href="https://github.com/Johnson49" target={"_blank"}>
                        <FaGithub />
                    </DevCont>
                    <DevCont href="https://www.linkedin.com/in/simeone-johnson/" target={"_blank"}>
                        <FaLinkedin />
                    </DevCont>
                </GrupoContatos>
            </Autor>
        </Container>
    )
}