import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/le.png'
import userIcon from '../../assets/user-solid.svg'
import cart from '../../assets/cart.svg'
import language from '../../assets/globe.svg'
import navmenu from '../../assets/bar.svg'
import icons from '../../assets/circle.svg'
import Authentication from '../Authentication/authentication'
function Navbar() {
  const nav=useRef(null)
  setInterval(() => {
    nav.current.style.display='flex';
    setTimeout(() => {
      nav.current.style.opacity = 1;
    }, 50)
  }, 4000);
  const [show, setShow] = useState(true)

  const showNav = () => {
    setShow(!show);
  }
  const [showlogin,setshowLogin]=useState(false)
  const showLogin = () => {
    setshowLogin(!showlogin);
  }
  return (<>
    <div ref={nav} className='nav'>
    <img className='logo' src={logo} alt="" />

      <ul >

      <li>Home</li>
      <li>Pages</li>
      <li>Services</li>
      <li>Explore</li>
      </ul>

      <div className="icons"  style={{display:show  ? 'flex' : 'none'}} >
    <img className='user' src={userIcon} alt="" />
    <img id='cart' className='cart' src={cart} alt="" onClick={showLogin} />
    <img id='global' className='cart' src={language} alt="" />
    </div>
    <div className="buttons">
      <img src={navmenu} onClick={showNav}alt="" />
     
    </div>
    </div>

    {showlogin &&<Authentication/> }
    </>
  )
}

export default Navbar
