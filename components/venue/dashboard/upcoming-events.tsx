'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Music } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Summer House Night',
    date: 'Tonight',
    time: '10 PM - 4 AM',
    dj: 'DJ Shadow',
    capacity: '300',
    genre: 'House',
    status: 'confirmed'
  },
  {
    id: 2,
    name: 'Tech House Party',
    date: 'Tomorrow',
    time: '11 PM - 5 AM',
    dj: 'DJ Pulse',
    capacity: '300',
    genre: 'Tech House',
    status: 'pending'
  }
];

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Upcoming Events</h3>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between md:justify-start gap-4">
                  <h4 className="text-lg font-semibold">{event.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    event.status === 'confirmed' 
                      ? 'bg-green-500/10 text-green-500' 
                      : 'bg-yellow-500/10 text-yellow-500'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    {event.dj}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Capacity: {event.capacity}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Edit</Button>
                <Button>View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}