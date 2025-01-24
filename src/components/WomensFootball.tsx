'use client';

import { motion } from 'framer-motion';
import { womenFootballAthletes } from '@/data/athletes';

const WomensFootball = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Women Changing the Game</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Support the next generation of women's football stars. Invest in their journey, own their iconic moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {womenFootballAthletes.map((athlete, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="card bg-gray-800 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 hover:-translate-y-2 p-6 rounded-xl">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img 
                      src={athlete.image} 
                      alt={athlete.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{athlete.name}</h3>
                    <p className="text-purple-400 text-sm mb-3">{athlete.achievement}</p>
                    <p className="text-gray-400 text-sm mb-4">{athlete.team}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Potential Rating</div>
                        <div className="flex items-center">
                          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              style={{ width: `${athlete.potentialRating}%` }}
                            />
                          </div>
                          <span className="ml-3 text-white font-bold">{athlete.potentialRating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-green-400 font-bold">{athlete.stakingPrice}</div>
                          <div className="text-sm text-gray-400">Staking Price</div>
                        </div>
                        <button className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-6">
                          Support Journey
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomensFootball;