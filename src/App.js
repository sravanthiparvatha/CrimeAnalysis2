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
import SearchCrime from './SearchCrime';
import UserProfile from './UserProfile';
import Loginheader from './Loginheader';
import ForgotPassword from './ForgotPassword';
import Goo from './Goo';
import AdminHeader from './AdminHeader';
import EditUserProfile from './EditUserProfile';
import UpdatePassword from './UpdatePassword';
import ListCrimes from './ListCrimes';
import Cluster from './Cluster';
import ForgotPassword1 from './ForgotPassword1';




class App extends Component {
 
  render() {
    return (
     <div>
  <Route path="/" exact component={Home}/>
      <Route path="/Register" exact  component={Registerform} />
      <Route path="/Login" exact  component={Loginform} />
      <Route path="/MapContainer" exact  component={RegCrime} />
      <Route path="/SearchCrime" exact  component={SearchCrime} />
      <Route path="/User" exact  component={UserProfile} />
      <Route path="/LoginHeader" exact  component={Loginheader} />
      <Route path="/ResetPassword" exact  component={ForgotPassword} />
      <Route path="/G" exact  component={Goo} />
      <Route path="/A" exact  component={AdminHeader} />
      <Route path="/editprofile" exact  component={EditUserProfile} />
      <Route path="/updatepassword" exact  component={UpdatePassword} />
      <Route path="/list" exact  component={ListCrimes} />
      <Route path="/cluster" exact  component={Cluster} />
      <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/forgotpassword/:token" exact component={ForgotPassword1}/>
    </div>
    );
  }
}

export default App;



