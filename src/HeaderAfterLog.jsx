import React from 'react';
import './Header.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button, Nav, Navbar, NavItem, FormGroup } from 'react-bootstrap';


class HeaderAfterLog extends React.Component {

    constructor(props) {
		super(props);

        this.handleUserChange = this.handleUserChange.bind(this);
	}



    handleUserChange(event){

        event.preventDefault();
        var accesstoken=localStorage.getItem("accesstoken");
        var refreshtoken,expirytime;
		var role;
		fetch ( "http://10.10.200.22:9000/users/me" , 
        {
            method: "GET",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },       
           
    }).then(result1=>result1.json())
    .then(function(result1){
        //accesstoken=window.localStorage.getItem('result1.access_token');
        //expirytime=window.localStorage.getItem('response.expiry_time');
        //refreshtoken=window.localStorage.getItem('response.refresh_token');
       
		role=result1.role;
		
		console.log(role);
      
    })
    .catch(function(error){
        console.log(error);
    });
    }


    render() {
        return (
            

            <div class="header">
                <div id="header-sroll">
                   
                    <Navbar.Form>
                        <Nav pullRight>
                           <ButtonToolbar>
                           <span class="glyphicons glyphicons-user"></span>
                              <Link to='/' class="active">Logout</Link>
                            </ButtonToolbar>
                        </Nav>
                    </Navbar.Form>
              
                </div>
            </div>
        
        );
    }
}

export default HeaderAfterLog;