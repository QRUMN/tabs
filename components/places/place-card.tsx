'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  type: string;
  rating: number;
  image: string;
}

export function PlaceCard({ name, type, rating, image }: PlaceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="h-32 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm opacity-90">{type}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <Button size="sm" variant="outline">
          <MapPin className="w-4 h-4 mr-2" />
          Directions
        </Button>
      </div>
    </Card>
  );
}