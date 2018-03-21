import React from 'react';
import request from 'superagent';
import './SearchCrime.css';
import CampMapContainer from './CampMapContainer';
import Filters from './Filters';
import Loginheader from './Loginheader';
import Google from './Google';
import Googlemap from './Googlemap';
import Chart from './Chart';
import Regcrime from './Regcrime.css';

class SearchCrime extends React.Component
{
render(){
 return(<div className="wrap">
 <Loginheader/>
<Filters/>
</div>
   );
}
}

export default SearchCrime;