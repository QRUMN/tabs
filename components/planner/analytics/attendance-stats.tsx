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
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface AttendanceStatsProps {
  detailed?: boolean;
}

export function AttendanceStats({ detailed = false }: AttendanceStatsProps) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Attendees',
        data: [1200, 1500, 1800, 2200, 2500, 2800],
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
      },
    ],
  };

  return (
    <Card className={detailed ? 'p-6 min-h-[600px]' : 'p-6'}>
      <h3 className="text-lg font-semibold mb-4">Attendance Trends</h3>
      <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
    </Card>
  );
}