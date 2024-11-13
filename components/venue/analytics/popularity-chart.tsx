'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['House', 'Techno', 'Hip Hop', 'Live Music', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(133, 188, 216, 0.8)',
        'rgba(216, 173, 107, 0.8)',
        'rgba(214, 255, 183, 0.8)',
        'rgba(255, 107, 107, 0.8)',
        'rgba(150, 150, 150, 0.8)',
      ],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Genre Popularity',
    },
  },
};

export function PopularityChart() {
  return <Doughnut data={data} options={options} />;
}