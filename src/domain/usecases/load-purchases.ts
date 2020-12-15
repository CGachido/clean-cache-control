import { PurchaseModel } from '@/domain/models';
/*
 ** Arquivo do DOMAIN
 ** Não coloca implementação de nada.
 ** Somente interfaces e modelos (entities)
 */

export interface LoadPurchases {
  loadAll: () => Promise<Array<LoadPurchases.Result>>;
}

export namespace LoadPurchases {
  export type Result = PurchaseModel;
}
