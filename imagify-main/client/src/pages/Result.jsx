import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { AppConstext } from '../context/AppContext.jsx';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

 const {generateImage} = useContext(AppConstext);

  const onsubmitHandler = async (e) => {

    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }


    setLoading(false)
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.3 }}
      onSubmit={onsubmitHandler} 
      className='flex flex-col min-h-[90vh] justify-center items-center'
    >
      <div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className='relative'
        >
          <img src={image} alt="" className='max-w-sm rounded shadow-lg' />
          <motion.span 
            animate={{ width: loading ? '100%' : '0%' }} 
            transition={{ duration: 10, ease: "linear" }} 
            className='absolute bottom-0 left-0 h-1 bg-blue-500'
          ></motion.span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: loading ? 1 : 0 }} 
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.p>

        {!isImageLoaded && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'
          >
            <input
              onChange={e => setInput(e.target.value)} 
              value={input}
              type="text" 
              placeholder='Describe what you want to generate' 
              className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' 
            />
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ duration: 0.3 }}
              type='submit' 
              className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
            >
              Generate
            </motion.button>
          </motion.div>
        )}
      </div>

      {isImageLoaded && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'
        >
          <motion.p 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.3 }}
            onClick={() => { setIsImageLoaded(false); }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
          >
            Generate Another
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ duration: 0.3 }}
            href={image} 
            download 
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
          >
            Download
          </motion.a>
        </motion.div>
      )}
    </motion.form>
  );
}

export default Result;
