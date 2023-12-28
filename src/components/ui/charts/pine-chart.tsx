import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Deny', 'Donation'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export function PineChart() {
  return (
    <div className=" h-auto max-w-5xl">
      <h1>
        Based on the donors and the deniers, the project will either continue or
        stop
      </h1>
      <Pie data={data} />
    </div>
  );
}
