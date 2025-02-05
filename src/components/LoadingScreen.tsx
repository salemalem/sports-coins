'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            SportFlix
          </h1>
          <p className="text-gray-400">Loading your experience...</p>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-48 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
        />
      </div>
    </motion.div>
  );
}