'use client';

import { Card } from '@/components/ui/card';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueMetricsProps {
  detailed?: boolean;
}

export function RevenueMetrics({ detailed = false }: RevenueMetricsProps) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [15000, 22000, 18000, 25000, 30000, 28000],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
      },
    ],
  };

  return (
    <Card className={detailed ? 'p-6 min-h-[600px]' : 'p-6'}>
      <h3 className="text-lg font-semibold mb-4">Revenue Over Time</h3>
      <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </Card>
  );
}