import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './auth.css'
function authentication() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
   
  
  <div className="form">
    
      <form onSubmit={handleSubmit}>
     
     <h1>Wellcome Back!</h1>
     <h5>Log in to continue shopping the best of choices. <br />Luxury Elgence the best addition ib your life</h5>
      
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        placeholder='Enter Email address'
      />
      
     
        <input 
          type="password" 
          name="age" 
          value={inputs.password || ""} 
          onChange={handleChange}
           placeholder='Enter password'
        />
        
        <input type="submit" className='submit' />
       <p> <a href="/">Forgot Password?</a> <a href="#">Sign Up</a> </p>
    </form></div>

  )
}
export default authentication;