'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Music, Star, Users } from 'lucide-react';

const stats = [
  {
    label: 'Events Attended',
    value: '47',
    icon: Calendar,
    color: 'text-blue-500',
  },
  {
    label: 'Friends',
    value: '182',
    icon: Users,
    color: 'text-green-500',
  },
  {
    label: 'Favorite Artists',
    value: '23',
    icon: Music,
    color: 'text-purple-500',
  },
  {
    label: 'Reviews Given',
    value: '31',
    icon: Star,
    color: 'text-yellow-500',
  },
];

export function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}