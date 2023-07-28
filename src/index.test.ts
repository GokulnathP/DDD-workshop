import {Cart} from "./ddd_bootcamp/domain/cart";
import {Product} from "./ddd_bootcamp/domain/product";

describe('Cart', function () {
  it('should add items to the card', function () {
    const cart = new Cart();

    const applePencil = new Product("Apple Pencil");
    cart.addProduct(applePencil)

    const sonyWirelessHeadphone = new Product("Sony Wireless headphone");
    cart.addProduct(sonyWirelessHeadphone)

    expect(cart.getCartItems()).toEqual([applePencil, sonyWirelessHeadphone])
  });
});
