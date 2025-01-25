'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { type Moment } from '@/data/athletes';

interface MomentCardProps {
  moment: Moment;
  index: number;
  hoveredCard: string | null;
  hoverDuration: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MomentCard({
  moment,
  index,
  hoveredCard,
  hoverDuration,
  onMouseEnter,
  onMouseLeave
}: MomentCardProps) {
  return (
    <Link href={`/moment/${moment.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative aspect-[2/3] group cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Card Container with Glitch Effect */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {/* Base Image */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700
              ${hoveredCard === moment.id && hoverDuration >= 2000 ? 'scale-110' : 'scale-100'}
              before:absolute before:inset-0 before:bg-gradient-to-b before:from-purple-900/20 before:to-black/80
            `}
            style={{ backgroundImage: `url(${moment.image})` }}
          />

          {/* Glitch Layers */}
          <GlitchLayers image={moment.image} />

          {/* Content */}
          <CardContent moment={moment} />

          {/* View Details Button */}
          <ViewDetailsButton 
            isVisible={hoveredCard === moment.id && hoverDuration >= 2000} 
          />
        </div>
      </motion.div>
    </Link>
  );
}

function GlitchLayers({ image }: { image: string }) {
  return (
    <>
      <div className="absolute inset-0 mix-blend-screen opacity-50">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-glitch-1"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center animate-glitch-2"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* Retro Scanlines */}
      <div className="absolute inset-0 bg-scanlines opacity-20" />

      {/* Border Glitch Effect */}
      <div className="absolute inset-0 border-2 border-purple-500/50 animate-border-glitch" />
    </>
  );
}

function CardContent({ moment }: { moment: Moment }) {
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-purple-400 font-mono text-sm">{moment.rarity}</span>
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-green-400 font-mono text-sm">{moment.edition}</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white font-mono tracking-wider animate-text-glitch">
          {moment.athlete}
        </h3>
        <p className="text-purple-300 font-mono text-sm">
          {moment.play} - {moment.date}
        </p>
        <p className="text-gray-400 font-mono text-xs">
          {moment.series}
        </p>
      </div>
    </div>
  );
}

function ViewDetailsButton({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-mono text-sm transition-colors">
            View Moment
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}