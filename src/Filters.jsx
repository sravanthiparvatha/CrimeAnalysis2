import React from 'react';
import request from 'superagent';
import './Filters.css';

//import {getCheckboxValue} from 'react-onchange-value';
let time;
class Filters extends React.Component
{
    
    constructor(props) {
        super(props);

        this.state = {
           /* past3days:"",
           pastweek:"",
           pastmonth:"",
           past6months:"",
           past3months:"",
           sun:"",
           mon:"",
           tue:"",
           wed:"",
           thu:"",
           fri:"",
           sat:"",*/
           morning:"",
           afternoon:"",
           evening:"",
           late:"",
           ass:"",
           mur:"",
           kid:"",
           rob:"",
           sass:"",
           sab:"",
           bur:"",
           property:"",
           theft:"",
           theftv:"",
           drugs:"",
           accident:""
        };
      /* this.past3days=this.past3days.bind(this);
       this.past3months=this.past3months.bind(this);
       this.pastweek=this.pastweek.bind(this);
       this.pastmonth=this.pastmonth.bind(this);
       this.past6months=this.past6months.bind(this);
       this.past3months=this.past3months.bind(this);
       
       this.sun=this.sun.bind(this);
       this.mon=this.mon.bind(this);
       this.tue=this.tue.bind(this);
       this.wed=this.wed.bind(this);
       this.thu=this.thu.bind(this);
       this.fri=this.fri.bind(this);
       this.sat=this.sat.bind(this);*/
       
       this.morning=this.morning.bind(this);
       this.afternoon=this.afternoon.bind(this);
       this.evening=this.evening.bind(this);
       this.late=this.late.bind(this);

       this.ass=this.ass.bind(this);
       this.mur=this.mur.bind(this);
       this.kid=this.kid.bind(this);
       this.rob=this.rob.bind(this);
       this.sass=this.sass.bind(this);
       this.sab=this.sab.bind(this);
       this.bur=this.bur.bind(this);
       this.property=this.property.bind(this);
       this.theft=this.theft.bind(this);
       this.theftv=this.theftv.bind(this);
       this.drugs=this.drugs.bind(this);
       this.accident=this.accident.bind(this);

       this.handleSubmit=this.handleSubmit.bind(this);
         
    }
  /*  pastweek(event)
    {
        console.log('in handle day change');
        if(event.target.checked)
    this.setState({
        pastweek : "true"
    });
    else
    this.setState({
        pastweek : "false"
    });
    console.log('end of pastweek');

    }


    past3days(event)
    {
        console.log('in handle day change');
        if(event.target.checked)
    this.setState({
        past3days : "true"
    });
    else
    this.setState({
        past3days : "false"
    });
    console.log('end of past3days');

    }


    pastmonth(event)
    {
        console.log('in handle day change');
        if(event.target.checked)
    this.setState({
        pastmonth : "true"
    });
    else
    this.setState({
        pastmonth : "false"
    });
    console.log('end of pastmonth');

    }

    past6months(event)
    {
        console.log('in handle day change');
        if(event.target.checked)
    this.setState({
        past6months : "true"
    });
    else
    this.setState({
        past6months : "false"
    });
    console.log('end of past 6mnths');

    }

    past3months(event)
    {
        console.log('in handle day change');
        if(event.target.checked)
    this.setState({
        past3months : "true"
    });
    else
    this.setState({
        past3months : "false"
    });
    console.log('end of past 3mnths');

    }
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
    morning(event)
    {
        console.log('in morning change3424');
        if(event.target.checked)
    this.setState({
        morning : "true"
    });
    else
    this.setState({
        morning : "false"
    });
    console.log('end of morning');

    }


    afternoon(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        afternoon : "true"
    });
    else
    this.setState({
        afternoon : "false"
    });
    console.log('end of afternoon');

    }


    evening(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        evening : "true"
    });
    else
    this.setState({
        evening : "false"
    });
    console.log('end of evening');

    }


    late(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        late : "true"
    });
    else
    this.setState({
        late : "false"
    });
    console.log('end of late');

    }

    ass(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        ass : "true"
    });
    else
    this.setState({
        ass : "false"
    });
    console.log('end of ass');

    }
    mur(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        mur : "true"
    });
    else
    this.setState({
        mur : "false"
    });
    console.log('end of mur');

    }

    kid(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        kid : "true"
    });
    else
    this.setState({
        kid : "false"
    });
    console.log('end of kid');

    }

    rob(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        rob : "true"
    });
    else
    this.setState({
        rob : "false"
    });
    console.log('end of rob');

    }

    sass(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        sass : "true"
    });
    else
    this.setState({
        sass : "false"
    });
    console.log('end of sass');

    }

    sab(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        sab : "true"
    });
    else
    this.setState({
        sab : "false"
    });
    console.log('end of sab');

    }

    bur(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        bur : "true"
    });
    else
    this.setState({
        bur : "false"
    });
    console.log('end of bur');

    }

    property(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        property : "true"
    });
    else
    this.setState({
        property : "false"
    });
    console.log('end of property');

    }

    theft(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        theft : "true"
    });
    else
    this.setState({
        theft : "false"
    });
    console.log('end of theft');

    }

    theftv(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        theftv : "true"
    });
    else
    this.setState({
        theftv : "false"
    });
    console.log('end of theftv');

    }

    drugs(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        drugs : "true"
    });
    else
    this.setState({
        drugs : "false"
    });
    console.log('end of drugs');

    }

    accident(event)
    {
        console.log('in handle dayy change3424');
        if(event.target.checked)
    this.setState({
        accident : "true"
    });
    else
    this.setState({
        accident : "false"
    });
    console.log('end of accident');

    }

    handleSubmit(event) {
        console.log('Inside submit start');
            event.preventDefault();
            let time="";
            let type20="";
    if(this.state.morning)
    time+="morning ";
     if(this.state.afternoon)
    time+="afternoon ";
    if(this.state.evening)
    time+="evening ";
    if(this.state.late)
    time+="late ";
         

    if(this.state.ass)
    type20+="ass ";
     if(this.state.mur)
     type20+="mur ";
    if(this.state.kid)
    type20+="kid ";
    if(this.state.rob)
    type20+="rob ";
    if(this.state.sass)
    type20+="sass ";
     if(this.state.sab)
     type20+="sab ";
    if(this.state.bur)
    type20+="bur ";
    if(this.state.property)
    type20+="property ";
   if(this.state.theft)
   type20+="theft ";
     if(this.state.theftv)
     type20+="theftv ";
    if(this.state.drugs)
    type20+="drugs ";
    if(this.state.accident)
    type20+="accident ";
    console.log('time '+time+'type  '+type20);
                request
                .post("http://10.10.200.14:9000/exploreMap")
                    .send({ time:time,crime1:type20  })
                    .then(
                    (response) => {
                        // response.body will be the returned data from your play app, which is an array of objects
                        // I kept the data as object with "place" as the key, and [lat,longs] as value.
                        // following code converts array of objects into the format which my component is accepting.
                        console.log("response is ok");
                    });
            
                    console.log('Inside submit end');
    
        }

render(){
    return(<div className="container"> <br/>  <br/> <br/>  <br/> 
                
<tr>  <br/>  <br/>
             <td> TIME RANGE</td>
             <br/><br/>
             <td>
                 <br/><br/>
           <input type="checkbox" name="timeRange" id="timeRange" onChange={this.morning} value="Morning" /> Morning<br/>
           <input type="checkbox" name="timeRange" id="timeRange" onChange={this.afternoon} value="Morning" /> afternoon<br/>
           <input type="checkbox" name="timeRange" id="timeRange" onChange={this.evening} value="Evening" /> Evening<br/>
           <input type="checkbox" name="timeRange" id="timeRange" onChange={this.late} value="LateNight" /> LateNight<br/>
             </td>
             </tr>

             <br/>  <br/> 
<tr>  <br/>  <br/>
             <td> CRIME TYPE</td>
             <br/><br/>
             <td>
                 <br/><br/>
                 <label>Violent</label><br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.ass} value="Assault" />Assault <br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.mur} value="Murder" /> Murder<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.kid} value="Kidnapping" /> Kidnapping<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.rob} value="Robbery" /> Robbery<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.sass} value=" Sexual Assault" />  Sexual Assault<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.sab} value="Sexual abuse" /> Sexual abuse<br/>
           <br/><br/>
                 <label>Property</label><br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.bur} value="Burglary" /> Burglary<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.property} value=" Property Crime" />  Property Crime<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.theft} value="Theft" /> Theft<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.theftv} value=" Theft of Vehicle" />  Theft of Vehicle<br/>
           <br/><br/>
                 <label>Quality of Life</label><br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.drugs} value="Drugs" /> Drugs<br/>
           <input type="checkbox" name="crimeType" id="crimeType1" onChange={this.accident} value="Accident" /> Accident<br/>
             </td>
             </tr>

             <div>  <button  onClick={this.handleSubmit}>Submit</button></div>
             </div>);
}
}
export default Filters;

