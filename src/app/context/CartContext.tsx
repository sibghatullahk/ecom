"use client";
import React, { createContext, useContext, useState } from "react";

/** Product interface (adjust fields as needed) */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

/** Context shape */
interface CartContextType {
  cart: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
}

/** Create the context */
const CartContext = createContext<CartContextType | null>(null);

/** Provider to wrap our app */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

/** Hook to consume the CartContext */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}