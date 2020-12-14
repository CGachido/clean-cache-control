/*
 ** Arquivo do DOMAIN
 ** Não coloca implementação de nada.
 ** Somente interfaces e modelos (entities)
 */

export interface SavePurchases {
  save: (purchases: Array<SavePurchases.Params>) => Promise<void>;
}

export namespace SavePurchases {
  export type Params = {
    id: string;
    date: Date;
    value: number;
  };
}
