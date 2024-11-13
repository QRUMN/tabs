'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Clock, Music, MoreVertical, Upload } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const tracks = [
  {
    id: 1,
    title: 'Summer Vibes',
    genre: 'House',
    duration: '6:45',
    bpm: 128,
    key: 'Am'
  },
  {
    id: 2,
    title: 'Deep Journey',
    genre: 'Deep House',
    duration: '7:30',
    bpm: 124,
    key: 'Fm'
  }
];

export function MusicLibrary() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Your Tracks</h3>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Track
        </Button>
      </div>

      <ScrollArea className="h-[400px] pr-4">
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
              >
                <Play className="h-4 w-4" />
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
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}