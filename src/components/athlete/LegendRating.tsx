'use client';

import { motion } from 'framer-motion';

interface LegendRatingProps {
  rating: number;
  supporterCount: string;
  athleteName: string;
}

export default function LegendRating({ rating, supporterCount, athleteName }: LegendRatingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <div className="text-center mb-6">
        <div className="text-sm text-gray-400 mb-2">Legend Rating</div>
        <div className="text-4xl font-bold text-purple-400 mb-4">{rating}</div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${rating}%` }}
          />
        </div>
      </div>
      <button className="w-full btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg mb-4">
        Invest Now
      </button>
      <p className="text-sm text-gray-400 text-center">
        Join {supporterCount} supporters in {athleteName}'s legacy
      </p>
    </motion.div>
  );
}