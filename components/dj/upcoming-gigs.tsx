'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Music, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const upcomingGigs = [
  {
    id: 1,
    event: 'Summer Music Festival',
    venue: 'Rooftop Garden',
    date: 'Aug 15, 2024',
    time: '10 PM - 4 AM',
    capacity: 300,
    genre: 'House',
    payment: '$800',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  {
    id: 2,
    event: 'Underground House Night',
    venue: 'The Basement',
    date: 'Aug 20, 2024',
    time: '11 PM - 5 AM',
    capacity: 200,
    genre: 'Tech House',
    payment: '$600',
    status: 'contract_sent',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1'
  }
];

export function UpcomingGigs() {
  return (
    <div className="space-y-4">
      {upcomingGigs.map((gig) => (
        <Card key={gig.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 h-48 md:h-auto">
              <img
                src={gig.image}
                alt={gig.event}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{gig.event}</h3>
                      <Badge variant={gig.status === 'confirmed' ? 'default' : 'secondary'}>
                        {gig.status === 'confirmed' ? 'Confirmed' : 'Contract Sent'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {gig.venue}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {gig.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {gig.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {gig.capacity} capacity
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Music className="h-3 w-3" />
                      {gig.genre}
                    </Badge>
                    <span className="font-semibold">{gig.payment}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Button>View Details</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Download Contract</DropdownMenuItem>
                      <DropdownMenuItem>Equipment List</DropdownMenuItem>
                      <DropdownMenuItem>Contact Organizer</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Cancel Gig</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}