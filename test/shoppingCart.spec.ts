import { ShoppingCart } from "../src/public/js/shoppingCart";
var assert = require("assert");

describe("Basic Mocha String Test", function() {
  it("should return number of charachters in a string", function() {
    let x = new ShoppingCart();
    let dove = {
      id: 1,
      price: 39.99,
      name: "Dove Soap",
      quantityAdded: 0
    };
    for(let i =0; i<5; i++) {
      x.addItemToCart(dove);
    }
    let totalPrice = x.calculateCartTotal();
    assert.equal(totalPrice, 199.95);
    assert.equal(x.size(), 5)
  });
  it("should return first charachter of the string", function() {
    const shoppingCart = new ShoppingCart(12.5);
    const ADD_ITEMS = 2;
    const EXPECTED_QAUNTITY_PER_ITEM = 2;
    const dove = {
      id: 1,
      price: 39.99,
      name: "Dove Soap",
      quantityAdded: 0
    };
    const axeDeo = {
      id: 2,
      price: 99.99,
      name: "Axe Deo",
      quantityAdded: 0
    };
    for(let i =0 ; i<ADD_ITEMS; i++) {
      shoppingCart.addItemToCart(dove);
      shoppingCart.addItemToCart(axeDeo);
    }
    assert.equal(shoppingCart.getItemQuanityById(1), EXPECTED_QAUNTITY_PER_ITEM);
    assert.equal(shoppingCart.getItemQuanityById(2), EXPECTED_QAUNTITY_PER_ITEM);
    assert.equal(shoppingCart.getSalesTotal(), 35.00);
    assert.equal(shoppingCart.calculateCartTotal(), 314.96)
  });
});
