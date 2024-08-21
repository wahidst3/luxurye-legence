import React from 'react'
import './Footer.css'
import Pinterest from '../../assets/icon-pinterest.svg'
import Insta from '../../assets/icon-instagram.svg'
import Facebook from '../../assets/icon-facebook.svg'
import Logo from '../../assets/le.png'
import Twitter from '../../assets/icon-twitter.svg'
const Footer = () => {
  return (
    <footer>
    <div className="logo">
      <h1>Luxury Elegence</h1>

      
    </div>
    <div className="list">
      <h3>Contact</h3>
      <p> <a href="#">ali76wahid@gmail.com</a></p>
      <p><a href="#">block b abd karachi</a></p>
      <p> <a href="#">+923232379368</a></p>
    </div>
    <div className="list">
      <h3 >Resources</h3>
       <p> <a  href="#">Blog</a></p>
       <p><a  href="#">Developers</a></p>
       <p><a  href="#">Support</a></p>
    </div>
    <div className="list">
      <h3 >Company</h3>
      <p> <a  href="#">About</a></p>
      <p> <a  href="#">Our Team</a></p>
      <p> <a  href="#">Careers</a></p>
      <p> <a  href="#">Contact</a></p>
    </div>
    <div className="social ">
      <img src={Pinterest} alt="Pinterest"/>
      <img src={Twitter} alt="Twitter"/>
      <img src={Facebook} alt="Facebook"/>
      <img src={Insta} alt="Instagram"/>
    </div>
  </footer>
  )
}

export default Footer
