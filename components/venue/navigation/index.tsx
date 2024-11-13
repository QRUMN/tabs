'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { LogOut, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

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

export function VenueNavigation() {
  const pathname = usePathname();

  const NavigationContent = () => (
    <div className="flex flex-col h-full bg-background">
      {/* Venue Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
              alt="Skybar NYC"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Skybar NYC</h2>
            <p className="text-sm text-muted-foreground">Premium Venue</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 p-4 overflow-y-auto">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                pathname === item.href && 'bg-accent text-accent-foreground hover:bg-accent/90'
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
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t mt-auto">
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
  );

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background z-50">
        <div className="flex items-center justify-between px-4 h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <NavigationContent />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Skybar NYC</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block w-[280px] fixed left-0 top-0 bottom-0 border-r">
        <NavigationContent />
      </div>
    </>
  );
}