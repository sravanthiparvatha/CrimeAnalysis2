import React, { Component } from 'react';
//import React from 'react';
//import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';
//import request from 'superagent';

import CampMapContainer from './CampMapContainer';
//import Map from './Map';
//import React from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
let coords = {
    lat: 17.3850,
    lng:78.4867
};

 
const params = {v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM'};
class RegCrime extends React.Component {
   
   
    constructor(props) {
        super(props);

        this.state = {
           day:"",
           mon:"",
           year:"",
           type:"",
           gender:"",
           gender1:"",
           address:"",
           city:"",
           state:"",
           lat:"",
           lng:"",
           country:"",
        };
       this.handleDayChange=this.handleDayChange.bind(this);
       this.handleMonthChange=this.handleMonthChange.bind(this);
       this.handleYearChange=this.handleYearChange.bind(this);
       this.handleTypeChange=this.handleTypeChange.bind(this);
       this.handleVictimChange=this.handleVictimChange.bind(this);
       this.handleCriminalChange=this.handleCriminalChange.bind(this);
       this.handleAddressChange=this.handleAddressChange.bind(this);
       this.handleCityChange=this.handleCityChange.bind(this);
       this.handleStateChange=this.handleStateChange.bind(this);
       this.handleLatitudeChange=this.handleLatitudeChange.bind(this);
       this.handleLongitudeChange=this.handleLongitudeChange.bind(this);
       this.handleCountryChange=this.handleCountryChange.bind(this);
       this.handleSubmitChange=this.handleStateChange.bind(this);
        
    }

    

    handleSubmitChange(event) {
    
        event.preventDefault();

       

            request.post("http://localhost:9000/RegCrime")
                .send({ day: this.state.day,mon:this.state.mon, year: this.state.year,  type: this.state.type, gender: this.state.gender,  gender1: this.state.gender1,
                    address: this.state.address, city: this.state.city,  state: this.state.state, lat: this.state.lat,  lng: this.state.lng,
                    country: this.state.country})
                .then(
                (response) => {
                    // response.body will be the returned data from your play app, which is an array of objects
                    // I kept the data as object with "place" as the key, and [lat,longs] as value.
                    // following code converts array of objects into the format which my component is accepting.
                    console.log("response is ok");
                });
        
       

    }
    

    handleDayChange(event) {
        this.setState({
            day: event.target.value,
        });
       
    }

    handleMonthChange(event) {
        this.setState({
            mon: event.target.value,
        });
       
    }

    handleYearChange(event) {
        this.setState({
            year: event.target.value,
        });
       
    }

    handleTypeChange(event) {
        this.setState({
            type: event.target.value,
        });
       
    }

    handleVictimChange(event) {
        this.setState({
            gender: event.target.value,
        });
       
    }

    handleCriminalChange(event) {
        this.setState({
            gender1
            : event.target.value,
        });
       
    }
    
    handleAddressChange(event) {
        this.setState({
            address: event.target.value,
        });
       
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value,
        });
       
    }

    handleStateChange(event) {
        this.setState({
            state: event.target.value,
        });
       
    }

    handleLatitudeChange(event) {
        this.setState({
            lat: event.target.value,
        });
       
    }

    handleLongitudeChange(event) {
        this.setState({
            lng: event.target.value,
        });
       
    }



    handleCountryChange(event) {
        this.setState({
            country: event.target.value,
        });
       
    }



    onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true
        });
      }
     
      onDragEnd(e) {
        console.log('onDragEnd'+' hii '+e.latLng.lat(), e);
        //coords=e.latLng;
        coords.lat=e.latLng.lat();
        coords.lng=e.latLng.lng();
       // console.log('after cords change '+coords.lat+' longii'+coords.lng);
       document.getElementById('latitude').value = e.latLng.lat()
                 document.getElementById('longitude').value =  e.latLng.lng()
       
      }
     
      onCloseClick() {
    
        console.log('onCloseClick');
      }
     
      onClick(e) {
       
        console.log('onClick '+coords.lat +coords.lng+'  hello  '+ e.latlng, e.latlng);
    coords=e.latLng;
      }
 render()
     {
         return(
             <div>
            
             <title>Student Registration Form</title>
             
            
             <h3>CRIME REGISTRATION FORM</h3>
             
             <form autoComplete="off" onSubmit={this.handleSubmitChange}>
              
             <table align="center" >
              
            
            
              
             <br/>
             <tr>
             <td>DATE OF CRIME</td>
              
             <td>
             <select name="Birthday_day" id="Crime_Day" onChange={this.handleDayChange}>
             <option value="-1">Day:</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
              
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
             <option value="11">11</option>
             <option value="12">12</option>
              
             <option value="13">13</option>
             <option value="14">14</option>
             <option value="15">15</option>
             <option value="16">16</option>
             <option value="17">17</option>
             <option value="18">18</option>
             <option value="19">19</option>
             <option value="20">20</option>
             <option value="21">21</option>
              
             <option value="22">22</option>
             <option value="23">23</option>
             <option value="24">24</option>
             <option value="25">25</option>
             <option value="26">26</option>
             <option value="27">27</option>
             <option value="28">28</option>
             <option value="29">29</option>
             <option value="30">30</option>
              
             <option value="31">31</option>
             </select>
              
             <select id="Birthday_Month" name="Crime_Month" onChange={this.handleMonthChange}>
             <option value="-1">Month:</option>
             <option value="January">Jan</option>
             <option value="February">Feb</option>
             <option value="March">Mar</option>
             <option value="April">Apr</option>
             <option value="May">May</option>
             <option value="June">Jun</option>
             <option value="July">Jul</option>
             <option value="August">Aug</option>
             <option value="September">Sep</option>
             <option value="October">Oct</option>
             <option value="November">Nov</option>
             <option value="December">Dec</option>
             </select>
              
             <select name="Birthday_Year" id="Crime_Year" onChange={this.handleYearChange}>
              
             <option value="-1">Year:</option>
             <option value="2012">2012</option>
             <option value="2011">2011</option>
             <option value="2010">2010</option>
             <option value="2009">2009</option>
             <option value="2008">2008</option>
             <option value="2007">2007</option>
             <option value="2006">2006</option>
             <option value="2005">2005</option>
             <option value="2004">2004</option>
             <option value="2003">2003</option>
             <option value="2002">2002</option>
             <option value="2001">2001</option>
             <option value="2000">2000</option>
              
             <option value="1999">1999</option>
             <option value="1998">1998</option>
             <option value="1997">1997</option>
             <option value="1996">1996</option>
             <option value="1995">1995</option>
             <option value="1994">1994</option>
             <option value="1993">1993</option>
             <option value="1992">1992</option>
             <option value="1991">1991</option>
             <option value="1990">1990</option>
              
             <option value="1989">1989</option>
             <option value="1988">1988</option>
             <option value="1987">1987</option>
             <option value="1986">1986</option>
             <option value="1985">1985</option>
             <option value="1984">1984</option>
             <option value="1983">1983</option>
             <option value="1982">1982</option>
             <option value="1981">1981</option>
             <option value="1980">1980</option>
             </select>
             </td>
             </tr>
              
             <br/>
             <tr>
             <td>Crime Type</td>
             <td><input type="text" name="Crime_type"  id="Crime_type" maxlength="100" onChange={this.handleTypeChange}/></td>
             </tr>
              
          
             <br/>
              
             
             <tr>
             <td> VICTIM GENDER</td>
             <td>
             Male <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Male" />
             Female <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Female" />
             Others <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Other" />
             </td>
             </tr>
             <br/>
             <tr>
             <td> CRIMINAL GENDER</td>
             <td>
             Male <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Male" />
             Female <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Female" />
             Others <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Other" />
             </td>
             </tr>
              
             <br/>
             <tr>
             <td>DESCRIPTION OF CRIME <br /><br /><br /></td>
             <td><textarea name="Address" id="Address" rows="4" cols="30" onChange={this.handleAddressChange}></textarea></td>
             </tr>
             <br/>
            
             <tr>
             <td>CITY</td>
             <td><input type="text" name="City" id="City" maxlength="30" onChange={this.handleCityChange}/>
           
             </td>
             </tr>
             <br/>
             
             
              
          
             <tr>
             <td>STATE</td>
             <td><input type="text" name="State" id="State" maxlength="30" onChange={this.handleStateChange} />
       
             </td>
             </tr>
             <tr>
             <td>LATITUDE</td>
             <td><input type="text" name="latitude"  id= "latitude" value="" onChange={this.handleLatitudeChange} readonly="readonly"/></td>
             </tr>
             <tr>
             <td>LONGITUDE</td>
             <td><input type="text" name="longitude"  id= "longitude" value="" onChange={this.handleLongitudeChange} readonly="readonly"/></td>
             </tr>
             <br/>
             <tr>
             <td>COUNTRY</td>
             <td><input type="text" name="Country" id="Country" value="India" readonly="readonly" onChange={this.handleCountryChange}/></td>
             </tr>
             <br/>
             <tr>
             <td><Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}
        onClick={this.onClick}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, Move me to crime location :)'}
          onCloseClick={this.onCloseClick} />
       
         
      </Gmaps></td>
            </tr>
            <tr>
                <br/>
                <br/>
            
             <td><button className="btn btn-primary" id="submit"  > <i class="glyphicon glyphicon-ok"></i>Submit</button></td>
             </tr>
       
             </table>
             </form>
             </div>
             
            
         );
     }
 

}
export default RegCrime;