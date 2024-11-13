'use client';

import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const lowStockItems = [
  { name: 'Premium Vodka', current: 5, minimum: 10 },
  { name: 'Paper Towels', current: 15, minimum: 20 },
  { name: 'Cleaning Solution', current: 2, minimum: 4 },
];

export function LowStockAlerts() {
  if (lowStockItems.length === 0) return null;

  return (
    <Card className="p-4 bg-yellow-500/10 border-yellow-500/20">
      <div className="flex items-center gap-2 text-yellow-600">
        <AlertTriangle className="h-5 w-5" />
        <h2 className="font-semibold">Low Stock Alerts</h2>
      </div>
      <div className="mt-2 space-y-1">
        {lowStockItems.map((item) => (
          <p key={item.name} className="text-sm text-muted-foreground">
            {item.name} - {item.current} units remaining (min: {item.minimum})
          </p>
        ))}
      </div>
    </Card>
  );
}