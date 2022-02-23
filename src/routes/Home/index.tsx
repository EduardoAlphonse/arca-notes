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
  SummaryCard,
  Section,
  Value,
  Separator,
  SummaryFooter,
} from './styles';

import { Title, Subtitle } from '../../components/CommonComponents';
import { LabeledInput } from '../../components/LabeledInput';
import { Client } from './components/Client';

import avatar from '../../assets/avatar.png';
import { theme } from '../../styles/theme';

export function Home() {
  return (
    <Container>
      <Header>
        <Subtitle>Bom dia/tarde/noite, Fulano!</Subtitle>
        <Avatar src={avatar} />
      </Header>

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
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
            <Client />
          </ClientList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>
          <SummaryCard>
            <Section>
              <Title>Vendas</Title>
              <Value>48</Value>
            </Section>

            <Separator />
            <Section>
              <Title>Total</Title>
              <Value>R$ 8.548,05</Value>
            </Section>
          </SummaryCard>

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
