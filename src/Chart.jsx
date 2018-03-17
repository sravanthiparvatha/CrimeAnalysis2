import React from 'react';
import {BarChart} from 'react-easy-chart';
export default class Chart extends React.Component{
 componentWillMount() {
    
    console.log('in will mount');
  /*(this.setState({ markers: [
      { x: '2010', y: 20 },
      { x: '2011', y: 30 },
      { x: '2012', y: 40 },
      { x: '2013', y: 20 },
      { x: '2014', y: 5 }
    ]});
  */}

  componentDidMount() {
    const url = [
      // Length issue
      'http://10.10.200.14:9000','/getAnalysis'
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
     // this.setState({ markers: result });
       // console.log(this.state.markers);
       // console.log('after reading');
      });
      
  }
          render(){
      
        return(<div>

         <h2>Violent</h2>
          <BarChart
          axisLabels={{x: '', y: 'My y Axis'}}
          axes
         
          colorBars
          height={250}
          width={650}
          data={[
            { x: '2010', y: 20 },
            { x: '2011', y: 30 },
            { x: '2012', y: 40 },
            { x: '2013', y: 20 },
            { x: '2014', y: 5 }
          ]}

        />

         <h2>Property</h2>
          
      </div>
        )
    }
}