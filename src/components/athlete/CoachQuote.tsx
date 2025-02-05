'use client';

import { motion } from 'framer-motion';

interface CoachQuoteProps {
  quote: {
    text: string;
    author: string;
  };
}

export default function CoachQuote({ quote }: CoachQuoteProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <div className="text-gray-400 italic">"{quote.text}"</div>
      <div className="text-sm text-purple-400 mt-4">- {quote.author}</div>
    </motion.div>
  );
}