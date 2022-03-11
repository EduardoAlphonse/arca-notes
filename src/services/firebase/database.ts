import { getDatabase, ref, set, get, push, child } from 'firebase/database';
import { app } from '.';

import { ClientData, PurchaseData } from '../../@types/entities';

export const database = getDatabase(app);

export function saveNewClient(client: ClientData) {
  const newClientRef = push(ref(database, 'clients'));
  set(newClientRef, {
    ...client,
    total: 0,
  });
}

export function saveNewPurchase(clientId: string, purchase: PurchaseData) {
  const newPurchaseRef = push(
    ref(database, 'clients/' + clientId + '/purchases')
  );
  set(newPurchaseRef, purchase);
}

export async function getClients(): Promise<ClientData[]> {
  const databaseRef = ref(database);
  const databaseClients = await get(child(databaseRef, 'clients'));
  return Object.values(databaseClients.val());
}
