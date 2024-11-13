'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, DollarSign, Clock } from 'lucide-react';

interface Gig {
  id: number;
  event: string;
  venue: string;
  date: string;
  time: string;
  capacity: number;
  payment: string;
  status: string;
  image: string;
}

interface UpcomingGigsProps {
  gigs: Gig[];
}

export function UpcomingGigs({ gigs }: UpcomingGigsProps) {
  return (
    <div className="space-y-4">
      {gigs.map((gig) => (
        <Card key={gig.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
              <img 
                src={gig.image} 
                alt={gig.event}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{gig.event}</h3>
                  <Badge>{gig.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{gig.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{gig.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{gig.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Capacity: {gig.capacity}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">{gig.payment}</span>
                </div>
                <div className="space-x-2">
                  <Button variant="outline">View Details</Button>
                  <Button>Contact Venue</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}