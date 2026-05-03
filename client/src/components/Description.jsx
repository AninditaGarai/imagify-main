import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.3 }} 
      className='flex flex-col md:flex-row items-center justify-center my-24 p-6 md:px-28 gap-10'
    >

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: false, amount: 0.3 }} 
          className='md:w-1/2 flex justify-center'
        >
            <img src={assets.sample_img_1} alt="Sample" className='w-80 xl:w-96 rounded-lg shadow-md' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          viewport={{ once: false, amount: 0.3 }} 
          className='md:w-1/2 text-center md:text-left'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your Imagination into Reality</p>   

            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aspernatur, possimus, ipsum iusto facilis reprehenderit nihil et, dolor quos dolores eos similique? Fugit non accusantium nemo quos possimus ducimus vero?
            </p>
            <p className='text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias, in at minus ullam, commodi officiis vel provident vitae labore ipsa odio maiores dolorum. Natus soluta cupiditate earum saepe voluptatibus.
            </p>
        </motion.div>

    </motion.div>
  );
};

export default Description;
