import { Product } from './product';

export class Item {
  constructor(public product: Product, private quantity: number = 1) {
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    this.quantity--;
  }
}
