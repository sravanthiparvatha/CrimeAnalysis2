import React from 'react';
class ListCrimes extends React.Component{
  
    constructor(props) {
      super(props);
      this.state= {
        /*user:"",
        locations: {
          "gnit":[17.4118166,78.3967619],
          "charminar":[17.3615687,78.4724758]
          */
        markers:[],
        re:""
        }
      
    //  this.ComponentDidMount = this.ComponentDidMount.bind(this);
    }
    
  /*  ComponentDidMount(){
      const promise= request.get("http://localhost:9000/locations");
      const onSuccess=(val)=>{this.setState({user: val.body.login })};
      promise.then(onSuccess);
    }*/
    componentWillMount() {
      //this.setState({ markers:[] })
      //this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
    }
   // var re="";
    componentDidMount() {
      this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
      const url = [
        // Length issue
        'http://10.10.200.14:9000','/getDetails'
      ].join("")
  
      /*fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
          console.log(this.state.markers[0].lat);
        });
*/
         
    }


  render(){
  return(
  <div>
       {this.state.markers.map((marker,i) => (
    <div>
        <span>{this.state.lat}
        </span>
        </div>))}
</div>    
  );
  }
  }
  
  export default ListCrimes;
  