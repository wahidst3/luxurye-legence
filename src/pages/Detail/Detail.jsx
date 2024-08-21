import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Detail.css';
import Back from '../../assets/arrow-left-solid.svg';

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  // Dummy products data
  const dummyProducts = [
    {
      id: "6",
      category: "j",
      description: "A beautiful silk dress perfect for evening events.",
      imageUrl: "https://d32z0ut2mdx6xx.cloudfront.net/eyJidWNrZXQiOiJ1bmdlci5zdGFnZSIsImtleSI6Im1lZGlhXC9pbWFnZVwvOWVcL2JkXC84YlwvMjEwMDAwNjQzNjg5MV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjoyNDAwLCJmaXQiOiJpbnNpZGUifSwid2VicCI6eyJxdWFsaXR5Ijo5MCwibG9zc2xlc3MiOmZhbHNlLCJmb3JjZSI6dHJ1ZX19fQ==",
      price: 15,
      title: "Luxury Silk Dress"
    },
    // Add more dummy products here
  ];

  useEffect(() => {
    if (dummyProducts.length > 0) {
      console.log("Filtering products...");
      const filteredProduct = dummyProducts.find((item) => item.id === id);
      console.log("Filtered Product:", filteredProduct);
      setProduct(filteredProduct || {});
    }
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  if (Object.keys(product).length === 0) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ width: '100%' }} className='detail'>
      <div className='header'>
        <Link to="/">
          <span><img src={Back} alt="Back" /></span>
        </Link>
        <h1>{product.title}</h1>
      </div>
      <div className="p-detail">
        <div className="p-detail__image">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="p-detail__info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>Price</h3>
          <p className='price'>${product.price}</p>
          <h3>Size Available</h3>
          <p className='price'>Size</p>
          <h3>Quantity</h3>
          <div className='quantity'>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className='btncart'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
