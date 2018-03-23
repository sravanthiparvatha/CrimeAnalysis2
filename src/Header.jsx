import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {

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
              <li><Link to='/Login'><i class="glyphicon glyphicon-user"></i>Login</Link></li>
              <li><Link to='/Register'><i class="glyphicon glyphicon-user"></i>Sign Up</Link></li>
              <li><Link to='/Contact'>About Us</Link></li>
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
export default Header;
