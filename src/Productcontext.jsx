import React, { createContext, useState } from 'react';
import { items } from './components/Data';

// Create a Context
export const ProductContext = createContext();

// Create a Provider Component
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([...items]); // Initialize with existing items

  // Function to add a new product to the products array
  const addProduct = (newProduct) => {
    setData(prevData => [...prevData, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ data, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
