import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getDatabase, ref, set, get, push, child } from 'firebase/database';
import { app } from '.';

import { ClientData, ItemData, PurchaseData } from '../../@types/entities';

export const database = getDatabase(app);

export function saveNewClient(client: ClientData) {
  const newClientRef = push(ref(database, 'clients'));
  set(newClientRef, {
    ...client,
    total: 0,
  });
}

export function saveNewPurchase(clientId: string, items: ItemData[]) {
  const newPurchaseRef = push(
    ref(database, 'clients/' + clientId + '/purchases')
  );

  const totalValue = items
    .map((item) => item.value)
    .reduce((acc, curr) => acc + curr)
    .toFixed(2);

  const purchaseDate = format(new Date(), 'dd/MM/yyyy', { locale: ptBR });

  const formattedItems = JSON.stringify(items);

  set(newPurchaseRef, {
    totalValue,
    purchaseDate,
    items: formattedItems,
  });
}

export async function getClients(): Promise<ClientData[]> {
  const databaseRef = ref(database);
  const databaseClients = await get(child(databaseRef, 'clients'));
  return Object.values(databaseClients.val());
}
