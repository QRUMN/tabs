'use client';

import { Card } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Booking Trends',
    },
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Confirmed Bookings',
      data: [4, 6, 8, 7, 9, 12],
      backgroundColor: 'rgba(133, 188, 216, 0.5)',
      borderColor: 'rgb(133, 188, 216)',
      borderWidth: 1,
    },
    {
      label: 'Pending Requests',
      data: [2, 3, 4, 3, 5, 4],
      backgroundColor: 'rgba(214, 255, 183, 0.5)',
      borderColor: 'rgb(214, 255, 183)',
      borderWidth: 1,
    },
  ],
};

interface BookingAnalyticsProps {
  detailed?: boolean;
}

export function BookingAnalytics({ detailed = false }: BookingAnalyticsProps) {
  return (
    <Card className={detailed ? 'p-6' : ''}>
      <div className="space-y-4">
        {detailed && (
          <div>
            <h3 className="text-lg font-semibold">Booking Analytics</h3>
            <p className="text-sm text-muted-foreground">Track your booking performance over time</p>
          </div>
        )}
        <div className="h-[300px]">
          <Bar options={options} data={data} />
        </div>
      </div>
    </Card>
  );
}