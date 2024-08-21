import React, { useRef,useEffect } from "react";
import "./Hero.css";
import model from "../../images/model1.png";
import logo from "../../assets/le.png";
import { delay, motion } from "framer-motion"
import ScrollReveal from 'scrollreveal';






const Hero = () => {
  
  const hero = useRef(null);

  useEffect(() => {
    if (hero.current) {
      ScrollReveal().reveal('.heroh1', {
        duration: 1000,
        origin: 'top',
        distance: '100px',
        easing: 'ease-in-out',
        reset: true
      });
    }
  },
   []);
   useEffect(() => {
    if (hero.current) {
      ScrollReveal().reveal('.para ', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        easing: 'ease-in-out',
        reset: true
      });
    }
  },
   []);
   useEffect(() => {
    if (hero.current) {
      ScrollReveal().reveal('.m ', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        easing: 'ease-in-out',
        reset: true
      });
    }
  },
   []);
 
   useEffect(() => {
    if (hero.current) {
      ScrollReveal().reveal('.model ', {
        duration: 1000,
        origin: 'right',
        distance: '100px',
        easing: 'ease-in-out',
        reset: true
      });
    }
  },
   []);
 
  return (
    <>
     
      <div ref={hero} className="hero">
        <div  className="text">
          <h1 className="heroh1">
            Where <span>Luxury</span> Meets Elegan<span className="s2">ce</span>
          </h1>
          <p className="para">
            Discover unparalleled sophistication in every piece, meticulously
            crafted to epitomize timeless elegance. Elevate your style with our
            exclusive collections where luxury truly meets elegance.
          </p>
          <p className="m"> Discover unparalleled <span>sophistication</span> in every piece,</p>
        </div>
        <img      src={model} alt="" className="model"/>
      </div>
    </>
  );
};

export default Hero;
