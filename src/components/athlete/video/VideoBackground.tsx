'use client';

import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  image: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isVideoLoaded: boolean;
}

export default function VideoBackground({ image, videoRef, isVideoLoaded }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <motion.img
        src={image}
        alt="Background"
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
  );
}