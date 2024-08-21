import React, { useEffect } from 'react'
import './Featured.css'
import ScrollReveal from 'scrollreveal';
const Featured = () => {
  useEffect(() => {

      ScrollReveal().reveal('.fco ', {
        duration: 1000,
        origin: 'left',
        distance: '80px',
        easing: 'ease-in-out',
        reset: true
      });
    
  },
   []);
  useEffect(() => {

      ScrollReveal().reveal('.fctw ', {
        duration: 1000,
        origin: 'top',
        distance: '80px',
        easing: 'ease-in-out',
        reset: true
      });
    
  },
   []);
  useEffect(() => {

      ScrollReveal().reveal('.fct', {
        duration: 1000,
        origin: 'right',
        distance: '80px',
        easing: 'ease-in-out',
        reset: true
      });
    
  },
   []);
  return (
    <div className='featured'>
      <h1 >Featured Products</h1>
      <div className="fCards">
        <div className="fcontainer fco">
                  <div className="fCard">
                  
            <img src="https://mbluxury1.s3.amazonaws.com/2023/05/29095332/Luxury-Brand-Tier-List-2.jpg"/>
        </div>
        <div className="vcard">
      
            <img src="https://cdn.saksfifthavenue.com/is/image/saks/051722_SEO_BF_LUXURY_SKINCARE_MOD9?scl=1&qlt=85"/>
        </div>
        </div>
        <div className="fcontainer fctw" style={{flexDirection:'column-reverse'}}>
        <div className="fCard">
      
            <img src="https://images.axios.com/cocK5KdUqG3JUAND_bPZziwm6B0=/fit-in/1366x1366/2024/02/18/1708262643268.jpg"/>
        </div>
        <div className="vcard">
      
            <img src="https://static-01.daraz.com.bd/p/9c93d63ad229c41206f58de0aee53da5.jpg_750x400.jpg_.webp"/>
        </div>
        </div>
        <div className="fcontainer fct">
        <div className="fCard">
      
            <img src="https://induce360.com/cdn/shop/products/UAU-07_79a02d15-7015-4556-90b5-796be0da2fe7.webp?v=1678484156"/>
        </div>
        <div className="vcard">
      
            <img src="https://skinjewells.com/cdn/shop/files/SuppleU.png?v=1695631843&width=533"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
