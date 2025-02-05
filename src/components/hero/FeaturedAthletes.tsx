'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Athlete {
  title: string;
  description: string;
  image: string;
}

interface Legend {
  id: string;
  name: string;
  title: string;
  image: string;
  edition: string;
}

const FeaturedAthletes = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [legend, setLegend] = useState<Legend | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [athletesResponse, legendResponse] = await Promise.all([
          fetch('/api/featured-athletes'),
          fetch('/api/legend')
        ]);
        
        const athletesData = await athletesResponse.json();
        const legendData = await legendResponse.json();
        
        setAthletes(athletesData.risingStars);
        setLegend(legendData.legend);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return null; // Return null while loading to prevent flash
  }

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
      {legend && (
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
          <Link href={`/athlete/${legend.id}`} className="block">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 transform transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[21/9] rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={legend.image}
                  alt={legend.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{legend.name}</h3>
                  <p className="text-lg text-gray-300">{legend.title}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm">
                      {legend.edition}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
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