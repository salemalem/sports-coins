'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { AthleteData } from '@/types/athletes';
import VideoBackground from './video/VideoBackground';
import VideoOverlay from './video/VideoOverlay';
import GlowingBorder from './video/GlowingBorder';

interface VideoCardProps {
  athleteInfo: AthleteData;
}

export default function VideoCard({ athleteInfo }: VideoCardProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = athleteInfo.videos.highlights[0];
    
    if (!video || !videoSrc) return;

    let isComponentMounted = true;

    const handleCanPlay = () => {
      if (isComponentMounted) {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          setError('Error playing video');
        });
      }
    };

    const handleError = () => {
      if (isComponentMounted) {
        setError('Unable to load video');
        setIsVideoLoaded(false);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    video.src = videoSrc;
    video.load();

    return () => {
      isComponentMounted = false;
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.pause();
      video.src = '';
      video.load();
    };
  }, [athleteInfo.videos.highlights]);

  const videoData = {
    image: athleteInfo.image,
    edition: {
      type: "Legendary Edition",
      number: "#1/10"
    },
    title: athleteInfo.highlights[0].title,
    description: athleteInfo.highlights[0].description
  };

  return (
    <motion.div
      className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing effects */}
      <GlowingBorder />

      {/* Video and background */}
      <VideoBackground
        image={videoData.image}
        videoRef={videoRef}
        isVideoLoaded={isVideoLoaded}
      />

      {/* Content overlay */}
      <VideoOverlay
        edition={videoData.edition}
        title={videoData.title}
        description={videoData.description}
      />

      {/* Error display */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </motion.div>
  );
}