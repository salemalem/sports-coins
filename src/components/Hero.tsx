'use client';

import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-2285-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black/80" />
      
      <div className="relative z-10 container text-center text-white">
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
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <motion.button
            className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg group relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Athlete Profile
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <WalletMultiButton className="!bg-white/10 !backdrop-blur-sm !border-2 !border-purple-500/50 hover:!bg-purple-600 !text-white !transition-all !duration-200 !h-[52px] !px-8 !rounded-full" />
          </motion.div>
        </div>

        {/* Featured Athletes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Rising Star Moment */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg" 
                alt="Rising Star Moment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-lg font-bold">Rising Star Moment</h3>
                <p className="text-sm text-gray-300">First Pro Game Highlight</p>
              </div>
            </div>
          </div>
          
          {/* Career Milestone */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg" 
                alt="Career Milestone"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-lg font-bold">Career Milestone</h3>
                <p className="text-sm text-gray-300">Championship Victory</p>
              </div>
            </div>
          </div>
          
          {/* Future Legend */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
            <div className="aspect-square rounded-lg overflow-hidden mb-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg" 
                alt="Future Legend"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-lg font-bold">Future Legend</h3>
                <p className="text-sm text-gray-300">Rookie Season Highlights</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Journey Stats */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between text-sm text-white/80">
        <motion.span 
          className="flex items-center"
          animate={{ 
            textShadow: [
              "0 0 4px rgba(167, 139, 250, 0)",
              "0 0 8px rgba(167, 139, 250, 0.3)",
              "0 0 4px rgba(167, 139, 250, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="inline-block mr-1 animate-pulse">🌟</span>
          Active Athletes: 1,234
        </motion.span>
        <motion.span 
          className="flex items-center"
          animate={{ 
            textShadow: [
              "0 0 4px rgba(167, 139, 250, 0)",
              "0 0 8px rgba(167, 139, 250, 0.3)",
              "0 0 4px rgba(167, 139, 250, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        >
          <span className="inline-block mr-1 animate-pulse">💫</span>
          Career Moments: 5,678
        </motion.span>
        <motion.span 
          className="flex items-center"
          animate={{ 
            textShadow: [
              "0 0 4px rgba(167, 139, 250, 0)",
              "0 0 8px rgba(167, 139, 250, 0.3)",
              "0 0 4px rgba(167, 139, 250, 0)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        >
          <span className="inline-block mr-1 animate-pulse">🤝</span>
          Fan Investments: 10,234
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;