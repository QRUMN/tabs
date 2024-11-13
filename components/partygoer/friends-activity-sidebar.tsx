'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const friendsActivity = [
  {
    id: 1,
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    status: 'online',
    activity: 'Going to Summer Rooftop Party',
    time: '2h ago'
  },
  {
    id: 2,
    name: 'Mike',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    status: 'online',
    activity: 'Just bought tickets for Underground House Night',
    time: '4h ago'
  },
  {
    id: 3,
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    status: 'offline',
    activity: 'Added 3 events to their calendar',
    time: '6h ago'
  }
];

export function FriendsActivitySidebar() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Friends Activity</h3>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {friendsActivity.map((friend) => (
            <div key={friend.id} className="flex items-start gap-3">
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <span className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background ${
                  friend.status === 'online' ? 'bg-green-500' : 'bg-muted'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{friend.name}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{friend.activity}</p>
                <p className="text-xs text-muted-foreground mt-1">{friend.time}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}