import React from 'react';
import {Button} from 'react-bootstrap';
import './UpdatePassword.css';
import request from 'superagent'; 

class UpdatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            opassword: "",
            npassword: "",
            cpassword: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOldPasswordChange=this.handleOldPasswordChange.bind(this);
        this.handleNewPasswordChange=this.handleNewPasswordChange.bind(this);
        this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
    }

    handleChange(event) {

		event.preventDefault();

        this.setState({ value: event.target.value });
        var accesstoken=localStorage.getItem("accesstoken");
        var refreshtoken,expirytime;

        var opassword = document.getElementById('opassword').value;
        var npassword = document.getElementById('npassword').value;
		var cpassword = document.getElementById('cpassword').value;
        var form = JSON.stringify({opassword:opassword, npassword : npassword});
		if (npassword === cpassword) {

			fetch ( "http://10.10.200.22:9000/user/changeP" , 
           {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },
              body: form,        
           
    }).then(result1=>result1.json())
    .then((result1) => {
       // console.log(result1);
        window.alert("password updated successfully");
        }
    )
    .catch(function(error){
        console.log(error);
   });
}
		else {
			//	console.log("nope");
          window.alert("New password and confirm password are not matching");
		}

    }
    

    handleOldPasswordChange(event) {
		this.setState({
			opassword: event.target.value,
		});
    }
    
    handleNewPasswordChange(event) {
		this.setState({
			npassword: event.target.value,
		});
    }
    
    handleConfirmPasswordChange(event) {
		this.setState({
			cpassword: event.target.value,
		});
	}
    render () {
        return (
            <div><br /><br /><br /><br /><br/><br/>
            <div className="card">
             <h1>Update Password</h1>
                <div className="container" >
                <label>Old Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="password"
                     id="opassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleOldPasswordChange}
					value={this.state.opassword} required/><br />
                     <label>New Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="password"
                     id="npassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleNewPasswordChange}
					value={this.state.npassword} required/><br />
                     <label>Confirm Password</label>&nbsp;
                    <input type="password"
                     id="cpassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleConfirmPasswordChange}
					value={this.state.cpassword} required/><br/>
                    <Button bsStyle="danger" onClick={this.handleChange}>Update Password</Button>
                   </div>     
                    </div>
                    </div>
        );
    }
}

export default UpdatePassword;