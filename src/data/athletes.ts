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
  futurePlans: {
    nextEvent: string;
    daysRemaining: number;
    goal: string;
  };
  coachQuote: {
    text: string;
    author: string;
  };
  contracts: Array<{
    brand: string;
    period: string;
    type: string;
  }>;
  social: {
    instagram: string;
    twitter: string;
    tiktok: string;
  };
}

export const athletes: Record<string, Athlete> = {
  "marcus-johnson": {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    image: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg",
    tagline: "Rising Star of Basketball",
    potentialRating: 92,
    investmentMetrics: {
      growthRate: "+45%",
      supporterCount: "8.2K",
      averageROI: "28%",
      stakingPrice: "4.2 SOL"
    },
    statistics: {
      matchesPlayed: 82,
      goalsScored: 0,
      assists: 156,
      winRate: 65,
      careerDuration: "2 Years (2022 - Present)"
    },
    highlights: [
      {
        title: "Rookie of the Month",
        description: "Named Eastern Conference Rookie of the Month",
        achievement: "20.5 PPG Average",
        date: "2024"
      },
      {
        title: "Career High Night",
        description: "Scored 35 points against defending champions",
        achievement: "35 PTS, 8 AST",
        date: "2024"
      }
    ],
    futurePlans: {
      nextEvent: "All-Star Weekend Rising Stars Game",
      daysRemaining: 45,
      goal: "Make the All-Star team"
    },
    coachQuote: {
      text: "Marcus has that rare combination of natural talent and incredible work ethic. He's going to be a superstar.",
      author: "Coach Mike Williams"
    },
    contracts: [
      { brand: "Nike", period: "2023-2026", type: "Shoe Deal" },
      { brand: "Thunder", period: "2022-2026", type: "Rookie Contract" }
    ],
    social: {
      instagram: "1.2M",
      twitter: "850K",
      tiktok: "2.1M"
    }
  },
  "sarah-williams": {
    id: "sarah-williams",
    name: "Sarah Williams",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
    tagline: "The Future of Women's Football",
    potentialRating: 95,
    investmentMetrics: {
      growthRate: "+32%",
      supporterCount: "10.1K",
      averageROI: "25%",
      stakingPrice: "3.8 SOL"
    },
    statistics: {
      matchesPlayed: 45,
      goalsScored: 28,
      assists: 15,
      winRate: 72,
      careerDuration: "3 Years (2021 - Present)"
    },
    highlights: [
      {
        title: "League Top Scorer",
        description: "Led the league in scoring with 28 goals",
        achievement: "Golden Boot Winner",
        date: "2023"
      },
      {
        title: "National Team Debut",
        description: "Scored in first international appearance",
        achievement: "2 Goals, 1 Assist",
        date: "2024"
      }
    ],
    futurePlans: {
      nextEvent: "Women's Champions League Quarter-Final",
      daysRemaining: 30,
      goal: "Win the Champions League"
    },
    coachQuote: {
      text: "Sarah's technical ability and vision for the game are exceptional. She's redefining what's possible in women's football.",
      author: "Coach Emma Martinez"
    },
    contracts: [
      { brand: "Adidas", period: "2022-2025", type: "Equipment Sponsor" },
      { brand: "Portland Thorns", period: "2021-2024", type: "Pro Contract" }
    ],
    social: {
      instagram: "2.5M",
      twitter: "1.8M",
      tiktok: "3.2M"
    }
  }
};

export const featuredAthletes = [
  {
    moments: [
      {
        id: 'marcus-johnson-1',
        title: "First Pro Game",
        athlete: "Marcus Johnson",
        description: "Rookie Debut Highlight",
        sport: "Basketball",
        team: "Oklahoma City Thunder",
        date: "2024",
        rarity: "Grail",
        editionSize: 75,
        preview: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg",
        ownershipStake: 5,
        careerMilestones: ["Rookie of the Month", "20+ Point Games: 5"],
        potentialRating: 92,
        growth: "+45%"
      },
      {
        id: 'sarah-williams-1',
        title: "Breakthrough Performance",
        athlete: "Sarah Williams",
        description: "Championship Game Winner",
        sport: "Football",
        team: "Portland Thorns",
        date: "2024",
        rarity: "Legendary",
        editionSize: 100,
        preview: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg",
        ownershipStake: 3,
        careerMilestones: ["League Top Scorer", "National Team Call-up"],
        potentialRating: 95,
        growth: "+32%"
      }
    ]
  }
];

export const womenFootballAthletes = [
  {
    name: "Maria Santos",
    achievement: "Rising Star",
    team: "Portland Thorns",
    potentialRating: 94,
    highlights: "12 Goals in Rookie Season",
    stakingPrice: "2.5 SOL",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg"
  },
  {
    name: "Sarah Chen",
    achievement: "National Team Captain",
    team: "Chelsea FC",
    potentialRating: 96,
    highlights: "Golden Boot Winner",
    stakingPrice: "5 SOL",
    image: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg"
  }
];