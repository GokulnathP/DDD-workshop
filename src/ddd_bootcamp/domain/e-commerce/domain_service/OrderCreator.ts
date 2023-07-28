import {Cart} from "../cart";
import {Order} from "../order";

export class OrderCreator {
  createOrder(cart: Cart) {
    const products = cart.checkout();
    return new Order(products);
  }
}
