import React, { useState } from 'react';
import './auth.css'
function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission
  };

  return (
    <div className="rform">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
       <div className="input"><h3>Enter Name</h3>
        <input type="text" />
       </div>
       <div className="input"><h3>Enter Email</h3>
        <input type="email" />
       </div>
       <div className="input"><h3>Enter Password</h3>
        <input type="text" />
       </div>
       <div className="input"><h3>Confirm Password</h3>
        <input type="text" />
       </div>
       <div className="input"><h3>Security Question?</h3>
        <input type="text" />
       </div>
       <div className="input"><h3>Security Answer</h3>
        <input type="text" />
       </div>
       <div className="input"><h3>Select Country</h3>
       <select name="" id="">
        <option value="">Select Country</option>
        <option value="">Pakiistan</option>
        <option value="">India</option>
       </select>
       </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;