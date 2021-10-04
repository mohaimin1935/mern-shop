import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const initial = JSON.parse(localStorage.getItem("cartItems"))
    return initial || []
  });

  const addToCart = (product, quantity, color = 0, size = 0) => {
    const productWithProperties = {
      product: product,
      quantity: quantity,
      color: product.color[color],
      size: product.size[size],
    }
    setCartItems((prev) => [...prev, productWithProperties]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const values = {
    cartItems,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
