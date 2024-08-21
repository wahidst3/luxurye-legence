import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../components/firebase'; // Make sure this path is correct based on your project structure
import './addproduct.css'
const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique product ID or use a predefined ID
    const productId = `product-${Date.now()}`;

    // Create a product object with the input data
    const productData = {
      title: productName,
      price: parseFloat(price),
      category: category,
      imageUrl: image,
      description: description,
    };

    try {
      // Add the product to Firestore
      await setDoc(doc(db, 'products', productId), productData);
      console.log('Product successfully added!');

      // Reset form fields
      setProductName('');
      setPrice('');
      setCategory('');
      setImage('');
      setDescription('');
    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  return (
    <div className="addproduct">
      <h1>Add Product</h1>
    <form onSubmit={handleSubmit}>
      
        
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder='Product Title'
          required
        />
      

    

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
           placeholder='Product Price'
        />
      

    
      
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
           placeholder='Product Catogery'
        />
      

    
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          placeholder='Product Image'
        />
      

    
        
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
           placeholder='Product Description'
        />
      
      <button type="submit">Add Product</button>
    </form></div>
  );
};

export default ProductForm;
