import React, { createContext, useContext, useState } from "react";
import { products, Product } from "./product";

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

interface ProductContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: CartItem) => void; // Fix: Accept selectedSize
  updateQuantity: (id: number, selectedSize: string, amount: number) => void; // Fix: selectedSize required
  removeFromCart: (id: number, selectedSize: string) => void; // Fix: selectedSize required
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

 const addToCart = (product: CartItem) => {
  setCart((prevCart) => {
    // Check if a product with the same ID and size exists
    const existingItem = prevCart.find(
      (item) => item.id === product.id && item.selectedSize === product.selectedSize
    );

    if (existingItem) {
      // If found, update quantity
      return prevCart.map((item) =>
        item.id === product.id && item.selectedSize === product.selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Otherwise, add as a new item
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

 const updateQuantity = (id: number, selectedSize: string, amount: number) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id && item.selectedSize === selectedSize
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    )
  );
};

  const removeFromCart = (id: number, selectedSize: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.selectedSize === selectedSize))
    );
  };

  return (
    <ProductContext.Provider value={{ products, cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};