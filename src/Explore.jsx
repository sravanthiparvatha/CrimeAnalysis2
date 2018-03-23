import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
class Explore extends React.Component{
render(){
return(<section className="section-padding hero">
<div className="container">
  <div className="row">
    <div className="col-sm-12 above-the-fold">
      <h1>Welcome to  Crime Analysis</h1>
      <div className="intro">
        <div className="intro-image">
          <img src="hyderabad.png" alt="hyderabad"/>
        </div>
        <div className="intro-text">
          <p> Crime is one of the most predominant and alarming aspects in our society and its prevention is a vital task. Crime analysis is a systematic way of detecting and investigating patterns and trends in crime. </p>
          <p>Search over 1000 departments by name, region, or zip code</p>
          <Link to='/SearchCrime'><i class="glyphicon glyphicon-map-marker"></i>Explore the Map </Link>&emsp;
          <Link to='/list'>List All Crimes    </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>);
    }
}
export default Explore;
