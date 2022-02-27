import { ClientData } from '../routes/Home/components/Client';
import { PurchaseData } from '../routes/Client/components/Purchase';

const clients: ClientData[] = [
  {
    id: '934820',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '910205',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '414922',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '692912',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '859281',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '141434',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '195928',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '123422',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '918288',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '572877',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '898977',
    name: 'Eduardo Oliveira',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
];

export function getClients() {
  return clients;
}

export function getClient(id: string) {
  const client = clients.find((client) => client.id === id);
  const purchases = getPurchases(id);

  return {
    ...client,
    purchases,
  };
}

const purchases: PurchaseData[] = [
  {
    id: '102944',
    clientId: '934820',
    value: 200.15,
    date: '26/02/2022',
    items: [
      {
        description: 'Sachê Whiskas',
        quantity: 3,
        value: 8.25,
      },
      {
        description: 'Quatree Supreme Adultos RMG',
        quantity: 1,
        value: 191.9,
      },
    ],
  },
];

export function getPurchases(id: string) {
  const filteredPurchases = purchases.filter(
    (purchase) => purchase.clientId === id
  );

  return filteredPurchases;
}
