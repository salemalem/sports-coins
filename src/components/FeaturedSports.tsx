'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { featuredAthletes } from '@/data/athletes';

const MomentCardScene = dynamic(() => import('./3d/MomentCard'), { ssr: false });

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAthletes[0].moments.map((moment, index) => (
            <motion.div
              key={moment.id} // Changed from index to moment.id
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={`/athlete/${moment.athlete.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative">
                  <div className="card bg-gray-800 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 hover:-translate-y-2">
                    <div className="relative aspect-square rounded-t-lg overflow-hidden">
                      <MomentCardScene moment={moment} />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{moment.athlete}</h3>
                          <p className="text-gray-400 text-sm">{moment.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">{moment.growth}</div>
                          <p className="text-gray-500 text-sm">Growth</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="bg-gray-700/30 rounded-lg p-3">
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

                        <div className="bg-gray-700/30 rounded-lg p-3">
                          <div className="text-sm text-gray-400 mb-2">Career Milestones</div>
                          <div className="space-y-1">
                            {moment.careerMilestones.map((milestone, idx) => (
                              <div key={idx} className="text-sm text-white">• {milestone}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-purple-400 font-bold">{moment.ownershipStake}%</div>
                          <div className="text-sm text-gray-400">Available Stake</div>
                        </div>
                        <button className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-6">
                          Invest Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSports;