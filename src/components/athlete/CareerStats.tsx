'use client';

import { motion } from 'framer-motion';

interface CareerStatsProps {
  statistics: Record<string, number | string>;
}

export default function CareerStats({ statistics }: CareerStatsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Career Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(statistics).map(([key, value], index) => (
          <div key={key} className="text-center">
            <div className="text-xl font-bold text-purple-400">{value}</div>
            <div className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}