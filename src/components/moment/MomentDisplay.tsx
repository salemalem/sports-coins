'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moment } from '@/data/athletes';

interface MomentDisplayProps {
  moment: Moment;
}

export default function MomentDisplay({ moment }: MomentDisplayProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const handleReplay = () => {
    setIsVideoEnded(false);
    const video = document.querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <div className="relative aspect-video">
      {/* Exclusivity Tags */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        <motion.div
          animate={{
            boxShadow: ['0 0 20px #8b5cf6', '0 0 10px #8b5cf6', '0 0 20px #8b5cf6'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold"
        >
          1-of-10 Limited Edition
        </motion.div>
        <div className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold">
          {moment.series}
        </div>
      </div>

      {/* Video Container */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <video
          src="/videos/nba.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Video Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{moment.athlete}</h3>
              <p className="text-sm text-gray-300">{moment.play}</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-purple-400 font-mono text-sm">{moment.rarity}</span>
            </div>
          </div>
        </div>

        {/* Replay Button */}
        {isVideoEnded && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full 
                     flex items-center gap-2 transition-colors"
            onClick={handleReplay}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
            Replay Moment
          </motion.button>
        )}
      </div>
    </div>
  );
}