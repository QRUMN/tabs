'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Play, Pause, Clock, Music, MoreVertical, Search, Filter } from 'lucide-react';

const tracks = [
  {
    id: 1,
    title: 'Summer Vibes',
    artist: 'DJ Shadow',
    genre: 'House',
    duration: '6:45',
    bpm: 128,
    key: 'Am',
    lastPlayed: '2 days ago',
    plays: 42
  },
  {
    id: 2,
    title: 'Deep Journey',
    artist: 'DJ Shadow',
    genre: 'Deep House',
    duration: '7:30',
    bpm: 124,
    key: 'Fm',
    lastPlayed: '1 week ago',
    plays: 28
  }
];

export function MusicLibrary() {
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tracks..." className="pl-9" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-2">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 group"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsPlaying(isPlaying === track.id ? null : track.id)}
              >
                {isPlaying === track.id ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium truncate">{track.title}</h4>
                  <Badge variant="secondary">{track.genre}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {track.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Music className="h-3 w-3" />
                    {track.bpm} BPM
                  </div>
                  <span>Key: {track.key}</span>
                  <span>Plays: {track.plays}</span>
                  <span>Last played: {track.lastPlayed}</span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
                  <DropdownMenuItem>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem>Download</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete Track
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}