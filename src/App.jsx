import React, { useEffect, useState } from 'react'

import Product from '../src/components/Allproducts/Products'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './components/Allproducts/Cart'
import { CartProvider } from './Acontext'
import { items } from './components/Data'
import Jewllery from './pages/jewllery'
import Man from './pages/men'
import Women from './pages/women'
import Perfume from './pages/perfume'
import Hero from './components/Hero/Hero'
import Letter from './components/newsletter/letter'
import Navbar from './components/Nav/Navbar'
import Authentication from './components/Authentication/authentication'
import Productdetail from './pages/Detail/Detail'
import Footer from './components/Footer/Footer'
const App = () => {
  const [data, setData] = useState([...items])
  useEffect(() => {
    alert("This Website is Under development! Some Functions may not Work or Contant may overlap on some screen. We will fix it soon. Thanks Regards:Wahid Ali");
  }, []);
  const [login,SetLogin]=useState(false)
  return (
    <>
    <CartProvider>
      
    <Router>
  
    <Routes>

      { /*<Route path="/" element={<Product  items={data} />} />*/}



 
   

    <Route path='/' element={ <Home  items={data}/>}/>
    <Route path='/home' element={ <Home  items={data} login={login} setLogin={SetLogin}/>}/>
    <Route path='/cart' element={ <Cart  />}/>
    <Route path='/j' element={ <Jewllery login={login} setLogin={SetLogin}  />}/>
    <Route path='/m' element={ <Man  login={login} setLogin={SetLogin}/>}/>
    <Route path='/w' element={ <Women login={login} setLogin={SetLogin} />}/>
    <Route path='/p' element={ <Perfume login={login} setLogin={SetLogin} />}/> 
    <Route path='/product/:id' element={ <Productdetail login={login} setLogin={SetLogin}/>}/> 

    <Route path='/login' element={ <Authentication  mlogin={login} msetLogin={SetLogin}/>}/> 
    
    </Routes>

    </Router>
    </CartProvider>
    </>
  )
}

export default App