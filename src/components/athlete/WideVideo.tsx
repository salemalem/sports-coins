'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeMute, FaVolumeUp, FaHeart } from 'react-icons/fa';

interface WideVideoProps {
  videoUrl: string;
}

export default function WideVideo({ videoUrl }: WideVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    if (!progressBar || !videoRef.current) return;
    
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
              Legendary Moment
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the historic performance that changed everything
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowControls(false)}
              className="relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-purple-500/20 group"
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
              <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none z-10" />
              
              {/* Video Player */}
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-cover"
                  playsInline
                  muted={isMuted}
                  onClick={togglePlay}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                
                {/* Controls Overlay */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      {/* Center Play/Pause Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                 w-20 h-20 bg-purple-600/80 rounded-full flex items-center justify-center
                                 text-white backdrop-blur-sm border border-purple-400/50 shadow-lg shadow-purple-500/30"
                      >
                        {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} />}
                      </motion.button>

                      {/* Top Controls */}
                      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleLike}
                          className={`p-2 rounded-full backdrop-blur-sm ${
                            isLiked ? 'bg-pink-600/80 text-white' : 'bg-black/60 text-gray-400'
                          }`}
                        >
                          <FaHeart size={20} />
                        </motion.button>
                      </div>

                      {/* Bottom Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                        {/* Progress Bar */}
                        <div 
                          ref={progressBarRef}
                          className="relative h-1.5 bg-gray-700/50 rounded-full mb-4 cursor-pointer group"
                          onClick={handleProgressClick}
                        >
                          <motion.div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full
                                     group-hover:shadow-lg group-hover:shadow-purple-500/50"
                            style={{ width: `${progress}%` }}
                          />
                          <div 
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ left: `${progress}%` }}
                          >
                            <div className="w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={togglePlay}
                              className="text-white hover:text-purple-400 transition-colors"
                            >
                              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                            </button>
                            <button
                              onClick={toggleMute}
                              className="text-white hover:text-purple-400 transition-colors"
                            >
                              {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                            </button>
                            <span className="text-white text-sm font-medium">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>
                          <button
                            onClick={toggleFullscreen}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {isFullscreen ? <FaCompress size={20} /> : <FaExpand size={20} />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/20"
                  >
                    Exclusive Content
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm border border-pink-500/20"
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
                  className="text-green-400 font-bold flex items-center gap-2"
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
}