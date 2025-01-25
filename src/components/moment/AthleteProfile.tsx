'use client';

import { motion } from 'framer-motion';
import { PlayerInfo } from '@/utils/playerInfo';
import { FaMedal, FaRunning, FaCalendarAlt } from 'react-icons/fa';

interface AthleteProfileProps {
  playerInfo: PlayerInfo;
}

export default function AthleteProfile({ playerInfo }: AthleteProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
    >
      {/* Profile Header */}
      <div className="relative mb-6">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              boxShadow: ['0 0 20px #8b5cf6', '0 0 10px #8b5cf6', '0 0 20px #8b5cf6'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500"
          >
            <span className="text-purple-400 font-bold text-sm">Most Decorated U.S. Track Athlete</span>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500">
            <img
              src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg"
              alt={playerInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-1">{playerInfo.name}</h3>
          <p className="text-purple-400">{playerInfo.position}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaRunning className="text-purple-400" />
            <span className="text-sm text-gray-400">Career Start</span>
          </div>
          <div className="text-lg font-bold">{playerInfo.careerStart}</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-purple-400" />
            <span className="text-sm text-gray-400">Active Years</span>
          </div>
          <div className="text-lg font-bold">{new Date().getFullYear() - parseInt(playerInfo.careerStart)} Years</div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FaMedal className="text-yellow-500" />
          <h4 className="text-lg font-bold">Key Achievements</h4>
        </div>
        <div className="space-y-3">
          {playerInfo.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-gray-300">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}