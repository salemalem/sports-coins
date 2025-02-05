'use client';

const VideoBackground = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-basketball-player-dribbling-2285-large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-black/80" />
    </>
  );
};

export default VideoBackground;