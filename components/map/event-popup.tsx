'use client';

import { Popup } from 'react-map-gl';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users } from 'lucide-react';

interface EventPopupProps {
  event: {
    id: number;
    name: string;
    location: {
      lat: number;
      lng: number;
    };
    status: string;
    attendees: number;
  };
  onClose: () => void;
}

export function EventPopup({ event, onClose }: EventPopupProps) {
  return (
    <Popup
      latitude={event.location.lat}
      longitude={event.location.lng}
      onClose={onClose}
      closeButton={false}
      closeOnClick={false}
      anchor="bottom"
      offset={20}
    >
      <div className="p-3 min-w-[200px]">
        <h3 className="font-semibold mb-2">{event.name}</h3>
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Tonight</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>10 PM - 4 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="w-full">
            Get Tickets
          </Button>
          <Button size="sm" variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Popup>
  );
}