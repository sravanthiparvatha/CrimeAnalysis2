import React, { Component } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import request from 'superagent';


class ForgotPassword extends React.Component {
	/*
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
		 var email = document.getElementById('email').value;
		 var password = document.getElementById('password').value;
		 request
				.post("http://10.10.200.21:9000/login")
				.send({ email: email, password: password })
				.then(
				(response) => {
					// response.body will be the returned data from your play app, which is an array of objects
					// I kept the data as object with "place" as the key, and [lat,longs] as value.
					// following code converts array of objects into the format which my component is accepting.
					console.log("response is ok");
				});
		     
	 }
	 handleEmailChange(event) {
		this.setState({
			email: event.target.value,
		});
	}
		handlePasswordChange(event) {
			this.setState({
				password: event.target.value,
	
			});
	
	}*/
	constructor(props) {
		super(props);
	this.state = {
		email:"",
		
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	
	this.handleEmailChange = this.handleEmailChange.bind(this);
}

handleSubmit(event) {

	event.preventDefault();

	this.setState({ value: event.target.value });
	
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirmPassword').value;

	if (password === confirmPassword) {

		request
			.post("http://10.10.200.22:9000/users/ResetPassword")
			.send({  email: this.state.email})
			.then(
			(response) => {
				// response.body will be the returned data from your play app, which is an array of objects
				// I kept the data as object with "place" as the key, and [lat,longs] as value.
				// following code converts array of objects into the format which my component is accepting.
				console.log("response is ok");
				window.alert("password  changed sucessfully");
				window.location.href="/login";
			});
	}
	else {
		//	console.log("nope");
	  window.alert("Password and confirm password are not matching");
	}
console.log(this.props.token);
}


handleEmailChange(event) {
	this.setState({
	email: event.target.value,
	});
}





	render() {
	/*	return (
			<div id="login">
            <br/><br/> 
	           <div className="container">	
		        <div className="login-w3l">	
			     <div className="login-form">	
				 <h1 className="wthree">LOGIN</h1>	
				  <form  className="agile_form" onSubmit={this.handleSubmit}>
		            <div className="w3ls-name1">
					 <label className="header">Email</label><br/>
					 <input placeholder="email@example.com" 
							id="email" 
							type="email" 
							required=""
							onChange={this.handleEmailChange}
							value={this.state.email}/>
					</div>
                    <br/>
				    <div className="w3ls-name1">
					 <label className="header">Password</label><br/>	
					 <input placeholder="password" 
							id="password" 
							type="password" 
							required=""
							onChange={this.handlePasswordChange}
							value={this.state.password}/>
				     </div>	<br/>
                     <button> <i class="glyphicon glyphicon-ok"></i>SUBMIT</button>
					</form>
			     </div>
		        </div>	
			    <div className="login-w3l-bg">
		        </div>
		        <div className="clearfix"></div>	
	           </div> 
			   	
	</div>
		);*/



		return (
			<div id="register" className="main-agileinfo slider ">
				<div className="items-group">
					<div className="item agileits-w3layouts">
						<div className="block text main-agileits">
							<span className="circleLight"></span>

							<div className="login-form loginw3-agile">
								<div className="agile-row">
					<u>	<h1>	<font size="6">RESET PASSWORD</font></h1></u>
								 
<p>
									<div className="login-agileits-top">
										<form autoComplete="off" onSubmit={this.handleSubmit}>
										
											
										<small id="emailHelp" class="form-text text-muted">Please enter the email address for your account.  

</small><br/><br/>
										Email address<br/>

                                                <input type="email"
                                                    className="email"
                                                    id="email"
                                                    autoFocus
                                                    placeholder="Enter email id"
                                                    onChange={this.handleEmailChange}
                                                    value={this.state.email} required />
													<br></br>
											&emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
										   <button> <i class="glyphicon glyphicon-ok"></i> Send Reset Link.</button>    

										  <br/><br/>
										  <small id="emailHelp" class="form-text text-muted">  Please check your email account’s Spam or Junk folder to ensure the message was not filtered.
</small>

										 			
									
									</form>
									
									</div>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default ForgotPassword;