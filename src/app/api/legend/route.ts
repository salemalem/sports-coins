import { NextResponse } from 'next/server';
import { athletes } from '@/data/athletes';

export async function GET() {
  const athleteId = "davor-suker";
  const athlete = athletes[athleteId];

  if (!athlete) {
    return new NextResponse('Legend not found', { status: 404 });
  }

  return NextResponse.json({
    legend: {
      id: athleteId,
      name: athlete.name,
      title: athlete.highlights[0].title,
      image: "/images/davor_suker_wide.jpg",
      edition: "Legendary Edition"
    }
  });
}