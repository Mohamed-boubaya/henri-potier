export interface IOfferInfo {
  type: EOfferType;
  value: number;
  sliceValue?: number;
}
export interface IOffer {
  offers: IOfferInfo[];
}

export enum EOfferType {
  PERCENTAGE = 'percentage',
  MINUS = 'minus',
  SILCE = 'slice'
}
