import React, { useContext, useEffect, useState } from 'react'
import { items } from '../components/Data' 
import CartContext from '../Acontext';
import { Link } from 'react-router-dom';
import './Home/Home.css'
import Search from '../components/Allproducts/Search/Search';
import Back from '../assets/arrow-left-solid.svg'
const jewllery = () => {
    const { cart, setCart } = useContext(CartContext);

  const addToCart = (id, price, title, description, imageUrl) => {
    const obj = {
      id, price, title, description, imageUrl
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
  };

    const catogery='jewellery';
    const [product, setProduct] = useState([]);
  useEffect(()=>{
    const filterproduct=items.filter((product)=>product.catogery==="j")
    setProduct(filterproduct)
  },[])
  console.log(product)

  return (
    <div  className='jewellery'>
      
      <div className='header'><Link to='/'><span><img src={Back} alt="" /></span></Link> <h1 >Women Clothing</h1></div>  
 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}} className='pj'>
      {product.map((product)=>{
        return(
            <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img className='.img' src={product.imageUrl} alt={product.title} />
            </Link>
            <div className="card-content">
              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>
              <div className="bcont">
                <p className="card-price">{product.price}</p>
                <button className="CartBtn" onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imageUrl)}>
                  <span className="IconContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p className="text">Add to Cart</p>
                </button>
              </div>
            </div>
            </div>
        )
      })}
      </div>
     
    </div>
  )
}

export default jewllery
