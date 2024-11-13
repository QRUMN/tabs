'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const friends = [
  {
    id: 1,
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    mutualFriends: 12,
    online: true,
  },
  {
    id: 2,
    name: 'Mike',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    mutualFriends: 8,
    online: true,
  },
  {
    id: 3,
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    mutualFriends: 5,
    online: false,
  },
];

export function Friends() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {friends.map((friend) => (
        <Card key={friend.id}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                {friend.online && (
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>
              <h4 className="font-semibold mt-4">{friend.name}</h4>
              <p className="text-sm text-muted-foreground">
                {friend.mutualFriends} mutual friends
              </p>
              <Button variant="outline" className="mt-4 w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}