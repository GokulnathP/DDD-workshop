import { Price } from '../Price';

export class CompetitorBasedPricer {
  constructor(private productPrices: { [productName: string]: Price }) {
  }

  getPrice(productName: string) {
    return this.productPrices[productName].value * 0.9;
  }
}