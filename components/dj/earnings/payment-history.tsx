'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Search, Download } from 'lucide-react';

const payments = [
  {
    id: 1,
    event: 'Summer Rooftop Party',
    date: 'Aug 15, 2023',
    amount: '$800',
    status: 'completed',
    venue: 'Skybar NYC'
  },
  {
    id: 2,
    event: 'Underground House Night',
    date: 'Aug 10, 2023',
    amount: '$600',
    status: 'completed',
    venue: 'The Basement'
  },
  {
    id: 3,
    event: 'Private Beach Party',
    date: 'Aug 5, 2023',
    amount: '$1,200',
    status: 'completed',
    venue: 'Hampton Beach Club'
  }
];

export function PaymentHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search payments..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <ScrollArea className="h-[600px]">
        <div className="space-y-4">
          {payments.map((payment) => (
            <Card key={payment.id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{payment.event}</h3>
                  <p className="text-sm text-muted-foreground">{payment.venue}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{payment.amount}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}