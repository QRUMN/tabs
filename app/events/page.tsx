import React from 'react';
import { Card } from '@/components/ui/card';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for event cards */}
        <Card className="p-6 hover-card">
          <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">Events will be displayed here</p>
        </Card>
      </div>
    </div>
  );
}