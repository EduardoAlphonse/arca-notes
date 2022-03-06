export type ClientData = {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
  addressNumber: string;
  district: string;
  totalDebt: number;
  purchases: PurchaseData[];
};

export type PurchaseData = {
  id: string;
  value: number;
  date: string;
  items: ItemType[];
};

export type ItemType = {
  description: string;
  quantity: number;
  value: number;
};
