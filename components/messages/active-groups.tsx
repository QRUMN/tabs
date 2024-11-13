'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Users, Music2 } from 'lucide-react';

const activeGroups = [
  {
    id: 'g1',
    name: 'Summer Rooftop Squad',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    activity: 'Live: DJ Shadow',
    onlineCount: 24,
    members: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    ],
  },
  {
    id: 'g2',
    name: 'House Music Collective',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
    activity: 'Planning: Weekend Party',
    onlineCount: 15,
    members: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
    ],
  },
  {
    id: 'g3',
    name: 'Late Night Crew',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    activity: 'Active: 3 new messages',
    onlineCount: 8,
    members: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    ],
  },
];

export function ActiveGroups() {
  return (
    <ScrollArea className="w-full py-4 border-b">
      <div className="flex gap-4 px-4">
        {activeGroups.map((group) => (
          <Card
            key={group.id}
            className="flex-shrink-0 w-[280px] p-4 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                <div className="absolute bottom-1 right-1">
                  <Music2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{group.name}</h4>
                <p className="text-sm text-muted-foreground truncate">
                  {group.activity}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {group.members.map((member, i) => (
                      <Avatar key={i} className="w-6 h-6 border-2 border-background">
                        <AvatarImage src={member} />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="w-3 h-3 mr-1" />
                    {group.onlineCount} online
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}