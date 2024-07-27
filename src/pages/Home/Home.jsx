import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import Hero from '../../components/Hero/Hero'
import Catogery from '../../components/catogery/Catogery'
import Service from '../../components/sevices/Services'
import Scroll from '../../components/mtext/Mtext'
import Featured from '../../components/Allproducts/Feature/Featured'
import Products from '../../components/Allproducts/Products'
function Home() {
  return (
    <div className='home'>
   
   <Hero/>
   <Catogery/>
  <Featured/>
  <Scroll/>
  <Products/>
  <Service/>
    </div>
  )
}

export default Home
