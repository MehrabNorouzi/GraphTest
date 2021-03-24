
import React from "react";
import { Line } from 'react-chartjs-2'
import testDat  from './components/testDat.js'


import "./App.css";

const App = () =>
{


  return <div>

  <Line
  data={{
    labels: ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
    datasets: [
{
      data: testDat,
    },
  ],

  }}
  height={400}
  width={600}
  options={{
    maintainAspectRatio: false,
  }}
   />






  </div>
}

export default App
