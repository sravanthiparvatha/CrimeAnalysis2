
//import React from 'react';
import ReactDOM from 'react-dom';
//import { GoogleMap, Marker,withScriptjs, withGoogleMap  } from "react-google-maps"
import request from 'superagent';
import React from "react"
//import { compose, withProps } from "recompose"
/*//import { withScriptjs, withGoogleMap } from "react-google-maps"
const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)
const MyMapComponent = compose(
  withProps({
    //googleMapURL: "https://maps.googleapis.com/maps/api/js?Key=AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM&v=3.exp&libraries=geometry,drawing,places",
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `2000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  
  }),

  withScriptjs,
  withGoogleMap
)
  ((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{
        lat: 17.3850,
        lng: 78.4867
      }}
    >
      <Marker   position={{ lat: marker.latitude, lng: marker.longitude }}/>}
  </GoogleMap>
  )

class MyFancyComponent extends React.PureComponent {

  state = {
    isMarkerShown: true,
  }

  /*componentDidMount() {
    
    console.log('1');
    request("http://10.10.200.14:9000/getDetails")
      .then(function (response) {
      
        console.log('2');
        return (response.json());
      })
      .then(function (response) {
        console.log('3');
        this.setState({ id: response });
        console.log('state');
      });

    // 0.1   
    console.log('4');


  }
    
  componentDidMount() {
    fetch("http://10.10.200.14:9000/getDetails")
       .then(function (response) {
            return (response.json());
        }).then(result1 => this.setState({
            id: result1
        }));
    }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }
  constructor(props) {
    super(props);
console.log('constructor')
    this.state = {
      id: []
    };

  }
  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyMapComponent;*/


const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");
const {  withStateHandlers } = require("recompose");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
var googleMapsInfobox = require("google-maps-infobox")

const MapWithAMarkerClusterer = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `4000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
    
    
   
    
  })
  ,

  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 17.3850,lng: 78.4867}}
  >

    >
      {props.markers.map((marker,i) => (
       <Marker key={i}
        onClick={props.onToggleOpen}
          position={{ lat: marker.lat, lng: marker.lng }}  
        >
         {props.isOpen &&<InfoWindow onCloseClick={props.onToggleOpen(marker)}>
        <div>
        
          Controlled zoom: {marker.type}
        </div>
      </InfoWindow>
           }
        </Marker>
   
      ))}
 
  </GoogleMap>
);

export default class Googlemap extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      'http://10.10.200.14:9000','/getDetails'
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ markers: result });
        console.log(this.state.markers[0].lat);
      });
      
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}


/*
const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
//const demoFancyMapStyles = require("./demoFancyMapStyles.json");

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`,width:`100%`}} />,
    containerElement: <div style={{ height: `4000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 17.3850,lng: 78.4867},
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.center}
    
  >
    <InfoBox
      defaultPosition={ { lat: 17.3850,lng: 78.4867}}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello, Taipei!
        </div>
      </div>
    </InfoBox>
    <Marker
      position={{ lat: 17.3850,lng: 78.4867}}
      onClick={props.onToggleOpen}
    >
      { <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
);
*/