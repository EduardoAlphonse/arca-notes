import { getDatabase, ref, set, push } from 'firebase/database';
import { app } from '.';

import { ClientType, SaleType } from '../../@types/entities';

const database = getDatabase(app);

export async function saveNewClient(client: ClientType) {
  const newClientRef = push(ref(database, 'clients'));
  await set(newClientRef, client);
}

export async function saveNewSale(sale: SaleType) {
  const newSaleRef = push(ref(database, 'sales'));
  await set(newSaleRef, sale);
}
