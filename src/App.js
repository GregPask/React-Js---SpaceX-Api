import React, { Component } from 'react';

import {  Switch, Route} from "react-router-dom";

// Js File
import Navbar from "./Js/Navbar";
import Home from "./Js/Home";
import About from "./Js/About";
import Details from "./Js/Details";
import Gallery from "./Js/Gallery";
import History from "./Js/History";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Css/app.scss";
import Launches from './Js/Launches';



class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar/>
        


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/launches/:id" component={Details} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/history" component={History} />

      </Switch>

      </React.Fragment>
     );
  }
}
 
export default App;