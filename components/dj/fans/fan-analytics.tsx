'use client';

import { Card } from '@/components/ui/card';
import { Users, Star, TrendingUp, MapPin } from 'lucide-react';

const stats = [
  {
    label: 'Total Fans',
    value: '2.4K',
    icon: Users,
    change: '+12%',
  },
  {
    label: 'Superfans',
    value: '156',
    icon: Star,
    change: '+8%',
  },
  {
    label: 'Engagement Rate',
    value: '68%',
    icon: TrendingUp,
    change: '+5%',
  },
  {
    label: 'Top Location',
    value: 'NYC',
    icon: MapPin,
    change: 'No change',
  },
];

export function FanAnalytics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-xs text-muted-foreground">{stat.change}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}