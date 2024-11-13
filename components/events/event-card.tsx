'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  venue: string;
  image: string;
  date: string;
  time: string;
}

export function EventCard({ title, venue, image, date, time }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="flex gap-6 p-4">
        <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="space-y-1 text-sm text-muted-foreground flex-1">
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {date}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {time}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {venue}
            </p>
          </div>
          <div className="mt-4">
            <Button>Get Tickets</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}