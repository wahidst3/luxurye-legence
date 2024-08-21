import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import CartContext from '../../Acontext';
import { Link } from 'react-router-dom';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db ,auth} from '../../components/firebase'; // Your Firebase configuration file

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const currentUser  = auth.currentUser; // Get the current user

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [cart]);

  useEffect(() => {
    if (currentUser) {
      const saveCartToFirestore = async () => {
        const cartRef = doc(db, 'users', currentUser.uid); // Reference to the user's document
        await setDoc(cartRef, { cart }, { merge: true }); // Save the cart in Firestore
      };
      saveCartToFirestore();
    }
  }, [cart, currentUser]);

  const removeFromCart = async (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  
    const currentUser = auth.currentUser;
  
    if (currentUser) {
      try {
        const cartRef = doc(db, 'users', currentUser.uid); // Reference to the user's document in Firestore
        await setDoc(cartRef, { cart: updatedCart }, { merge: true }); // Update Firestore with the new cart
      } catch (error) {
        console.error("Error removing item from Firestore cart:", error);
      }
    }
  };
  

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwT4o-X8qXXCd_ddwWI5q2cFU9eXVN1JPtFRQlBr3BHKOzwBR8Ydjf7KHtrhdZknv4q5U&usqp=CAU' className='empty' />
      ) : (
        <div className='cart-items'>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className='img'>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className='info'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}$</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className='btn-con'>
          <Link to="/checkout" className='link'>
            <span>Checkout</span>
          </Link>
          <div className="pay">
            <h2>Total Payment: &nbsp; {totalPrice}$</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
