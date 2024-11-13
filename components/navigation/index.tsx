'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Home, Calendar, MessageSquare, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/events', icon: Calendar, label: 'Events' },
  { href: '/messages', icon: MessageSquare, label: 'Messages' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[60px] bg-background border-r border-border flex flex-col items-center py-4 gap-2 z-50">
      {navItems.map(({ href, icon: Icon, label }) => (
        <Button
          key={href}
          variant="ghost"
          size="icon"
          className={cn(
            'w-10 h-10 rounded-xl',
            pathname === href && 'bg-accent/50 gradient-border'
          )}
          asChild
        >
          <Link href={href}>
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </Link>
        </Button>
      ))}
      <div className="flex-1" />
      <ThemeToggle />
    </nav>
  );
}