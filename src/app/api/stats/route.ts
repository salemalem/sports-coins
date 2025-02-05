import { NextResponse } from 'next/server';
import stats from '@/data/journeystats.json';

export async function GET() {
  return NextResponse.json(stats);
}