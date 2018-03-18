import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Header from './Header';
class Loginheader extends React.Component{
  constructor(props)
  {
    super(props);
    this.logout=this.logout.bind(this);
  }


  logout()
  {
    console.log(" in logut")
    localStorage.setItem("accesstoken",0);
  }
  
  render()
   {
    var accesstoken;
    var role= "admin";//localStorage.getItem("role");
    // let value=0;
    accesstoken = localStorage.getItem("accesstoken");
       if(role=="user")
       return(<div className="app-header">
       <nav className="navbar navbar-default navbar-fixed-top" role="navigation" ng-style="{'background-color' : appHeader.backgroundColor,'border-color': ''}">
       
      <Link to='/' > <button className="top-menu pull-right" onClick={this.logout} >LOGOUT</button></Link>
      <center><Link to='/User' ><h1 className="top-menu pull-left">  <i className="glyphicon glyphicon-user"></i></h1></Link></center>
    
       </nav>
     </div>);
      if(role=="admin")
      return(<div className="app-header">
       <nav className="navbar navbar-default navbar-fixed-top" role="navigation" ng-style="{'background-color' : appHeader.backgroundColor,'border-color': ''}">
  <div className="top-menu pull-right">     <center><Link to='/MapContainer' ><h1 className="top-menu pull-left">  <i className="glyphicon glyphicon-plus"></i></h1></Link></center>
    
    <Link to='/User' ><h1 className="top-menu pull-right">  <i className="glyphicon glyphicon-user"></i></h1></Link>
     <Link to='/' > <button className="top-menu pull-right" onClick={this.logout} >LOGOUT</button></Link>
     </div>
       </nav>
     </div>);
  else
  return(<Header/>); 
  }
}
export default Loginheader;