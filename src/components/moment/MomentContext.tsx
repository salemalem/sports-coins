'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaFire, FaClock, FaStar, FaChartLine } from 'react-icons/fa';
import { Moment } from '@/data/athletes';

interface MomentContextProps {
  moment: Moment;
}

export default function MomentContext({ moment }: MomentContextProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        The Moment
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-300 leading-relaxed mb-8"
      >
        In a defining Olympic Gold Sprint, {moment.athlete} left the world in awe with a 
        record-breaking performance. This moment, forever etched in track and field history, 
        represents the pinnacle of greatness. Don't just watch it – own it and become part 
        of the legacy.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          { icon: FaTrophy, label: "Historic Achievement", color: "text-yellow-500" },
          { icon: FaFire, label: "Rare Collectible", color: "text-orange-500" },
          { icon: FaClock, label: "Limited Time", color: "text-purple-500" },
          { icon: FaStar, label: "Top Rated", color: "text-pink-500" },
          { icon: FaChartLine, label: "High Growth", color: "text-green-500" }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <item.icon className={`${item.color} text-3xl mx-auto mb-3`} />
            <div className="text-sm font-medium text-gray-400">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}