export class Product {
  constructor(public name: String) {
  }
}

export class Cart {
  private readonly products: Product[];
  constructor() {
    this.products = []
  }

  public addProduct(product: Product) {
    this.products.push(product)
  }

  public getProducts() {
    return this.products
  }
}
