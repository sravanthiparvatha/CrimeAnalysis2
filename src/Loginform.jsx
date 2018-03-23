import React, { Component } from 'react';
import './LoginForm.css';

import request from 'superagent';
import { Link } from 'react-router-dom';
import Loginheader from './Loginheader';

class Loginform extends React.Component {
	 constructor(props) {
		 super(props);

		 this.state ={
			 email:"",
			 password:"",
		 };
		 this.handleSubmit=this.handleSubmit.bind(this);
		 this.handleEmailChange=this.handleEmailChange.bind(this);
		 this.handlePasswordChange=this.handlePasswordChange.bind(this);
	 }

	 handleSubmit(event) {

		 event.preventDefault();

		 this.setState({ value: event.target.value });
		 var accesstoken;
		 var role;
		 var email = document.getElementById('email').value;
		 var password = document.getElementById('password').value;

		 request
				.post("http://10.10.200.14:9000/login")
				.send({ email: email, password: password })
			//	.then(result1=>result1.json())
    .then(function(result1){
       
		console.log(result1);
		accesstoken = result1.access_token;
		role=result1.body.role;
		console.log(accesstoken);
		console.log(role);
		localStorage.setItem("accesstoken",result1.body.access_token);
		localStorage.setItem("role",role);
		console.log(localStorage.getItem("role"));
		window.alert("Login successful");
		window.location.href="/SearchCrime";
       
		
     
    })
    .catch(function(error){
		window.alert("please enter correct details");
        console.log(error);
    });
       
    
    }
	 

	 handleEmailChange(event) {
		this.setState({
			email: event.target.value,

		});

	}
hhh
		handlePasswordChange(event) {
			this.setState({
				password: event.target.value,
	
			});
	
	}
	render() {
		return (
			<div id="register" className="main-agileinfo slider "><br/>
			<Loginheader/>
				<div className="items-group">
					<div className="item agileits-w3layouts">
						<div className="block text main-agileits">
							<span className="circleLight"></span>

							<div className="login-form loginw3-agile">
								<div className="agile-row">
								 <h1><u>LOGIN</u></h1>
									<div className="login-agileits-top">
										<form autoComplete="off" onSubmit={this.handleSubmit}>
										<p>
											Email id<br/>

											<input type="email"
												className="email"
												id="email"
												autoFocus
												placeholder="Enter email id"
												onChange={this.handleEmailChange}
												value={this.state.email} required />
													<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
												<br/><br/>
											Password <div class="inner-addon left-addon">
											<i className="glyphicon glyphicon-lock"></i>
											<input type="password"
												className="password"
												id="password"
												required pattern="^[A-Za-z0-9_.-@]*$"
											   required minLength="6" maxLength="10"
												autoFocus
												placeholder="      Enter password"
												onChange={this.handlePasswordChange}
												value={this.state.password} />
											   </div> 
											   <Link to='/ResetPassword' >   <small id="emailHelp" class="form-text text-muted">Forgot Password</small> </Link>&emsp; &emsp; 
											   
												 
												 <br></br>
											<label className="anim">
											
							
											   
											</label>  &emsp; &emsp; 
											
											<br></br>
											&emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
										   <button> <i class="glyphicon glyphicon-ok"></i>  LOGIN</button>    
											
									
									
									</p>
									</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Loginform;