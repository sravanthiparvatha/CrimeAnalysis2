import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col } from 'reactstrap';
import {Button} from 'react-bootstrap';

var accesstoken=localStorage.getItem("accesstoken");
class ForgotPasssword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {  
            email: "",  
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value });
        var email = document.getElementById('email').value;
        
            fetch ( "http://10.10.200.22:9000/mail/"+email , 
            {
             method: "GET",     
             headers: {
                 "Content-Type": "application/json",
                 "Accept"    :   "application,json",
                 "Authorization" : 'Bearer'+ accesstoken,
               },
                       
            
     }).then(result1=>result1.json())
     .then((result1) => {
        console.log(result1);
         
         }
     )
    }
      
    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }
    render () {
        return (
            <center> 
                <br/><br/><br/>
              <Card onSubmit={this.handleSubmit}><br/>
                <CardSubtitle>Enter the Email Address</CardSubtitle><br/>
                <input type="email"
                       id="email"
                       autoFocus
                       placeholder="Enter email id"
                       onChange={this.handleEmailChange}
                       value={this.state.email} required/><br/>
                <Button bsStyle="danger" onClick={this.handleSubmit}>Submit</Button>
               </Card>  
              </center>
        );
    }

}

export default ForgotPasssword;
