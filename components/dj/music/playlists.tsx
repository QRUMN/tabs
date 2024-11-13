'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Play, Clock, Music, Share2, MoreVertical } from 'lucide-react';

const playlists = [
  {
    id: 1,
    name: 'Summer House Mix',
    tracks: 24,
    duration: '2h 45m',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    lastPlayed: '2 days ago'
  },
  {
    id: 2,
    name: 'Deep Tech Set',
    tracks: 18,
    duration: '2h 10m',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
    lastPlayed: '1 week ago'
  },
  {
    id: 3,
    name: 'Warm-up Grooves',
    tracks: 15,
    duration: '1h 30m',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    lastPlayed: '3 days ago'
  }
];

export function Playlists() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playlists.map((playlist) => (
        <Card key={playlist.id} className="overflow-hidden group">
          <div className="aspect-square relative">
            <img
              src={playlist.image}
              alt={playlist.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button size="icon" className="h-12 w-12 rounded-full">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{playlist.name}</h3>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Music className="h-4 w-4" />
                {playlist.tracks} tracks
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {playlist.duration}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Last played: {playlist.lastPlayed}
              </span>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}