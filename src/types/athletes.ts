export interface AthleteData {
  name: string;
  tagline: string;
  image: string;
  backgroundImage: string;
  type: 'future_legend' | 'legend' | 'rising_star';
  potentialRating: number;
  investmentMetrics: {
    growthRate: string;
    supporterCount: string;
    averageROI: string;
    stakingPrice: string;
  };
  statistics: {
    matchesPlayed: number;
    goalsScored: number;
    assists: number;
    winRate: number;
    careerDuration: string;
  };
  highlights: Array<{
    title: string;
    description: string;
    achievement: string;
    date: string;
  }>;
  social: {
    instagram: string;
    twitter: string;
    tiktok: string;
  };
  coachQuote: {
    text: string;
    author: string;
  };
  videos: {
    main: string;
    highlights: string[];
  };
}

export interface Moment {
  id: string;
  athlete: string;
  play: string;
  date: string;
  series: string;
  edition: string;
  rarity: string;
  image: string;
  video: string;
}