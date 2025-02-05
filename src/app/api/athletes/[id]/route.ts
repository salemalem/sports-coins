import { NextResponse } from 'next/server';
import athletes from '@/data/athletes.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const athlete = athletes[params.id as keyof typeof athletes];

  if (!athlete) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(athlete);
}