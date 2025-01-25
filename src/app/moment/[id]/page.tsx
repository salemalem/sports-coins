'use client';

import { useState, useEffect } from 'react';
import { moments } from '@/data/athletes';
import { notFound } from 'next/navigation';
import { getPlayerInfo } from '@/utils/playerInfo';

import MomentHero from '@/components/moment/MomentHero';
import MomentDisplay from '@/components/moment/MomentDisplay';
import MomentContext from '@/components/moment/MomentContext';
import MomentMarketData from '@/components/moment/MomentMarketData';
import MomentCTA from '@/components/moment/MomentCTA';
import AthleteProfile from '@/components/moment/AthleteProfile';
import TransactionHistory from '@/components/moment/TransactionHistory';

export default function MomentDetail({ params }: { params: { id: string } }) {
  const [isClient, setIsClient] = useState(false);
  const moment = moments.find(m => m.id === params.id);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!moment) {
    notFound();
  }

  if (!isClient) {
    return null;
  }

  const playerInfo = getPlayerInfo(moment.athlete);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <MomentHero moment={moment} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Moment Display */}
            <MomentDisplay moment={moment} />

            {/* Right Column - Sales Info */}
            <div className="space-y-8">
              <MomentContext moment={moment} />
              <MomentMarketData />
              <MomentCTA />
            </div>
          </div>
        </div>
      </div>

      {/* Player Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Athlete Profile */}
          <div className="lg:col-span-1">
            <AthleteProfile playerInfo={playerInfo} />
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-2">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
}