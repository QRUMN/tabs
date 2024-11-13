'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TrendItem {
  label: string;
  value: number;
  change: string;
}

interface TrendChartProps {
  title: string;
  items: TrendItem[];
}

export function TrendChart({ title, items }: TrendChartProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="text-green-500">{item.change}</span>
            </div>
            <Progress value={item.value} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}