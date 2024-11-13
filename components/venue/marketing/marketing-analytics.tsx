'use client';

import { Card } from '@/components/ui/card';
import { ArrowUp, Users, Share2, Mail, Ticket } from 'lucide-react';

export function MarketingAnalytics() {
  const metrics = [
    {
      title: 'Social Reach',
      value: '45.2K',
      change: '+12.3%',
      icon: Share2,
    },
    {
      title: 'Email Subscribers',
      value: '8.9K',
      change: '+5.7%',
      icon: Mail,
    },
    {
      title: 'Event Attendance',
      value: '2.4K',
      change: '+15.2%',
      icon: Users,
    },
    {
      title: 'Ticket Sales',
      value: '$32.5K',
      change: '+8.9%',
      icon: Ticket,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center justify-between">
            <metric.icon className="h-5 w-5 text-muted-foreground" />
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="mr-1 h-4 w-4" />
              {metric.change}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}