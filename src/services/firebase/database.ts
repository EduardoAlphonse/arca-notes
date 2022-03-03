import { getDatabase, ref, set } from 'firebase/database';
import { app } from '.';

import { ClientType, SaleType } from '../../@types/entities';

const database = getDatabase(app);

export async function saveNewClient(client: ClientType) {
  await set(ref(database, 'clients/' + client.id), client);
}

export async function saveNewSale(clientId: string, sale: SaleType) {}
