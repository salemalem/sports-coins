// Player information utility functions
export function getPlayerPosition(athlete: string): string {
  const positions: { [key: string]: string } = {
    'ALLYSON FELIX': 'Sprinter',
    'MEGAN RAPINOE': 'Forward',
    'SERENA WILLIAMS': 'Tennis Player',
    'BREANNA STEWART': 'Forward',
    'KATIE LEDECKY': 'Swimmer',
    'SIMONE BILES': 'Artistic Gymnast'
  };
  return positions[athlete] || 'Unknown';
}

export function getPlayerBirthDate(athlete: string): string {
  const birthDates: { [key: string]: string } = {
    'ALLYSON FELIX': 'November 18, 1985',
    'MEGAN RAPINOE': 'July 5, 1985',
    'SERENA WILLIAMS': 'September 26, 1981',
    'BREANNA STEWART': 'August 27, 1994',
    'KATIE LEDECKY': 'March 17, 1997',
    'SIMONE BILES': 'March 14, 1997'
  };
  return birthDates[athlete] || 'Unknown';
}

export function getPlayerBirthPlace(athlete: string): string {
  const birthPlaces: { [key: string]: string } = {
    'ALLYSON FELIX': 'Los Angeles, California',
    'MEGAN RAPINOE': 'Redding, California',
    'SERENA WILLIAMS': 'Saginaw, Michigan',
    'BREANNA STEWART': 'Syracuse, New York',
    'KATIE LEDECKY': 'Washington, D.C.',
    'SIMONE BILES': 'Columbus, Ohio'
  };
  return birthPlaces[athlete] || 'Unknown';
}

export function getPlayerHeight(athlete: string): string {
  const heights: { [key: string]: string } = {
    'ALLYSON FELIX': '5\' 6"',
    'MEGAN RAPINOE': '5\' 6"',
    'SERENA WILLIAMS': '5\' 9"',
    'BREANNA STEWART': '6\' 4"',
    'KATIE LEDECKY': '6\' 0"',
    'SIMONE BILES': '4\' 8"'
  };
  return heights[athlete] || 'Unknown';
}

export function getPlayerWeight(athlete: string): string {
  const weights: { [key: string]: string } = {
    'ALLYSON FELIX': '125 lbs',
    'MEGAN RAPINOE': '141 lbs',
    'SERENA WILLIAMS': '155 lbs',
    'BREANNA STEWART': '170 lbs',
    'KATIE LEDECKY': '160 lbs',
    'SIMONE BILES': '104 lbs'
  };
  return weights[athlete] || 'Unknown';
}

export function getPlayerAge(athlete: string): string {
  const birthYears: { [key: string]: number } = {
    'ALLYSON FELIX': 1985,
    'MEGAN RAPINOE': 1985,
    'SERENA WILLIAMS': 1981,
    'BREANNA STEWART': 1994,
    'KATIE LEDECKY': 1997,
    'SIMONE BILES': 1997
  };
  const currentYear = new Date().getFullYear();
  return birthYears[athlete] ? `${currentYear - birthYears[athlete]}` : 'Unknown';
}

export function getPlayerCareerStart(athlete: string): string {
  const careerStarts: { [key: string]: string } = {
    'ALLYSON FELIX': '2003',
    'MEGAN RAPINOE': '2006',
    'SERENA WILLIAMS': '1995',
    'BREANNA STEWART': '2016',
    'KATIE LEDECKY': '2012',
    'SIMONE BILES': '2011'
  };
  return careerStarts[athlete] || 'Unknown';
}

export function getPlayerAchievements(athlete: string): string[] {
  const achievements: { [key: string]: string[] } = {
    'ALLYSON FELIX': [
      '7x Olympic Gold Medalist',
      '13x World Champion',
      'Most decorated U.S. track athlete in history'
    ],
    'MEGAN RAPINOE': [
      '2x FIFA Women\'s World Cup Champion',
      'Olympic Gold Medalist',
      'Ballon d\'Or Féminin Winner 2019'
    ],
    'SERENA WILLIAMS': [
      '23x Grand Slam Singles Titles',
      '14x Grand Slam Doubles Titles',
      '4x Olympic Gold Medalist'
    ],
    'BREANNA STEWART': [
      '2x WNBA Champion',
      '2x WNBA Finals MVP',
      '4x NCAA Champion'
    ],
    'KATIE LEDECKY': [
      '7x Olympic Gold Medalist',
      '19x World Champion',
      'Multiple World Record Holder'
    ],
    'SIMONE BILES': [
      '7x Olympic Medalist',
      '25x World Championship Medalist',
      'Most decorated gymnast in World Championship history'
    ]
  };
  return achievements[athlete] || ['Unknown'];
}

export type PlayerInfo = {
  name: string;
  position: string;
  birthDate: string;
  birthPlace: string;
  height: string;
  weight: string;
  age: string;
  careerStart: string;
  achievements: string[];
};

export function getPlayerInfo(athlete: string): PlayerInfo {
  return {
    name: athlete,
    position: getPlayerPosition(athlete),
    birthDate: getPlayerBirthDate(athlete),
    birthPlace: getPlayerBirthPlace(athlete),
    height: getPlayerHeight(athlete),
    weight: getPlayerWeight(athlete),
    age: getPlayerAge(athlete),
    careerStart: getPlayerCareerStart(athlete),
    achievements: getPlayerAchievements(athlete)
  };
}