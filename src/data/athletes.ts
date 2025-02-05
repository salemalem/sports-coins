export interface AthleteData {
  name: string;
  tagline: string;
  image: string;
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

export const moments: Moment[] = [
  {
    id: 'david-suker-1',
    athlete: 'Davor Šuker',
    play: 'World Cup Golden Boot',
    date: 'Jul 12 1998',
    series: 'World Cup Legends',
    edition: 'Ultimate #1/10',
    rarity: 'LE',
    image: '/images/davor_suker_tall.jpg',
    video: '/videos/davor_suker_edit1.mp4'
  }
];

export const womenFootballAthletes = [
  {
    name: "Megan Rapinoe",
    achievement: "World Cup Champion",
    team: "USWNT",
    potentialRating: 98,
    highlights: "Golden Boot Winner",
    stakingPrice: "5.2 SOL",
    image: "https://images.pexels.com/photos/1461973/pexels-photo-1461973.jpeg"
  },
  {
    name: "Alex Morgan",
    achievement: "Olympic Gold Medalist",
    team: "San Diego Wave FC",
    potentialRating: 96,
    highlights: "100+ International Goals",
    stakingPrice: "4.8 SOL",
    image: "https://images.pexels.com/photos/30378468/pexels-photo-30378468/free-photo-of-casual-female-soccer-player-in-goal-moment.jpeg"
  }
];

export const athletes: Record<string, AthleteData> = {
  "david-suker": {
    name: "Davor Šuker",
    tagline: "Croatian Football Legend",
    image: "/images/davor_suker_tall.jpg",
    potentialRating: 99,
    investmentMetrics: {
      growthRate: "+38%",
      supporterCount: "15.2K",
      averageROI: "42%",
      stakingPrice: "8.5 SOL"
    },
    statistics: {
      matchesPlayed: 69,
      goalsScored: 45,
      assists: 20,
      winRate: 75,
      careerDuration: "1992 - 2003"
    },
    highlights: [
      {
        title: "World Cup Golden Boot",
        description: "Top scorer at 1998 FIFA World Cup",
        achievement: "6 Goals",
        date: "1998"
      },
      {
        title: "Champions League Victory",
        description: "Real Madrid triumph",
        achievement: "Winner",
        date: "1998"
      },
      {
        title: "European Golden Boot",
        description: "Top scorer in European leagues",
        achievement: "Winner",
        date: "1997"
      }
    ],
    social: {
      instagram: "850K",
      twitter: "1.2M",
      tiktok: "500K"
    },
    coachQuote: {
      text: "One of the most natural finishers the game has ever seen. His ability to find the back of the net was simply extraordinary.",
      author: "Miroslav Blažević, Croatia National Team Coach"
    }
  }
} as const;