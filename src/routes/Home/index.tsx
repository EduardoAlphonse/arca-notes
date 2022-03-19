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

import { ClientData, PurchaseData } from '../../@types/entities';
import { SummaryCardProps } from '../../components/SummaryCard';

import { database } from '../../services/firebase/database';
import { onValue, ref } from 'firebase/database';

export function Home() {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [filteredClients, setFilteredClients] = useState<ClientData[]>([]);
  const [totalPurchases, setTotalPurchases] = useState<SummaryCardProps>(
    {} as SummaryCardProps
  );

  const [isNewClientModalVisible, setIsNewClientModalVisible] = useState(false);

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

  useEffect(() => {
    const clientsRef = ref(database, 'clients');

    const unsubscribe = onValue(clientsRef, (snapshot) => {
      if (snapshot.exists()) {
        const clientsKeyValue: [key: string, value: ClientData][] =
          Object.entries(snapshot.val());

        const formattedClientsArray: ClientData[] = clientsKeyValue.map(
          ([key, value]) => {
            return {
              ...value,
              id: key,
            };
          }
        );

        setClients(formattedClientsArray);
        setFilteredClients(formattedClientsArray);

        const purchasesNumber = formattedClientsArray.length;
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const purchasesRef = ref(database, 'purchases');

  //   const unsubscribe = onValue(purchasesRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       const purchases: PurchaseData[] = Object.values(snapshot.val());
  //       const purchasesNumber = purchases.length;
  //       const purchasesTotalValue = purchases
  //         .map((purchase) => purchase.value)
  //         .reduce((prev, curr) => prev + curr);

  //       setTotalPurchases({ purchasesNumber, purchasesTotalValue });
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

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
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <Client key={client.id} data={client} />
              ))
            ) : (
              <h2>Nenhum cliente cadastrado</h2>
            )}
          </ClientList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard
            purchasesNumber={totalPurchases.purchasesNumber}
            purchasesTotalValue={totalPurchases.purchasesTotalValue}
          />

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
