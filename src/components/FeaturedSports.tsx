'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const MomentsGrid = dynamic(() => import('./MomentsGrid'), { ssr: false });

const FeaturedSports = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Future Legends
          </h2>
          <p className="text-xl text-gray-400">
            Discover and support the next generation of sports stars
          </p>
        </motion.div>

        <MomentsGrid />
      </div>
    </section>
  );
};

export default FeaturedSports;