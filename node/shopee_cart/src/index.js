import { createItem } from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("Welcome to your Shopee cart");

const item1 = await createItem("Coraline Pop Funko", 233.99, 5);
const item2 = await createItem("Jack Skellington Funko", 109.99, 1);

cartService.addItem(cart, item1);
cartService.addItem(cart, item2);

cartService.removeItem(cart, item2);

cartService.displayCart(cart);
