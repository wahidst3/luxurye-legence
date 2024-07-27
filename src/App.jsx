import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Nav/Navbar'
import Featured from './components/Allproducts/Feature/Featured'
import Blog from './components/Blog/blog'
import Authentication from './components/Authentication/authentication'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   

    </>
  )
}

export default App
