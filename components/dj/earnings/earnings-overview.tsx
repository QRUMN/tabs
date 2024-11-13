'use client';

import { Card } from '@/components/ui/card';
import { DollarSign, TrendingUp, Calendar, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Total Earnings',
    value: '$5.2K',
    icon: DollarSign,
    change: '+12% from last month',
  },
  {
    label: 'Average Per Event',
    value: '$800',
    icon: TrendingUp,
    change: '+5% from last month',
  },
  {
    label: 'Events This Month',
    value: '12',
    icon: Calendar,
    change: '2 more than last month',
  },
  {
    label: 'Hours Performed',
    value: '48h',
    icon: Clock,
    change: '8h more than last month',
  },
];

export function EarningsOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span className="text-xs text-muted-foreground">{stat.change}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}