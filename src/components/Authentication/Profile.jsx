import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; // Adjust the import path as necessary
import './Profile.css'
const Profile = () => {
  const navigate = useNavigate();
  const [name,setName]=useState("")

  useEffect(() => {
    const fetchName = async () => {
      try {
        const user = auth.currentUser;
        if (user && user.uid) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const token = await user.getIdToken();
            
            // Assuming name is stored in Firestore document
            const aname = userData.name;
            setName(aname)
            // Store the token in localStorage
            localStorage.setItem('authToken', token);

           
          }
        }
      } catch (error) {
        console.log(error.message);
        alert(`Error: ${error.message}`);
      }
    };

    fetchName();
  }, [navigate]);

  return (
    <div className='profile'>
      <h1>Hi {name} Welcome</h1>
      <h4>Your Profie Page will be Available to You on </h4>
      <h3>23 August 2024</h3>
      <h1>Happy Shopping</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default Profile;
