'use client';

import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

export function VenueCalendar() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Calendar</h3>
      <Calendar mode="single" className="rounded-md border" />
    </Card>
  );
}