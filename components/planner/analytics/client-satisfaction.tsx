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

interface ClientSatisfactionProps {
  detailed?: boolean;
}

export function ClientSatisfaction({ detailed = false }: ClientSatisfactionProps) {
  const data = {
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [
      {
        data: [65, 25, 8, 2],
        backgroundColor: [
          'rgba(52, 211, 153, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  return (
    <Card className={detailed ? 'p-6 min-h-[600px]' : 'p-6'}>
      <h3 className="text-lg font-semibold mb-4">Client Satisfaction</h3>
      <div className="h-[300px] flex items-center justify-center">
        <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </Card>
  );
}