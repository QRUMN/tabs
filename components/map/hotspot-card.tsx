'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  venue: string;
  artist?: string;
  status: string;
  attendees: number;
  friends: string[];
  distance: string;
  time?: string;
}

interface HotspotCardProps {
  events: Event[];
  onClose?: () => void;
}

export function HotspotCard({ events = [], onClose }: HotspotCardProps) {
  if (!events || events.length === 0) return null;

  return (
    <Card className="bg-background/95 backdrop-blur-sm border border-border/30 overflow-hidden">
      <div className="divide-y divide-border/5">
        {events.map((event) => (
          <div key={event.id} className="p-4 hover:bg-accent/5 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium tracking-tight">{event.name}</h3>
                  {event.status === 'live' && (
                    <div className="px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-[#D6FFB7]/10 text-[#D6FFB7] ring-1 ring-[#D6FFB7]/20">
                      Live Now
                    </div>
                  )}
                  {event.status === 'food' && (
                    <div className="px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
                      Food Spot
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{event.venue}</p>
                {event.time && (
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{event.time}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {event.friends.slice(0, 5).map((friend, i) => (
                    <img
                      key={i}
                      src={friend}
                      alt=""
                      className="w-6 h-6 rounded border-2 border-background object-cover"
                    />
                  ))}
                  {event.friends.length > 5 && (
                    <div className="w-6 h-6 rounded bg-primary/10 border-2 border-background flex items-center justify-center text-xs text-primary">
                      +{event.friends.length - 5}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{event.distance}mi</span>
                <Button size="sm" variant="secondary">Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}