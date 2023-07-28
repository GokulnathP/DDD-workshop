import { Item } from './item';
import { Product } from './product';

const generateRandomId = () => (Math.random() * 10000).toFixed(0).toString() + '_' + (Math.random() * 10000).toFixed(0).toString()

export class Cart {
  private id: String;
  private cartItems: Item[] = [];
  private removedProducts: Product[] = [];
  private checkedOut: boolean;

  constructor() {
    this.id = generateRandomId()
    this.checkedOut = false;
  }

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

  public equals(cart: Cart) {
    return this.id === cart.id
  }

  public checkout() {
    const products: Product[] = []
    this.cartItems.forEach((item) => {
      products.push(...Array(item.getQuantity()).map(() => item.product))
    })
    this.checkedOut = true;
    return products;
  }
}
