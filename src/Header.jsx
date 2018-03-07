import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
 
    render() {
        return(<div><nav className="navbar navbar-default navbar-fixed-top">
  <div className="">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
    
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/Login'><i class="glyphicon glyphicon-user"></i>LOGIN</Link></li>
        <li><Link to='/Register'><i class="glyphicon glyphicon-user"></i>SIGNUP</Link></li>
   
        
        <li><a href="search"><i class="glyphicon glyphicon-search"></i>SEARCH</a></li>
        <li><a href="aboutus">ABOUT US</a></li>
      </ul>
    </div>
  </div>
</nav>
<br/>

</div>
  
        )}
}
export default Header;