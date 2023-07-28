export class Product {
  constructor(public name: String) {
  }
}

class Item {
  constructor(public product: Product, private quantity: number = 1) {
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    this.quantity--;
  }
}

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
