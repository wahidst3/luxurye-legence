import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './Productcontext';
import { CartProvider } from './Acontext';
import Home from './pages/Home/Home';
import Cart from './components/Allproducts/Cart';
import Jewllery from './pages/jewllery';
import Man from './pages/men';
import Women from './pages/women';
import Perfume from './pages/perfume';
import Authentication from './components/Authentication/authentication';
import Productdetail from './pages/Detail/Detail';
import Admin from './pages/admin/admin';
import Addproduct from './pages/admin/addproduct';
import Product from './components/Allproducts/Products';
import Profile from './components/Authentication/Profile'
//import Add from './add'
const App = () => {
  const [login, SetLogin] = useState(false);
  

  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          { /* <Route path="/add" element={<Add />} />*/}
          
            <Route path="/profile" element={<Profile />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/j" element={<Jewllery />} />
            <Route path="/men" element={<Man />} />
            <Route path="/women" element={<Women />} />
            <Route path="/perfume" element={<Perfume />} />
            <Route path="/product/:id" element={<Productdetail  />} />
            <Route path="/login" element={<Authentication mlogin={login} msetLogin={SetLogin}  />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
