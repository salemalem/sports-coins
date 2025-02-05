'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FeaturedMoment {
  athlete: string;
  title: string;
  sport: string;
  rarity: string;
  potentialRating: number;
  stakingPrice: string;
  supporters: number;
  growth: string;
  preview: string;
}

const Marketplace = () => {
  const [featuredMoments, setFeaturedMoments] = useState<FeaturedMoment[]>([]);

  useEffect(() => {
    const fetchMoments = async () => {
      try {
        const response = await fetch('/api/marketplace');
        const data = await response.json();
        setFeaturedMoments(data.featuredMoments);
      } catch (error) {
        console.error('Error fetching marketplace data:', error);
      }
    };

    fetchMoments();
  }, []);

  const categories = [
    { name: 'Rising Stars', count: 156 },
    { name: 'Career Milestones', count: 89 },
    { name: 'Championship Moments', count: 45 },
    { name: 'Rookie Debuts', count: 78 }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Moments</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover and invest in defining moments of rising sports stars
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              <span>{category.name}</span>
              <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">{category.count}</span>
            </motion.button>
          ))}
        </div>

        {/* Featured Moments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMoments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="card bg-gray-800 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 hover:-translate-y-2 rounded-xl overflow-hidden">
                {/* Preview */}
                <div className="aspect-video bg-gray-900 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10" />
                  <img 
                    src={moment.preview} 
                    alt={`${moment.athlete} - ${moment.title}`}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {moment.rarity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{moment.athlete}</h3>
                      <p className="text-gray-400 text-sm">{moment.title}</p>
                    </div>
                    <span className="text-green-400 font-bold">{moment.growth}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Potential Rating</div>
                      <div className="flex items-center">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${moment.potentialRating}%` }}
                          />
                        </div>
                        <span className="ml-3 text-white font-bold">{moment.potentialRating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-400 font-bold">{moment.supporters}</div>
                        <div className="text-sm text-gray-400">Supporters</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{moment.stakingPrice}</div>
                        <div className="text-sm text-gray-400">Staking Price</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full btn bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Support Athlete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;