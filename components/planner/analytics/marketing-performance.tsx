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

interface MarketingPerformanceProps {
  detailed?: boolean;
}

export function MarketingPerformance({ detailed = false }: MarketingPerformanceProps) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Social Media Reach',
        data: [5000, 8000, 12000, 15000, 18000, 22000],
        borderColor: 'rgb(234, 88, 12)',
        backgroundColor: 'rgba(234, 88, 12, 0.5)',
      },
      {
        label: 'Email Engagement',
        data: [2000, 3000, 4500, 6000, 7500, 9000],
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.5)',
      },
    ],
  };

  return (
    <Card className={detailed ? 'p-6 min-h-[600px]' : 'p-6'}>
      <h3 className="text-lg font-semibold mb-4">Marketing Performance</h3>
      <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </Card>
  );
}