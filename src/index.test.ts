import { Cart } from './ddd_bootcamp/domain/cart';
import { Product } from './ddd_bootcamp/domain/product';

describe('Cart', function () {
  it('should implement card', function () {
    const cart = new Cart();

    const applePencil = new Product('Apple Pencil');
    const sonyWirelessHeadphone = new Product('Sony Wireless headphone');

    cart.addProduct(applePencil)
    cart.addProduct(sonyWirelessHeadphone)
    cart.addProduct(applePencil)

    expect(cart.getCartItems()).toEqual([
      { product: applePencil, quantity: 2 },
      { product: sonyWirelessHeadphone, quantity: 1 }
    ])

    cart.removeProduct(applePencil)
    expect(cart.getCartItems()).toEqual([{ product: sonyWirelessHeadphone, quantity: 1 }])
    expect(cart.gerRemovedProducts()).toEqual([applePencil])
  });
});
