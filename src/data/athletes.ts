import { AthleteData, Moment } from '@/types/athletes';
import athletesData from './athletes.json';

export const athletes: Record<string, AthleteData> = athletesData.athletes;
export const moments: Moment[] = athletesData.moments;
export const womenFootballAthletes = athletesData.womenFootballAthletes;