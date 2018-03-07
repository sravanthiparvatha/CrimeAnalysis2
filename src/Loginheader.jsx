import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
class Loginheader extends React.Component{
   render()
   {
     let value=0;
       if(value)
       return(<div class="app-header">
       <nav class="navbar navbar-default navbar-fixed-top" role="navigation" ng-style="{'background-color' : appHeader.backgroundColor,'border-color': ''}">
       
     <center><Link to='/User' ><h1 class="top-menu pull-right">  <i class="glyphicon glyphicon-user"></i></h1></Link></center>
     <Link to='/' > <button class="top-menu pull-right">LOGOUT</button></Link>
     
       </nav>
     </div>);
     else
    return(<div>
      <div class="app-header">
       <nav class="navbar navbar-default navbar-fixed-top" role="navigation" ng-style="{'background-color' : appHeader.backgroundColor,'border-color': ''}">
       
       <Link to='/Register' > <button class="top-menu pull-right">signin</button></Link>
     <Link to='/Login' > <button class="top-menu pull-right">login</button></Link>
     </nav>
     </div>
    </div>) }
}
export default Loginheader;