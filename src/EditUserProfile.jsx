import React from 'react';
import request from 'superagent';
 import ReactDOM from 'react-dom';


 import HeaderAfterLog from './HeaderAfterLog';
 import axios,{ post } from 'axios';



var mar = {
    margin: '50px 700px 30px 600px',
}
var textstyle = {
    color: 'white',
};



 var accesstoken=localStorage.getItem("accesstoken");
class EditUserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email : "",
            likes:"",
            img:"",
            image:"",
        };

       
    }

componentDidMount() {
    fetch ( "http://10.10.200.22:9000/users/me" , 
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
           this.setState ({
             name:result1.userName,
            email:result1.email,
            likes:result1.likes,
            img:result1.img,
            });
            console.log(this.state.img);
        
            
        })

        .catch(function(error){
            console.log(error);
       });
    
      
       
        
        
        this.handleSubmit = this.handleSubmit.bind(this);
      

    }

    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        var likes = document.getElementById('likes').value;

        var refreshtoken,expirytime;
        var accesstoken=localStorage.getItem("accesstoken");
        var role='user';
        var form = JSON.stringify({likes: likes,image:this.state.image });
        fetch ( "http://10.10.200.22:9000/user/edit" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },       
            body: form, 
    }).then(result1 => result1.json())
    .then(function(result1){
        console.log(result1);
       
      console.log("sent")
        
       })
       .catch(function(error){
           console.log(error);
       });
    }


   

    handleFile(event) {
        var file,image;
        var current=this;
        console.log(event.target.files[0]);
     
      /*  this.setState({
           file : event.target.files[0]   
            });*/

            const url = 'http://10.10.200.22:9000/images';
            const formData = new FormData();
           
            formData.append('file',event.target.files[0]);
          
            const config={
                
                headers: {
                    'content-type': 'multipart/form-data',
                    'accept'     : 'application/json'
                 }
            }
            console.log("be");
         //   return post(url,formData,config)
            axios.post(
                url,formData,config )
                .then(result => {
                    console.log(result.data);
                    current.setState({
                        image: result.data,
                    });
                    console.log(this.state.image);
                    
                })
              
    }  
    
    render () {
        return (
           
            <div>
            <HeaderAfterLog/><br />
            <body>
               <div > 
              <div className="col-md-9">
                    <div class="float-center" >
                    <div style={mar}>
                        <div class="login-w3l" > 
                        
                                <div class="top-img-agileits-w3layouts">
                                    <h1 class="sub-head-w3-agileits">Edit Profile</h1>
                                       
                                            <div class="login-form-c">  
                                                 <form autoComplete="off" onSubmit={this.handleSubmit}>

                                                &nbsp;&nbsp;

                                                        <br/>  <br/>  <br/>                                 

                                                Name    <input type="text"
                                                          id="name"
                                                          value={this.state.name} disabled="disabled"
                                                       />
                                                 <br/>    Email    <input type="email"
                                                          id="email"
                                                          value={this.state.email} disabled="disabled"
                                                       />
                                                 

                                                                                                    
                                                   
                                                    <input type="submit" value="Send"/>
                                                </form>
                                            </div>      
                                        </div>
                                    </div> 
                                    </div>
                                </div>
                            </div>
                        

                  
                           
                    <div class="clear"></div>
                        <div class="footer-agileits">
                        </div>
</div>
                </body>
</div>
        
        
        );
    }
}

export default EditUserProfile;