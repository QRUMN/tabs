'use client';

import { Card } from '@/components/ui/card';

export function TicketManager() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Your Tickets</h3>
      <div className="space-y-4">
        {/* Ticket list will be added here */}
        <p className="text-muted-foreground">No active tickets</p>
      </div>
    </Card>
  );
}