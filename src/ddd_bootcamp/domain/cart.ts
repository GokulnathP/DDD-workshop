import {Item} from "./item";
import {Product} from "./product";

export class Cart {
  private readonly cartItems: Item[];

  constructor() {
    this.cartItems = []
  }

  public addProduct(product: Product) {
    const item = this.cartItems.find((item) => item.product.name === product.name)
    if (item) {
      item.increaseQuantity()
    } else {
      this.cartItems.push(new Item(product))
    }
  }

  public getCartItems() {
    return this.cartItems
  }
}
