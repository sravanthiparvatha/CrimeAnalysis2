import React, { Component } from 'react';
//import React from 'react';
//import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';
//import request from 'superagent';
import Regcrime from './Regcrime.css';
import CampMapContainer from './CampMapContainer';
//import Map from './Map';
//import React from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Select from 'react-select-plus';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
let coords = {
    lat: 17.3850,
    lng:78.4867
};

 let type2="";
const options = [
    'Assault', 'Murder', 'Kidnapping','Robbery', ' Sexual Assault',' Sexual abuse', 'Burglary', ' Property Crime','Theft', ' Theft of Vehicle', 'Drugs','Accident'

    
  ] 
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
           morning:"",
           afternoon:"",
           evening:"",
           late:"",
           address:"",
           city:"",
           state:"",
           lat:"",
           lng:"",
           country:"",
        };
           
       this.morning=this.morning.bind(this);
       this.afternoon=this.afternoon.bind(this);
       this.evening=this.evening.bind(this);
       this.late=this.late.bind(this);
       this.handleDayChange=this.handleDayChange.bind(this);
       this.handleMonthChange=this.handleMonthChange.bind(this);
       this.handleYearChange=this.handleYearChange.bind(this);
       this.handleTypeChange=this.handleTypeChange.bind(this);
       this.handleVictimChange=this.handleVictimChange.bind(this);
       this.handleCriminalChange=this.handleCriminalChange.bind(this);
       this.handleAddressChange=this.handleAddressChange.bind(this);
       this.handleCityChange=this.handleCityChange.bind(this);
       this.handleStateChange=this.handleStateChange.bind(this);
       this.onDragEnd=this.onDragEnd.bind(this);
       this.handleCountryChange=this.handleCountryChange.bind(this);
       this.handleSubmitChange=this.handleSubmitChange.bind(this);
        
    }

    

    handleSubmitChange(event) {
    console.log('Inside submit start');
        event.preventDefault();
console.log(type2);
       console.log(this.state.day);
       console.log(this.state.mon,);
       console.log(this.state.year);
       console.log(this.state.lat);
       console.log(this.state.lng);
       let time="";
    //   let type20="";
if(this.state.morning)
time+="morning ";
if(this.state.afternoon)
time+="afternoon ";
if(this.state.evening)
time+="evening ";
if(this.state.late)
time+="late ";
console.log('country   '+this.state.country);
let dd=this.state.year+'-'+this.state.mon+'-'+this.state.day;
console.log('date modified  '+dd);
       

            request.post("http://10.10.200.14:9000/crime")
                .send({ day: dd,time:time,  type: type2, gender: this.state.gender,  gender1: this.state.gender1,
                    address: this.state.address,  lat: this.state.lat,  lng: this.state.lng,
                    country: 'India'})
                .then(
                (response) => {
                    // response.body will be the returned data from your play app, which is an array of objects
                    // I kept the data as object with "place" as the key, and [lat,longs] as value.
                    // following code converts array of objects into the format which my component is accepting.
                    console.log("response is ok");
                });
        
                console.log('Inside submit end');

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
        
        console.log('start of drop down'+event.value)
      /*  this.setState({
            type: event.value,
        });*/
        type2=event.value;
       console.log('in type change'+type2)
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
    morning(event)
    {
        console.log('in morning change3424');
        if(event.target.checked)
    this.setState({
        morning : "true"
    });
    else
    this.setState({
        morning : "false"
    });
    console.log('end of morning');

    }


    afternoon(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        afternoon : "true"
    });
    else
    this.setState({
        afternoon : "false"
    });
    console.log('end of afternoon');

    }


    evening(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        evening : "true"
    });
    else
    this.setState({
        evening : "false"
    });
    console.log('end of evening');

    }


    late(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        late : "true"
    });
    else
    this.setState({
        late : "false"
    });
    console.log('end of late');

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
        this.setState({
            lat: coords.lat,
            lng:coords.lng,
        })
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
             
            <div id="sample" className="main-agileinfo slider ">
				<div className="container">
					
						<div className="block text main-agileits">
					

							<div className="login-form loginw3-agile">
								<div className="agile-row">
             
             <br/>
            
             <h1>CRIME REGISTRATION FORM</h1>
             
             <form autoComplete="off" id="my-form" onSubmit={this.handleSubmitChange}>
              
             
            
             <br/>
             <div className="form-inline"> 
             <label for="state_id" className="control-label">DATE OF CRIME</label>
             <br/>   
             <select className="form-control" name="Birthday_day" id="Crime_Day" onChange={this.handleDayChange}>
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
              
             <select className="form-control" id="Birthday_Month" name="Crime_Month" onChange={this.handleMonthChange}>
             <option value="-1">Month:</option>
             <option value="01">Jan</option>
             <option value="03">Feb</option>
             <option value="03">Mar</option>
             <option value="04">Apr</option>
             <option value="05">May</option>
             <option value="06">Jun</option>
             <option value="07">Jul</option>
             <option value="08">Aug</option>
             <option value="09">Sep</option>
             <option value="10">Oct</option>
             <option value="11">Nov</option>
             <option value="12">Dec</option>
             </select>
              
             <select className="form-control" name="Birthday_Year" id="Crime_Year" onChange={this.handleYearChange}>
              
             <option value="-1">Year:</option>
             <option value="2018">2018</option>
             <option value="2017">2017</option>
             <option value="2016">2016</option>
             <option value="2015">2015</option>
             <option value="2014">2014</option>
             <option value="2013">2013</option>
             <option value="2012">2012</option>
             
             </select>
                  
                
              
          
             </div>
              <br/>
              VICTIM GENDER<br/>
              <br/>
            <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Male" />  Male<br/>
             <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Female" />Female<br/>
          <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Other" />Other<br/>
                  
                            
             <br/>
              
               CRIMINAL GENDER     
         <br/>     <br/>
              <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Male" />Male<br/>
              <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Female" />Female<br/>
              <input type="radio" name="Gender1" id="Gender1" onChange={this.handleCriminalChange} value="Other" />Other<br/>
                  
                
             <br/>
              
               TIME OF CRIME     
              <br/><br/>
             <input type="radio" name="timeRange" id="timeRange" onChange={this.morning} value="Morning" /> Morning<br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.afternoon} value="Morning" /> afternoon<br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.evening} value="Evening" /> Evening<br/>
           <input type="radio" name="timeRange" id="timeRange" onChange={this.late} value="LateNight" /> LateNight<br/>
                  
                
              
             <br/>
             <br/>
              
              DESCRIPTION OF CRIME <br /><br /><br />     
              <textarea name="Address" id="Address" rows="4" cols="30" onChange={this.handleAddressChange}></textarea>     
                
             <br/>
             <br/>
             
              
              
              LATITUDE     
              <input type="text" name="latitude"  id= "latitude" value="" onChange={this.handleLatitudeChange} />     
                
              
              LONGITUDE     
              <input type="text" name="longitude"  id= "longitude" value="" onChange={this.handleLongitudeChange} readonly="readonly"/>     
                
             <br/>
              
              Crime Type     
              <Dropdown options={options} id='type' value={this.state.type} onChange={this.handleTypeChange}  placeholder="Select an option" />     
                
              
          
             <br/>
              
              COUNTRY     
              <input type="text" name="Country" id="Country" value="India" readonly="readonly" onChange={this.handleCountryChange}/>     
                
             <br/>
              
        <Gmaps
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
       
         
      </Gmaps>     
               
             
                <br/>
                <br/>
            
               <button> <i class="glyphicon glyphicon-ok"></i>SUBMIT</button>     
                
       
                   
             </form>
            
             </div>
							</div>
						</div>
					
				</div>
			</div>
 
            
         );
     }
 

}
export default RegCrime;