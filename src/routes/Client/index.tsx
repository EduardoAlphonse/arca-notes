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
import { Sale } from './components/Purchase';
import { NewPurchaseForm } from '../../components/NewPurchaseForm';
import { Button } from '../../components/Button';

import { database } from '../../services/firebase/database';

import { ClientData, PurchaseData } from '../../@types/entities';

type TotalPurchasesData = {
  totalPurchases: number;
  totalValue: number;
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
    [id: string]: string;
  };
};

export function Client() {
  const [client, setClient] = useState<ClientData>({} as ClientData);
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [totalPurchases, setTotalPurchases] = useState<TotalPurchasesData>(
    {} as TotalPurchasesData
  );
  const [isNewSaleModalOpen, setIsNewSaleModalOpen] = useState(false);

  const params = useParams<{ clientId: string }>();

  // const purchasesTotalValue = client.purchases
  //   .map((purchase) => purchase.value)
  //   .reduce((accumulator, actual) => accumulator + actual);

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
        const purchasesStrings = Object.values(clientResponseData.purchases);

        console.log('values', purchasesStrings);

        const purchasesArray: PurchaseData[] = purchasesStrings.map((item) =>
          JSON.parse(item)
        );
        console.log(purchasesArray);
        setPurchases(purchasesArray);

        const values = purchasesArray.map((item) => item.value);
        console.log('valuesprice', values);

        setTotalPurchases({
          totalPurchases: purchases.length,
          totalValue: purchases
            .map((item) => item.value)
            .reduce((prev, curr) => prev + curr),
        });
      }
      // const totalPurchases = purchases.reduce((acc, curr) => acc.value + curr.value);
      // setTotalPurchases();
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
                <Sale key={purchase.id} data={purchase} />
              ))
            ) : (
              <h2>Nenhuma venda registrada</h2>
            )}
          </PurchaseList>
        </Clients>

        <Summary>
          <Title>Resumo</Title>

          <SummaryCard
            purchasesNumber={purchases.length}
            purchasesTotalValue={totalPurchases.totalValue}
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
