'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, MoreVertical, Share2, Edit, Trash2 } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Summer Music Festival',
    date: 'Aug 15, 2024',
    time: '4 PM - 11 PM',
    venue: 'Skybar NYC',
    capacity: 500,
    status: 'planning',
    progress: 65,
  },
  {
    id: 2,
    name: 'Corporate Tech Summit',
    date: 'Sep 20, 2024',
    time: '9 AM - 6 PM',
    venue: 'Grand Plaza Hotel',
    capacity: 300,
    status: 'confirmed',
    progress: 85,
  },
  {
    id: 3,
    name: 'Wedding Reception',
    date: 'Oct 5, 2024',
    time: '6 PM - 12 AM',
    venue: 'Rose Garden Venue',
    capacity: 200,
    status: 'planning',
    progress: 45,
  },
];

export function EventOverview() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id} className="p-6">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <Badge variant={
                  event.status === 'confirmed' ? 'default' : 
                  event.status === 'planning' ? 'secondary' : 
                  'outline'
                }>
                  {event.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
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
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Capacity: {event.capacity}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: `${event.progress}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {event.progress}%
                </span>
              </div>
            </div>

            <div className="flex gap-2 lg:flex-col lg:justify-between">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}