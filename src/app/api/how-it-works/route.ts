import { NextResponse } from 'next/server';
import howItWorks from '@/data/how-it-works.json';

export async function GET() {
  return NextResponse.json(howItWorks);
}