import React, { createContext, useContext, useState } from 'react';
import { CartItem } from '../models/CartItem';
import { MenuItem } from '../models/MenuItem';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provides the cart state globally
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => 
          c.item.id === item.id ? { ...c, quantity: c.quantity + quantity } : c
        );
      }
      return [...prev, { id: item.id, item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((acc, c) => acc + (c.item.price * c.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// ViewModel hook
export function useCartViewModel() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartViewModel must be used within a CartProvider');
  }
  return context;
}
