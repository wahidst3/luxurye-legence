import React from 'react'
import './Footer.css'
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
      <img src="images/icon-pinterest.svg" alt="Pinterest"/>
      <img src="images/icon-twitter.svg" alt="Twitter"/>
      <img src="images/icon-facebook.svg" alt="Facebook"/>
      <img src="images/icon-instagram.svg" alt="Instagram"/>
    </div>
  </footer>
  )
}

export default Footer
