import {Product} from "./product";

export class Order {
  constructor(private product: Product[]) {
  }

  getCost() {
    let totalCost = 0;
    this.product.forEach((product) => {
      totalCost += (product.price.value  + (product.weight * 0.1))
    })
    return totalCost;
  }
}
