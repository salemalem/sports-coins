'use client';

import VideoBackground from './hero/VideoBackground';
import HeroTitle from './hero/HeroTitle';
import ActionButtons from './hero/ActionButtons';
import FeaturedAthletes from './hero/FeaturedAthletes';
import JourneyStats from './hero/JourneyStats';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden pt-24 pb-32">
      <VideoBackground />
      
      <div className="relative z-10 container text-center text-white">
        <HeroTitle />
        <ActionButtons />
        <FeaturedAthletes />
      </div>

      <JourneyStats />
    </section>
  );
};

export default Hero;