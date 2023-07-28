import { Price } from './Price';

export class DiscountedPrice extends Price {
  static DISCOUNT = 10;

  constructor(price: number) {
    super(price * DiscountedPrice.DISCOUNT / 100);
  }
}
