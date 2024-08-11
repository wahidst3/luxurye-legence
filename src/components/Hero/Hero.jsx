import React, { useRef } from "react";
import "./Hero.css";
import model from "../../images/model1.png";
import logo from "../../assets/le.png";
import { delay, motion } from "framer-motion"






const Hero = () => {
  const hero = useRef(null);
  const loader = useRef(null);
 
  return (
    <>
     
      <div ref={hero} className="hero">
        <div  className="text">
          <h1>
            Where <span>Luxury</span> Meets Elegan<span className="s2">ce</span>
          </h1>
          <p className="para">
            Discover unparalleled sophistication in every piece, meticulously
            crafted to epitomize timeless elegance. Elevate your style with our
            exclusive collections where luxury truly meets elegance.
          </p>
          <p className="m"> Discover unparalleled <span>sophistication</span> in every piece,</p>
        </div>
        <img      src={model} alt="" />
      </div>
    </>
  );
};

export default Hero;
