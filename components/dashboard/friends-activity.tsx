'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function FriendsActivity() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Friends Activity</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/avatars/sarah.jpg" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Sarah</p>
            <p className="text-xs text-muted-foreground">Going to Summer Rooftop Party</p>
          </div>
          <Badge variant="secondary">2h ago</Badge>
        </div>
      </div>
    </Card>
  );
}