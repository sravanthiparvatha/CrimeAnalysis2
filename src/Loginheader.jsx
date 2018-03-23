import React from 'react';
import { Link,history } from 'react-router-dom';
import UserProfile from './UserProfile';
import Header from './Header';
import AdminHeader from './AdminHeader';
import UserHeader from './UserHeader';
class Loginheader extends React.Component{
  constructor(props)
  {
    super(props);
    this.logout=this.logout.bind(this);
  }


  logout()
  {
    console.log(" in logut")
    localStorage.removeItem("accesstoken");
//    Browsehistory.pushState('/');
//history.push("/")
  }

  render()
   {
    var accesstoken;
    var role=localStorage.getItem("role");
    accesstoken = localStorage.getItem("accesstoken");
       if(role=="User")
       return(<UserHeader/>);
      if(role=="Admin")
      return(<AdminHeader/>);
  else
  return(<Header/>);
  }
}
export default Loginheader;
