'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

const pendingPayments = [
  {
    id: 1,
    event: 'Private Beach Party',
    date: 'Sep 5, 2024',
    amount: '$1,200',
    status: 'pending',
    venue: 'Hampton Beach Club',
    dueDate: '3 days'
  },
  {
    id: 2,
    event: 'Corporate Event',
    date: 'Sep 10, 2024',
    amount: '$800',
    status: 'processing',
    venue: 'Grand Plaza Hotel',
    dueDate: '5 days'
  }
];

export function PendingPayments() {
  return (
    <div className="space-y-4">
      {pendingPayments.map((payment) => (
        <Card key={payment.id} className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{payment.event}</h3>
                <Badge variant="secondary">{payment.status}</Badge>
              </div>
              <p className="text-muted-foreground">{payment.venue}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Due in {payment.dueDate}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{payment.amount}</p>
              <p className="text-sm text-muted-foreground">{payment.date}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}