import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col } from 'reactstrap';
import {Button} from 'react-bootstrap';
import request from 'superagent';

class ForgotPassword1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    }
  
    handleSubmit(event) {

        event.preventDefault();
console.log("hi");
        this.setState({ value: event.target.value });
        
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {

            request
                .post("http://10.10.200.22:9000/user/reset")
                .send({  password: password,token:this.props.match.params.token})
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
            //  console.log("nope");
          window.alert("Password and confirm password are not matching");
        }
console.log(this.props.match.params.token);
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
    
  render() {
      return (
        <Card >
          <CardTitle>Forgot password</CardTitle>
          <CardSubtitle>Password
                                            <input type="password"
                                                className="password"
                                                id="password"
                                                required pattern="^[A-Za-z0-9_.-@]*$"
                                                required minLength="6" maxLength="10"
                                                autoFocus
                                                placeholder="Enter password"
                                                onChange={this.handlePasswordChange}
                                                value={this.state.password} /></CardSubtitle><br/>
        <CardSubtitle>Confirm Password
                                            <input type="password"
                                                className="confirmPassword"
                                                id="confirmPassword"
                                                required pattern="^[A-Za-z0-9_.-@]*$"
                                                required minLength="6" maxLength="10"
                                                autoFocus
                                                placeholder="Re-enter password"
                                                onChange={this.handleConfirmPasswordChange}
                                                value={this.state.confirmPassword} /></CardSubtitle>
          <Button bsStyle="danger" onClick={this.handleSubmit}>Change Password</Button>
        
         </Card>   
      );
  }
}

export default ForgotPassword1;