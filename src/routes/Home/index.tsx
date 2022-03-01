import { useState } from 'react';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Clients,
  ClientsHeader,
  ClientList,
  Summary,
  SummaryFooter,
} from './styles';

import { Title } from '../../components/CommonComponents';
import { LabeledInput } from '../../components/LabeledInput';
import { SummaryCard } from '../../components/SummaryCard/SummaryCard';
import { Client } from './components/Client';
import { NewClientForm } from '../../components/NewClientForm';

import { getClients } from '../../database';

export function Home() {
  const [isNewClientModalVisible, setIsNewClientModalVisible] = useState(false);
  const clients = getClients();

  function handleShowNewClientModal() {
    setIsNewClientModalVisible(true);
  }

  function handleCloseNewClientModal() {
    setIsNewClientModalVisible(false);
  }

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
            {clients.map((clientData) => (
              <Client key={clientData.id} data={clientData} />
            ))}
          </ClientList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard />

          <SummaryFooter>
            <Button
              title="Cadastrar novo cliente"
              icon="plus"
              buttonAttrs={{ onClick: handleShowNewClientModal }}
            />
          </SummaryFooter>
        </Summary>
      </Content>

      <NewClientForm
        isVisible={isNewClientModalVisible}
        closeModal={handleCloseNewClientModal}
      />
    </Container>
  );
}
