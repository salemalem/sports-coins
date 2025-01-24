'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';

const Community = () => {
  const stats = [
    { label: 'Active Athletes', value: '1,234+' },
    { label: 'Supporters', value: '45,678+' },
    { label: 'Career Moments', value: '12,345+' }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with athletes, supporters, and sports enthusiasts building the future of athlete development
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <FaTwitter className="text-2xl" />, name: 'Twitter', color: 'from-blue-400 to-blue-600' },
            { icon: <FaDiscord className="text-2xl" />, name: 'Discord', color: 'from-indigo-400 to-indigo-600' },
            { icon: <FaTelegram className="text-2xl" />, name: 'Telegram', color: 'from-sky-400 to-sky-600' }
          ].map((social, index) => (
            <motion.button
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`flex items-center gap-3 bg-gradient-to-r ${social.color} text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300`}
            >
              {social.icon}
              <span className="font-semibold">Join {social.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;