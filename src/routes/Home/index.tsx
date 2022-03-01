import { useEffect, useState, ChangeEvent } from 'react';
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
import { SummaryCard } from '../../components/SummaryCard';
import { Client } from './components/Client';
import { NewClientForm } from '../../components/NewClientForm';

import { ClientData } from './components/Client';
import { getClients, getPurchases } from '../../database';

export function Home() {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [filteredClients, setFilteredClients] = useState<ClientData[]>([]);
  const [isNewClientModalVisible, setIsNewClientModalVisible] = useState(false);

  const purchases = getPurchases();

  const purchasesTotalValue = purchases
    .map((purchase) => purchase.value)
    .reduce((accumulator, actual) => accumulator + actual);

  useEffect(() => {
    const clientData = getClients();
    setClients(clientData);
    setFilteredClients(clientData);
  }, []);

  function handleShowNewClientModal() {
    setIsNewClientModalVisible(true);
  }

  function handleCloseNewClientModal() {
    setIsNewClientModalVisible(false);
  }

  function handleFilterClient(event: ChangeEvent<HTMLInputElement>) {
    const filterText = event.target.value.toLowerCase();

    const newFilteredClients = clients.filter((client) =>
      client.name.toLowerCase().includes(filterText)
    );

    setFilteredClients(newFilteredClients);
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
              inputAttrs={{
                placeholder: 'Procurar...',
                onChange: handleFilterClient,
              }}
              style={{ maxWidth: '16rem', textAlign: 'left' }}
            />
          </ClientsHeader>

          <ClientList>
            {filteredClients.map((client) => (
              <Client key={client.id} data={client} />
            ))}
          </ClientList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard sales={purchases.length} total={purchasesTotalValue} />

          <SummaryFooter>
            <Button
              title="Cadastrar novo cliente"
              icon="plus"
              buttonAttrs={{
                onClick: handleShowNewClientModal,
                type: 'button',
              }}
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
