'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { VideoCardData } from '@/types/video';
import VideoBackground from './video/VideoBackground';
import VideoOverlay from './video/VideoOverlay';
import GlowingBorder from './video/GlowingBorder';

export default function VideoCard() {
  const params = useParams();
  const [data, setData] = useState<VideoCardData | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/athletes/${params.id}`);
        const athleteData = await response.json();
        setData(athleteData.videoCard);
      } catch (error) {
        setError('Failed to fetch video data');
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = data?.video;
    
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
  }, [data?.video]);

  if (!data) return null;

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
        image={data.image}
        videoRef={videoRef}
        isVideoLoaded={isVideoLoaded}
      />

      {/* Content overlay */}
      <VideoOverlay
        edition={data.edition}
        title={data.title}
        description={data.description}
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