import React from 'react';
import request from 'superagent';
import './Filters.css';
import Googlemap from './Googlemap';
import Cluster from './Cluster';
//import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

//import {getCheckboxValue} from 'react-onchange-value';
let time;
class Filters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            past3days: "",
            pastweek: "",
            pastmonth: "",
            past6months: "",
            past3months: "",
            /*sun:"",
            mon:"",
            tue:"",
            wed:"",
            thu:"",
            fri:"",
            sat:"",*/
            morning: "",
            afternoon: "",
            evening: "",
            late: "",
            ass: "",
            mur: "",
            kid: "",
            rob: "",
            sass: "",
            sab: "",
            bur: "",
            property: "",
            theft: "",
            theftv: "",
            drugs: "",
            accident: "",
            markers: [],
        };
        this.past3days = this.past3days.bind(this);
        this.past3months = this.past3months.bind(this);
        this.pastweek = this.pastweek.bind(this);
        this.pastmonth = this.pastmonth.bind(this);
        this.past6months = this.past6months.bind(this);
        this.past3months = this.past3months.bind(this);
        /* 
         this.sun=this.sun.bind(this);
         this.mon=this.mon.bind(this);
         this.tue=this.tue.bind(this);
         this.wed=this.wed.bind(this);
         this.thu=this.thu.bind(this);
         this.fri=this.fri.bind(this);
         this.sat=this.sat.bind(this);*/

        this.morning = this.morning.bind(this);
        this.afternoon = this.afternoon.bind(this);
        this.evening = this.evening.bind(this);
        this.late = this.late.bind(this);

        this.ass = this.ass.bind(this);
        this.mur = this.mur.bind(this);
        this.kid = this.kid.bind(this);
        this.rob = this.rob.bind(this);
        this.sass = this.sass.bind(this);
        this.sab = this.sab.bind(this);
        this.bur = this.bur.bind(this);
        this.property = this.property.bind(this);
        this.theft = this.theft.bind(this);
        this.theftv = this.theftv.bind(this);
        this.drugs = this.drugs.bind(this);
        this.accident = this.accident.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    pastweek(event) {
        console.log('in handle day change');
        if (event.target.checked)
            this.setState({
                pastweek: "true"
            });
        else
            this.setState({
                pastweek: "false"
            });
        console.log('end of pastweek');

    }


    past3days(event) {
        console.log('in handle day change');
        if (event.target.checked)
            this.setState({
                past3days: "true"
            });
        else
            this.setState({
                past3days: "false"
            });
        console.log('end of past3days');

    }


    pastmonth(event) {
        console.log('in handle day change');
        if (event.target.checked)
            this.setState({
                pastmonth: "true"
            });
        else
            this.setState({
                pastmonth: "false"
            });
        console.log('end of pastmonth');

    }

    past6months(event) {
        console.log('in handle day change');
        if (event.target.value)
            this.setState({
                past6months: "true"
            });
        else
            this.setState({
                past6months: "false"
            });
        console.log('end of past 6mnths');

    }

    past3months(event) {
        console.log('in handle day change');
        if (event.target.checked)
            this.setState({
                past3months: "true"
            });
        else
            this.setState({
                past3months: "false"
            });
        console.log('end of past 3mnths');

    }
    componentWillMount() {
        //this.setState({ markers:[] })
        //this.setState({ markers:{  lat: 17.3850,lng: 78.4867} });
    }

    componentDidMount() {
        var markers=[];
        //  this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
       const url = [
            // Length issue
            'http://10.10.200.14:9000', '/getDetails'
        ].join("")

        fetch(url)
            .then(res => res.json())
            .then(result => {
                console.log(result);
               this.setState({ markers : result });
               // console.log(this.state.markers[0].lat);
            });
            //this.setState({ markers:[{ lat: 17.3850,lng: 78.4867,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] });
           // this.setState({ markers: res });
    }/*
    sun(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        sun : "true"
    });
    else
    this.setState({
        sun : "false"
    });
    console.log('end of sun');

    }

    mon(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        mon : "true"
    });
    else
    this.setState({
        mon : "false"
    });
    console.log('end of mon');

    }

    tue(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        tue : "true"
    });
    else
    this.setState({
        tue : "false"
    });
    console.log('end of tue');

    }

    wed(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        wed : "true"
    });
    else
    this.setState({
        wed : "false"
    });
    console.log('end of wed');

    }



    thu(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        thu : "true"
    });
    else
    this.setState({
        thu : "false"
    });
    console.log('end of thu');

    }
    fri(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        fri : "true"
    });
    else
    this.setState({
        fri : "false"
    });
    console.log('end of fri');

    }
    sat(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        sat : "true"
    });
    else
    this.setState({
        sat : "false"
    });
    console.log('end of sat');

    }
    
    
*/
    morning(event) {
        console.log('in morning change3424');
        if (event.target.checked)
            this.setState({
                morning: "true"
            });
        else
            this.setState({
                morning: "false"
            });
        console.log('end of morning');

    }


    afternoon(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                afternoon: "true"
            });
        else
            this.setState({
                afternoon: "false"
            });
        console.log('end of afternoon');

    }


    evening(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                evening: "true"
            });
        else
            this.setState({
                evening: "false"
            });
        console.log('end of evening');

    }


    late(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                late: "true"
            });
        else
            this.setState({
                late: "false"
            });
        console.log('end of late');

    }

    ass(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                ass: "true"
            });
        else
            this.setState({
                ass: "false"
            });
        console.log('end of ass');

    }
    mur(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                mur: "true"
            });
        else
            this.setState({
                mur: "false"
            });
        console.log('end of mur');

    }

    kid(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                kid: "true"
            });
        else
            this.setState({
                kid: "false"
            });
        console.log('end of kid');

    }

    rob(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                rob: "true"
            });
        else
            this.setState({
                rob: "false"
            });
        console.log('end of rob');

    }

    sass(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                sass: "true"
            });
        else
            this.setState({
                sass: "false"
            });
        console.log('end of sass');

    }

    sab(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                sab: "true"
            });
        else
            this.setState({
                sab: "false"
            });
        console.log('end of sab');

    }

    bur(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                bur: "true"
            });
        else
            this.setState({
                bur: "false"
            });
        console.log('end of bur');

    }

    property(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                property: "true"
            });
        else
            this.setState({
                property: "false"
            });
        console.log('end of property');

    }

    theft(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                theft: "true"
            });
        else
            this.setState({
                theft: "false"
            });
        console.log('end of theft');

    }

    theftv(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                theftv: "true"
            });
        else
            this.setState({
                theftv: "false"
            });
        console.log('end of theftv');

    }

    drugs(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                drugs: "true"
            });
        else
            this.setState({
                drugs: "false"
            });
        console.log('end of drugs');

    }

    accident(event) {
        console.log('in handle dayy change3424');
        if (event.target.checked)
            this.setState({
                accident: "true"
            });
        else
            this.setState({
                accident: "false"
            });
        console.log('end of accident');

    }

    handleSubmit(event) {
        console.log('Inside submit start');
        event.preventDefault();
        let time = "";
        let type20 = "";
        if (this.state.morning)
            time += "morning ";
        if (this.state.afternoon)
            time += "afternoon ";
        if (this.state.evening)
            time += "evening ";
        if (this.state.late)
            time += "late ";

        let daterange = "";
        if (this.state.past3days)
            daterange += "past3days ";
        if (this.state.pastweek)
            daterange += "pastweek ";
        if (this.state.pastmonth)
            daterange += "pastmonth ";
        if (this.state.past6months)
            daterange += "past6months ";
        if (this.state.past3months)
            daterange += "past3months ";


        if (this.state.ass)
            type20 += "Assault ";
        if (this.state.mur)
            type20 += "Murder ";
        if (this.state.kid)
            type20 += "Kidnapping ";
        if (this.state.rob)
            type20 += "Robbery ";
        if (this.state.sass)
            type20 += "SexualAssault ";
        if (this.state.sab)
            type20 += "SexualAbuse ";
        if (this.state.bur)
            type20 += "Burglary ";
        if (this.state.property)
            type20 += "Property ";
        if (this.state.theft)
            type20 += "Theft ";
        if (this.state.theftv)
            type20 += "TheftofVehicle ";
        if (this.state.drugs)
            type20 += "Drugs ";
        if (this.state.accident)
            type20 += "Accident ";
        console.log('time ' + time + 'type  ' + type20);
 //       request
         
                


           /*     const url = [
                    // Length issue
                    'http://10.10.200.14:9000', '/getParticularDetails'
                ].join("")
        
              request
              .post(url)
            	.send({ crime1 :"Burglary", time: "Morning" })
                    .then(res => res.json())
                      .then(result => {
                        console.log(result);
                        console.log("response is ok");
                        this.setState({ markers: result });
                        console.log(this.state.markers[0].lat);
                    });
        */ var form = JSON.stringify({ crime1 :type20, time: time });
        time="";
        type20="";
                   fetch ( "http://10.10.200.14:9000/getParticularDetails" , 
                    {
                        method: "POST",     
                        headers: {
                            "Content-Type": "application/json",
                            "Accept"    :   "application,json",
                     
                          },       
                        body: form, 
                }) .then(function(res){ 
                    return(res.json());
                   }).then(result => 
                       //console.log(result);
                      this.setState({ markers : result })
                      // console.log(this.state.markers[0].lat);
                   )
                   .catch(function(error){
                       console.log(error);
                   });
                //   this.setState({ markers:[{ lat:28.7041,lng: 77.1025,d: "thid is first poiny"},{ lat: 17.4118166,lng: 78.3967619,d: "2nd pouint"}] }); 
            

              
         
        console.log('Inside submit end');

    }

    render() {
        return (<div>
            <div className="fright" >
            <br/>
            <br/><br/><br/>
              <Googlemap markers={this.state.markers} />
              <br/><br/>  <br/><br/>  <br/><br/>CLUSTERED VIEW
              <Cluster markers={this.state.markers} />

            </div>
            <div className="fleft">      <br /><br /><br />     <tr>  <br />  <br />
                <td> DATE RANGE</td>
                <br /><br />
                <td>
                    <br /><br />

                    <td>
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value=" Past 3 days" /> Past 3 days<br />
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Past week" /> Past week<br />
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Other" /> Past month<br />
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value=" Past 3 days" />  Past 6 months<br />
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Past week" /> Past 3 months<br />
                        <input type="radio" name="Gender" id="Gender" onChange={this.handleVictimChange} value="Other" />Custom range<br />
                    </td>



                    <input type="date" data-date="" data-date-format="DD MMMM YYYY" />
                </td>
            </tr>

                <tr>  <br />  <br />
                    <td> TIME RANGE</td>
                    <br /><br />
                    <td>
                        <br /><br />
                        <input type="checkbox" name="timeRange" id="timeRange" onChange={this.morning} value="Morning" /> Morning<br />
                        <input type="checkbox" name="timeRange" id="timeRange" onChange={this.afternoon} value="Morning" /> afternoon<br />
                        <input type="checkbox" name="timeRange" id="timeRange" onChange={this.evening} value="Evening" /> Evening<br />
                        <input type="checkbox" name="timeRange" id="timeRange" onChange={this.late} value="LateNight" /> LateNight<br />
                    </td>
                </tr>

                <br />  <br />
                <tr>  <br />  <br />
                    <td> CRIME TYPE</td>
                    <br /><br />
                    <td>
                        <br /><br />
                        <label>Violent</label><br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.ass} value="Assault" />Assault <br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.mur} value="Murder" /> Murder<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.kid} value="Kidnapping" /> Kidnapping<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.rob} value="Robbery" /> Robbery<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.sass} value=" Sexual Assault" />  Sexual Assault<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.sab} value="Sexual abuse" /> Sexual abuse<br />
                        <br /><br />
                        <label>Property</label><br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.bur} value="Burglary" /> Burglary<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.property} value=" Property Crime" />  Property Crime<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.theft} value="Theft" /> Theft<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.theftv} value=" Theft of Vehicle" />  Theft of Vehicle<br />
                        <br /><br />
                        <label>Quality of Life</label><br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.drugs} value="Drugs" /> Drugs<br />
                        <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.accident} value="Accident" /> Accident<br />
                    </td>
                </tr>

                <div>  <button onClick={this.handleSubmit}>Submit</button></div>
            </div>

            <div className="fright1">
            </div>
        </div>
        );
    }
}
export default Filters;

