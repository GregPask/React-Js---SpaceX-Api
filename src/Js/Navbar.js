import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { 
    navbar: false
   }

   toggleNav = () => {
     this.setState({
       navbar: !this.state.navbar
     })
   }


   checkWidth = () => {
    
     if(window.innerWidth > 768){
      console.log("Called");
       this.setState({
         navbar: false
       })
     } else {
       console.log("NO");
     }
   }

   componentDidMount(){
     setInterval(this.checkWidth,100);
   }

  render() { 
    return ( 
            <div id="navbar">
          <div id="nav-grid">

            <div className={this.state.navbar ? "shows" : ""} id="sidebar">
                <NavLink onClick={() => this.setState({navbar: false})} className="sidebar-link"  to="/" href="">Home</NavLink>
                <NavLink onClick={() => this.setState({navbar: false})} className="sidebar-link" activeStyle={{ color: "rgb(223, 71, 16)" }} to="/about" href="">About</NavLink>
                <NavLink onClick={() => this.setState({navbar: false})} className="sidebar-link" activeStyle={{ color: "rgb(223, 71, 16)" }} to="/launches" href="">Launches</NavLink>
                <NavLink onClick={() => this.setState({navbar: false})} className="sidebar-link" activeStyle={{ color: "rgb(223, 71, 16)" }} to="/gallery" href="">Gallery</NavLink>
                <NavLink onClick={() => this.setState({navbar: false})} className="sidebar-link"  activeStyle={{ color: "rgb(223, 71, 16)" }} to="/history" href="">History</NavLink>
            </div>
          
            <div id="nav-left">
                <NavLink to="/"><img src="http://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png" alt=""/></NavLink>
            </div>

            <div id="nav-right">
                <NavLink  activeStyle={{ color: "rgb(223, 71, 16)" }} to="/about" href="">About</NavLink>
                <NavLink activeStyle={{ color: "rgb(223, 71, 16)" }} to="/launches" href="">Launches</NavLink>
                <NavLink activeStyle={{ color: "rgb(223, 71, 16)" }} to="/gallery" href="">Gallery</NavLink>
                <NavLink  activeStyle={{ color: "rgb(223, 71, 16)" }} to="/history" href="">History</NavLink>
            </div>

            <div className={this.state.navbar ? "shows" : ""} onClick={this.toggleNav} id="nav-btn">
              <div id="nav-btn-1"></div>
              <div id="nav-btn-2"></div>
              <div id="nav-btn-3"></div>
            </div>

          </div>
        </div>
     );
  }
}
 
export default Navbar;