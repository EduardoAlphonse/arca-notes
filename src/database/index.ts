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
    name: 'Cliente 2',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '414922',
    name: 'Cliente 3',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '692912',
    name: 'Cliente 4',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  {
    id: '859281',
    name: 'Cliente 5',
    phone: '32998099878',
    address: 'Rua São Mateus 632/201, São Mateus',
  },
  // {
  //   id: '141434',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
  // {
  //   id: '195928',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
  // {
  //   id: '123422',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
  // {
  //   id: '918288',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
  // {
  //   id: '572877',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
  // {
  //   id: '898977',
  //   name: 'Eduardo Oliveira',
  //   phone: '32998099878',
  //   address: 'Rua São Mateus 632/201, São Mateus',
  // },
];

export function getClients() {
  return clients;
}

export function getClient(id: string) {
  const client = clients.find((client) => client.id === id);
  const purchases = getPurchase(id);

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
        value: 9.57,
      },
      {
        description: 'Quatree Supreme Adultos Raças Médias e Grandes 15kg',
        quantity: 1,
        value: 191.9,
      },
    ],
  },
  {
    id: '481022',
    clientId: '934820',
    value: 210.15,
    date: '26/02/2022',
    items: [
      {
        description: 'Dog Chow Carne',
        quantity: 3,
        value: 8.25,
      },
      {
        description: 'Quatree Supreme Adultos Raças Pequenas 15kg',
        quantity: 1,
        value: 201.9,
      },
    ],
  },
  {
    id: '402012',
    clientId: '934820',
    value: 5.5,
    date: '26/02/2022',
    items: [
      {
        description: 'Dog Chow Frango',
        quantity: 2,
        value: 5.5,
      },
    ],
  },
  {
    id: '442844',
    clientId: '934820',
    value: 210.15,
    date: '26/02/2022',
    items: [
      {
        description: 'Dog Chow Carne',
        quantity: 3,
        value: 8.25,
      },
      {
        description: 'Quatree Supreme Adultos Raças Pequenas 15kg',
        quantity: 1,
        value: 199.15,
      },
    ],
  },
  {
    id: '884929',
    clientId: '910205',
    value: 224.04,
    date: '28/02/2022',
    items: [
      {
        description: 'Dog Chow Carne',
        quantity: 4,
        value: 13.75,
      },
      {
        description: 'Quatree Supreme Sênior 7+ Raças Pequenas 15kg',
        quantity: 2,
        value: 210.29,
      },
    ],
  },
  {
    id: '194922',
    clientId: '910205',
    value: 13.75,
    date: '28/02/2022',
    items: [
      {
        description: 'Dog Chow Frango',
        quantity: 4,
        value: 13.75,
      },
    ],
  },
];

export function getPurchase(clientId: string) {
  const filteredPurchases = purchases.filter(
    (purchase) => purchase.clientId === clientId
  );

  return filteredPurchases;
}

export function getPurchases() {
  return purchases;
}
