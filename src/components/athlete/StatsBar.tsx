'use client';

import { motion } from 'framer-motion';

interface StatsBarProps {
  metrics: {
    growthRate: string;
    supporterCount: string;
    averageROI: string;
    stakingPrice: string;
  };
}

export default function StatsBar({ metrics }: StatsBarProps) {
  return (
    <div className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-green-400 text-3xl font-bold">{metrics.growthRate}</div>
            <div className="text-gray-400">Growth Rate</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-purple-400 text-3xl font-bold">{metrics.supporterCount}</div>
            <div className="text-gray-400">Supporters</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-blue-400 text-3xl font-bold">{metrics.averageROI}</div>
            <div className="text-gray-400">Avg. ROI</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="text-pink-400 text-3xl font-bold">{metrics.stakingPrice}</div>
            <div className="text-gray-400">Staking Price</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}