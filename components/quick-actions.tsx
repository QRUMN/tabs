'use client';

import { Card } from '@/components/ui/card';
import { Utensils, Car, Users, Ticket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const actions = [
  {
    icon: Ticket,
    label: 'Book Event',
    description: 'Get tickets for events',
    href: '/events',
    gradient: 'from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30',
    iconColor: 'text-blue-500',
  },
  {
    icon: Users,
    label: 'Find Friends',
    description: 'Connect with others',
    href: '/friends',
    gradient: 'from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30',
    iconColor: 'text-purple-500',
  },
  {
    icon: Car,
    label: 'Get a Ride',
    description: 'Book safe rides',
    href: '/rides',
    gradient: 'from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30',
    iconColor: 'text-green-500',
  },
  {
    icon: Utensils,
    label: 'Late Night Eats',
    description: 'Find open restaurants',
    href: '/late-night-eats',
    gradient: 'from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30',
    iconColor: 'text-orange-500',
  },
];

export function QuickActions() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Quick Actions</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link key={action.label} href={action.href}>
            <Card className={cn(
              'relative h-[180px] p-6 overflow-hidden transition-all duration-300',
              'hover:shadow-lg hover:scale-[1.02] group cursor-pointer',
              'before:absolute before:inset-0 before:bg-gradient-to-br',
              'before:transition-all before:duration-300',
              action.gradient
            )}>
              <div className="relative h-full flex flex-col">
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                  'bg-background/50 backdrop-blur-sm',
                  'group-hover:scale-110 transition-transform duration-300',
                  action.iconColor
                )}>
                  <action.icon className="w-6 h-6" />
                </div>
                <div className="mt-auto">
                  <h3 className="font-semibold text-lg mb-1">{action.label}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}