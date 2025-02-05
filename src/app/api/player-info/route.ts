import { NextResponse } from 'next/server';
import playerInfo from '@/data/player-info.json';

export async function GET() {
  return NextResponse.json(playerInfo);
}