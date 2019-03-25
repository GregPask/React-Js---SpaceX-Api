import React, { Component } from 'react';
import Overlay from "./Navoverlay";
import { Link } from "react-router-dom";
class Details extends Component {
    state = { 

        data: null

     }

    componentDidMount(){
        console.log(this.props.match.params.id);
        let id = parseInt(this.props.match.params.id);
        console.log(typeof id);

        fetch(`https://api.spacexdata.com/v3/launches/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                data,
            })
        })

    }

    render() { 


        return ( 
            <div id="launch">
            <Overlay />
                <div id="launch-grid">
                        
                {this.state.data !== null && 
                (
                    <div>
                        <h2>Mission: <span className="white">{this.state.data.mission_name}</span></h2>
                        <h3>Details</h3>
                        <p>Flight Number: {this.state.data.flight_number}</p>
                        <p>Mission Success: <span style={{color: this.state.data.launch_success ? "green" : "red"}}> {this.state.data.launch_success ? "Yes" : "No"}</span></p>
                        <p>{this.state.data.details}</p>
                        <p>Year of Luanch: {this.state.data.launch_year}</p>
                        <p>Rocket Used: {this.state.data.rocket.rocket_name}</p>
                        {/* <p>Rocket reused: <span style={{color: this.state.data.rocket.fairings.reused ? "green" : "red"}}>{this.state.data.rocket.fairings.reused ? "Yes" : "No"}</span></p> */}

                            <span id="btn-wrap">
                            <Link id="btn2" to="/launches">Back</Link>
                            </span>
                    </div>
                    
                )
                }

                </div>
            </div>
         );
    }
}
 
export default Details;