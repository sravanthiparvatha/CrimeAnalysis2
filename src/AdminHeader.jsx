import React, { Component } from 'react';
//import {Link,hashHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class AdminHeader extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();

}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
handleLogout(){
 
}
render() {

return(
<div>
<Navbar  toggleable id="adminHeader">
  <Link to='/Login'><i class="glyphicon glyphicon-user"></i>LOGIN</Link>    
          <Link to='/Register'><i class="glyphicon glyphicon-user"></i>SIGNUP</Link>    
   
         <Link to='/Contact'>CONTACT US</Link>      
      </Navbar>
</div>
 );
   }
 }
export default AdminHeader;