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
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start h-10',
                pathname === item.href && 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
              asChild
            >
              <Link href={item.href}>
                {item.title}
                {item.href === '/venue/bookings' && (
                  <span className="ml-auto text-xs bg-background/20 px-2 py-0.5 rounded-full">
                    2
                  </span>
                )}
              </Link>
            </Button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t mt-auto">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
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
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
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
      <div className="hidden lg:block fixed inset-y-0 left-0 w-[280px] border-r bg-background">
        <NavigationContent />
      </div>
    </>
  );
}