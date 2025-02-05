import { NextResponse } from 'next/server';
import moments from '@/data/moments.json';

export async function GET() {
  return NextResponse.json(moments);
}