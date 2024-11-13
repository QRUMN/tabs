'use client';

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Average Attendance by Hour',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['8PM', '9PM', '10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM'],
  datasets: [
    {
      data: [50, 120, 180, 250, 300, 280, 220, 150, 80],
      borderColor: 'rgb(133, 188, 216)',
      tension: 0.4,
    },
  ],
};

export function PeakHoursChart() {
  return <Line options={options} data={data} />;
}