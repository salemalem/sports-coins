import { NextResponse } from 'next/server';
import featuredAthletes from '@/data/featured-athletes.json';

export async function GET() {
  return NextResponse.json(featuredAthletes);
}