import { Cart, Product } from './index';

describe('Cart', function () {
  it('should add items to the card', function () {
    const cart = new Cart();

    const applePencil = new Product("Apple Pencil");
    cart.addProduct(applePencil)

    const sonyWirelessHeadphone = new Product("Sony Wireless headphone");
    cart.addProduct(sonyWirelessHeadphone)

    expect(cart.getProducts()).toEqual([applePencil, sonyWirelessHeadphone])
  });
});