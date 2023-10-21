import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKhipPmBMw7iJCZ_d7-l_xYfw6_Cu9h9s",
  authDomain: "react-ecommers-47195.firebaseapp.com",
  projectId: "react-ecommers-47195",
  storageBucket: "react-ecommers-47195.appspot.com",
  messagingSenderId: "992282273597",
  appId: "1:992282273597:web:65b6207bbfebdc21fb8754"
};

// Initialize Firebase
initializeApp(firebaseConfig);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
