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
		 var accesstoken;
		 var role='user';
		 var email = document.getElementById('email').value;
		 var password = document.getElementById('password').value;

		 request
				.post("http://10.10.200.14:9000/users/login")
				.send({ email: email, password: password })
			//	.then(result1=>result1.json())
    .then(function(result1){
       
		console.log(result1);
       window.alert("Login successful");
        
		accesstoken = result1.access_token;
		role=result1.role;
		console.log(accesstoken);
		console.log(role);
        localStorage.setItem("accesstoken",result1.access_token);
       
		
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