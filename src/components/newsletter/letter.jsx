import React from 'react'
import modal from '../../assets/modal.png'
import './letter.css'
const letter = () => {
  return (
    <div className='letter'>
        <div className="overlay"></div>
      <div className="mail">
<h1>Subscribe Us</h1>
<h3>Subscribe us and you won't miss the new arrivals, as well as discounts and sales.</h3>
<input type="email" placeholder='example@gmail.com'  id="" />
 <button>Subscribe</button>
      </div>
      <div className="modal">
<img src={modal} alt="" />
      </div>
    </div>
  )
}

export default letter
