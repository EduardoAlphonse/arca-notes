import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Clients,
  ClientsHeader,
  ClientList as PurchaseList,
  Summary,
  SummaryFooter,
} from '../Home/styles';

import { Title } from '../../components/CommonComponents';
import { SummaryCard } from '../../components/SummaryCard';
import { Purchase } from './components/Purchase';
import { NewClientForm } from '../../components/NewClientForm';
import { Button } from '../../components/Button';

import { getClient } from '../../database';

export function Client() {
  const [isNewSaleModalOpen, setIsNewSaleModalOpen] = useState(false);

  const params = useParams<{ clientId: string }>();

  const client = getClient(params.clientId ?? '');

  const purchasesTotalValue = client.purchases
    .map((purchase) => purchase.value)
    .reduce((accumulator, actual) => accumulator + actual);

  function handleShowNewSaleModal() {
    setIsNewSaleModalOpen(true);
  }

  function handleCloseNewSaleModal() {
    setIsNewSaleModalOpen(false);
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
            <Title>{client.name}</Title>
          </ClientsHeader>

          <PurchaseList>
            {client.purchases.map((purchaseData) => (
              <Purchase key={purchaseData.id} data={purchaseData} />
            ))}
          </PurchaseList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard
            sales={client.purchases.length}
            total={purchasesTotalValue}
          />

          <SummaryFooter>
            <Button
              title="Inserir nova compra"
              icon="plus"
              buttonAttrs={{ onClick: handleShowNewSaleModal }}
            />
          </SummaryFooter>
        </Summary>
      </Content>

      <NewClientForm
        isVisible={isNewSaleModalOpen}
        closeModal={handleCloseNewSaleModal}
      />
    </Container>
  );
}
