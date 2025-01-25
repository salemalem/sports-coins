'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { moments, type Moment } from '@/data/athletes';

const MomentCard3D = dynamic(() => import('./3d/MomentCard3D'), { ssr: false });

export default function MomentsPull() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Moments You Could Pull
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            VIEW ALL
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(moment.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative aspect-square"
            >
              <div className={`
                absolute inset-0 rounded-2xl transition-all duration-300
                ${hoveredCard === moment.id ? 'scale-105' : 'scale-100'}
              `}>
                <MomentCard3D
                  moment={{
                    athlete: moment.athlete,
                    title: `${moment.play} - ${moment.date}`,
                    rarity: moment.rarity,
                    preview: moment.image
                  }}
                  isHovered={hoveredCard === moment.id}
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{moment.athlete}</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {moment.play} - {moment.date}, {moment.series}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">{moment.edition}</span>
                  <span className="ml-2 px-2 py-1 bg-gray-800 rounded-full text-xs">
                    {moment.rarity}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Total Purchase Limit
          </h3>
          <p className="text-4xl font-bold text-purple-400 mb-2">
            18,500 packs
          </p>
          <p className="text-gray-400">
            total per user
          </p>
        </motion.div>
      </div>
    </section>
  );
}