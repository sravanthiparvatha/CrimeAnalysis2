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


class Home extends Component {
 
  render() {
    return (
    
      <div>
        <Header>
          </Header>
        <section>		
          <div>
         
            <SlideImages style={{ height: 50}}/>
              <br/><br/><br/>
                <Explore/>
                    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>
                    <div id="mapid"></div>
                    <Chart/>
              <AboutUs/>
              <Footer/>
            </div>  
        </section>
      </div>
    );
  }
}

export default Home;
