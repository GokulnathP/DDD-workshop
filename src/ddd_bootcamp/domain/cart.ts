import {Item} from "./item";
import {Product} from "./product";

export class Cart {
  private cartItems: Item[] = [];
  private removedProducts: Product[] = [];

  public addProduct(product: Product) {
    const item = this.cartItems.find((item) => item.product.name === product.name)
    if (item) {
      item.increaseQuantity()
    } else {
      this.cartItems.push(new Item(product))
    }
  }

  public removeProduct(product: Product) {
    this.removedProducts.push(product);
    this.cartItems = this.cartItems.filter((item) => item.product.name !== product.name)
  }

  public getCartItems() {
    return this.cartItems
  }

  public gerRemovedProducts() {
    return this.removedProducts
  }
}
