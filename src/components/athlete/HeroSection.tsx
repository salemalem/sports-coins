'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  name: string;
  tagline: string;
  backgroundImage: string;
}

export default function HeroSection({ name, tagline, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="relative h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center 30%'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900" />
      <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-200 mb-8"
          >
            {tagline}
          </motion.p>
        </div>
      </div>
    </div>
  );
}