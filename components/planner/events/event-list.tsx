'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, MoreVertical } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Corporate Summer Gala',
    date: 'Aug 15, 2024',
    time: '6:00 PM - 11:00 PM',
    venue: 'Grand Plaza Hotel',
    status: 'planning',
    attendees: 250,
    budget: '$45,000'
  },
  {
    id: 2,
    title: 'Tech Conference 2024',
    date: 'Sep 20, 2024',
    time: '9:00 AM - 6:00 PM',
    venue: 'Innovation Center',
    status: 'confirmed',
    attendees: 500,
    budget: '$75,000'
  }
];

export function EventList() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.venue}
                    </div>
                  </div>
                </div>
                <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                  {event.status}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{event.attendees} Attendees</span>
                </div>
                <div>
                  <span className="font-semibold">Budget: {event.budget}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button>View Details</Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}