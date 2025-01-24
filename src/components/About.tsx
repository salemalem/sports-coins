'use client';

import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Athlete-First Platform",
      description: "Built to support athletes in their journey from rising stars to legends"
    },
    {
      title: "Fan Investment",
      description: "Enable supporters to be part of athletes' success stories from day one"
    },
    {
      title: "Career Development",
      description: "Tools and resources to help athletes build and monetize their digital presence"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Building the Future of Sports</h2>
          <p className="text-xl text-gray-400">
            We're revolutionizing how athletes build their careers and how fans support their journey. Our platform connects rising stars with believers in their potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="card bg-gray-800 border border-gray-700 hover:border-purple-500 transform transition-all duration-300 hover:-translate-y-2 p-6 rounded-xl h-full">
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;