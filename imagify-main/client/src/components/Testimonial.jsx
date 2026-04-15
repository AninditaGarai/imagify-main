import React from 'react';
import { testimonialsData } from '../assets/assets';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.3 }} 
      className='flex flex-col items-center justify-center my-20 py-12 px-6 md:px-20'
    >

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        viewport={{ once: false, amount: 0.3 }} 
        className='text-center mb-10'
      >
        <h1 className='text-3xl sm:text-4xl font-semibold'>Customer Testimonials</h1>
        <p className='text-gray-500 mt-2'>What our customers say about us</p>
      </motion.div>

      <div className='flex flex-wrap md:flex-nowrap justify-center gap-6 w-full'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }} 
            viewport={{ once: false, amount: 0.3 }} 
            className='bg-white/20 p-6 md:p-12 rounded-lg shadow-md border w-full md:w-[30%] cursor-pointer hover:scale-[1.02] transition-all'
          >
            <div className='flex flex-col items-center text-center'>
              <img src={testimonial.image} alt={testimonial.name} className='rounded-full w-14' />
              <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <img key={i} src={assets.rating_star} alt="Star" className='w-5' />
                ))}
              </div>
              <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default Testimonial;
