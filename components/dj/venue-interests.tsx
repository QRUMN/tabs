'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Music, Users, Heart } from 'lucide-react';

const venues = [
  {
    id: 1,
    name: 'Skybar NYC',
    type: 'Rooftop Lounge',
    location: 'Manhattan, NY',
    capacity: 300,
    rating: 4.8,
    genres: ['House', 'Deep House'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  {
    id: 2,
    name: 'The Underground',
    type: 'Nightclub',
    location: 'Brooklyn, NY',
    capacity: 500,
    rating: 4.9,
    genres: ['Techno', 'Progressive'],
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1'
  }
];

export function VenueInterests() {
  return (
    <div className="grid gap-4">
      {venues.map((venue) => (
        <Card key={venue.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-48 h-48 md:h-auto relative">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 text-white hover:text-primary"
              >
                <Heart className="h-5 w-5 fill-current" />
              </Button>
            </div>
            <div className="flex-1 p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{venue.name}</h3>
                    <Badge variant="secondary">{venue.type}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {venue.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {venue.capacity}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {venue.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-2">
                      {venue.genres.map((genre) => (
                        <Badge key={genre} variant="outline">{genre}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
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