'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, DollarSign, Users } from 'lucide-react';

const pendingGigs = [
  {
    id: 1,
    event: 'Private Beach Party',
    venue: 'Hampton Beach Club',
    date: 'Sep 5, 2024',
    time: '8 PM - 2 AM',
    capacity: 200,
    offer: '$1,200',
    status: 'pending_review'
  },
  {
    id: 2,
    event: 'Corporate Event',
    venue: 'Grand Plaza Hotel',
    date: 'Sep 10, 2024',
    time: '7 PM - 11 PM',
    capacity: 150,
    offer: '$800',
    status: 'negotiation'
  }
];

export function PendingGigs() {
  return (
    <div className="space-y-4">
      {pendingGigs.map((gig) => (
        <Card key={gig.id} className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{gig.event}</h3>
                  <Badge variant="secondary">
                    {gig.status === 'pending_review' ? 'Pending Review' : 'In Negotiation'}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {gig.venue}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {gig.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {gig.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {gig.capacity} capacity
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <DollarSign className="h-5 w-5 text-primary" />
                {gig.offer}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 md:flex-none">Decline</Button>
              <Button className="flex-1 md:flex-none">Accept</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}