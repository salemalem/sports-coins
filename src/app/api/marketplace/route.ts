import { NextResponse } from 'next/server';
import marketplace from '@/data/marketplace.json';

export async function GET() {
  return NextResponse.json(marketplace);
}