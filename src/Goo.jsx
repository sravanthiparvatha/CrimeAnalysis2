import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import request from 'superagent';
class Goo extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      /*user:"",
      locations: {
        "gnit":[17.4118166,78.3967619],
        "charminar":[17.3615687,78.4724758]
        */
      markers:[]
      }
    
  //  this.ComponentDidMount = this.ComponentDidMount.bind(this);
  }
  
/*  ComponentDidMount(){
    const promise= request.get("http://localhost:9000/locations");
    const onSuccess=(val)=>{this.setState({user: val.body.login })};
    promise.then(onSuccess);
  }*/
  componentWillMount() {
    //this.setState({ markers:[] })
    //this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
  }

  componentDidMount() {
    this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
    const url = [
      // Length issue
      'http://10.10.200.14:9000','/getDetails'
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
        console.log(this.state.markers[0].lat);
      });
      
  }

render(){
return(

  <Map center={{ lat: 17.3850,lng: 78.4867}} zoom={15}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
     {this.state.markers.map((marker,i) => (
    <Marker position={{ lat: marker.lat,lng: marker.lng}}>
      <Popup>
        <span>
         {marker.d}
        </span>
      </Popup>
    </Marker>
      )) }
    <Marker position={{ lat: 17.3615687,lng: 78.4724758}}>
      <Popup>
        <span>
          <br /> Macca Masjid<br/>Timings from 6:00 am to 12:00 pm<br/>1500 visitors per day<br/>
        </span>
      </Popup>
    </Marker>
  </Map>
);
}
}

export default Goo;
