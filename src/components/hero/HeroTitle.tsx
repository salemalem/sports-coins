'use client';

import { motion } from 'framer-motion';

const HeroTitle = () => {
  return (
    <>
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Own Your Journey.<br/>Build Your Legacy.
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Create your digital identity, share your moments, and let fans invest in your future. Join the next generation of athlete-fan connections.
      </motion.p>
    </>
  );
};

export default HeroTitle;