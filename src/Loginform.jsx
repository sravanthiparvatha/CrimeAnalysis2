import React, { Component } from 'react';
import './LoginForm.css';

import request from 'superagent';


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
hhh
		handlePasswordChange(event) {
			this.setState({
				password: event.target.value,
	
			});
	
	}
	render() {
		return (

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
	        
			
		
		);
	}
}

export default Loginform;