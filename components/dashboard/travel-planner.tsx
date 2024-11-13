'use client';

import { Card } from '@/components/ui/card';

export function TravelPlanner() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Travel Plans</h3>
      <div className="space-y-4">
        {/* Travel plans will be added here */}
        <p className="text-muted-foreground">No travel plans</p>
      </div>
    </Card>
  );
}