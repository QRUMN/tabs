interface ActivityItemProps {
  avatar: string;
  name: string;
  action: string;
  event: string;
  time: string;
}

export function ActivityItem({ avatar, name, action, event, time }: ActivityItemProps) {
  return (
    <div className="p-4 flex items-center gap-4">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-medium">{name}</span>{' '}
          <span className="text-muted-foreground">{action}</span>{' '}
          <span className="font-medium">{event}</span>
        </p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}