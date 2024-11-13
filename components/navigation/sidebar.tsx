'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/theme-toggle';
import { LogOut } from 'lucide-react';

const menuItems = [
  { title: 'Overview', href: '/dj/dashboard' },
  { title: 'Events', href: '/dj/events' },
  { title: 'Music', href: '/dj/music' },
  { title: 'Venues', href: '/dj/venues' },
  { title: 'Analytics', href: '/dj/analytics' },
  { title: 'Equipment', href: '/dj/equipment' },
  { title: 'Fans', href: '/dj/fans' },
  { title: 'Earnings', href: '/dj/earnings' },
  { title: 'Settings', href: '/dj/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="fixed inset-y-0 left-0 w-[240px] bg-background border-r z-30">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>DJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">DJ Shadow</p>
              <p className="text-xs text-muted-foreground">
                Professional DJ
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                'w-full justify-start h-10 font-medium',
                pathname === item.href && 'bg-accent text-accent-foreground hover:bg-accent/90'
              )}
              asChild
            >
              <Link href={item.href}>
                {item.title}
                {item.href === '/dj/events' && (
                  <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    3
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Footer Controls */}
        <div className="p-4 border-t space-y-2">
          <div className="flex items-center justify-between px-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => logout()}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}