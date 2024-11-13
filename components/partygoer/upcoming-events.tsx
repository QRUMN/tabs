'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Summer Rooftop Party',
    date: 'Tonight',
    time: '10 PM - 4 AM',
    location: 'Skybar NYC',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  },
  {
    id: 2,
    title: 'Underground House Night',
    date: 'Tomorrow',
    time: '11 PM - 5 AM',
    location: 'The Basement',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
  },
];

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="p-4 flex gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            <Button>Get Tickets</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}