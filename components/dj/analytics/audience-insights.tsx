'use client';

import { Card } from '@/components/ui/card';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['18-24', '25-34', '35-44', '45+'],
  datasets: [
    {
      data: [30, 40, 20, 10],
      backgroundColor: [
        'rgba(133, 188, 216, 0.8)',
        'rgba(214, 255, 183, 0.8)',
        'rgba(216, 173, 107, 0.8)',
        'rgba(255, 107, 107, 0.8)',
      ],
      borderColor: [
        'rgb(133, 188, 216)',
        'rgb(214, 255, 183)',
        'rgb(216, 173, 107)',
        'rgb(255, 107, 107)',
      ],
      borderWidth: 1,
    },
  ],
};

interface AudienceInsightsProps {
  detailed?: boolean;
}

export function AudienceInsights({ detailed = false }: AudienceInsightsProps) {
  return (
    <Card className={detailed ? 'p-6' : ''}>
      <div className="space-y-4">
        {detailed && (
          <div>
            <h3 className="text-lg font-semibold">Audience Demographics</h3>
            <p className="text-sm text-muted-foreground">Understand your audience composition</p>
          </div>
        )}
        <div className="h-[300px] flex items-center justify-center">
          <div className="w-[300px]">
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </Card>
  );
}