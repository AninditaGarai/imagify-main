import React, { useContext } from 'react';
import {  Routes, Route } from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCreidt from './pages/BuyCreidt';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppConstext } from './context/AppContext';






const App = () => {

  const {showLogin} = useContext(AppConstext)

  return (
    
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-pink-100 via-purple-50 to-teal-100">

      <ToastContainer position="top-center" />
      <Navbar />
     { showLogin &&<Login/>}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/BuyCreidt" element={<BuyCreidt />} />
          
        </Routes> 
       <Footer/>
      
    </div>
    
  )
}

export default App