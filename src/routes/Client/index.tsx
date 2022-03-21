import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';

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
import { NewPurchaseForm } from '../../components/NewPurchaseForm';
import { Button } from '../../components/Button';

import { database } from '../../services/firebase/database';

import { ClientData, PurchaseData } from '../../@types/entities';

type TotalPurchasesData = {
  totalPurchases: number;
  totalValue: number;
};

type PurchaseDataResponse = {
  id: string;
  totalValue: number;
  purchaseDate: string;
  items: string;
};

type ClientResponseData = {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
  addressNumber: string;
  district: string;
  totalDebt: number;
  purchases: {
    [id: string]: PurchaseDataResponse;
  };
};

export function Client() {
  const [client, setClient] = useState<ClientData>({} as ClientData);
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [purchasesSummary, setPurchasesSummary] = useState<TotalPurchasesData>(
    {} as TotalPurchasesData
  );
  const [isNewSaleModalOpen, setIsNewSaleModalOpen] = useState(false);

  const params = useParams<{ clientId: string }>();

  function handleShowNewSaleModal() {
    setIsNewSaleModalOpen(true);
  }

  function handleCloseNewSaleModal() {
    setIsNewSaleModalOpen(false);
  }

  useEffect(() => {
    const clientsRef = ref(database, 'clients/' + params.clientId);

    const unsubscribe = onValue(clientsRef, (snapshot) => {
      const clientResponseData: ClientResponseData = snapshot.val();

      if (clientResponseData.purchases) {
        const purchases: PurchaseData[] = Object.entries(
          clientResponseData.purchases
        ).map(([key, value]) => {
          return {
            id: key,
            totalValue: value.totalValue,
            purchaseDate: value.purchaseDate,
            items: JSON.parse(value.items),
          };
        });

        setPurchases(purchases);

        const summary: TotalPurchasesData = {
          totalPurchases: purchases.length,
          totalValue: purchases
            .map((purchase) => purchase.totalValue)
            .reduce((acc, curr) => Number(acc) + Number(curr)),
        };

        setPurchasesSummary(summary);
      }

      setClient({
        ...clientResponseData,
        purchases,
      });
    });

    return () => unsubscribe();
  }, []);

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
            {purchases.length > 0 ? (
              purchases.map((purchase) => (
                <Purchase key={purchase.id} data={purchase} />
              ))
            ) : (
              <h2>Nenhuma venda registrada</h2>
            )}
          </PurchaseList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard
            purchasesNumber={purchasesSummary.totalPurchases}
            purchasesTotalValue={purchasesSummary.totalValue}
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

      <NewPurchaseForm
        clientId={params.clientId || ''}
        isVisible={isNewSaleModalOpen}
        closeModal={handleCloseNewSaleModal}
      />
    </Container>
  );
}
