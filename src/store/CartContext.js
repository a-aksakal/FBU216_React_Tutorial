import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const cartlength = cart.length;
  const values = {
    cart,
    setCart,
    cartlength,
    total,
    setTotal,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
