'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Star } from 'lucide-react';

interface Venue {
  id: number;
  venue: string;
  location: string;
  capacity: number;
  rating: number;
  genre: string;
  image: string;
}

interface VenueInterestsProps {
  venues: Venue[];
}

export function VenueInterests({ venues }: VenueInterestsProps) {
  return (
    <div className="space-y-4">
      {venues.map((venue) => (
        <Card key={venue.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
              <img 
                src={venue.image} 
                alt={venue.venue}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{venue.venue}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>{venue.rating}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{venue.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Capacity: {venue.capacity}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <Badge variant="secondary">{venue.genre}</Badge>
                </div>
              </div>
              <div className="flex items-center justify-end pt-4 border-t">
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