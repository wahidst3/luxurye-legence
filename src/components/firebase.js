// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi943GpRXQ5yMc9zNqjmWeKGeQmCjtDgo",
  authDomain: "ecomerceapp-b19b3.firebaseapp.com",
  projectId: "ecomerceapp-b19b3",
  storageBucket: "ecomerceapp-b19b3.appspot.com",
  messagingSenderId: "800528777680",
  appId: "1:800528777680:web:a4d011600be466931f79d5",
  measurementId: "G-VNX8HH8SHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore(app)
export default app