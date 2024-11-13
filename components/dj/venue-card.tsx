'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Music2, MapPin, Bookmark, Send } from 'lucide-react';

interface VenueCardProps {
  name: string;
  type: string;
  image: string;
  capacity: number;
  rating: number;
  location: string;
  genres: string[];
  status: string;
}

export function VenueCard({
  name,
  type,
  image,
  capacity,
  rating,
  location,
  genres,
  status
}: VenueCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground mb-2">
            {status}
          </Badge>
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-white/90 text-sm">{type}</p>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{capacity}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Music2 className="h-4 w-4" />
            <div className="flex flex-wrap gap-1">
              {genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="text-xs">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Submit Demo
          </Button>
          <Button variant="outline" className="flex-1">View Details</Button>
        </div>
      </div>
    </Card>
  );
}