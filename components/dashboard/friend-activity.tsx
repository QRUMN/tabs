'use client';

interface FriendActivityProps {
  activities: Array<{
    avatar: string;
    name: string;
    action: string;
    event: string;
    time: string;
  }>;
}

export function FriendActivity({ activities }: FriendActivityProps) {
  return (
    <div className="divide-y">
      {activities.map((activity, i) => (
        <div key={i} className="p-4 flex items-center gap-4">
          <img
            src={activity.avatar}
            alt={activity.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p>
              <span className="font-medium">{activity.name}</span>{' '}
              <span className="text-muted-foreground">{activity.action}</span>{' '}
              <span className="font-medium">{activity.event}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}