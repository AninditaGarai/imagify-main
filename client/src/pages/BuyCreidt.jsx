import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppConstext } from '../context/AppContext';
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const BuyCreidt = () => {
  const { user , backendUrl , loadCreditsData,token , setShowLogin} = useContext(AppConstext);

  const navigate = useNavigate()

  const initPay = async (order) =>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID ,
      amount: order.amount  ,
      currency : order.currency ,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id ,
      receipt : order.receipt,
      handler: async (response)=>{
        console.log(response);
      }

    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {


    try {

      if (!user){
        setShowLogin(true)
      }

      const {data}= await axios.post(backendUrl + '/api/user/pay-razor', {planId},{headers : {token}})

      if(data.success){
        initPay(data.order)


      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.3 }}
      className='min-h-[80vh] text-center pt-14 mb-10'
    >
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
        className='border border-gray-400 px-10 py-2 rounded-full mb-6'
      >
        Our Plans
      </motion.button>

      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the Plan</h1>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
        className='flex flex-wrap justify-center gap-6 text-left'
      >
        {plans.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 transition-all duration-500'
            key={index}
          >
            <img src={assets.logo_icon} alt='' width={40} />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'> ${item.price}</span> / {item.credits} credits
            </p>
            <motion.button  
            onClick={()=>paymentRazorpay(item.id)}
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'
            >
              {user ? 'purchase' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BuyCreidt;
