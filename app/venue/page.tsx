'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VenueRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/venue/dashboard');
  }, [router]);

  return null;
}