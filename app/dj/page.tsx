'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DjRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dj/dashboard');
  }, [router]);

  return null;
}