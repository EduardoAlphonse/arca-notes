import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Content,
  Clients,
  ClientsHeader,
  ClientList,
  Summary,
  SummaryFooter,
} from '../Home/styles';

import { Title } from '../../components/CommonComponents';
import { LabeledInput } from '../../components/LabeledInput';
import { SummaryCard } from '../../components/SummaryCard/SummaryCard';
import { Purchase } from './components/Purchase';
import { NewClientForm } from '../../components/NewClientForm';
import { Button } from '../../components/Button';

import { getPurchases } from '../../database';

export function Client() {
  const [isNewSaleModalOpen, setIsNewSaleModalOpen] = useState(false);

  const params = useParams<{ clientId: string }>();

  const purchases = getPurchases(params.clientId ?? '');

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
            <Title>Clientes</Title>
            <LabeledInput
              inputAttrs={{ placeholder: 'Procurar...' }}
              style={{ maxWidth: '16rem', textAlign: 'left' }}
            />
          </ClientsHeader>

          <ClientList>
            {purchases.map((purchaseData) => (
              <Purchase key={purchaseData.id} data={purchaseData} />
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
