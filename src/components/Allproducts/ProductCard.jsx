import React from 'react';
import './ProductCard.css';
import Button from './Button';


const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img src={product.imageUrl} alt={product.title} />
            <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-description">{product.description}</p>
                <div className="bcont">    <p className="card-price">{product.price}</p>
                <Button/></div> 
            </div>
            
  
</div>

        
    );
};

export default ProductCard;