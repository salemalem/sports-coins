'use client';

import { motion } from 'framer-motion';

export default function GlowingBorder() {
  return (
    <>
      {/* Wide epic outer glow effect */}
      <motion.div
        className="absolute -inset-4 rounded-2xl z-10 pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 50px 15px rgba(139, 92, 246, 0.5), 0 0 100px 30px rgba(139, 92, 246, 0.3)',
            '0 0 70px 25px rgba(139, 92, 246, 0.6), 0 0 140px 50px rgba(139, 92, 246, 0.4)',
            '0 0 50px 15px rgba(139, 92, 246, 0.5), 0 0 100px 30px rgba(139, 92, 246, 0.3)',
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Color cycling wide glow */}
      <motion.div
        className="absolute -inset-4 rounded-2xl z-10 pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 60px 20px rgba(139, 92, 246, 0.4)',  // Purple
            '0 0 60px 20px rgba(236, 72, 153, 0.4)',  // Pink
            '0 0 60px 20px rgba(59, 130, 246, 0.4)',  // Blue
            '0 0 60px 20px rgba(139, 92, 246, 0.4)',  // Back to Purple
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner accents */}
      {['-top-4 -left-4', '-top-4 -right-4', '-bottom-4 -left-4', '-bottom-4 -right-4'].map((position, index) => (
        <motion.div
          key={position}
          className={`absolute w-8 h-8 ${position} z-30 pointer-events-none`}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm" />
        </motion.div>
      ))}

      {/* Enhanced hover glow */}
      <motion.div
        className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 80px 30px rgba(139, 92, 246, 0.5), 0 0 160px 60px rgba(139, 92, 246, 0.3)',
            '0 0 100px 40px rgba(139, 92, 246, 0.6), 0 0 200px 80px rgba(139, 92, 246, 0.4)',
            '0 0 80px 30px rgba(139, 92, 246, 0.5), 0 0 160px 60px rgba(139, 92, 246, 0.3)',
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
}