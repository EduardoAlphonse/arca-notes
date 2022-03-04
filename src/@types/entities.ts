export type ClientType = {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
  addressNumber: string;
  district: string;
  sales: {
    [saleId: string]: boolean;
  }[];
};

export type SaleType = {
  id: string;
  clientId: string;
  value: number;
  date: string;
  items: {
    description: string;
    quantity: number;
    value: number;
  }[];
};
