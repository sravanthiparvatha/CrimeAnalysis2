import React from 'react';
import {BarChart} from 'react-easy-chart';
export default class Chart extends React.Component{
    render(){
        return(

  <BarChart
  width={100}
  height={500}
  data={[
    [
      { x: 1, y: 20 },
      { x: 2, y: 10 },
      { x: 3, y: 25 }
    ]
    
  ]}
/>
        )
    }
}