'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Music, DollarSign, MoreVertical } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Summer Rooftop Party',
    date: 'Aug 15, 2024',
    time: '10 PM - 4 AM',
    dj: 'DJ Shadow',
    genre: 'House',
    capacity: 300,
    ticketsSold: 250,
    revenue: '$12,500',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  {
    id: 2,
    name: 'Underground House Night',
    date: 'Aug 20, 2024',
    time: '11 PM - 5 AM',
    dj: 'DJ Pulse',
    genre: 'Tech House',
    capacity: 300,
    ticketsSold: 180,
    revenue: '$9,000',
    status: 'on-sale',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1'
  }
];

export function EventList() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
              <img 
                src={event.image} 
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                    {event.status === 'confirmed' ? 'Confirmed' : 'On Sale'}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Music className="h-4 w-4" />
                    <span>{event.dj} • {event.genre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.ticketsSold}/{event.capacity}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">{event.revenue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline">Edit</Button>
                  <Button>View Details</Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}