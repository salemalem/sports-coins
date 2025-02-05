'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { VideoCardData } from '@/types/video';

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
        console.log('Fetched video data:', athleteData.videoCard);
        setData(athleteData.videoCard);
      } catch (error) {
        console.error('Error fetching video card data:', error);
        alert('Error fetching video data');
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

    console.log('Video element or data not ready:', { video: !!video, dataVideo: videoSrc });

    if (!video || !videoSrc) return;

    console.log('Setting up video with source:', videoSrc);
    let isComponentMounted = true;

    const handleCanPlay = () => {
      if (isComponentMounted) {
        console.log('Video can play');
        alert('Video loaded successfully!');
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.error('Video playback error:', error);
          alert('Error playing video: ' + error.message);
        });
      }
    };

    const handleError = (e: Event) => {
      const videoError = (e.target as HTMLVideoElement).error;
      console.error('Video error:', videoError);
      alert('Video error: ' + JSON.stringify(videoError));
      if (isComponentMounted) {
        setError('Unable to load video');
        setIsVideoLoaded(false);
      }
    };

    console.log('Video load started');
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Set the source and load the video
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
      className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Media */}
      <div className="absolute inset-0">
        <motion.img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          playsInline
          loop
          muted
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex justify-between">
          <motion.span
            className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {data.edition.type}
          </motion.span>
          <motion.span
            className="bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {data.edition.number}
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
          <p className="text-gray-300">{data.description}</p>
        </motion.div>
      </div>

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </motion.div>
  );
}