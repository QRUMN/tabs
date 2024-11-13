'use client';

import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

export function EventCalendar() {
  return (
    <Card className="p-6">
      <Calendar
        mode="multiple"
        className="rounded-md border"
      />
    </Card>
  );
}