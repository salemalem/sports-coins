'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MomentMarketData() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-sm text-gray-400 mb-2">Highest Sale</div>
          <div className="text-4xl font-bold text-green-400">$4,030.00</div>
          <div className="text-sm text-gray-500 mt-1">Last sold 2 hours ago</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-sm text-gray-400 mb-2">Current Floor</div>
          <div className="text-4xl font-bold text-purple-400">$3,700.00</div>
          <div className="text-sm text-gray-500 mt-1">2 available</div>
        </motion.div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Supply</span>
            <span>80% Sold</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
            {/* Progress bar with gradient */}
            <div className="absolute left-0 top-0 h-full w-[80%] bg-gradient-to-r from-purple-600 to-pink-600" />
            
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 w-[80%]"
              initial={{ x: -100 }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
              }}
            />

            {/* Pulsing glow effect */}
            <motion.div
              className="absolute left-0 top-0 h-full w-[80%]"
              animate={{
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))',
              }}
            />
          </div>
        </div>

        <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
          <div className="text-sm text-gray-400 mb-2">Limited Time Offer Ends In</div>
          <div className="text-2xl font-bold text-purple-400">{formatTime(timeLeft)}</div>
        </div>
      </div>
    </div>
  );
}