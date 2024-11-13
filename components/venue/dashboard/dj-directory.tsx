'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Music } from 'lucide-react';

const djs = [
  {
    id: 1,
    name: 'DJ Shadow',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    genre: 'House',
    rating: 4.9,
    events: 12,
    status: 'resident'
  },
  {
    id: 2,
    name: 'DJ Pulse',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    genre: 'Tech House',
    rating: 4.8,
    events: 8,
    status: 'guest'
  }
];

export function DJDirectory() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">DJ Directory</h3>
        <Button>Add DJ</Button>
      </div>

      <div className="grid gap-4">
        {djs.map((dj) => (
          <Card key={dj.id} className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src={dj.avatar} alt={dj.name} />
                <AvatarFallback>{dj.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-lg font-semibold">{dj.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    dj.status === 'resident' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {dj.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    {dj.genre}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    {dj.rating}
                  </div>
                  <div>
                    {dj.events} events
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">View Profile</Button>
                <Button>Book</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}