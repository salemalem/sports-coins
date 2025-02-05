'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

interface SocialReachProps {
  social: {
    instagram: string;
    twitter: string;
    tiktok: string;
  };
}

export default function SocialReach({ social }: SocialReachProps) {
  return (
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
          <span className="font-bold">{social.instagram}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaTwitter className="text-blue-400" />
            <span>Twitter</span>
          </div>
          <span className="font-bold">{social.twitter}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaTiktok className="text-gray-400" />
            <span>TikTok</span>
          </div>
          <span className="font-bold">{social.tiktok}</span>
        </div>
      </div>
    </motion.div>
  );
}