import React, { createContext, useContext } from "react";
import { products, Product } from "./product";

// Define the type of context
interface ProductContextType {
  products: Product[];
}

// Create the context
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for using the context
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
