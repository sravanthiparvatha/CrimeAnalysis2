import React from 'react';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';
import request from 'superagent';
import Google1 from './Google1';
//var accesstoken = localStorage.getItem("accesstoken");
class Google extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id:[]
    };


  }

  
  componentDidMount() {
    fetch("http://10.10.200.14:9000/getDetails")
       .then(function (response) {
            return (response.json());
        }).then(result1 => this.setState({
            id: result1
        }));
    }
  

  render() {
    var Holder = [];
    for (var i = 0; i < this.state.id.length; i++) {
        console.log(this.state.id[i].lat);
        Holder.push(
            (
                <Google1 lat={this.state.id[i].lat}
                            lng={this.state.id[i].lng} 
                           ></Google1>
            )
        );
   
    return (
   null
    );
  }
  }
}




export default Google;