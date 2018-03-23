import React from 'react';
import Moment from 'react-moment';
class ListCrimes extends React.Component{

  render(){
  return(
  <div className="crime-list">
    {this.props.markers.map((marker,i) => (
    <div className="single-crime">
      <h3 class="crime-title">{marker.type}</h3>
      <p class="crime-description"> {marker.address}</p>
      <div class="crime-meta">
        <time> On  <Moment format="YYYY/MM/DD" date={marker.date}/></time>
        <div><span>Type:</span> <span>Assault</span></div>
      </div>
    </div>))}
   
  </div>
  );
  }
  }

  export default ListCrimes;
