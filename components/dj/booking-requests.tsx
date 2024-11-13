'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';

const bookingRequests = [
  {
    id: 1,
    event: 'Private Beach Party',
    venue: 'Hampton Beach Club',
    date: 'Sep 5, 2024',
    time: '8 PM - 2 AM',
    offer: '$1,200',
    status: 'pending'
  },
  {
    id: 2,
    event: 'Corporate Event',
    venue: 'Grand Plaza Hotel',
    date: 'Sep 10, 2024',
    time: '7 PM - 11 PM',
    offer: '$800',
    status: 'pending'
  }
];

export function BookingRequests() {
  return (
    <div className="space-y-4">
      {bookingRequests.map((booking) => (
        <Card key={booking.id} className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{booking.event}</h3>
                  <Badge variant="secondary">New Request</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {booking.venue}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {booking.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {booking.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    {booking.offer}
                  </div>
                </div>
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