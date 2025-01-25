'use client';

import { useState, useEffect } from 'react';
import { moments } from '@/data/athletes';
import MomentCard from './moments/MomentCard';

export default function MomentsGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoverStartTime, setHoverStartTime] = useState<number | null>(null);
  const [hoverDuration, setHoverDuration] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (hoveredCard && hoverStartTime) {
      interval = setInterval(() => {
        const newDuration = Date.now() - hoverStartTime;
        setHoverDuration(newDuration);
      }, 100);
    } else {
      setHoverDuration(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hoveredCard, hoverStartTime]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {moments.map((moment, index) => (
        <MomentCard
          key={moment.id}
          moment={moment}
          index={index}
          hoveredCard={hoveredCard}
          hoverDuration={hoverDuration}
          onMouseEnter={() => {
            setHoveredCard(moment.id);
            setHoverStartTime(Date.now());
          }}
          onMouseLeave={() => {
            setHoveredCard(null);
            setHoverStartTime(null);
          }}
        />
      ))}
    </div>
  );
}