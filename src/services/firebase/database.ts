import { getDatabase, ref, set, get, push, child } from 'firebase/database';
import { app } from '.';

import { ClientData, PurchaseData } from '../../@types/entities';

export const database = getDatabase(app);

export function saveNewClient(client: ClientData) {
  const newClientRef = push(ref(database, 'clients'));
  set(newClientRef, client);
}

export function saveNewPurchase(sale: PurchaseData) {
  const newPurchaseRef = push(ref(database, 'sales'));
  set(newPurchaseRef, sale);
}

export async function getClients(): Promise<ClientData[]> {
  const databaseRef = ref(database);
  const databaseClients = await get(child(databaseRef, 'clients'));
  return Object.values(databaseClients.val());
}
