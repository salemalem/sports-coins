'use client';

import { motion } from 'framer-motion';

interface WideVideoProps {
  videoUrl: string;
}

export default function WideVideo({ videoUrl }: WideVideoProps) {
  return (
    <section className="relative">
      {/* Background Transition Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(236,72,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>

          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              animate={{
                y: [0, 1000],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
              Legendary Moment
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-400">
              Experience the historic performance that changed everything
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden border rounded-xl bg-black/40 backdrop-blur-sm border-purple-500/20 group"
            >
              {/* Animated Corner Accents */}
              {[
                'top-0 left-0 origin-top-left',
                'top-0 right-0 origin-top-right rotate-90',
                'bottom-0 left-0 origin-bottom-left -rotate-90',
                'bottom-0 right-0 origin-bottom-right rotate-180'
              ].map((position, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-12 h-12 ${position} pointer-events-none z-50`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="absolute inset-0">
                    <motion.div
                      className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"
                      animate={{
                        opacity: [1, 0.5, 1],
                        boxShadow: [
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                          '0 0 20px rgba(139, 92, 246, 0.7)',
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"
                      animate={{
                        opacity: [1, 0.5, 1],
                        boxShadow: [
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                          '0 0 20px rgba(139, 92, 246, 0.7)',
                          '0 0 10px rgba(139, 92, 246, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* TV Scanlines Effect */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-scanlines opacity-5" />

              {/* Video Player */}
              <div className="relative aspect-video">
                <video
                  src={videoUrl}
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              </div>
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 mt-6 border rounded-lg bg-gray-800/50 backdrop-blur-sm border-purple-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm text-purple-400 border rounded-full bg-purple-600/20 border-purple-500/20"
                  >
                    Exclusive Content
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm text-pink-400 border rounded-full bg-pink-600/20 border-pink-500/20"
                  >
                    Limited Edition
                  </motion.span>
                </div>
                <motion.span
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-2 font-bold text-green-400"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-500/50" />
                  Live
                </motion.span>
              </div>
              <p className="text-gray-300">
                Witness the defining moment that etched this performance into sports history.
                This exclusive footage captures the raw emotion and extraordinary skill that made
                this moment legendary.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}