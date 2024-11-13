'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';

const places = [
  {
    id: 1,
    name: 'Skybar NYC',
    type: 'Rooftop Bar',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  },
  {
    id: 2,
    name: 'The Basement',
    type: 'Club',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
  },
];

export function SavedPlaces() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Saved Places</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="space-y-4">
        {places.map((place) => (
          <Card key={place.id} className="overflow-hidden">
            <div className="h-32 relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-semibold">{place.name}</h3>
                <p className="text-sm opacity-90">{place.type}</p>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{place.rating}</span>
              </div>
              <Button size="sm" variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Directions
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}