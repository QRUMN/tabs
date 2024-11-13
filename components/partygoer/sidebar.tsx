'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Calendar, MapPin, Users, Wallet, Settings, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/partygoer/dashboard',
  },
  {
    title: 'Events',
    icon: Calendar,
    href: '/partygoer/events',
  },
  {
    title: 'Places',
    icon: MapPin,
    href: '/partygoer/places',
  },
  {
    title: 'Friends',
    icon: Users,
    href: '/partygoer/friends',
  },
  {
    title: 'Wallet',
    icon: Wallet,
    href: '/partygoer/wallet',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/partygoer/settings',
  },
];

export function PartygoerSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-20 bottom-0 w-60 border-r border-border bg-card/50 backdrop-blur-xl z-30">
      <ScrollArea className="h-full py-6">
        <div className="px-3 space-y-4">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  alt="Profile"
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Partygoer</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  pathname === item.href && 'bg-accent'
                )}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}