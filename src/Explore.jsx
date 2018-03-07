import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
class Explore extends React.Component{
render(){
return(<section className="section-padding hero">
      <div className="text">
        <div className="vertical-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1">
              <div id="w">  <h1>Welcome to  CrimeAnalysis</h1></div>
                <h2>Search over 1000 departments by name, region, or zip code</h2>
                <div className="searchbar">
              <div id="i" className="container">
              <div className="row">
            
             <button > <Link to='/SearchCrime'>Explore the Map </Link></button><br/>
                   
                       
                    
                      </div>
           </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>);
    }
}
export default Explore;