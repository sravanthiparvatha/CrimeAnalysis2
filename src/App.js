import React, { Component } from 'react';

import Registerform from './Registerform';
import './App.css';
import Header from './Header';
import SlideImages from './SlideImages';
import Explore from './Explore';
import { Route } from 'react-router-dom';
import Home from './Home';
import CampMapContainer from './CampMapContainer';
import Map from './Map';

import logo from './logo.svg';
import Loginform from './Loginform';
import RegCrime from './RegCrime';



class App extends Component {
 
  render() {
    return (
     <div>
  <Route path="/" exact component={Home}/>
      <Route path="/Register" exact  component={Registerform} />
      <Route path="/Login" exact  component={Loginform} />
      <Route path="/MapContainer" exact  component={RegCrime} />
    </div>
    );
  }
}

export default App;



