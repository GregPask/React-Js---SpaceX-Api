import React, { Component } from 'react';

import { Spinner } from 'reactstrap';
import  Overlay from "../Js/Navoverlay";
import { Link } from "react-router-dom";

class Launches extends Component {
    state = { 

        data: null
     }



    componentDidMount(){
        fetch("https://api.spacexdata.com/v3/launches")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            data = data.slice(0,75);

            this.setState({
                data,
            })
        });
    }
    
    render() { 



        return ( 
            <div id="launches">
            <Overlay />

                  {this.state.data !== null && (
                        <h2 style={{textAlign: "center", color: "#fff"}}>All our current {this.state.data.length} launches</h2>
                    )}                
                <div id="launches-grid">

                    {this.state.data === null && (
                        <Spinner style={{backgroundColor: "black", textAlign: "center", margin: "auto"}} color="info" />
                    )}

                  

                    {this.state.data !== null && (

                        

                        this.state.data.map((data) => {
                        return(
                        <div className="launch-mission" key={data.flight_number}>
                        <p className="launch-mission-year">{data.launch_year}</p>
                        <Link 
                            style={{color: data.launch_success ? "green" : "red"}} 
                            className="launch-link" 
                            to={`launches/${data.flight_number}`}> 
                        <p className="heading1">Mission: <span style={{color: data.launch_success ? "green" : "red"}}>{data.mission_name}</span> </p>
                        </Link>
                        <Link  to={`launches/${data.flight_number}`} style={{color: data.launch_success ? "green" : "red"}}     className="launch-link">Mission Details</Link>            
                    </div>
                 )}))}
                </div>
            </div>
         );
    }
}
 
export default Launches;