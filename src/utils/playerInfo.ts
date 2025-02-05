export interface PlayerInfo {
  name: string;
  position: string;
  birthDate: string;
  birthPlace: string;
  height: string;
  weight: string;
  age: string;
  careerStart: string;
  achievements: string[];
}

let playerData: any = null;

async function fetchPlayerData() {
  if (!playerData) {
    try {
      const response = await fetch('/api/player-info');
      const data = await response.json();
      playerData = data.players;
    } catch (error) {
      console.error('Error fetching player data:', error);
      return null;
    }
  }
  return playerData;
}

export async function getPlayerPosition(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.position || 'Unknown';
}

export async function getPlayerBirthDate(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.birthDate || 'Unknown';
}

export async function getPlayerBirthPlace(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.birthPlace || 'Unknown';
}

export async function getPlayerHeight(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.height || 'Unknown';
}

export async function getPlayerWeight(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.weight || 'Unknown';
}

export async function getPlayerAge(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  if (!data?.[athlete]?.birthYear) return 'Unknown';
  
  const currentYear = new Date().getFullYear();
  return `${currentYear - data[athlete].birthYear}`;
}

export async function getPlayerCareerStart(athlete: string): Promise<string> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.careerStart || 'Unknown';
}

export async function getPlayerAchievements(athlete: string): Promise<string[]> {
  const data = await fetchPlayerData();
  return data?.[athlete]?.achievements || ['Unknown'];
}

export async function getPlayerInfo(athlete: string): Promise<PlayerInfo> {
  return {
    name: athlete,
    position: await getPlayerPosition(athlete),
    birthDate: await getPlayerBirthDate(athlete),
    birthPlace: await getPlayerBirthPlace(athlete),
    height: await getPlayerHeight(athlete),
    weight: await getPlayerWeight(athlete),
    age: await getPlayerAge(athlete),
    careerStart: await getPlayerCareerStart(athlete),
    achievements: await getPlayerAchievements(athlete)
  };
}