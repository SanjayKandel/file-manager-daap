import React from 'react';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';



export default function StatChart({totalFileSize,userFileSize}){
  const data = {
  labels: [
    'Total File Size(Network)',
    'Total Files Size(User)',
    
],
datasets: [{
  data: [totalFileSize,userFileSize],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  ]
}]
};
return(
  <div>
    <Chart type="line" 
       data={data}
    />
  </div>
  );
  
}