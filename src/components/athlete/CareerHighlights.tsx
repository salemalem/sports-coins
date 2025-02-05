'use client';

import { motion } from 'framer-motion';

interface Highlight {
  title: string;
  description: string;
  achievement: string;
  date: string;
}

interface CareerHighlightsProps {
  highlights: Highlight[];
}

export default function CareerHighlights({ highlights }: CareerHighlightsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800 rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Career Highlights</h2>
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-gray-700/50 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
              <div className="text-right">
                <div className="text-purple-400 font-bold">{highlight.achievement}</div>
                <div className="text-sm text-gray-400">{highlight.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}