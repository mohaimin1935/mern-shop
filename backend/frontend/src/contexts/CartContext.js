import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const initial = JSON.parse(localStorage.getItem("cartItems"));
    return initial || [];
  });
  const [totalPrice, setTotalPrice] = useState(0)

  const {setNotification} = useAuth()

  const addToCart = (product, quantity, color = 0, size = 0) => {
    const productWithProperties = {
      product: product,
      quantity: quantity,
      color: product.color[color],
      size: product.size[size],
    };
    setNotification("itemAdded")
    setCartItems((prev) => [...prev, productWithProperties]);
  };

  const removeFromCart = (index) => {
    setNotification("itemRemoved")
    setCartItems((prev) => prev.filter((p, i) => i !== index));
  };

  const updateCartItem = (index, quantity) => {
    setCartItems(prev => prev.map((p,i) => {
      if (i === index) {
        return {
          ...p, quantity: quantity,
        }
      } else return p
    }))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    let total = 0
    cartItems.forEach(item => {
      total += item.product.price * item.quantity
    });
    setTotalPrice(total)
  }, [cartItems]);

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    totalPrice,
    emptyCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
