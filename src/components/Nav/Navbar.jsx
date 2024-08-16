import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/le.png';
import userIcon from '../../assets/user-solid.svg';
import cart from '../../assets/cart.svg';
import language from '../../assets/globe.svg';
import Home from "../../assets/home-solid.svg"
import Product from "../../assets/gift-solid.svg"
import Logout from "../../assets/right-to-bracket-solid.svg"
import Pages from "../../assets/compass-solid.svg"
import navmenu from '../../assets/bar.svg';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { auth } from '../firebase'; // Adjust the import according to your file structure
import { signOut } from 'firebase/auth';
function Navbar() {
  const token = localStorage.getItem('authToken');
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('authToken'); // Remove token if using local storage
      alert("You are logout")
      // Redirect to login page after logout
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 500);
  const [showNav, setShowNav] = useState(false);
  const [login,setLogin]=useState(false)
  const navigate = useNavigate();
  
  const handleNav = () => {
    setShowNav(!showNav);
    if(token){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
   
  };
  const handleuser = () => {
    
    if(token){
      alert("already Logged in")
    }
    else{
      navigate("./login")
    }
   
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const navItems = [
    { name: 'Home', icon: '/src/assets/home-solid.svg' },
    { name: 'Pages', icon: '/src/assets/home-solid.svg' },
    { name: 'Services', icon: '/src/assets/home-solid.svg' },
    { name: 'Explore', icon: '/src/assets/home-solid.svg' },
    { name: 'Profile', icon: '/src/assets/user-solid.svg' },
    { name: 'Cart', icon: '/src/assets/cart.svg' },
    { name: 'GLobal', icon: '/src/assets/globe.svg' }
  ];
 
 const  handlecart=()=>{
        if(token){
          
          navigate('/cart')
        }
        else{
          alert("You must login to acces this feature")
        }
  }

  return (
    <>
      <div className='nav'>
        <img className='logo' src={logo} alt="Logo" />
        {!isMobileView && (
          <>
            <ul>
              <Link to='/home' className='link'><li>Home</li></Link>
              <li>Pages</li>
              <li>Services</li>
              <li>Explore</li>
            </ul>

            <div className="icons">
             <img className='user' src={userIcon} alt="User" onClick={handleuser}/>
              <Link to='/cart'><img id='cart' className='cart' src={cart} alt="Cart" /></Link>
              <img id='global' className='cart' src={language} alt="Language" />
            </div>
          </>
        )}

        <div className="buttons">
          <img
            src={navmenu}
            onClick={handleNav}
            alt="Menu"
            style={{ display: isMobileView ? 'block' : 'none' }}
            className='menu'
          />
        </div>

        {isMobileView && (
          <div className='navContainer' style={{ right: showNav ? '0px' : '-300px' }}>
          
              <p  className="navList-item" >
                <img src={Home}  /> 
                Home
              </p>
              <p  className="navList-item" >
                <img src={Pages}  /> 
                Pages
              </p>
              <p  className="navList-item" >
                <img src={Product}  /> 
              Products
              </p>
              <p  className="navList-item" onClick={handlecart}>
                <img src={cart}  /> 
                Cart
              </p>
              <p  className="navList-item" onClick={()=>login ? navigate("./profile"):navigate("./login")} >
                <img src={userIcon}  /> 
               {login? "Profile":"Log In"}
              </p>
           {login?   <p  className="navList-item" onClick={handleLogout} >
                <img src={Logout}  /> 
                Logout
              </p>:""}

         
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
