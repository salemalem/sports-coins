'use client';

import { motion } from 'framer-motion';

export default function MomentCTA() {
  return (
    <div className="space-y-6">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-6 px-8 rounded-xl text-xl">
          Buy Now – Own History
        </div>
      </motion.button>

      <div className="flex items-center justify-between text-sm">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors"
        >
          Make Offer
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors"
        >
          Share Moment
        </motion.button>
      </div>

      <div className="text-center space-y-2">
        <p className="text-gray-400">
          Join <span className="text-purple-400 font-bold">128</span> collectors who own this moment
        </p>
        <p className="text-sm text-gray-500">
          Last purchase was 2 hours ago
        </p>
      </div>
    </div>
  );
}