import { ShoppingCart } from "./shoppingCart";

export default async function module() {
  // let x = new ShoppingCart();
  // let dove = {
  //   id: 1,
  //   price: 39.99,
  //   name: 'Dove Soap',
  //   quantityAdded: 0
  //   };
  // x.addItemToCart(dove);
  // x.addItemToCart(dove);
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
    shoppingCart.getSalesTotal();
}
