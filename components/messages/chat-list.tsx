'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ActiveGroups } from './active-groups';

const recentChats = [
  {
    id: '1',
    name: 'Sarah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    lastMessage: 'See you at the party! 🎉',
    time: '2m ago',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Mike',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    lastMessage: 'Got the tickets!',
    time: '1h ago',
    unread: 0,
    online: true,
  },
  {
    id: '3',
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    lastMessage: 'What time tonight?',
    time: '2h ago',
    unread: 1,
    online: false,
  },
];

interface ChatListProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ChatList({ selectedId, onSelect }: ChatListProps) {
  return (
    <div>
      <div className="divide-y divide-border">
        {recentChats.map((chat) => (
          <button
            key={chat.id}
            className={cn(
              'w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors',
              selectedId === chat.id && 'bg-muted'
            )}
            onClick={() => onSelect(chat.id)}
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 border-2 border-background bg-green-500 rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between">
                <p className="font-medium truncate">{chat.name}</p>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
            {chat.unread > 0 && (
              <div className="min-w-[1.5rem] h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-medium text-primary-foreground">
                  {chat.unread}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}