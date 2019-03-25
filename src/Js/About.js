import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import Overlay from "./Navoverlay";
import { Link } from "react-router-dom";

class About extends Component {
    state = {

        data: null

    }



    fetchInfo = () =>{
        fetch("https://api.spacexdata.com/v3/info")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                data,
            })
        })
    }


    componentDidMount(){
        setTimeout(this.fetchInfo,500);
    }



    render() { 

         return ( 
            <div id="about">
               <Overlay />

               <h2>About Us</h2>

                <div id="about-grid">
                {this.state.data === null && (
                    <Spinner color="primary" />
                )}
                {this.state.data !== null && (
                   <div id="about-left">
                        <p><span className="title">Company:</span><br/> {this.state.data.name} </p>
                        <p><span className="title">CEO:</span><br/> {this.state.data.ceo} </p>
                        <p><span className="title">employeed:</span> <br/>{this.state.data.employees} </p>
                        <p><span className="title">founded:</span><br/> {this.state.data.founded} </p>
                        <p><span className="title">headquarters:</span><br/> {this.state.data.headquarters.state} </p>
                      
                        <p><span className="title">Company Value: $</span>{this.state.data.valuation} </p>
                        <p><span className="title">Number of active Rockets:</span><br/> {this.state.data.vehicles} </p>

                        <p><span className="title">Summary:</span> {this.state.data.summary} </p>
                   </div>
               )}
                    
                    <div id="about-right">
                        <img src="https://i.pinimg.com/originals/c6/93/06/c69306d853a478513347fbab73083110.jpg" alt=""/>
                        <Link id="btn1" to="/launches">See our upcoming Launches</Link>
                    </div>
                </div>
              
            </div>
         );
    }
}
 
export default About;