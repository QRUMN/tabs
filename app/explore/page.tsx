import React from 'react';
import dynamic from 'next/dynamic';

const EventMap = dynamic(() => import('@/components/map/event-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-4rem)] bg-card animate-pulse flex items-center justify-center">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

export default function ExplorePage() {
  return <EventMap />;
}