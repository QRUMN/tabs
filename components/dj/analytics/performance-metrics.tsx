'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

const metrics = [
  {
    label: 'Total Bookings',
    value: '48',
    change: '+12%',
    trend: 'up',
    icon: Calendar,
    color: 'text-blue-500',
  },
  {
    label: 'Monthly Revenue',
    value: '$5.2K',
    change: '+8%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-500',
  },
  {
    label: 'Audience Growth',
    value: '2.4K',
    change: '+15%',
    trend: 'up',
    icon: Users,
    color: 'text-purple-500',
  },
  {
    label: 'Engagement Rate',
    value: '24%',
    change: '+5%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-orange-500',
  },
];

export function PerformanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`${metric.color} bg-background p-3 rounded-lg`}>
              <metric.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}