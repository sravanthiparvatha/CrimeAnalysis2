import React from 'react';
import request from 'superagent';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import Loginheader from './Loginheader';
import Footer from './Footer';
import 'react-dropdown/style.css'
import Select from 'react-select-plus';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

let coords = {
    lat: 17.3850,
    lng:78.4867
};
const params = {v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM'};
class Registerform extends React.Component{
   
        constructor(props) {
            super(props);
    
            this.state = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                lat:"",
                lng:"",
                alerts:""
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
            this.onDragEnd=this.onDragEnd.bind(this);
            this.morning=this.morning.bind(this);
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
           //document.getElementById('latitude').value = e.latLng.lat()
             //        document.getElementById('longitude').value =  e.latLng.lng()
    
          }
    
          onCloseClick() {
    
            console.log('onCloseClick');
          }
    
          onClick(e) {
    
            console.log('onClick '+coords.lat +coords.lng+'  hello  '+ e.latlng, e.latlng);
        coords=e.latLng;
          }
    
        handleSubmit(event) {
    console.log('handle submit start');
            event.preventDefault();
    
            this.setState({ value: event.target.value });
    
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
    console.log('name'+name+'\nalerts '+this.state.alerts+'\nlat lng'+this.state.lat+' '+this.state.lng)
            if (password === confirmPassword) {
    
                request
                    .post("http://10.10.200.14:9000/createUser")
                    .send({ name: name, email: email, password: password,alerts:this.state.alerts,lat:this.state.lat,lng:this.state.lng  })
                    .then(
                    (response) => {
                        // response.body will be the returned data from your play app, which is an array of objects
                        // I kept the data as object with "place" as the key, and [lat,longs] as value.
                        // following code converts array of objects into the format which my component is accepting.
                        console.log("response is ok");
                        window.alert("Account created sucessfully pleas Login to continue");
                        window.location.href="/login";
				
                    });
            }
            else {
                //	console.log("nope");
                alert("Password and confirm password are not matching");
            }
            
            console.log('handle submit end');
        }
    
        handleNameChange(event) {
            this.setState({
                name: event.target.value,
            });
            var name = document.getElementById("name");
            name.addEventListener("input", function (event) {
    
                if (name.validity.patternMismatch) {
                    name.setCustomValidity("Username must contain only alphabets and numbers!");
                }
                else {
                    name.setCustomValidity("");
                }
            });
    
        }
    
        handleEmailChange(event) {
            this.setState({
                email: event.target.value,
            });
            var email = document.getElementById("email");
            email.addEventListener("input", function (event) {
                if (email.validity.typeMismatch) {
                    email.setCustomValidity("I expect an e-mail, darling!");
                } else {
                    email.setCustomValidity("");
                }
            });
        }
    
        handlePasswordChange(event) {
            this.setState({
                password: event.target.value,
    
            });
    
    
        }
    
        handleConfirmPasswordChange(event) {
            this.setState({
                confirmPassword: event.target.value,
    
            });
    
        }
        morning(event)
        {
            console.log('in morning change3424');
            if(event.target.checked)
        this.setState({
            alerts : "true"
        });
        else
        this.setState({
            alerts : "false"
        });
        console.log('end of morning');
    
        }
    
    
    
    
        render() {
            return (
                <div id="register" className="main-agileinfo slider ">
                <Loginheader/>
                <br/>
                <br/>
                    <div className="items-group">
                        <div className="item agileits-w3layouts">
                            <div className="block text main-agileits">
                                <span className="circleLight"></span>
    
                                <div className="login-form loginw3-agile">
                                    <div className="agile-row">
                                    
                                        <h1><u>SIGN UP</u></h1>
                                        <div className="login-agileits-top">
                                            <form autoComplete="off" onSubmit={this.handleSubmit}>
                                            <p>
                                                User Name &emsp;&emsp;&emsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                         
  
  
                                                    <input type="text"
                                                    className="name"
                                                    id="name"
                                                    pattern="^[A-Za-z0-9_.-@]*$"
                                                    maxLength="20"
                                                    autoFocus
                                                    
                                                    placeholder="      Enter username"
                                                    onChange={this.handleNameChange}
                                                    value={this.state.name} required />
                                                   

                                               
                              
                                                <br/>Email id<br/>

                                                <input type="email"
                                                    className="email"
                                                    id="email"
                                                    autoFocus
                                                    placeholder="Enter email id"
                                                    onChange={this.handleEmailChange}
                                                    value={this.state.email} required />
                                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                                    <br/><br/>
                                                Password
                                               
                                                <input type="password"
                                                    className="password"
                                                    id="password"
                                                    required pattern="^[A-Za-z0-9_.-@]*$"
                                                   required minLength="6" maxLength="10"
                                                    autoFocus
                                                    placeholder="      Enter password"
                                                    onChange={this.handlePasswordChange}
                                                    value={this.state.password} />
                                                  <br/>
                                                   
                                                Confirm Password
                                                <input type="password"
                                                    className="confirmPassword"
                                                    id="confirmPassword"
                                                    required pattern="^[A-Za-z0-9_.-@]*$"
                                                    required minLength="6" maxLength="10"
                                                    autoFocus
                                                    placeholder="Re-enter password"
                                                    onChange={this.handleConfirmPasswordChange}
                                                    value={this.state.confirmPassword} />
                                                    <br/>
                                                    <br/>
                                               
                                                    <Gmaps
                  width={'700px'}
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
                </Gmaps><br/><br/>
                <div><input type="checkbox" name="timeRange" id="timeRange" onChange={this.morning} value="Morning" />   Alerts ?</div>&emsp;
                                          
                                                   
                                              &emsp; &emsp; 
                                                
                                                <br></br>
                                                &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                               <button> <i class="glyphicon glyphicon-ok"></i>  SIGNUP</button>    
                                                
                                        <div className="login-agileits-bottom wthree">
                                        <h6>Already a user?&emsp; 
                                        <Link to='/Login' >  Login</Link></h6>
                                        <div id='chart-container'></div>
                                        </div>
                                        </p>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                             

                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
    
            );
        }
}
export default Registerform; 