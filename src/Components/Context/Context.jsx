import React, { createContext, useState } from "react";
import all_products from "../Assets/all_product";

export const Contaxt = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ContaxtProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + -1 }));
  };

  const ContaxtValue = { all_products, cartItems, addToCart, removeToCart };
  return (
    <Contaxt.Provider value={ContaxtValue}>{props.children}</Contaxt.Provider>
  );
};
export default ContaxtProvider;
