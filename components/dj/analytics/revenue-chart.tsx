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
  Legend
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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Revenue Growth',
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [3000, 3500, 4200, 4000, 4800, 5200],
      borderColor: 'rgb(133, 188, 216)',
      backgroundColor: 'rgba(133, 188, 216, 0.5)',
      tension: 0.4,
    },
  ],
};

interface RevenueChartProps {
  detailed?: boolean;
}

export function RevenueChart({ detailed = false }: RevenueChartProps) {
  return (
    <Card className={detailed ? 'p-6' : ''}>
      <div className="space-y-4">
        {detailed && (
          <div>
            <h3 className="text-lg font-semibold">Revenue Analytics</h3>
            <p className="text-sm text-muted-foreground">Track your earnings and financial growth</p>
          </div>
        )}
        <div className="h-[300px]">
          <Line options={options} data={data} />
        </div>
      </div>
    </Card>
  );
}