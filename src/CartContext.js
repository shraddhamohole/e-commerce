import React, { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (user?.email) {
      const savedCart = localStorage.getItem(`cart_${user.email}`);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user?.email) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const login = (userData) => {
    setUser(userData);
    setCart([]); 
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, user, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};
