'use client';

import { Marker } from 'react-map-gl';
import { cn } from '@/lib/utils';

interface EventMarkerProps {
  event: {
    id: number;
    location: {
      lat: number;
      lng: number;
    };
    status: string;
    attendees: number;
  };
  onClick: (event: any) => void;
}

export function EventMarker({ event, onClick }: EventMarkerProps) {
  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-[#D6FFB7]';
      case 'upcoming':
        return 'bg-[#D8AD6B]';
      case 'food':
        return 'bg-red-500';
      default:
        return 'bg-[#D8AD6B]';
    }
  };

  return (
    <Marker
      latitude={event.location.lat}
      longitude={event.location.lng}
      anchor="center"
      onClick={onClick}
    >
      <div className="relative cursor-pointer group">
        <div
          className={cn(
            "w-8 h-8 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110",
            getMarkerColor(event.status)
          )}
        />
        {event.status === 'live' && (
          <div className="absolute inset-0 -m-1 rounded-full bg-[#D6FFB7] opacity-30 animate-ping" />
        )}
        <div className="absolute -top-1 -right-1 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-primary-foreground font-medium">
          {event.attendees > 200 ? '200+' : event.attendees}
        </div>
      </div>
    </Marker>
  );
}