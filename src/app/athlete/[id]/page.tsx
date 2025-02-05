'use client';

import { athletes } from '@/data/athletes';
import { notFound } from 'next/navigation';
import VideoCard from '@/components/athlete/VideoCard';
import HeroSection from '@/components/athlete/HeroSection';
import StatsBar from '@/components/athlete/StatsBar';
import CareerStats from '@/components/athlete/CareerStats';
import CareerHighlights from '@/components/athlete/CareerHighlights';
import LegendRating from '@/components/athlete/LegendRating';
import SocialReach from '@/components/athlete/SocialReach';
import CoachQuote from '@/components/athlete/CoachQuote';
import WideVideo from '@/components/athlete/WideVideo';

export default function AthleteProfile({ params }: { params: { id: string } }) {
  const athleteInfo = athletes[params.id as keyof typeof athletes];

  if (!athleteInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection 
        name={athleteInfo.name}
        tagline={athleteInfo.tagline}
        backgroundImage={athleteInfo.backgroundImage}
      />

      <StatsBar metrics={athleteInfo.investmentMetrics} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <VideoCard athleteInfo={athleteInfo} />
          </div>

          <div className="md:col-span-2 space-y-8">
            <CareerStats statistics={athleteInfo.statistics} />
            <CareerHighlights highlights={athleteInfo.highlights} />
            <LegendRating 
              rating={athleteInfo.potentialRating}
              supporterCount={athleteInfo.investmentMetrics.supporterCount}
              athleteName={athleteInfo.name}
            />
            <SocialReach social={athleteInfo.social} />
            <CoachQuote quote={athleteInfo.coachQuote} />
          </div>
        </div>
      </div>

      <WideVideo videoUrl={athleteInfo.videos.main} />
    </div>
  );
}