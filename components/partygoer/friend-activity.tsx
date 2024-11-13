'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const activities = [
  {
    id: 1,
    user: {
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
    action: 'is going to',
    event: 'Summer Rooftop Party',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    },
    action: 'saved',
    event: 'Underground House Night',
    time: '4 hours ago',
  },
];

export function FriendActivity() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Friend Activity</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <Card className="divide-y divide-border">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 flex items-center gap-4">
            <img
              src={activity.user.avatar}
              alt={activity.user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <p>
                <span className="font-medium">{activity.user.name}</span>{' '}
                <span className="text-muted-foreground">{activity.action}</span>{' '}
                <span className="font-medium">{activity.event}</span>
              </p>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}