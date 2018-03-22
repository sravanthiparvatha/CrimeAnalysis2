import React, { Component } from 'react';

import Registerform from './Registerform';
import './App.css';
import Header from './Header';
import SlideImages from './SlideImages';
import AboutUs from './AboutUs';
import Explore from './Explore';
//import { Router,Route } from "react-router";
//import logo from './logo.svg';
//import Loginform from './Loginform';
import Map from './Map';
import Footer from './Footer';
import Chart from './Chart';
import Loginheader from './Loginheader';


class Home extends Component {

  render() {
    return (

      <div>
        <Loginheader/>
        <div id="main-content">
          <Explore/>
          <Chart/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
