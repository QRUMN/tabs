'use client';

import { Card } from '@/components/ui/card';

export function EventHistory() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Event History</h3>
      <div className="space-y-4">
        {/* Event history will be added here */}
        <p className="text-muted-foreground">No past events</p>
      </div>
    </Card>
  );
}