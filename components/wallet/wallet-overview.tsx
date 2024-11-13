'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

export function WalletOverview() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <span className="text-xl font-bold">$250.00</span>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Minus className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </Card>
  );
}