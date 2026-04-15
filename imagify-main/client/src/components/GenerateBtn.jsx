import React, { useContext } from 'react';
// import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { AppConstext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {


    const {user,setShowLogin} = useContext(AppConstext)
    const navigate = useNavigate()

const onClickHandler =() => {
    if(user){
        navigate('/result')

    }
    else{
        setShowLogin(true)
    }

}
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.3 }}
      className='pb-16 text-center'
    >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 ms:py-16'
        >
          See the Magic. Try Now
        </motion.h1>
        <motion.button
        onClick={onClickHandler} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          transition={{ duration: 0.3 }}
          className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'
        >
          Generate ✨
        </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
