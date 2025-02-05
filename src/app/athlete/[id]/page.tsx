'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import VideoCard from '@/components/athlete/VideoCard';

const athletes = {
  "david-suker": {
    name: "Davor Šuker",
    tagline: "Croatian Football Legend",
    image: "/images/davor_suker_tall.jpg",
    potentialRating: 99,
    investmentMetrics: {
      growthRate: "+38%",
      supporterCount: "15.2K",
      averageROI: "42%",
      stakingPrice: "8.5 SOL"
    },
    statistics: {
      matchesPlayed: 69,
      goalsScored: 45,
      assists: 20,
      winRate: 75,
      careerDuration: "1992 - 2003"
    },
    highlights: [
      {
        title: "World Cup Golden Boot",
        description: "Top scorer at 1998 FIFA World Cup",
        achievement: "6 Goals",
        date: "1998"
      },
      {
        title: "Champions League Victory",
        description: "Real Madrid triumph",
        achievement: "Winner",
        date: "1998"
      },
      {
        title: "European Golden Boot",
        description: "Top scorer in European leagues",
        achievement: "Winner",
        date: "1997"
      }
    ],
    social: {
      instagram: "850K",
      twitter: "1.2M",
      tiktok: "500K"
    },
    coachQuote: {
      text: "One of the most natural finishers the game has ever seen. His ability to find the back of the net was simply extraordinary.",
      author: "Miroslav Blažević, Croatia National Team Coach"
    }
  }
};

export default function AthleteProfile({ params }: { params: { id: string } }) {
  const athleteInfo = athletes[params.id];

  if (!athleteInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div 
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(/images/davor_suker_wide.jpg)`,
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
              {athleteInfo.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-200 mb-8"
            >
              {athleteInfo.tagline}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-green-400 text-3xl font-bold">{athleteInfo.investmentMetrics.growthRate}</div>
              <div className="text-gray-400">Growth Rate</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-purple-400 text-3xl font-bold">{athleteInfo.investmentMetrics.supporterCount}</div>
              <div className="text-gray-400">Supporters</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-blue-400 text-3xl font-bold">{athleteInfo.investmentMetrics.averageROI}</div>
              <div className="text-gray-400">Avg. ROI</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-pink-400 text-3xl font-bold">{athleteInfo.investmentMetrics.stakingPrice}</div>
              <div className="text-gray-400">Staking Price</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <VideoCard />
          </div>

          <div className="md:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Career Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.entries(athleteInfo.statistics).map(([key, value], index) => (
                  <div key={key} className="text-center">
                    <div className="text-xl font-bold text-purple-400">{value}</div>
                    <div className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Career Highlights</h2>
              <div className="space-y-4">
                {athleteInfo.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{highlight.title}</h3>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-400 font-bold">{highlight.achievement}</div>
                        <div className="text-sm text-gray-400">{highlight.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">Legend Rating</div>
                <div className="text-4xl font-bold text-purple-400 mb-4">{athleteInfo.potentialRating}</div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${athleteInfo.potentialRating}%` }}
                  />
                </div>
              </div>
              <button className="w-full btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg mb-4">
                Invest Now
              </button>
              <p className="text-sm text-gray-400 text-center">
                Join {athleteInfo.investmentMetrics.supporterCount} supporters in {athleteInfo.name}'s legacy
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold mb-4">Social Reach</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaInstagram className="text-pink-400" />
                    <span>Instagram</span>
                  </div>
                  <span className="font-bold">{athleteInfo.social.instagram}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaTwitter className="text-blue-400" />
                    <span>Twitter</span>
                  </div>
                  <span className="font-bold">{athleteInfo.social.twitter}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaTiktok className="text-gray-400" />
                    <span>TikTok</span>
                  </div>
                  <span className="font-bold">{athleteInfo.social.tiktok}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="text-gray-400 italic">"{athleteInfo.coachQuote.text}"</div>
              <div className="text-sm text-purple-400 mt-4">- {athleteInfo.coachQuote.author}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}