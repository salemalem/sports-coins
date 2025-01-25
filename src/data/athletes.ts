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
    id: '1',
    athlete: 'ALLYSON FELIX',
    play: 'Olympic Gold Sprint',
    date: 'Aug 15 2023',
    series: 'Track Legends (Series 2024-25)',
    edition: 'Ultimate #/10',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-running-through-ancient-ruins-32807-large.mp4'
  },
  {
    id: '2',
    athlete: 'MEGAN RAPINOE',
    play: 'World Cup Final Goal',
    date: 'Jul 20 2023',
    series: 'Soccer Icons (Series 2024-25)',
    edition: 'Ultimate #/10',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/1461973/pexels-photo-1461973.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-soccer-player-dribbling-a-ball-40677-large.mp4'
  },
  {
    id: '3',
    athlete: 'SERENA WILLIAMS',
    play: 'Grand Slam Victory',
    date: 'Sep 09 2023',
    series: 'Tennis Legends (Series 2024-25)',
    edition: 'Rare #/199',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-tennis-player-returning-a-ball-49988-large.mp4'
  },
  {
    id: '4',
    athlete: 'BREANNA STEWART',
    play: 'Championship Goal',
    date: 'Oct 15 2023',
    series: 'Soccer Elite (Series 2024-25)',
    edition: 'Rare #/199',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/30378468/pexels-photo-30378468/free-photo-of-casual-female-soccer-player-in-goal-moment.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-soccer-player-dribbling-a-ball-40677-large.mp4'
  },
  {
    id: '5',
    athlete: 'KATIE LEDECKY',
    play: 'World Record Swim',
    date: 'Jun 30 2023',
    series: 'Aquatics Stars (Series 2024-25)',
    edition: 'Rare #/199',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-swimming-in-a-pool-1170-large.mp4'
  },
  {
    id: '6',
    athlete: 'SIMONE BILES',
    play: 'Perfect 10 Routine',
    date: 'Nov 12 2023',
    series: 'Gymnastics Icons (Series 2024-25)',
    edition: 'Rare #/199',
    rarity: 'LE',
    image: 'https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-gymnast-doing-a-complicated-routine-on-a-mat-40159-large.mp4'
  }
];

export interface Athlete {
  id: string;
  name: string;
  image: string;
  tagline: string;
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

export const athletes: Record<string, Athlete> = {
  "allyson-felix": {
    id: "allyson-felix",
    name: "Allyson Felix",
    image: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg",
    tagline: "Olympic Legend",
    potentialRating: 98,
    investmentMetrics: {
      growthRate: "+45%",
      supporterCount: "12.5K",
      averageROI: "32%",
      stakingPrice: "5.2 SOL"
    },
    statistics: {
      matchesPlayed: 24,
      goalsScored: 0,
      assists: 0,
      winRate: 92,
      careerDuration: "2004 - Present"
    },
    highlights: [
      {
        title: "Olympic Gold",
        description: "400m Sprint Victory",
        achievement: "Olympic Record",
        date: "2023"
      }
    ],
    social: {
      instagram: "2.1M",
      twitter: "1.8M",
      tiktok: "900K"
    },
    coachQuote: {
      text: "Allyson's dedication and work ethic are unmatched in track and field.",
      author: "Coach Bob Kersee"
    }
  }
};

export const featuredAthletes = [
  {
    moments: [
      {
        id: 'allyson-1',
        title: "Olympic Sprint Final",
        athlete: "Allyson Felix",
        description: "Gold Medal Performance",
        sport: "Track & Field",
        team: "Team USA",
        date: "2023",
        rarity: "Legendary",
        editionSize: 50,
        preview: "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg",
        ownershipStake: 5,
        careerMilestones: ["Olympic Gold", "World Record"],
        potentialRating: 98,
        growth: "+45%"
      },
      {
        id: 'megan-1',
        title: "World Cup Goal",
        athlete: "Megan Rapinoe",
        description: "Championship Winning Goal",
        sport: "Soccer",
        team: "USWNT",
        date: "2023",
        rarity: "Legendary",
        editionSize: 75,
        preview: "https://images.pexels.com/photos/1461973/pexels-photo-1461973.jpeg",
        ownershipStake: 3,
        careerMilestones: ["World Cup Winner", "Golden Boot"],
        potentialRating: 96,
        growth: "+38%"
      }
    ]
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
  },
  {
    name: "Sam Kerr",
    achievement: "Golden Boot Winner",
    team: "Chelsea FC",
    potentialRating: 97,
    highlights: "Record Breaking Season",
    stakingPrice: "4.5 SOL",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg"
  },
  {
    name: "Wendie Renard",
    achievement: "Champions League Winner",
    team: "Olympique Lyonnais",
    potentialRating: 95,
    highlights: "8x Champions League Titles",
    stakingPrice: "4.2 SOL",
    image: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg"
  }
];