import { CartItem } from "./cartItem";
export declare class ShoppingCart {
    cartItems: CartItem[];
    salesTax: number;
    constructor(salesTax?: number);
    getItemQuanityById(itemId: number): number;
    emptyCart(): void;
    size(): number;
    isPartOfCart(itemId: number): boolean;
    increaseQuantityOfItem(item: CartItem): boolean;
    addItemToCart(item: CartItem): void;
    removeItemFromCart(itemId: number): void;
    decreaseQuantityFromCart(itemId: number): void;
    roundToTwo(num: number): number;
    getSalesTotal(): number;
    getPriceTotal(): number;
    calculateCartTotal(): number;
}
