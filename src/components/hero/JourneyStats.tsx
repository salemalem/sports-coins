'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatItem {
  icon: string;
  text: string;
  delay: number;
}

const JourneyStats = () => {
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats(data.stats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="absolute bottom-8 left-8 right-8 flex justify-between text-sm text-white/80">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          text={stat.text}
          delay={stat.delay}
        />
      ))}
    </div>
  );
};

interface StatItemProps {
  icon: string;
  text: string;
  delay: number;
}

const StatItem = ({ icon, text, delay }: StatItemProps) => {
  return (
    <motion.span 
      className="flex items-center"
      animate={{ 
        textShadow: [
          "0 0 4px rgba(167, 139, 250, 0)",
          "0 0 8px rgba(167, 139, 250, 0.3)",
          "0 0 4px rgba(167, 139, 250, 0)"
        ]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <span className="inline-block mr-1 animate-pulse">{icon}</span>
      {text}
    </motion.span>
  );
};

export default JourneyStats;