import { useEffect, useState } from 'react';
import './auth.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Authentication({ admin,setAdmin }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rEmail, setREmail] = useState('');
  const [rPassword, setRPassword] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, rEmail, rPassword);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          name: name,
          role: 'user', // Set the default role as 'user'
        });
        alert(`Registered user: ${user.email}`);
        const token = await user.getIdToken(); // Fetch the token
        localStorage.setItem('authToken', token);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
      alert(`Error: ${error.message}`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;

      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const token = await user.getIdToken(); // Fetch the token
          localStorage.setItem('authToken', token);

          if (userData.role === 'admin') {
            
            alert('Logged in as Admin');
            navigate('/admin');
           
          } else {
            alert('Logged in Successfully');
            navigate('/profile');
          }
        }
      }
    } catch (error) {
      console.log(error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className='authentication'>
      <div className='pr'></div>
      <div className='form'>
        <form onSubmit={login ? handleLogin : handleRegister}>
          {login ? <h1>Welcome Back!</h1> : <h1>Register here</h1>}
          <h5>
            {login ? 'Signin' : 'Register'} to continue shopping the best of choices. <br />
            Luxury Elegance, the best addition in your life
          </h5>
          {!login && (
            <input
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type='text'
            placeholder='Enter Email address'
            value={login ? loginEmail : rEmail}
            onChange={(e) => (login ? setLoginEmail(e.target.value) : setREmail(e.target.value))}
          />
          <input
            type='password'
            placeholder='Enter Password'
            value={login ? loginPassword : rPassword}
            onChange={(e) => (login ? setLoginPassword(e.target.value) : setRPassword(e.target.value))}
          />
          {!login && (
            <input
              type='password'
              placeholder='Confirm Password'
              value={rPassword}
              onChange={(e) => setRPassword(e.target.value)}
            />
          )}
          <button type='submit' className='submit'>Submit</button>
          <p>
            <a href='/'>Forgot Password?</a>
            <a href='#' onClick={() => setLogin(!login)}>
              {login ? 'Register' : 'Log In'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
