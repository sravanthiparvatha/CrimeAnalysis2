import React, { Component } from 'react';
class Footer extends Component {
  constructor() {
    // In a constructor, call `super` first if the classNameNameName extends another classNameNameName
    super();
  }

  // `render` is called whenever the component's props OR state are updated.
  render() {
    return(
<nav id="footer">
    <p>All Rights Reserved. Copyright © 2018. Designed by Team-CrimeAnalysis</p>
</nav>
    );
 }
}
export default Footer;
