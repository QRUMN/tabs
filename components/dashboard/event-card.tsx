'use client';

import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  time: string;
  venue: string;
  attendees: number;
  date?: string;
}

export function EventCard({ title, time, venue, attendees, date }: EventCardProps) {
  return (
    <div className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="space-y-1 text-sm text-muted-foreground">
        {date && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{venue}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{attendees} attending</span>
        </div>
      </div>
    </div>
  );
}