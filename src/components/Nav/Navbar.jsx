import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/le.png';
import userIcon from '../../assets/user-solid.svg';
import cart from '../../assets/cart.svg';
import language from '../../assets/globe.svg';
import navmenu from '../../assets/bar.svg';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { auth } from '../firebase'; // Adjust the import according to your file structure
import { signOut } from 'firebase/auth';
function Navbar({login,setLogin}) {
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
  const navigate = useNavigate();
  
  const handleNav = () => {
    setShowNav(!showNav);
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
 const  handleuser=()=>{
        if(token){
          alert("You are already Logged in Happy Shopping")
        }
        else{
          navigate('/login')
        }
  }
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
                <img src='./assets/home-solid.svg'  /> 
                Home
              </p>
              <p  className="navList-item" >
                <img src='/src/assets/home-solid.svg'  /> 
                Pages
              </p>
              <p  className="navList-item" >
                <img src='/src/assets/home-solid.svg'  /> 
              Products
              </p>
              <p  className="navList-item" onClick={handlecart}>
                <img src='/src/assets/home-solid.svg'  /> 
                Cart
              </p>
              <p  className="navList-item" onClick={handleuser} >
                <img src='/src/assets/home-solid.svg'  /> 
                Profile
              </p>
              <p  className="navList-item" onClick={handleLogout} >
                <img src='/src/assets/home-solid.svg'  /> 
                Logout
              </p>

         
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
