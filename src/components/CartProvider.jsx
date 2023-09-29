import React, { createContext, useState } from "react";
import Cart from "../pages/Cart";
const CartContext = createContext();

function CartProvider() {
 
  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, clearCart }}
    >
        <Cart />
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };