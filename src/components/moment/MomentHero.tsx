'use client';

import { motion } from 'framer-motion';
import { Moment } from '@/data/athletes';

interface MomentHeroProps {
  moment: Moment;
}

export default function MomentHero({ moment }: MomentHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-4 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full"
      >
        <span className="text-purple-400 font-semibold">Limited Edition Collectible</span>
      </motion.div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Own the Sprint That Changed History
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        A defining performance that elevated {moment.athlete} to track immortality – 
        now immortalized for collectors. Don't just witness history, own it.
      </p>
    </motion.div>
  );
}