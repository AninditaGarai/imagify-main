import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { useContext } from 'react';
import { AppConstext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

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
    <motion.div className='flex flex-col justify-center items-center text-center my-20 px-6'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Tagline */}
      <motion.div className='text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Text to Image Generator</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1 className='text-3xl sm:text-5xl lg:text-6xl max-w-[280px] sm:max-w-[540px] mx-auto mt-10 leading-tight'>
        Turn Text to <span className='text-blue-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >Image</span>, within Seconds.
      </motion.h1>

      {/* Subtext */}
      <motion.p className='text-center max-w-xl mx-auto mt-5 text-gray-600 text-sm sm:text-lg'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into magic.
      </motion.p>

      {/* Generate Button */}
      <motion.button onClick={onClickHandler}
      
      className='sm:text-lg text-white bg-black px-12 py-2.5 mt-8 flex items-center gap-2 rounded-full shadow-lg hover:bg-gray-900'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.8 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Images 
        <img className='h-6' src={assets.star_group} alt="Stars" />
      </motion.button>

      {/* Image Grid */}
      <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6).fill('').map((_, index) => (
          <img 
            className='rounded-md hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-16 sm:w-20 md:w-24'
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
            alt="Generated Sample" 
            key={index} 
            width={70}
          />
        ))}
      </motion.div>

      {/* Image Caption */}
      <motion.p className='mt-2 text-neutral-600'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from Imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
