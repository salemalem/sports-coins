'use client';

import { motion } from 'framer-motion';
import { FaUserAstronaut, FaChartLine, FaTrophy } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface Step {
  iconName: string;
  title: string;
  description: string;
  forAthletes: string;
  forFans: string;
}

const iconMap = {
  FaUserAstronaut,
  FaChartLine,
  FaTrophy
};

const HowItWorks = () => {
  const [steps, setSteps] = useState<Step[]>([]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/api/how-it-works');
        const data = await response.json();
        setSteps(data.steps);
      } catch (error) {
        console.error('Error fetching steps:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A new way for athletes and fans to build success together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = iconMap[step.iconName as keyof typeof iconMap];
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="card bg-gray-800 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 hover:-translate-y-2 p-8 rounded-xl text-center">
                  <div className="text-purple-400 mb-6">
                    <Icon className="text-5xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-purple-400 font-semibold mb-2">For Athletes</h4>
                      <p className="text-sm text-gray-300">{step.forAthletes}</p>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-pink-400 font-semibold mb-2">For Fans</h4>
                      <p className="text-sm text-gray-300">{step.forFans}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;