'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Star, Search } from 'lucide-react';

const fans = [
  {
    id: 1,
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    status: 'superfan',
    eventsAttended: 12,
    lastSeen: '2 hours ago',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    status: 'regular',
    eventsAttended: 8,
    lastSeen: '1 day ago',
    location: 'Brooklyn, NY'
  },
  {
    id: 3,
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    status: 'new',
    eventsAttended: 1,
    lastSeen: '1 week ago',
    location: 'Queens, NY'
  }
];

export function FanList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search fans..." className="pl-9" />
        </div>
        <Button>Export List</Button>
      </div>

      <ScrollArea className="h-[600px]">
        <div className="space-y-4">
          {fans.map((fan) => (
            <Card key={fan.id} className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={fan.avatar} alt={fan.name} />
                  <AvatarFallback>{fan.name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold truncate">{fan.name}</h3>
                    <Badge variant={fan.status === 'superfan' ? 'default' : 'secondary'}>
                      {fan.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{fan.location} • {fan.eventsAttended} events attended</p>
                    <p>Last seen: {fan.lastSeen}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}