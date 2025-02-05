'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { moments } from '@/data/athletes';

export default function MomentRedirect({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  useEffect(() => {
    const moment = moments.find(m => m.id === params.id);
    if (moment) {
      // Extract athlete ID from moment ID (e.g., 'davor-suker-1' -> 'davor-suker')
      const athleteId = moment.id.split('-').slice(0, -1).join('-');
      router.replace(`/athlete/${athleteId}`);
    }
  }, [params.id, router]);

  return null;
}