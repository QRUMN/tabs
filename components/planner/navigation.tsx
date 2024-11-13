'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const menuItems = [
  { title: 'Dashboard', href: '/planner/dashboard' },
  { title: 'Events', href: '/planner/events' },
  { title: 'Clients', href: '/planner/clients' },
  { title: 'Vendors', href: '/planner/vendors' },
  { title: 'Calendar', href: '/planner/calendar' },
  { title: 'Budget', href: '/planner/budget' },
  { title: 'Marketing', href: '/planner/marketing' },
  { title: 'Analytics', href: '/planner/analytics' },
  { title: 'Settings', href: '/planner/settings' }
];

export function PlannerNavigation() {
  const pathname = usePathname();

  const NavigationContent = () => (
    <>
      {/* Planner Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              alt="Elite Events"
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
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
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
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 mt-auto border-t">
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
    </>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur z-50">
        <div className="flex items-center justify-between px-4 h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <div className="flex flex-col h-full">
                <NavigationContent />
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Elite Events</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 w-[280px] border-r bg-background/50 backdrop-blur-xl flex-col">
        <NavigationContent />
      </div>
    </>
  );
}