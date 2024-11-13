'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

const partyGroups = [
  {
    id: 'g1',
    name: 'Summer Rooftop Squad',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    lastMessage: 'DJ lineup just dropped! 🎵',
    time: '5m ago',
    memberCount: 24,
    unread: 3,
  },
  {
    id: 'g2',
    name: 'House Music Collective',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
    lastMessage: 'New event this weekend',
    time: '30m ago',
    memberCount: 156,
    unread: 0,
  },
  {
    id: 'g3',
    name: 'Late Night Crew',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    lastMessage: 'Meeting at usual spot',
    time: '2h ago',
    memberCount: 12,
    unread: 0,
  },
];

interface GroupListProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function GroupList({ selectedId, onSelect }: GroupListProps) {
  return (
    <div className="divide-y divide-border">
      {partyGroups.map((group) => (
        <button
          key={group.id}
          className={cn(
            'w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors',
            selectedId === group.id && 'bg-muted'
          )}
          onClick={() => onSelect(group.id)}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={group.image} alt={group.name} />
            <AvatarFallback>{group.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">{group.name}</p>
              <span className="text-xs text-muted-foreground">{group.time}</span>
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {group.lastMessage}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Users className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {group.memberCount} members
              </span>
            </div>
          </div>
          {group.unread > 0 && (
            <div className="min-w-[1.5rem] h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground">
                {group.unread}
              </span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}