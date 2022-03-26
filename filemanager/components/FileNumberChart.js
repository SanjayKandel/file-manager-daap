import React from 'react';
import 'chart.js/auto';
import {Chart} from 'react-chartjs-2';



export default function FIleNumberChart({totalFiles,userFiles}){
  const data = {
  labels: [
    'Total Files Uploaded(User)',
    'Total Files Uploaded(Network)'
],
datasets: [{
  data: [userFiles,totalFiles],
  backgroundColor: [
  '#FFCE56',
  '#0000FF'
  ],
  hoverBackgroundColor: [
  '#FFCE56',
  '#0000FF'
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