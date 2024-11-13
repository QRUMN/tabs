'use client';

import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const fanActivity = [
  {
    id: 1,
    user: {
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    },
    action: 'liked your latest set',
    time: '2h ago'
  },
  {
    id: 2,
    user: {
      name: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6'
    },
    action: 'shared your event',
    time: '4h ago'
  }
];

export function FanEngagement() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Fan Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {fanActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>{' '}
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Engagement Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Engagement Stats</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Likes</span>
            </div>
            <span className="font-semibold">1.2K</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span>Comments</span>
            </div>
            <span className="font-semibold">342</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              <span>Shares</span>
            </div>
            <span className="font-semibold">89</span>
          </div>
        </div>
      </Card>
    </div>
  );
}