import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Detail.css';
import Back from '../../assets/arrow-left-solid.svg';
import CartContext from '../../Acontext';

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  // Dummy products data
  const dummyProducts =[
      
    {
        id: "400",
        title: 'newTitle',
        description: 'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
        price: 90,
        category: 'men',
        imageUrl: 'https://i.imgur.com/R2PN9Wq.jpeg',
        rating: 4
    },
    {
        id: "401",
        title: 'newTitle',
        description: 'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
        price: 79,
        category: 'men',
        imageUrl: 'https://i.imgur.com/cSytoSD.jpeg',
        rating: 4
    },
    {
        id: "402",
        title: 'Classic Comfort Fit Joggers',
        description: 'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.',
        price: 25,
        category: 'men',
        imageUrl: 'https://i.imgur.com/ZKGofuB.jpeg',
        rating: 4
    },
    {
        id: "403",
        title: 'Classic Blue Baseball Cap',
        description: 'Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.',
        price: 86,
        category: 'men',
        imageUrl: 'https://i.imgur.com/wXuQ7bm.jpeg',
        rating: 4
    },
    {
        id: "404",
        title: 'Classic Red Baseball Cap',
        description: 'Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.',
        price: 35,
        category: 'men',
        imageUrl: 'https://i.imgur.com/cBuLvBi.jpeg',
        rating: 3
    },
    {
        id: "405",
        title: 'Classic Olive Chino Shorts',
        description: 'Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.',
        price: 84,
        category: 'men',
        imageUrl: 'https://i.imgur.com/UsFIvYs.jpeg',
        rating: 4
    },
    {
        id: "406",
        title: 'Classic High-Waisted Athletic Shorts',
        description: 'Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.',
        price: 43,
        category: 'men',
        imageUrl: 'https://i.imgur.com/eGOUveI.jpeg',
        rating: 4
    },
    {
        id: "407",
        title: 'Classic White Crew Neck T-Shirt',
        description: 'Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.',
        price: 39,
        category: 'men',
        imageUrl: 'https://i.imgur.com/axsyGpD.jpeg',
        rating: 4
    }

,
{
    id: "100",
    title: 'Long sleeve Jacket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 150,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "212",
    title: 'Jacket with wollen hat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 65,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "73",
    title: 'Compact fashion t-shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 55.99,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "40",
    title: 'Blue jins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 50,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "59",
    title: 'Skirts with full setup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 695,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,quantity:1
},
{
    id: "56",
    title: 'Yellow Hoody',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 180,
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4
},
{
    id: "17",
    title: 'Black t-shirt for women',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 20,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 2
},
{
    id: "83",
    title: 'Gouwn with Red velvet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 350,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "90",
    title: 'Pink beauty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 100,
    category: 'j',
    imageUrl: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "106",
    title: 'Jean\'s stylish Jacket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 245,
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,quantity:1
},
{
    id: "121",
    title: 'Jamdani Saree',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 800,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "152",
    title: 'Black Jacket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 140,
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "133",
    title: 'Black top with jeans',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 120,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/3672825/pexels-photo-3672825.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "14",
    title: 'men with bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 50,
    category: 'kids',
    imageUrl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=600',
    rating: 2,quantity:1
},
{
    id: "15",
    title: 'Stylish jeans in lightblue',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 100,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2738792/pexels-photo-2738792.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "16",
    title: 'Unknown horizon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 350,
    category: 'men',
    imageUrl: 'https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "17",
    title: 'Light tops',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 120,
    category: 'j',
    imageUrl: 'https://images.pexels.com/photos/2010925/pexels-photo-2010925.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3
},
{
    id: "18",
    title: 'Khakhi jeans',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 190,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,quantity:1
},
{
    id: "19",
    title: 'Black full sleeve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 170,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 3,quantity:1
},
{
    id: "20",
    title: 'Formal for Men',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
    price: 490,
    category: 'women',
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,quantity:1
}
]

  useEffect(() => {
    if (dummyProducts.length > 0) {
      const filteredProduct = dummyProducts.find((item) => item.id === id);
      setProduct(filteredProduct || {});
    }
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  if (Object.keys(product).length === 0) {
    return <div>Product not found.</div>;
  }

  const handleQuantityIncrease = () => {
    setCount(prevCount => prevCount + 1);
    setProduct(prevProduct => ({ ...prevProduct, quantity: count + 1 }));
  };

  const handleQuantityDecrease = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    setProduct(prevProduct => ({ ...prevProduct, quantity: count - 1 }));
  };

  const addToCart = () => {
    const productToAdd = { ...product, quantity: count };
    setCart([...cart, productToAdd]);
    console.log("Cart element =", cart);
  };

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
         { /*<h3>Quantity</h3>
          <div className='quantity'>
            <button onClick={handleQuantityDecrease}>-</button>
            <p>{count}</p>
            <button onClick={handleQuantityIncrease}>+</button>
          </div>*/}
          <button className='btncart' onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
