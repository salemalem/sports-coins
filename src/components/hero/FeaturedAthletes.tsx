'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Athlete {
  title: string;
  description: string;
  image: string;
}

const FeaturedAthletes = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await fetch('/api/featured-athletes');
        const data = await response.json();
        setAthletes(data.risingStars);
      } catch (error) {
        console.error('Error fetching featured athletes:', error);
      }
    };

    fetchAthletes();
  }, []);

  return (
    <div className="space-y-12">
      {/* Rising Stars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {athletes.map((athlete, index) => (
          <AthleteCard
            key={index}
            title={athlete.title}
            description={athlete.description}
            image={athlete.image}
          />
        ))}
      </motion.div>

      {/* Legends Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Legends Collection</h3>
          <p className="text-gray-400">Own a piece of football history</p>
        </div>
        <Link href="/athlete/david-suker" className="block">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 transform transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[21/9] rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img 
                src="/images/davor_suker_wide.jpg"
                alt="Davor Šuker"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Davor Šuker</h3>
                <p className="text-lg text-gray-300">Golden Boot Winner - World Cup '98</p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm">
                    Legendary Edition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

interface AthleteCardProps {
  title: string;
  description: string;
  image: string;
}

const AthleteCard = ({ title, description, image }: AthleteCardProps) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
      <div className="aspect-square rounded-lg overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAthletes;