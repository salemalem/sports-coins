'use client';

import { motion } from 'framer-motion';

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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-30" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-40">
        <div className="flex justify-between">
          <motion.span
            className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {edition.type}
          </motion.span>
          <motion.span
            className="bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {edition.number}
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </div>
    </>
  );
}