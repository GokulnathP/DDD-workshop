# DDD

## Problem statements

### Code Problem 1

Add a “Apple Pencil” to a Cart

**Note:**

* Please do not create User class.
* Please do not create ProductCategory, Variant, Colour, etc classes.

### Code Problem 2

Add a “Sony Wireless headphone” to a Cart

### Code Problem 3

Add 2 quantity of “Apple Pencil” to a Cart.

### Code Problem 4

Remove already added Item “Apple Pencil” (with all its quantities) from Cart.

### Code Problem 5

As a business User, I would like to know which Products (Product’s name) were removed from Cart.

**Note** - Please do not create business User class. You could have a method on Cart class or some other class, which
returns list of Products names which were removed from Cart.

### Code Problem 6

As a business User, I would like to differentiate between two Carts, even if they contain same Item ( both carts have Product “Sony Wireless headphone” with 1 quantity)

**Note**

Two carts where items are same, equality on Carts should return false
```
Cart cart1 = new Cart();
Cart cart2 = new Cart();

Item item1 = new Item(new Product(”Sony Wireless headphone"), 1);
Item item2 = new Item(new Product(”Sony Wireless headphone"), 1);

cart1.add(item1);
cart2.add(item2);

cart1.equals(cart2) => should return false
cart1.equals(cart1) => should return true
```

