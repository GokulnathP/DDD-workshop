import { Cart } from './ddd_bootcamp/domain/cart';
import {Price, Product} from './ddd_bootcamp/domain/product';

describe('Cart', function () {
  it('should implement card', function () {
    const cart = new Cart();

    const applePencil = new Product('Apple Pencil', new Price(2));
    const sonyWirelessHeadphone = new Product('Sony Wireless headphone', new Price(2));

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

  it('should says two different carts are not equal even with same items', function () {
    const applePencil = new Product('Apple Pencil', new Price(2));
    const cart1 = new Cart();
    const cart2 = new Cart();

    cart1.addProduct(applePencil);
    cart2.addProduct(applePencil);

    expect(cart1).not.toEqual(cart2);
    expect(cart1).toEqual(cart1);

    expect(cart1.equals(cart2)).toBeFalsy();
    expect(cart1.equals(cart1)).toBeTruthy();
  });
});
