'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const menuItems = [
  { title: 'Dashboard', href: '/venue/dashboard' },
  { title: 'Events', href: '/venue/events' },
  { title: 'Staff', href: '/venue/staff' },
  { title: 'Bookings', href: '/venue/bookings' },
  { title: 'DJs', href: '/venue/djs' },
  { title: 'Inventory', href: '/venue/inventory' },
  { title: 'Marketing', href: '/venue/marketing' },
  { title: 'Analytics', href: '/venue/analytics' },
  { title: 'Settings', href: '/venue/settings' }
];

export function VenueSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 w-[240px] border-r bg-background/50 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        {/* Venue Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
                alt="Skybar NYC"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold">Skybar NYC</h2>
              <p className="text-sm text-muted-foreground">Premium Venue</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 p-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start h-10',
                  pathname === item.href && 'bg-accent text-accent-foreground'
                )}
                asChild
              >
                <Link href={item.href}>
                  {item.title}
                  {item.href === '/venue/bookings' && (
                    <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      2
                    </span>
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm"
              className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}