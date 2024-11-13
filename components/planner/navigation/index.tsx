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
  { title: 'Dashboard', href: '/planner/dashboard' },
  { title: 'Events', href: '/planner/events' },
  { title: 'Guests', href: '/planner/guests' },
  { title: 'Vendors', href: '/planner/vendors' },
  { title: 'Timeline', href: '/planner/timeline' },
  { title: 'Budget', href: '/planner/budget' },
  { title: 'Marketing', href: '/planner/marketing' },
  { title: 'Analytics', href: '/planner/analytics' },
  { title: 'Settings', href: '/planner/settings' }
];

export function PlannerNavigation() {
  const pathname = usePathname();

  const NavigationContent = () => (
    <div className="flex flex-col h-full bg-background">
      {/* Planner Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
              alt="Event Planner"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Elite Events</h2>
            <p className="text-sm text-muted-foreground">Event Planning</p>
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
                {item.href === '/planner/events' && (
                  <span className="ml-auto text-xs bg-background/20 px-2 py-0.5 rounded-full">
                    3
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
            <span className="font-semibold">Elite Events</span>
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