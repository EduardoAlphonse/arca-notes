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

export function Client() {
  const [client, setClient] = useState<ClientData>({} as ClientData);
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [totalPurchases, setTotalPurchases] = useState();
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
      const clientSnapshot: ClientData = snapshot.val();

      setClient(clientSnapshot);

      if (clientSnapshot.purchases) {
        const purchases = Object.values(clientSnapshot.purchases);
        setPurchases(purchases);
      }
      // const totalPurchases = purchases.reduce((acc, curr) => acc.value + curr.value);
      // setTotalPurchases();
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const clientsRef = ref(database, 'clients/' + params.clientId);

  //   const unsubscribe = onValue(clientsRef, (snapshot) => {
  //     const purchasesKeyValue: [key: string, value: PurchaseData][] =
  //       Object.entries(snapshot.val());
  //     const formattedPurchasesArray: PurchaseData[] = purchasesKeyValue.map(
  //       ([key, value]) => {
  //         return {
  //           ...value,
  //           id: key,
  //         };
  //       }
  //     );

  //     setPurchases(formattedPurchasesArray);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
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
            purchasesTotalValue={totalPurchases || 0}
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
        isVisible={isNewSaleModalOpen}
        closeModal={handleCloseNewSaleModal}
      />
    </Container>
  );
}
