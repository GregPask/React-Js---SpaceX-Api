import React, { Component } from 'react';

import Overlay from "./Navoverlay";
import { Link} from "react-router-dom";

class History extends Component {
    state = { 
        data: null
    }

    fetchEvent = () => {
        fetch("https://api.spacexdata.com/v3/history")
        .then((res) => res.json())
        .then((data) => {
           
            let number = Math.floor(Math.random() * data.length);
            console.log(data[number]);

            this.setState({
                data: data[number]
            })
        })
    }

    render() { 
        console.log(this.state.data);
        return ( 
            <div id="history">
                <Overlay />

                <div id="history-grid">
                <h2>History</h2>
                <button onClick={this.fetchEvent} id="history-btn">Click for a random historic event</button>

                    {this.state.data !== null && (
                        <div className="history-event">
                            <p>Flight Number: {this.state.data.flight_number}</p>
                            <p>{this.state.data.details}</p>
                            <p>Year: {this.state.data.event_date_utc.slice(0,4)}</p>
                        </div>
                    )}
                        
                        <Link style={{fontSize: "1.5rem", textDecoration: "underline"}} to="/">Home</Link>
                </div>
               
            </div>
         );
    }
}
 
export default History; 