import React from 'react';
import {BarChart} from 'react-easy-chart';
export default class Chart extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      /*user:"",
      locations: {
        "gnit":[17.4118166,78.3967619],
        "charminar":[17.3615687,78.4724758]
        */
      markers:[],
      markers1:[],
      markers2:[]
      }
     } componentWillMount() {

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
      this.setState({ markers: result });
       // console.log(this.state.markers);
       // console.log('after reading');
      });


/*      //property
      const url1 = [
        // Length issue
        'http://10.10.200.14:9000','/getAnalysis1'
      ].join("")
  
      fetch(url1)
        .then(res1 => res1.json())
        .then(result1 => {
          console.log(result1);
        this.setState({ markers1: result1 });
         // console.log(this.state.markers);
         // console.log('after reading');
        });

        //Quality

        const url2 = [
          // Length issue
          'http://10.10.200.14:9000','/getAnalysis2'
        ].join("")
    
        fetch(url2)
          .then(res2 => res2.json())
          .then(result2 => {
            console.log(result2);
          this.setState({ markers2: result2 });
           // console.log(this.state.markers);
           // console.log('after reading');
          });*/

  }
          render(){

        return(<div id="data-graphs">
        <div>
          <h2>Violent Crimes</h2>
          <BarChart
          axisLabels={{x: '', y: 'My y Axis'}}
          axes
          colorBars
          height={250}
          width={650}
          data={this.state.markers}
          />
        </div>
        <div>
         <h2>Property </h2>
         <BarChart
          axisLabels={{x: '', y: 'My y Axis'}}
          axes
          colorBars
          height={250}
          width={650}
          data={this.state.markers1}
          />
        </div>
        <div>
          <h2>Quality of Life</h2>
          <BarChart
           axisLabels={{x: '', y: 'My y Axis'}}
           axes
           colorBars
           height={250}
           width={650}
           data={this.state.markers2}
           />
        </div>
      </div>
        )
    }
}
