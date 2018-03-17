import React from 'react';
import request from 'superagent';
import './SearchCrime.css';
import CampMapContainer from './CampMapContainer';
import Filters from './Filters';
import Loginheader from './Loginheader';
import Google from './Google';
import Googlemap from './Googlemap';
import Chart from './Chart';

class SearchCrime extends React.Component
{
render(){
 return(<div class="wrap">
 <Loginheader/>
    <div className="fleft"><div  id="fil"> <h1> FILTERS</h1> </div><Filters/></div>
    <div className="fright">    <Googlemap/>

    </div>
    <div className="fright1"> <br/>  <br/>  <br/>  <br/>  <br/>  <br/> <h1>ANALYSIS</h1><Chart/></div>
</div>);
}
}

export default SearchCrime;