import { Button } from '../../components/Button';
import {
  Container,
  Header,
  Avatar,
  Content,
  Clients,
  ClientsHeader,
  ClientList,
  Summary,
  SummaryFooter,
} from './styles';

import { Title, Subtitle } from '../../components/CommonComponents';
import { LabeledInput } from '../../components/LabeledInput';
import { Client } from './components/Client';
import { SummaryCard } from './components/SummaryCard';

import avatar from '../../assets/avatar.png';
import { theme } from '../../styles/theme';

export function Home() {
  return (
    <Container>
      {/* <Header>
        <Subtitle>Bom dia/tarde/noite, Fulano!</Subtitle>
        <Avatar src={avatar} />
      </Header> */}

      <Content>
        <Clients>
          <ClientsHeader>
            <Title>Clientes</Title>
            <LabeledInput
              inputAttrs={{ placeholder: 'Procurar...' }}
              style={{ maxWidth: '16rem', textAlign: 'left' }}
            />
          </ClientsHeader>

          <ClientList>
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            {/* <Client />
            <Client />
            <Client />
            <Client /> */}
          </ClientList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard />

          <SummaryFooter>
            <Button
              title="Cadastrar novo cliente"
              icon="plus"
              buttonAttrs={{}}
            />
          </SummaryFooter>
        </Summary>
      </Content>
    </Container>
  );
}
