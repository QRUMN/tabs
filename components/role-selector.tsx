'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const roles = [
  {
    id: 'partygoer',
    name: 'Partygoer',
    description: 'Discover events and connect',
    href: '/partygoer/dashboard',
    gradient: 'from-pink-500 to-purple-500',
    hoverGradient: 'hover:from-pink-400 hover:to-purple-400',
  },
  {
    id: 'dj',
    name: 'DJ / Artist',
    description: 'Earn Money Book gigs',
    href: '/dj/dashboard',
    gradient: 'from-purple-500 to-blue-500',
    hoverGradient: 'hover:from-purple-400 hover:to-blue-400',
  },
  {
    id: 'venue',
    name: 'Venue',
    description: 'Manage your venue and events',
    href: '/venue/dashboard',
    gradient: 'from-emerald-500 to-cyan-500',
    hoverGradient: 'hover:from-emerald-400 hover:to-cyan-400',
  },
  {
    id: 'planner',
    name: 'Event Planner',
    description: 'Create and manage events',
    href: '/planner/dashboard',
    gradient: 'from-orange-500 to-rose-500',
    hoverGradient: 'hover:from-orange-400 hover:to-rose-400',
  },
  {
    id: 'driver',
    name: 'Driver',
    description: 'Connect with party-goers',
    href: '/driver/dashboard',
    gradient: 'from-blue-500 to-indigo-500',
    hoverGradient: 'hover:from-blue-400 hover:to-indigo-400',
  },
];

export function RoleSelector() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {roles.map((role) => (
        <Link key={role.id} href={role.href}>
          <Card className={cn(
            'p-6 transition-all duration-300 cursor-pointer overflow-hidden relative group',
            'hover:shadow-lg hover:shadow-foreground/5',
            'before:absolute before:inset-0 before:bg-gradient-to-br',
            'before:opacity-10 group-hover:before:opacity-20 before:transition-opacity',
            role.gradient
          )}>
            <div className="relative space-y-2">
              <h3 className="font-semibold">{role.name}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}