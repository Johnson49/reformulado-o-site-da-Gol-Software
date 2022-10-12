import {
  Container,
  Conteudo,
  AreaInfo,
  Mensagem,
  Produtos,
  ServicoRH,
  Icone,
  Titulo,
  Descricao,
  ServicoAC,
  ServicoSC,
} from "./style";
import background from "../../../assets/img/fundo_product.webp";
import { FaUsers, FaLayerGroup, FaBusinessTime } from "react-icons/fa";

export const SectionProducts: React.FC = () => {
  return (
    <Container>
      <Conteudo>
        <AreaInfo background={background}>
          <Mensagem>
            Possuímos vários produtos para solucionar seu problema.
          </Mensagem>
        </AreaInfo>
        <Produtos>
          <ServicoRH>
            <Icone size={50}>
              <FaUsers />
            </Icone>
            <Titulo>SISTEMA DE RECURSOS HUMANOS</Titulo>
            <Descricao>
              Administre as pessoas de sua empresa com eficiência e
              transparência usando o GOL RH.
            </Descricao>
          </ServicoRH>

          <ServicoSC>
            <Icone size={45}>
              <FaLayerGroup />
            </Icone>
            <Titulo>MÓDULOS PARA SINDICO E CONDÔMINOS</Titulo>
            <Descricao>
              Conheça a Nova Solução para Administração Online de Condomínios.
              Gerencie seu Condomínio pela Internet.
            </Descricao>
          </ServicoSC>

          <ServicoAC>
            <Icone size={55}>
              <FaBusinessTime />
            </Icone>
            <Titulo>ADMINSTRAÇÃO DE CONTAS</Titulo>
            <Descricao>
              Organize as despesas e receitas de sua empresa, garantindo que a
              informação necessária vai estar disponível on-line, quando você
              precisar.
            </Descricao>
          </ServicoAC>
        </Produtos>
      </Conteudo>
    </Container>
  );
};
