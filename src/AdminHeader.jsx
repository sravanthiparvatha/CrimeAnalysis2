import React from 'react';
import { Link } from 'react-router-dom';
class AdminHeader extends React.Component {
  constructor(props)
  {
    super(props);
    this.logout=this.logout.bind(this);
  }


  logout()
  {
    console.log(" in logut")
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("role");
//    Browsehistory.pushState('/');
//history.push("/")
  }
    render() {
        return(<div id="main-header-container"><nav className="navbar navbar-default navbar-fixed-top">
  <div className="">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

    </div>
    <div className="collapse navbar-collapse">
      <div className="container">
        <div className="row">
          <div className="col-sm-12" id="main-header">
            <div class="logo">
              <Link to='/' >
                <img src="logo.png" />
                <div>Crime Analysis</div>
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right main-navigation">
              <li><Link to='/MapContainer' ><i className="glyphicon glyphicon-plus"></i> Add Crime</Link></li>
              <li><Link to='/User' ><i className="glyphicon glyphicon-user"></i>My Profile</Link></li>
              <li><Link to='/' > <button className="logout" onClick={this.logout} >Logout</button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
<br/>

</div>

        )}
}
export default AdminHeader;
