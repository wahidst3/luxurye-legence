import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import Hero from '../../components/Hero/Hero'
import Catogery from '../../components/catogery/Catogery'
import Service from '../../components/sevices/Services'
import Scroll from '../../components/mtext/Mtext'
import Featured from '../../components/Allproducts/Feature/Featured'
import Products from '../../components/Allproducts/Products'
import Blog from '../../components/Blog/blog'
import Letter from '../../components/newsletter/letter'
import Brand from '../../components/brands/brand'
import Ads from '../../components/Moreproducts/ads'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Allproducts/Cart'
function Home({items,login,setLogin}) {
  return (
    <div className='home'>
 <Navbar login={login} setLogin={setLogin}/>
  <Hero/>
   <Catogery/>
  <Featured/>
  <Scroll/>
  <Products items={items} login={login} setLogin={setLogin} />
    <Letter/>
  <Blog/>
  <Brand/>
  <Footer/>


    </div>
  )
}

export default Home
