'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin } from 'lucide-react';

const pastEvents = [
  {
    id: 1,
    name: 'Summer Rooftop Party',
    venue: 'Skybar NYC',
    date: 'Aug 15, 2023',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    attendees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    ],
  },
  {
    id: 2,
    name: 'Underground House Night',
    venue: 'The Basement',
    date: 'Aug 10, 2023',
    image: 'https://images.unsplash.com/photo-1574434311536-61aab7b3e1c4',
    attendees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    ],
  },
];

export function PastEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pastEvents.map((event) => (
        <Card key={event.id}>
          <CardContent className="p-0">
            <div className="aspect-video relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{event.name}</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {event.venue}
                </p>
                <p className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex -space-x-2">
                  {event.attendees.map((avatar, i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src={avatar} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">+42 others</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}