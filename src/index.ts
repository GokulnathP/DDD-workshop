export class Product {
  constructor(public name: String) {
  }
}

class CartItem {
  constructor(public product: Product, private quantity: number = 1) {
  }

  increaseQuantity() {
    this.quantity++;
  }
}

export class Cart {
  // private readonly products: Product[];
  private readonly cartItems: CartItem[];
  constructor() {
    this.cartItems = []
  }

  public addProduct(product: Product) {
    const item = this.cartItems.find((item) => item.product.name === product.name)
    if (item) {
      item.increaseQuantity()
    } else {
      this.cartItems.push(new CartItem(product))
    }
  }

  // public getProducts() {
  //   return this.products
  // }

  public getCartItems() {
    return this.cartItems
  }
}
