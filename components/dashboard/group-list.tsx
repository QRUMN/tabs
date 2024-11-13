'use client';

import { Card } from '@/components/ui/card';

export function GroupList() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">My Groups</h3>
      <div className="space-y-4">
        {/* Group list will be added here */}
        <p className="text-muted-foreground">No groups joined</p>
      </div>
    </Card>
  );
}