'use client';

import { Card } from '@/components/ui/card';

export function EventCalendar() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Upcoming Events Calendar</h3>
      <div className="space-y-4">
        {/* Calendar content will be added here */}
        <p className="text-muted-foreground">No upcoming events scheduled</p>
      </div>
    </Card>
  );
}