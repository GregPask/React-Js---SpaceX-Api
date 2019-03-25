import React, { Component } from 'react';
import { Link } from "react-router-dom";

let interval;

class Home extends Component {
    state = { 



    }

    componentWillUnmount(){
       clearInterval(interval);
    }


    changePhoto(){
        let current = document.querySelector(".show");
        let images = document.querySelectorAll(".hero-image");

        if(current.nextElementSibling){
            current.classList.remove("show");
            current.nextElementSibling.classList.add("show");
        } else {
           
            current.classList.remove("show");
            images[0].classList.add("show");
          
        }

       

    }

    componentDidMount(){
     interval =  setInterval(this.changePhoto,3000);
    }

    render() { 

        return ( 
            <React.Fragment>
            <div id="home">
                <div id="home-content">
                    <h2>Welcome To SpaceX Data</h2>
                    <Link to="gallery"><button>View Our Gallery</button></Link>
                </div>

            <div id="overlay"></div>

              <div id="home1" className="hero-image show">

              </div>
              <div id="home2" className="hero-image">

              </div>
              <div id="home3" className="hero-image">

              </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Home;
