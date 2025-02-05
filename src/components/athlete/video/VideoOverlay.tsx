'use client';

import { motion } from 'framer-motion';
import { FaLock, FaCrown, FaFire } from 'react-icons/fa';

interface VideoOverlayProps {
  edition: {
    type: string;
    number: string;
  };
  title: string;
  description: string;
}

export default function VideoOverlay({ edition, title, description }: VideoOverlayProps) {
  return (
    <>
      {/* TV Scanline Effect */}
      <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none z-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-30" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-40">
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm flex items-center gap-2">
              <FaCrown className="text-yellow-400" />
              {edition.type}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm flex items-center gap-2"
          >
            <FaLock className="text-purple-400" />
            {edition.number}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {/* Title and Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>

          {/* NFT Details */}
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-purple-400 font-semibold flex items-center gap-2">
                <FaFire className="text-orange-500" />
                Ultra Rare Moment
              </span>
              <motion.span
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-green-400 font-bold"
              >
                Live
              </motion.span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Current Owners</div>
                <div className="text-white font-bold">3/10</div>
              </div>
              <div>
                <div className="text-gray-400">Floor Price</div>
                <div className="text-white font-bold">8.5 SOL</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-semibold"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated Corner Accents */}
      {[
        'top-0 left-0 origin-top-left',
        'top-0 right-0 origin-top-right rotate-90',
        'bottom-0 left-0 origin-bottom-left -rotate-90',
        'bottom-0 right-0 origin-bottom-right rotate-180'
      ].map((position, index) => (
        <motion.div
          key={index}
          className={`absolute w-8 h-8 ${position} pointer-events-none z-50`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <div className="absolute inset-0">
            <motion.div
              className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"
              animate={{
                opacity: [1, 0.5, 1],
                boxShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.7)',
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"
              animate={{
                opacity: [1, 0.5, 1],
                boxShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.7)',
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}