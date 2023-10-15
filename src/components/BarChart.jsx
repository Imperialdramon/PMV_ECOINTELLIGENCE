import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
  scales:{
    y:{
      beginAtZeri:true,
      max:100
    },
    x:{
      ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip:{
      callbacks:{
        title: (context) => {
          return context[0].label.replaceAll(',',' ');
        },
      },
    },
    title: {
      display: true,
      text: 'Estado Actual',
    },
  },
};

function genData(datanew){
  const data = {
    labels: [['Papel y','Cartón'], 'Vidrio', 'Lata', 'Plástico', ['Material','Orgánico'], 'Varios'],
    datasets: [{
      label: 'Porcentaje',
      data: datanew,
      backgroundColor: [
        'rgba(91, 163, 229, 0.5)',
        'rgba(103, 225, 83, 0.5)',
        'rgba(238, 76, 76, 0.5)',
        'rgba(229, 224, 91, 0.5)',
        'rgba(236, 157, 84, 0.5)',
        'rgba(177, 177, 177, 0.5)'
      ],
      borderColor: [
        'rgb(91, 163, 229)',
        'rgb(103, 225, 83)',
        'rgb(238, 76, 76)',
        'rgb(229, 224, 91)',
        'rgb(236, 157, 84)',
        'rgb(177, 177, 177)'
      ],
      borderWidth: 1
    }]
  };
  return data;
}

const BarChart = (props) => {
  const data_chart = genData(props.data);
  return (
      <Bar
        data={data_chart}
        options={options}
      />
  );
};

export default BarChart;