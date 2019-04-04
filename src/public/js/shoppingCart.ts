import { CartItem } from "./cartItem";

export class ShoppingCart {
  cartItems: CartItem[] = [];
  salesTax: number;
  constructor(salesTax = 0) {
    this.salesTax = salesTax;
  }
  getItemQuanityById(itemId: number) {
      for(let i =0; i< this.cartItems.length;i++) {
          if(this.cartItems[i].id === itemId) {
              return this.cartItems[i].quantityAdded;
          }
      }
      return 0;
  }
  emptyCart() {
    this.cartItems = [];
  }
  size() {
    let totalItems = 0;
    for (let item of this.cartItems) {
      totalItems += item.quantityAdded;
    }
    return totalItems;
  }
  isPartOfCart(itemId: number) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === itemId) {
        return true;
      }
    }
    return false;
  }

  increaseQuantityOfItem(item: CartItem) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === item.id) {
        this.cartItems[i].quantityAdded++;
        return true;
      }
    }
    return false;
  }

  addItemToCart(item: CartItem) {
    if (this.isPartOfCart(item.id)) {
      this.increaseQuantityOfItem(item);
    } else {
      item.quantityAdded = 1;
      this.cartItems.push(item);
    }
  }
  removeItemFromCart(itemId: number) {
    if (this.isPartOfCart(itemId)) {
      this.decreaseQuantityFromCart(itemId);
    } else {
      throw new Error("Item not in cart");
    }
  }
  decreaseQuantityFromCart(itemId: number) {
    for (let item of this.cartItems) {
      if (item.id === itemId) {
        item.quantityAdded--;
      }
    }
  }
  roundToTwo(num: number) {
    return Math.round(num * 100) / 100;
  }
  getSalesTotal() {
    let salesTotal = 0;
    for (let item of this.cartItems) {
        salesTotal += this.roundToTwo(item.quantityAdded * item.price * this.salesTax/100);
    }
    return salesTotal;
  }
  getPriceTotal() {
    let priceTotal = 0;
    for (let item of this.cartItems) {
        priceTotal += this.roundToTwo(item.quantityAdded * item.price);
      }
    return priceTotal;  
  }
  calculateCartTotal() {
    let cartTotal = 0;
    cartTotal = this.getPriceTotal() + this.getSalesTotal();
    return Math.round(cartTotal * 100) / 100;
  }
}
