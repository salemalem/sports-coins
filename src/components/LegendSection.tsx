'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const LegendSection = () => {
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
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Football Legends</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Own iconic moments from football's greatest legends
          </p>
        </motion.div>

        <Link href="/athlete/david-suker">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <video
                src="/videos/davor_suker_edit1.mp4"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
              />
              
              {isVideoEnded && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full 
                           flex items-center gap-2 transition-colors z-20"
                  onClick={(e) => {
                    e.preventDefault();
                    handleReplay();
                  }}
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
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full">
                <span className="text-purple-400 font-semibold">Legendary Edition</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white">Davor Šuker</h3>
              <p className="text-xl text-gray-300">Golden Boot Winner - World Cup '98</p>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Career Highlights</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-gray-300">FIFA World Cup Golden Boot (1998)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-gray-300">European Golden Boot (1997)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-gray-300">Real Madrid Champions League Winner</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">45</div>
                    <div className="text-sm text-gray-400">International Goals</div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">69</div>
                    <div className="text-sm text-gray-400">International Caps</div>
                  </div>
                </div>
              </div>

              <button className="w-full btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all">
                View Full Profile
              </button>
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LegendSection;